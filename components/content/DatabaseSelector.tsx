// @ts-nocheck
'use client';
import { useState } from "react";

const databases: Record<string, any> = {
  postgresql: {
    name: "PostgreSQL",
    emoji: "🐘",
    color: "#336791",
    light: "#e8f0f7",
    type: "Relational (SQL)",
    best: "General-purpose, SaaS, AI apps",
    description: "The developer's default — advanced SQL, JSONB, pgvector, PostGIS, and an unmatched extension ecosystem. Most admired DB for 3 consecutive years.",
    tags: ["ACID", "SQL", "Scalable", "AI-ready", "Open Source"],
    link: "https://www.postgresql.org",
    usedBy: "Apple, Reddit, Instagram, Shopify, Twitch",
  },
  mysql: {
    name: "MySQL",
    emoji: "🐬",
    color: "#00758f",
    light: "#e0f4f7",
    type: "Relational (SQL)",
    best: "Web apps, WordPress, CMS",
    description: "Powers 43% of all websites. The foundation of the LAMP stack — simple, battle-tested, with exceptional hosting compatibility worldwide.",
    tags: ["SQL", "Simple", "Widely Hosted", "Legacy-friendly"],
    link: "https://www.mysql.com",
    usedBy: "WordPress, Facebook (legacy), Twitter (legacy)",
  },
  supabase: {
    name: "Supabase",
    emoji: "⚡",
    color: "#3ecf8e",
    light: "#e6faf3",
    type: "PostgreSQL Platform",
    best: "Startups, full-stack apps, Firebase replacement",
    description: "Open-source Firebase alternative built on PostgreSQL. Ships auth, real-time subscriptions, file storage, edge functions, and pgvector in one platform.",
    tags: ["PostgreSQL", "Auth", "Real-time", "Storage", "Startup-friendly"],
    link: "https://supabase.com",
    usedBy: "Pika, Loops, Mobbin, 1M+ projects",
  },
  mongodb: {
    name: "MongoDB",
    emoji: "🍃",
    color: "#13aa52",
    light: "#e6f7ee",
    type: "Document (NoSQL)",
    best: "Variable-schema content, catalogs, mobile",
    description: "Dominant document database — store JSON documents without enforced schemas. MongoDB Atlas adds managed hosting, vector search, and full-text indexing.",
    tags: ["NoSQL", "Flexible Schema", "Document", "Horizontal Scale"],
    link: "https://www.mongodb.com",
    usedBy: "Adobe, Lyft, Square, Forbes",
  },
  redis: {
    name: "Redis",
    emoji: "🔴",
    color: "#d63031",
    light: "#fdecea",
    type: "Key-Value (In-Memory)",
    best: "Caching, sessions, real-time, pub/sub",
    description: "Sub-millisecond in-memory database powering caching, rate limiting, leaderboards, and real-time features. Used as a layer on top of your primary database.",
    tags: ["In-Memory", "Cache", "Real-time", "Pub/Sub", "Session Store"],
    link: "https://redis.io",
    usedBy: "Twitter, GitHub, Pinterest, Snapchat",
  },
  cassandra: {
    name: "Apache Cassandra",
    emoji: "👁",
    color: "#1287b1",
    light: "#e5f4fb",
    type: "Column-Family (NoSQL)",
    best: "IoT, time-series, write-heavy at scale",
    description: "Masterless distributed database with linear write scaling. No single point of failure. Built for write volumes that would overwhelm any SQL database.",
    tags: ["Distributed", "Write-heavy", "No Single Point of Failure", "Time-series"],
    link: "https://cassandra.apache.org",
    usedBy: "Netflix, Apple (75K+ nodes), Instagram",
  },
  neo4j: {
    name: "Neo4j",
    emoji: "🕸",
    color: "#008CC1",
    light: "#e5f3fb",
    type: "Graph",
    best: "Fraud detection, recommendations, knowledge graphs",
    description: "Native graph database where relationships are first-class data. Traversing 10 relationship hops is constant-complexity — exponentially faster than SQL JOINs.",
    tags: ["Graph", "Relationships", "Fraud Detection", "Recommendations"],
    link: "https://neo4j.com",
    usedBy: "eBay, Walmart, NASA, UBS",
  },
  sqlite: {
    name: "SQLite",
    emoji: "📦",
    color: "#0f7595",
    light: "#e5f2f8",
    type: "Embedded Relational",
    best: "Mobile apps, desktop, embedded, local dev",
    description: "Zero-server, single-file SQL database. Ships inside every Android, iOS device, and browser. The most deployed database engine on Earth by orders of magnitude.",
    tags: ["Embedded", "Zero Config", "Mobile", "Offline-first", "Local"],
    link: "https://sqlite.org",
    usedBy: "Every smartphone, Chrome, Firefox, WhatsApp",
  },
  pinecone: {
    name: "Pinecone",
    emoji: "🌲",
    color: "#6c47ff",
    light: "#eeebff",
    type: "Vector (AI)",
    best: "RAG pipelines, semantic search, managed",
    description: "The dominant managed vector database — 70% market share. Fastest path to production for LLM embeddings. No infrastructure to manage.",
    tags: ["Vector", "AI/ML", "Managed", "RAG", "Semantic Search"],
    link: "https://www.pinecone.io",
    usedBy: "Shopify, Gong, Notion AI",
  },
  milvus: {
    name: "Milvus / Zilliz",
    emoji: "🔮",
    color: "#00b5b8",
    light: "#e5f8f8",
    type: "Vector (AI)",
    best: "Billion-scale embeddings, self-hosted AI",
    description: "Open-source vector database for billion-scale deployments. Cloud-managed via Zilliz. Best self-hosted option when Pinecone's pricing becomes prohibitive.",
    tags: ["Vector", "Open Source", "Billion Scale", "AI", "Self-hosted"],
    link: "https://milvus.io",
    usedBy: "Salesforce, Shopee, eBay AI",
  },
  pgvector: {
    name: "pgvector (PostgreSQL)",
    emoji: "🧠",
    color: "#764abc",
    light: "#f0ebfd",
    type: "Vector Extension",
    best: "AI features without new infrastructure",
    description: "PostgreSQL extension adding vector similarity search. Best choice if you already use Postgres — zero new infra, HNSW indexing, up to ~10M vectors efficiently.",
    tags: ["Vector", "PostgreSQL", "Zero Extra Infra", "RAG", "Embeddings"],
    link: "https://github.com/pgvector/pgvector",
    usedBy: "Most Supabase and Neon AI projects",
  },
  firebase: {
    name: "Firebase Firestore",
    emoji: "🔥",
    color: "#ffca28",
    light: "#fffae6",
    type: "Document (Serverless)",
    best: "Mobile apps, real-time sync, rapid MVP",
    description: "Google's serverless document database with live data sync to devices. Exceptional for mobile-first apps that need real-time updates without backend code.",
    tags: ["Serverless", "Real-time Sync", "Mobile", "Google Cloud", "NoSQL"],
    link: "https://firebase.google.com",
    usedBy: "Duolingo, Twitch clips, The New York Times app",
  },
  dynamodb: {
    name: "Amazon DynamoDB",
    emoji: "⚡",
    color: "#ff9900",
    light: "#fff5e6",
    type: "Key-Value / Document",
    best: "AWS-native, serverless scale, single-digit ms",
    description: "Fully managed AWS key-value and document database. Scales to any traffic level automatically. Pay-per-request pricing makes it cost-efficient for variable workloads.",
    tags: ["AWS", "Serverless", "Auto-scale", "Single-digit ms", "Managed"],
    link: "https://aws.amazon.com/dynamodb",
    usedBy: "Amazon, Lyft, Samsung, Snapchat",
  },
  neon: {
    name: "Neon",
    emoji: "🌙",
    color: "#00e599",
    light: "#e5fff7",
    type: "Serverless PostgreSQL",
    best: "Serverless, variable traffic, branching",
    description: "Serverless PostgreSQL that scales to zero when idle and supports database branching — test schema changes in an isolated branch before merging to production.",
    tags: ["Serverless", "PostgreSQL", "Branching", "Scale to Zero", "Modern"],
    link: "https://neon.tech",
    usedBy: "Vercel partners, modern serverless apps",
  },
  cockroachdb: {
    name: "CockroachDB",
    emoji: "🪳",
    color: "#6933ff",
    light: "#eeebff",
    type: "Distributed SQL",
    best: "Global apps, distributed ACID, multi-region",
    description: "Distributed SQL database with PostgreSQL-compatible syntax, surviving regional failures automatically. Built for global applications requiring strong consistency.",
    tags: ["Distributed", "SQL", "Multi-region", "ACID", "Geo-distributed"],
    link: "https://www.cockroachlabs.com",
    usedBy: "DoorDash, Comcast, Bose",
  },
};

