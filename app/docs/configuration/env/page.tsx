import { DocPage, CodeBlock, Callout } from '@/components/DocPage';

export default function EnvPage() {
  return (
    <DocPage title="Environment Variables" description="All supported .env variables and their defaults.">

      <h2>Full .env Reference</h2>
      <CodeBlock
        language="bash"
        filename=".env"
        code={`# ── Core ──────────────────────────────────
DEBUG=True
SECRET_KEY=your-django-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1

# ── Database ──────────────────────────────
DATABASE_URL=sqlite:///db.sqlite3
# PostgreSQL:
# DATABASE_URL=postgresql://user:pass@localhost:5432/mydb

# ── JWT Auth ──────────────────────────────
JWT_SECRET_KEY=change-this-in-production
JWT_EXPIRY_HOURS=24
JWT_REFRESH_EXPIRY_DAYS=30

# ── Cache ────────────────────────────────
CACHE_TTL=300            # seconds, default 5 minutes
CACHE_BACKEND=locmem     # locmem | redis | memcached

# ── Email (for --complete auth) ──────────
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=you@gmail.com
EMAIL_HOST_PASSWORD=your-app-password`}
      />

      <Callout type="info">
        Shanks automatically loads your <code>.env</code> file using python-dotenv.
        No additional setup required.
      </Callout>
    </DocPage>
  );
}
