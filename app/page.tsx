'use client'

export default function Home() {
  const products = [
    {
      sector: 'Consumer · Family nutrition',
      users:
        'Households managing overlapping dietary constraints — allergies, medical diets, and differing needs across family members.',
      description:
        'AI-assisted recipe generation, meal planning, pantry tracking, and shopping lists. Web and iOS.',
      stage: 'Production',
    },
    {
      sector: 'Education · Special education advocacy',
      users:
        'Parents and advocates navigating the US K–12 Individualized Education Program (IEP) process.',
      description:
        'Upload an IEP; the system extracts goals, services, and accommodations, flags year-over-year changes, and tracks compliance. Paid tiers for parents and advocates.',
      stage: 'Production',
    },
    {
      sector: 'Healthcare · Rare disease navigation',
      users:
        'Families navigating a rare-disease diagnosis — identifying specialists, matching to trials, organizing records.',
      description:
        'Surfaces relevant specialists from published literature, predicts clinical trial eligibility, and maintains a structured longitudinal record.',
      stage: 'Pre-launch',
    },
  ]

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <div style={styles.inner}>
          <div style={styles.wordmark}>Verata Ventures</div>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.inner}>
          <div style={styles.kicker}>Software studio · New Jersey</div>
          <h1 style={styles.heroTitle}>
            Vertical AI software for healthcare, education, and everyday family life.
          </h1>
          <p style={styles.heroLede}>
            Verata Ventures is a small, privately held software studio. We build products in
            markets where off-the-shelf software fits poorly — where workflows are complex,
            regulation is real, and the people doing the work are underserved by generalist tools.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.inner}>
          <h2 style={styles.sectionTitle}>How we work</h2>
          <p style={styles.body}>
            We design, build, and operate every product in-house. A deliberately consistent
            technical foundation across the portfolio, supplemented by a custom-built development
            framework centered around the latest AI coding models, lets us ship fast and pivot
            quickly.
          </p>
          <p style={styles.body}>
            Our approach allows us to build and launch in niches underserved by larger
            organizations, and to explore new markets and ideas quickly and efficiently. We aim to
            replace generic software and inconvenient workarounds with tailored, thoughtful
            solutions that leverage the latest in technology to provide customers with the tools
            and answers they need when and where they need them.
          </p>
        </div>
      </section>

      <section style={styles.productsSection}>
        <div style={styles.inner}>
          <h2 style={styles.sectionTitle}>Portfolio</h2>
          <p style={styles.subnote}>
            Product names and URLs are held back pending launch. Specifics available on request.
          </p>
          <div style={styles.productList}>
            {products.map((p) => (
              <article key={p.sector} style={styles.product}>
                <div style={styles.productHead}>
                  <div style={styles.productSector}>{p.sector}</div>
                  <div
                    style={{
                      ...styles.productStage,
                      color: p.stage === 'Production' ? '#0b3d2e' : '#6b4a00',
                      background: p.stage === 'Production' ? '#e6f1ec' : '#f6eeda',
                    }}
                  >
                    {p.stage}
                  </div>
                </div>
                <p style={styles.productUsers}>{p.users}</p>
                <p style={styles.productDesc}>{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.inner}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <p style={styles.body}>
            For introductions, partnership conversations, or product-specific questions, email
            Kevin directly. Responses usually come within a business day.
          </p>
          <a href="mailto:kevin@verataventures.com" style={styles.emailLink}>
            kevin@verataventures.com
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.inner}>
          <div style={styles.footerRow}>
            <span>© {new Date().getFullYear()} Verata Ventures, LLC</span>
            <span>New Jersey, USA</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

const ink = '#0f1a2b'
const inkSoft = '#33415a'
const muted = '#6b7280'
const rule = '#e6e4dd'
const cream = '#fbf9f4'

const serif =
  "'Charter', 'Iowan Old Style', 'Palatino Linotype', 'Georgia', ui-serif, serif"

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: cream,
    color: ink,
  },
  inner: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '0 28px',
  },
  header: {
    borderBottom: `1px solid ${rule}`,
    padding: '22px 0',
  },
  wordmark: {
    fontFamily: serif,
    fontSize: '1.15rem',
    fontWeight: 500,
    color: ink,
    letterSpacing: '0.01em',
  },
  hero: {
    padding: '84px 0 64px',
  },
  kicker: {
    fontSize: '0.8rem',
    color: muted,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '22px',
  },
  heroTitle: {
    fontFamily: serif,
    fontWeight: 500,
    fontSize: '2.6rem',
    lineHeight: 1.18,
    letterSpacing: '-0.012em',
    color: ink,
    marginBottom: '26px',
  },
  heroLede: {
    fontSize: '1.08rem',
    lineHeight: 1.65,
    color: inkSoft,
    maxWidth: '640px',
  },
  section: {
    padding: '56px 0',
    borderTop: `1px solid ${rule}`,
  },
  productsSection: {
    padding: '56px 0',
    borderTop: `1px solid ${rule}`,
    background: '#fffdf8',
  },
  sectionTitle: {
    fontFamily: serif,
    fontWeight: 500,
    fontSize: '1.5rem',
    color: ink,
    marginBottom: '20px',
    letterSpacing: '-0.005em',
  },
  subnote: {
    fontSize: '0.9rem',
    color: muted,
    marginBottom: '32px',
    maxWidth: '540px',
    lineHeight: 1.55,
  },
  body: {
    fontSize: '1.02rem',
    lineHeight: 1.72,
    color: inkSoft,
    marginBottom: '18px',
    maxWidth: '640px',
  },
  productList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  },
  product: {
    paddingTop: '28px',
    borderTop: `1px solid ${rule}`,
  },
  productHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: '16px',
    marginBottom: '14px',
    flexWrap: 'wrap',
  },
  productSector: {
    fontFamily: serif,
    fontSize: '1.15rem',
    fontWeight: 500,
    color: ink,
  },
  productStage: {
    fontSize: '0.72rem',
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: '999px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  productUsers: {
    fontSize: '0.98rem',
    color: inkSoft,
    lineHeight: 1.65,
    marginBottom: '10px',
  },
  productDesc: {
    fontSize: '0.96rem',
    color: muted,
    lineHeight: 1.65,
  },
  emailLink: {
    fontFamily: serif,
    fontSize: '1.15rem',
    color: ink,
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    textDecorationThickness: '1px',
  },
  footer: {
    padding: '36px 0',
    borderTop: `1px solid ${rule}`,
    marginTop: '40px',
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem',
    color: muted,
    flexWrap: 'wrap',
    gap: '8px',
  },
}