const questions = [
  {
    id: "project_type",
    section: "Project Type",
    icon: "🏗",
    question: "What are you building?",
    type: "multi",
    options: [
      { id: "web_app", label: "Web Application (SaaS/startup)", scores: { postgresql: 3, supabase: 3, mysql: 2, redis: 1, neon: 2 } },
      { id: "mobile_app", label: "Mobile Application (iOS/Android)", scores: { sqlite: 3, firebase: 3, supabase: 2, postgresql: 1 } },
      { id: "api_backend", label: "API / Backend Service", scores: { postgresql: 3, supabase: 2, redis: 2, mongodb: 2 } },
      { id: "ai_app", label: "AI / LLM Application (RAG, agents)", scores: { pgvector: 3, pinecone: 3, supabase: 2, postgresql: 2, milvus: 2 } },
      { id: "realtime", label: "Real-time Application (chat, live feed)", scores: { redis: 3, supabase: 3, firebase: 3, cassandra: 2 } },
      { id: "analytics", label: "Analytics / Reporting Platform", scores: { postgresql: 2, cockroachdb: 1, cassandra: 2 } },
      { id: "ecommerce", label: "E-commerce / Product Catalog", scores: { postgresql: 3, mongodb: 3, mysql: 2, redis: 2 } },
      { id: "iot", label: "IoT / Sensor / Time-series Data", scores: { cassandra: 3, postgresql: 2, redis: 1 } },
      { id: "fintech", label: "Financial / Payments System", scores: { postgresql: 3, cockroachdb: 3, mysql: 1 } },
      { id: "graph_data", label: "Social Network / Fraud Detection", scores: { neo4j: 3, postgresql: 1 } },
      { id: "embedded", label: "Desktop / Embedded / Offline App", scores: { sqlite: 3, postgresql: 1 } },
      { id: "mvp", label: "MVP / Prototype (fast to market)", scores: { supabase: 3, firebase: 3, neon: 2, mongodb: 2 } },
    ],
  },
  {
    id: "data_model",
    section: "Data Structure",
    icon: "🗂",
    question: "How is your data structured?",
    type: "single",
    options: [
      { id: "structured", label: "Structured — fixed columns per record (users, orders, products)", scores: { postgresql: 3, mysql: 3, supabase: 3, cockroachdb: 2 } },
      { id: "variable", label: "Variable — each record has different fields (product catalog, events)", scores: { mongodb: 3, dynamodb: 2, firebase: 2 } },
      { id: "timeseries", label: "Time-series — events/readings stamped by time (metrics, IoT)", scores: { cassandra: 3, postgresql: 2, redis: 2 } },
      { id: "graph_model", label: "Graph — relationships between entities matter most", scores: { neo4j: 3, postgresql: 1 } },
      { id: "vector_model", label: "Vector — AI embeddings for semantic search or RAG", scores: { pgvector: 3, pinecone: 3, milvus: 3, supabase: 2 } },
      { id: "key_value", label: "Key-Value — simple lookups, session storage, cache", scores: { redis: 3, dynamodb: 3 } },
      { id: "not_sure", label: "Not sure yet / mix of the above", scores: { postgresql: 2, supabase: 2, mongodb: 1 } },
    ],
  },
  {
    id: "scale",
    section: "Scale & Traffic",
    icon: "📈",
    question: "What is your expected scale?",
    type: "single",
    options: [
      { id: "small", label: "Small — under 10K users / local or personal project", scores: { sqlite: 3, supabase: 2, postgresql: 2, firebase: 2 } },
      { id: "medium", label: "Medium — 10K–1M users / growing startup", scores: { postgresql: 3, supabase: 3, mongodb: 2, redis: 2, neon: 2 } },
      { id: "large", label: "Large — 1M–100M users / established product", scores: { postgresql: 3, cassandra: 3, redis: 3, mongodb: 2, cockroachdb: 2 } },
      { id: "hyperscale", label: "Hyperscale — 100M+ users / global infrastructure", scores: { cassandra: 3, cockroachdb: 3, dynamodb: 3, redis: 3, milvus: 2 } },
    ],
  },
  {
    id: "workload",
    section: "Workload Pattern",
    icon: "⚖️",
    question: "What is your read/write pattern?",
    type: "single",
    options: [
      { id: "read_heavy", label: "Read-heavy — far more reads than writes (blogs, content sites)", scores: { postgresql: 3, mysql: 3, redis: 2, supabase: 2 } },
      { id: "write_heavy", label: "Write-heavy — constant high-volume writes (logs, IoT, events)", scores: { cassandra: 3, dynamodb: 3, redis: 2 } },
      { id: "balanced", label: "Balanced — mix of reads and writes (typical SaaS)", scores: { postgresql: 3, mongodb: 2, supabase: 2 } },
      { id: "realtime_ops", label: "Real-time — sub-millisecond latency required", scores: { redis: 3, dynamodb: 3, cassandra: 2 } },
      { id: "batch", label: "Batch — large periodic analytics / reporting runs", scores: { postgresql: 2, cassandra: 2 } },
    ],
  },
  {
    id: "consistency",
    section: "Data Integrity",
    icon: "🔒",
    question: "How important is strict data consistency?",
    type: "single",
    options: [
      { id: "critical", label: "Critical — financial data, inventory, healthcare (ACID required)", scores: { postgresql: 3, cockroachdb: 3, mysql: 2, supabase: 3 } },
      { id: "high", label: "High — user data that must not be lost or corrupted", scores: { postgresql: 3, supabase: 2, mysql: 2 } },
      { id: "moderate", label: "Moderate — eventual consistency is acceptable", scores: { mongodb: 2, cassandra: 3, dynamodb: 2 } },
      { id: "low", label: "Low — cache or session data where loss is acceptable", scores: { redis: 3, dynamodb: 2 } },
    ],
  },
  {
    id: "cloud",
    section: "Deployment",
    icon: "☁️",
    question: "Where will you deploy?",
    type: "single",
    options: [
      { id: "aws", label: "Amazon Web Services (AWS)", scores: { dynamodb: 3, postgresql: 2, redis: 2, cassandra: 1 } },
      { id: "gcp", label: "Google Cloud (GCP)", scores: { firebase: 2, postgresql: 2 } },
      { id: "azure", label: "Microsoft Azure", scores: { postgresql: 2, mysql: 2 } },
      { id: "vercel_netlify", label: "Vercel / Netlify / Edge platforms", scores: { neon: 3, supabase: 3, sqlite: 2 } },
      { id: "self_hosted", label: "Self-hosted / On-premise / VPS", scores: { postgresql: 3, mysql: 3, cassandra: 2, mongodb: 2, redis: 2, milvus: 2 } },
      { id: "managed_any", label: "Any managed cloud — I want minimal ops", scores: { supabase: 3, firebase: 3, neon: 3, pinecone: 3, dynamodb: 2 } },
    ],
  },
  {
    id: "ai_features",
    section: "AI Features",
    icon: "🤖",
    question: "Do you need AI or ML features?",
    type: "multi",
    options: [
      { id: "no_ai", label: "No AI features needed", scores: { postgresql: 1, mysql: 1, supabase: 1 } },
      { id: "rag", label: "RAG pipeline (chat with your data / documents)", scores: { pgvector: 3, pinecone: 3, supabase: 2, milvus: 2 } },
      { id: "semantic_search", label: "Semantic / vector search (AI-powered search)", scores: { pgvector: 3, pinecone: 3, milvus: 3, supabase: 2 } },
      { id: "recommendations", label: "Recommendation engine", scores: { pgvector: 2, pinecone: 2, neo4j: 3, milvus: 2 } },
      { id: "embeddings", label: "Storing AI embeddings at scale (10M+ vectors)", scores: { milvus: 3, pinecone: 3 } },
      { id: "agent_memory", label: "LLM Agent memory / conversation history", scores: { redis: 3, postgresql: 2, pgvector: 2 } },
    ],
  },
  {
    id: "team",
    section: "Team Experience",
    icon: "👥",
    question: "What is your team's database experience?",
    type: "single",
    options: [
      { id: "sql_expert", label: "Expert in SQL — we know JOINs, indexes, query planning", scores: { postgresql: 3, cockroachdb: 2, mysql: 2, supabase: 2 } },
      { id: "sql_basic", label: "Basic SQL knowledge — comfortable with queries", scores: { supabase: 3, mysql: 3, postgresql: 2, sqlite: 2 } },
      { id: "nosql", label: "Experienced with NoSQL / document databases", scores: { mongodb: 3, dynamodb: 2, firebase: 2 } },
      { id: "beginner", label: "Beginner — this is our first serious project", scores: { supabase: 3, firebase: 3, sqlite: 2, mysql: 2 } },
      { id: "polyglot", label: "Polyglot — we use multiple DB types in production", scores: { postgresql: 3, redis: 3, cassandra: 2, cockroachdb: 2 } },
    ],
  },
  {
    id: "budget",
    section: "Budget",
    icon: "💰",
    question: "What is your infrastructure budget?",
    type: "single",
    options: [
      { id: "free", label: "Free tier only — bootstrapped / side project", scores: { postgresql: 3, supabase: 3, sqlite: 3, firebase: 2, redis: 2 } },
      { id: "low", label: "Low — up to $50/month", scores: { supabase: 3, neon: 3, postgresql: 2, mysql: 2 } },
      { id: "medium", label: "Medium — $50–$500/month", scores: { postgresql: 3, mongodb: 3, redis: 2, supabase: 2, pinecone: 2 } },
      { id: "high", label: "High — $500+/month, performance is priority", scores: { cassandra: 3, cockroachdb: 3, pinecone: 3, dynamodb: 3, milvus: 2 } },
    ],
  },
  {
    id: "special",
    section: "Special Requirements",
    icon: "⚙️",
    question: "Any special requirements? (Select all that apply)",
    type: "multi",
    options: [
      { id: "open_source", label: "Must be open source / no vendor lock-in", scores: { postgresql: 3, mysql: 2, cassandra: 2, redis: 2, sqlite: 2, milvus: 2 } },
      { id: "realtime_sync", label: "Real-time data sync to client devices", scores: { firebase: 3, supabase: 3 } },
      { id: "offline_first", label: "Offline-first / works without internet", scores: { sqlite: 3, firebase: 1 } },
      { id: "multi_region", label: "Multi-region / global data distribution", scores: { cockroachdb: 3, cassandra: 3, dynamodb: 3 } },
      { id: "compliance", label: "Regulatory compliance (GDPR, HIPAA, PCI-DSS)", scores: { postgresql: 2, cockroachdb: 2, supabase: 2 } },
      { id: "schema_branch", label: "Database branching / schema migrations like code", scores: { neon: 3, supabase: 2 } },
      { id: "auth_included", label: "Built-in authentication and authorization", scores: { supabase: 3, firebase: 3 } },
      { id: "relationship_heavy", label: "Complex relationship traversal (fraud, social graph)", scores: { neo4j: 3 } },
      { id: "serverless_scale", label: "Scales to zero when idle — pay per use", scores: { neon: 3, firebase: 2, dynamodb: 2, supabase: 2 } },
    ],
  },
];

