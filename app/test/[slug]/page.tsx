// Simple test page to verify dynamic routing works
export default async function TestPage({ params }: { params: { slug: string } }) {
    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>Test Page</h1>
            <p>Slug parameter: {params.slug}</p>
            <p>If you can see this, dynamic routing is working!</p>
        </div>
    );
}

export async function generateStaticParams() {
    return [
        { slug: 'test-1' },
        { slug: 'test-2' },
    ];
}
