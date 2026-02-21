import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// In-memory rate limiting state
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const MAX_REQUESTS = 5; // requests per minute
const WINDOW_MS = 60 * 1000;

export async function POST(request: Request) {
    try {
        // Rate Limiting Logic
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        const now = Date.now();
        const record = rateLimit.get(ip);

        if (record && now - record.timestamp < WINDOW_MS) {
            if (record.count >= MAX_REQUESTS) {
                return NextResponse.json(
                    { error: 'Too many requests, please try again later.' },
                    { status: 429 }
                );
            }
            record.count += 1;
        } else {
            rateLimit.set(ip, { count: 1, timestamp: now });
        }

        const body = await request.json();
        const { email } = body;

        // Strict Email sanitization and validation
        const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || typeof email !== 'string' || !strictEmailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // We check if environment variables are set
        if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
            console.error('Google Sheets credentials are missing in environment variables.');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Setup Google Sheets auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                // Replace escaped newlines with actual newlines
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Append to the sheet (defaults to the first sheet window if only range is given, e.g., A:B)
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A:B', // Appends to column A & B of the first visible sheet
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [new Date().toISOString(), email]
                ]
            }
        });

        return NextResponse.json(
            { message: 'Successfully subscribed' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to process subscription' },
            { status: 500 }
        );
    }
}