const sectionColors = {
  "Project Type": "#6366f1",
  "Data Structure": "#0891b2",
  "Scale & Traffic": "#059669",
  "Workload Pattern": "#d97706",
  "Data Integrity": "#dc2626",
  "Deployment": "#7c3aed",
  "AI Features": "#ec4899",
  "Team Experience": "#0f766e",
  "Budget": "#b45309",
  "Special Requirements": "#374151",
};

export default function DatabaseSelector() {
  const [step, setStep] = useState(0); // 0 = intro, 1..N = questions, N+1 = results
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [scores, setScores] = useState<Record<string, number>>({});
  const [results, setResults] = useState<[string, number][]>([]);
  const [hoveredDb, setHoveredDb] = useState<string | null>(null);

  const totalSteps = questions.length;

  const currentQuestion = questions[step - 1];

  const handleSingle = (qId: string, optId: string, optScores: any) => {
    setAnswers((prev) => ({ ...prev, [qId]: [optId] }));
  };

  const handleMulti = (qId: string, optId: string) => {
    setAnswers((prev) => {
      const current = prev[qId] || [];
      if (current.includes(optId)) {
        return { ...prev, [qId]: current.filter((x) => x !== optId) };
      } else {
        return { ...prev, [qId]: [...current, optId] };
      }
    });
  };

  const isSelected = (qId: string, optId: string) => {
    return (answers[qId] || []).includes(optId);
  };

  const canProceed = () => {
    if (!currentQuestion) return false;
    return (answers[currentQuestion.id] || []).length > 0;
  };

  const calculateResults = () => {
    const totals: Record<string, number> = {};
    Object.keys(databases).forEach((db) => { totals[db] = 0; });

    questions.forEach((q) => {
      const selected = answers[q.id] || [];
      q.options.forEach((opt) => {
        if (selected.includes(opt.id)) {
          Object.entries(opt.scores).forEach(([db, score]) => {
            if (totals[db] !== undefined) totals[db] += score;
          });
        }
      });
    });

    const sorted = (Object.entries(totals) as [string, number][])
      .sort((a, b) => b[1] - a[1])
      .filter(([, score]) => score > 0)
      .slice(0, 5);

    setScores(totals);
    setResults(sorted);
    setStep(totalSteps + 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setScores({});
    setResults([]);
  };

  const progress = step === 0 ? 0 : step > totalSteps ? 100 : Math.round((step / totalSteps) * 100);

  // ─── INTRO ───────────────────────────────────────────────────────────────
  if (step === 0) {
    return (
      <div style={styles.root}>
        <div style={styles.card}>
          <div style={styles.badge}>🗄 AcademiaPilot · Database Selector 2026</div>
          <h1 style={styles.heroTitle}>Which Database Is Right for You?</h1>
          <p style={styles.heroSub}>
            Answer 10 quick questions and get a ranked recommendation from 15 databases — including PostgreSQL, Supabase, MongoDB, Redis, Cassandra, vector databases for AI, and more.
          </p>
          <div style={styles.dbGrid}>
            {Object.values(databases).slice(0, 10).map((db) => (
              <div key={db.name} style={{ ...styles.dbChip, background: `${db.color}15`, border: `1.5px solid ${db.color}22`, color: db.color }}>
                <span>{db.emoji}</span> {db.name}
              </div>
            ))}
            <div style={{ ...styles.dbChip, background: "var(--color-primary)", border: "1.5px dashed var(--color-border)", color: "var(--color-text-muted)" }}>
              +5 more
            </div>
          </div>
          <div style={styles.statsRow}>
            <div style={styles.stat}><span style={styles.statNum}>15</span><span style={styles.statLabel}>Databases</span></div>
            <div style={styles.statDivider} />
            <div style={styles.stat}><span style={styles.statNum}>10</span><span style={styles.statLabel}>Questions</span></div>
            <div style={styles.statDivider} />
            <div style={styles.stat}><span style={styles.statNum}>~3 min</span><span style={styles.statLabel}>To complete</span></div>
          </div>
          <button style={styles.startBtn} onClick={() => setStep(1)}>
            Start the Selector →
          </button>
          <p style={styles.hint}>No signup · 100% free · Updated March 2026</p>
        </div>
      </div>
    );
  }

  // ─── RESULTS ─────────────────────────────────────────────────────────────
  if (step === totalSteps + 1) {
    const maxScore = results[0]?.[1] || 1;
    const medals = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];

    return (
      <div style={styles.root}>
        <div style={{ ...styles.card, maxWidth: 780 }}>
          <div style={styles.badge}>✅ Your Results</div>
          <h1 style={styles.heroTitle}>Your Top Database Matches</h1>
          <p style={styles.heroSub}>Based on your answers, here are the databases best suited to your project — ranked by compatibility score.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "24px 0" }}>
            {results.map(([dbKey, score], i) => {
              const db = databases[dbKey];
              if (!db) return null;
              const pct = Math.round((score / maxScore) * 100);
              const isTop = i === 0;

              return (
                <div
                  key={dbKey}
                  style={{
                    ...styles.resultCard,
                    border: isTop ? `2px solid ${db.color}` : "1.5px solid var(--color-border)",
                    background: isTop ? `${db.color}15` : "var(--color-surface)",
                    boxShadow: isTop ? `0 4px 24px ${db.color}22` : "none",
                  }}
                >
                  <div style={styles.resultHeader}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 28 }}>{medals[i]}</span>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: 22 }}>{db.emoji}</span>
                          <span style={{ ...styles.resultName, color: db.color }}>{db.name}</span>
                          {isTop && <span style={{ ...styles.topBadge, background: db.color }}>Best Match</span>}
                        </div>
                        <span style={styles.resultType}>{db.type}</span>
                      </div>
                    </div>
                    <div style={styles.scoreCircle(db.color)}>{pct}%</div>
                  </div>

                  <div style={styles.barBg}>
                    <div style={{ ...styles.barFill, width: `${pct}%`, background: db.color }} />
                  </div>

                  <p style={styles.resultDesc}>{db.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "10px 0 6px" }}>
                    {db.tags.map((t) => (
                      <span key={t} style={{ ...styles.tag, background: `${db.color}15`, color: db.color, border: `1px solid ${db.color}33` }}>{t}</span>
                    ))}
                  </div>

                  <div style={styles.resultMeta}>
                    <span style={styles.metaText}>🏢 Used by: <strong>{db.usedBy}</strong></span>
                    <span style={styles.metaText}>📌 {db.best}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Score breakdown mini table */}
          <div style={styles.breakdownBox}>
            <div style={styles.breakdownTitle}>Full Score Breakdown</div>
            <div style={styles.miniGrid}>
              {Object.entries(scores)
                .sort((a, b) => b[1] - a[1])
                .filter(([, s]) => s > 0)
                .map(([key, s]) => {
                  const db = databases[key];
                  if (!db) return null;
                  return (
                    <div key={key} style={styles.miniRow}>
                      <span>{db.emoji} {db.name}</span>
                      <div style={styles.miniBarWrap}>
                        <div style={{ ...styles.miniBar, width: `${Math.round((s / maxScore) * 100)}%`, background: db.color }} />
                      </div>
                      <span style={{ color: db.color, fontWeight: 700, minWidth: 28, textAlign: "right" }}>{s}</span>
                    </div>
                  );
                })}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <button style={styles.startBtn} onClick={restart}>
              ↩ Start Over
            </button>
            <button
              style={{ ...styles.startBtn, background: "var(--color-primary)", color: "var(--color-text-primary)", border: "1.5px solid var(--color-border)" }}
              onClick={() => window.open("https://academiapilot.com", "_blank")}
            >
              Read Full Guide →
            </button>
          </div>
          <p style={styles.hint}>Results are based on your selections. Real-world requirements may differ — always test in a staging environment.</p>
        </div>
      </div>
    );
  }

  // ─── QUESTION ────────────────────────────────────────────────────────────
  const q = currentQuestion;
  const sectionColor = sectionColors[q.section] || "#6366f1";

  return (
    <div style={styles.root}>
      <div style={styles.card}>
        {/* Progress */}
        <div style={styles.progressRow}>
          <span style={{ fontSize: 12, color: "var(--color-text-muted)", fontWeight: 600 }}>
            {step} / {totalSteps}
          </span>
          <div style={styles.progressBg}>
            <div style={{ ...styles.progressFill, width: `${progress}%`, background: sectionColor }} />
          </div>
          <span style={{ fontSize: 12, color: sectionColor, fontWeight: 700 }}>{progress}%</span>
        </div>

        {/* Section badge */}
        <div style={{ ...styles.sectionBadge, background: `${sectionColor}15`, color: sectionColor, borderColor: `${sectionColor}33` }}>
          {q.icon} {q.section}
        </div>

        <h2 style={styles.questionTitle}>{q.question}</h2>
        <p style={styles.questionHint}>
          {q.type === "multi" ? "Select all that apply" : "Select one option"}
        </p>

        <div style={styles.optionsGrid}>
          {q.options.map((opt) => {
            const sel = isSelected(q.id, opt.id);
            return (
              <button
                key={opt.id}
                style={{
                  ...styles.optionBtn,
                  ...(sel ? { borderColor: sectionColor, background: `${sectionColor}15`, color: "var(--color-text-primary)" } : {}),
                }}
                onClick={() => {
                  if (q.type === "single") handleSingle(q.id, opt.id, opt.scores);
                  else handleMulti(q.id, opt.id);
                }}
              >
                <span style={{ ...styles.optionCheck, borderColor: sel ? sectionColor : "var(--color-border)", background: sel ? sectionColor : "var(--color-primary)" }}>
                  {sel && <span style={{ color: "#ffffff", fontSize: 11, fontWeight: 800 }}>✓</span>}
                </span>
                <span style={{ flex: 1, textAlign: "left" }}>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Nav buttons */}
        <div style={styles.navRow}>
          <button
            style={styles.backBtn}
            onClick={() => setStep((s) => s - 1)}
          >
            ← Back
          </button>

          {step < totalSteps ? (
            <button
              style={{ ...styles.nextBtn, background: canProceed() ? sectionColor : "var(--color-border)", cursor: canProceed() ? "pointer" : "not-allowed" }}
              onClick={() => canProceed() && setStep((s) => s + 1)}
            >
              Next Question →
            </button>
          ) : (
            <button
              style={{ ...styles.nextBtn, background: canProceed() ? "var(--color-accent)" : "var(--color-border)", cursor: canProceed() ? "pointer" : "not-allowed" }}
              onClick={() => canProceed() && calculateResults()}
            >
              Get My Results →
            </button>
          )}
        </div>

        {/* Step dots */}
        <div style={styles.dotsRow}>
          {questions.map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.dot,
                background: i + 1 < step ? sectionColor : i + 1 === step ? sectionColor : "var(--color-border)",
                width: i + 1 === step ? 20 : 8,
                opacity: i + 1 < step ? 0.5 : 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── STYLES ──────────────────────────────────────────────────────────────────
const styles = {
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "32px 16px 48px",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  card: {
    background: "var(--color-surface)", // Dark navy surface
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 20,
    padding: "36px 32px",
    maxWidth: 680,
    width: "100%",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
  },
  badge: {
    display: "inline-block",
    background: "rgba(255,255,255,0.02)",
    color: "#cbd5e1",
    borderRadius: 100,
    padding: "5px 14px",
    fontSize: 11,
    fontWeight: 700,
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: "0.05em",
    marginBottom: 20,
    border: "1px solid rgba(255,255,255,0.1)",
  },
  heroTitle: {
    fontSize: "clamp(22px, 4vw, 30px)",
    fontWeight: 800,
    color: "#f8fafc",
    margin: "0 0 12px",
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
  heroSub: {
    fontSize: 15,
    color: "#cbd5e1",
    lineHeight: 1.7,
    margin: "0 0 24px",
  },
  dbGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 28,
  },
  dbChip: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "5px 12px",
    borderRadius: 100,
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  statsRow: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    background: "rgba(255,255,255,0.02)",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "16px 24px",
    marginBottom: 28,
    justifyContent: "space-around",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  statNum: {
    fontSize: 22,
    fontWeight: 800,
    color: "#f8fafc",
    fontFamily: "'JetBrains Mono', monospace",
  },
  statLabel: {
    fontSize: 11,
    color: "#94a3b8",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  statDivider: {
    width: 1,
    height: 36,
    background: "rgba(255,255,255,0.1)",
  },
  startBtn: {
    display: "inline-block",
    background: "#3b82f6", // Neon blue accent
    color: "#FFFFFF",
    border: "none",
    borderRadius: 10,
    padding: "13px 28px",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Inter', system-ui, sans-serif",
    letterSpacing: "-0.01em",
    transition: "transform 0.15s",
  },
  hint: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 12,
  },
  // Progress
  progressRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  progressBg: {
    flex: 1,
    height: 6,
    background: "rgba(255,255,255,0.02)",
    borderRadius: 100,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 100,
    transition: "width 0.4s ease",
  },
  sectionBadge: {
    display: "inline-block",
    borderRadius: 100,
    border: "1.5px solid",
    padding: "4px 14px",
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: "0.04em",
    marginBottom: 14,
  },
  questionTitle: {
    fontSize: "clamp(18px, 3.5vw, 24px)",
    fontWeight: 800,
    color: "#f8fafc",
    margin: "0 0 6px",
    letterSpacing: "-0.02em",
  },
  questionHint: {
    fontSize: 13,
    color: "#cbd5e1",
    marginBottom: 20,
  },
  optionsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 24,
  },
  optionBtn: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "rgba(255,255,255,0.02)",
    border: "1.5px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: "11px 14px",
    fontSize: 14,
    color: "#f8fafc",
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.15s",
    fontFamily: "'Inter', system-ui, sans-serif",
    lineHeight: 1.5,
  },
  optionCheck: {
    width: 20,
    height: 20,
    borderRadius: 5,
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.15s",
  },
  navRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  backBtn: {
    background: "none",
    border: "1.5px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: "11px 20px",
    fontSize: 14,
    color: "#cbd5e1",
    cursor: "pointer",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  nextBtn: {
    border: "none",
    borderRadius: 10,
    padding: "11px 24px",
    fontSize: 14,
    fontWeight: 700,
    color: "white",
    fontFamily: "'Inter', system-ui, sans-serif",
    transition: "background 0.2s",
  },
  dotsRow: {
    display: "flex",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
  },
  dot: {
    height: 8,
    borderRadius: 100,
    transition: "all 0.3s",
  },
  // Results
  resultCard: {
    borderRadius: 14,
    padding: "20px 20px 16px",
    transition: "all 0.2s",
  },
  resultHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
    gap: 12,
  },
  resultName: {
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  topBadge: {
    color: "white",
    fontSize: 10,
    fontWeight: 700,
    fontFamily: "'JetBrains Mono', monospace",
    borderRadius: 100,
    padding: "2px 8px",
    letterSpacing: "0.05em",
  },
  resultType: {
    fontSize: 12,
    color: "#94a3b8",
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 600,
  },
  scoreCircle: (color) => ({
    width: 52,
    height: 52,
    borderRadius: "50%",
    background: `rgba(255,255,255,0.05)`,
    border: `2.5px solid ${color}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 800,
    color: color,
    flexShrink: 0,
  }),
  barBg: {
    height: 5,
    background: "rgba(255,255,255,0.02)",
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 12,
  },
  barFill: {
    height: "100%",
    borderRadius: 100,
    transition: "width 0.6s ease",
  },
  resultDesc: {
    fontSize: 14,
    color: "#f8fafc",
    lineHeight: 1.65,
    margin: "0 0 8px",
  },
  tag: {
    padding: "3px 10px",
    borderRadius: 100,
    fontSize: 11,
    fontWeight: 700,
    fontFamily: "'JetBrains Mono', monospace",
  },
  resultMeta: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    marginTop: 8,
    paddingTop: 10,
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  metaText: {
    fontSize: 12,
    color: "#cbd5e1",
  },
  breakdownBox: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: "16px 20px",
    marginTop: 8,
  },
  breakdownTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#cbd5e1",
    textTransform: "uppercase",
    letterSpacing: "0.07em",
    fontFamily: "'JetBrains Mono', monospace",
    marginBottom: 12,
  },
  miniGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },
  miniRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 13,
    color: "#f8fafc",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  miniBarWrap: {
    flex: 1,
    height: 5,
    background: "rgba(255,255,255,0.1)",
    borderRadius: 100,
    overflow: "hidden",
  },
  miniBar: {
    height: "100%",
    borderRadius: 100,
  },
};

