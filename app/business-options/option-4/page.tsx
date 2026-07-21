'use client'

import { useState } from 'react'

export default function Option4() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error('Failed to subscribe')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const products = [
    {
      name: 'Culinova',
      description: 'AI-powered meal planning for families',
      icon: '🍳',
      status: 'Beta',
      gradient: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
      progress: 75,
      launchDate: 'Q2 2026'
    },
    {
      name: 'IEP Copilot',
      description: 'Parent advocacy platform for special education',
      icon: '📚',
      status: 'Beta',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      progress: 70,
      launchDate: 'Q2 2026'
    },
    {
      name: 'Rare Disease Navigator',
      description: 'Healthcare navigation for rare diseases',
      icon: '🏥',
      status: 'Development',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
      progress: 45,
      launchDate: 'Q4 2026'
    },
    {
      name: 'EMR Platform',
      description: 'Mental health practice management',
      icon: '🧠',
      status: 'Development',
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      progress: 40,
      launchDate: 'Q1 2027'
    },
  ]

  return (
    <main style={styles.main}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>Verata Ventures</div>
          <a href="/business-options" style={styles.backLink}>View All Options</a>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Product Portfolio</h1>
          <p style={styles.heroSubtitle}>
            Four AI-powered platforms transforming healthcare and education, from concept to market.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What We Do</h2>
          <p style={styles.sectionText}>
            Verata Ventures specializes in building and launching AI-powered products that solve critical problems
            in healthcare and education. We take products from ideation through beta testing to full market deployment,
            with a focus on measurable impact and sustainable growth. Each product in our portfolio is designed to
            address specific pain points we've identified through deep market research and user engagement.
          </p>
        </div>
      </section>

      {/* Products Showcase */}
      <section style={styles.productsSection}>
        <div style={styles.wideContainer}>
          <h2 style={styles.productsSectionTitle}>Our Products</h2>
          <div style={styles.productsShowcase}>
            {products.map((product) => (
              <div key={product.name} style={styles.showcaseCard}>
                <div style={{...styles.cardHeader, background: product.gradient}}>
                  <div style={styles.showcaseIcon}>{product.icon}</div>
                  <div style={styles.showcaseBadge}>{product.status}</div>
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.showcaseName}>{product.name}</h3>
                  <p style={styles.showcaseDescription}>{product.description}</p>

                  <div style={styles.progressSection}>
                    <div style={styles.progressHeader}>
                      <span style={styles.progressLabel}>Development Progress</span>
                      <span style={styles.progressPercent}>{product.progress}%</span>
                    </div>
                    <div style={styles.progressBar}>
                      <div style={{...styles.progressFill, width: `${product.progress}%`, background: product.gradient}}></div>
                    </div>
                  </div>

                  <div style={styles.launchInfo}>
                    <span style={styles.launchLabel}>Target Launch:</span>
                    <span style={styles.launchDate}>{product.launchDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>
          <p style={styles.contactText}>
            Interested in learning more about our products or exploring partnership opportunities?
          </p>

          {!submitted ? (
            <>
              <div style={styles.contactMethods}>
                <a href="mailto:info@verataventures.com" style={styles.contactButton}>
                  Contact Our Team
                </a>
              </div>

              <div style={styles.divider}>
                <span style={styles.dividerText}>or</span>
              </div>

              <div style={styles.emailSignup}>
                <p style={styles.signupText}>Get product updates and launch announcements:</p>
                <form onSubmit={handleSubmit} style={styles.form}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={styles.input}
                  />
                  <button type="submit" style={styles.submitButton} disabled={loading}>
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
              </div>
            </>
          ) : (
            <div style={styles.successMessage}>
              <span style={styles.checkmark}>✓</span>
              <p>You're all set! We'll keep you updated on our product launches.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={styles.footerText}>© {new Date().getFullYear()} Verata Ventures, LLC</p>
          <p style={styles.footerLocation}>New Jersey, USA</p>
        </div>
      </footer>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: '#fafafa',
  },
  header: {
    background: '#fff',
    padding: '20px 0',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
  headerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111',
  },
  backLink: {
    fontSize: '0.9rem',
    color: '#6b7280',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  hero: {
    padding: '100px 20px 80px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    textAlign: 'center',
    color: '#fff',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '20px',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    lineHeight: '1.6',
    opacity: 0.95,
  },
  section: {
    padding: '80px 20px',
    background: '#fff',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  wideContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#111',
    marginBottom: '24px',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: '1.15rem',
    color: '#4b5563',
    lineHeight: '1.8',
    textAlign: 'center',
    maxWidth: '850px',
    margin: '0 auto',
  },
  productsSection: {
    padding: '100px 20px',
    background: '#fff',
  },
  productsSectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#111',
    marginBottom: '60px',
    textAlign: 'center',
  },
  productsShowcase: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
  },
  showcaseCard: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s',
  },
  cardHeader: {
    padding: '50px 30px',
    textAlign: 'center',
    position: 'relative',
  },
  showcaseIcon: {
    fontSize: '4rem',
    marginBottom: '16px',
  },
  showcaseBadge: {
    display: 'inline-block',
    padding: '8px 18px',
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  cardContent: {
    padding: '32px 30px 36px',
  },
  showcaseName: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#111',
    marginBottom: '12px',
  },
  showcaseDescription: {
    fontSize: '1.05rem',
    color: '#6b7280',
    lineHeight: '1.7',
    marginBottom: '28px',
  },
  progressSection: {
    marginBottom: '24px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  progressLabel: {
    fontSize: '0.85rem',
    color: '#6b7280',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  progressPercent: {
    fontSize: '0.85rem',
    color: '#111',
    fontWeight: '700',
  },
  progressBar: {
    width: '100%',
    height: '8px',
    background: '#e5e7eb',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    transition: 'width 0.5s ease',
    borderRadius: '10px',
  },
  launchInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0 0',
    borderTop: '1px solid #e5e7eb',
  },
  launchLabel: {
    fontSize: '0.9rem',
    color: '#6b7280',
    fontWeight: '500',
  },
  launchDate: {
    fontSize: '0.95rem',
    color: '#111',
    fontWeight: '700',
  },
  contactSection: {
    padding: '80px 20px',
    background: '#f9fafb',
  },
  contactText: {
    fontSize: '1.15rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '50px',
  },
  contactMethods: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '35px',
  },
  contactButton: {
    padding: '18px 45px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    borderRadius: '10px',
    fontSize: '1.05rem',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
  },
  divider: {
    textAlign: 'center',
    position: 'relative',
    margin: '35px 0',
  },
  dividerText: {
    padding: '0 16px',
    background: '#f9fafb',
    color: '#9ca3af',
    fontSize: '0.875rem',
    position: 'relative',
    zIndex: 1,
  },
  emailSignup: {
    maxWidth: '550px',
    margin: '0 auto',
  },
  signupText: {
    fontSize: '1.05rem',
    color: '#374151',
    textAlign: 'center',
    marginBottom: '18px',
  },
  form: {
    display: 'flex',
    gap: '12px',
  },
  input: {
    flex: 1,
    padding: '16px 20px',
    fontSize: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '10px',
    outline: 'none',
  },
  submitButton: {
    padding: '16px 36px',
    fontSize: '1rem',
    fontWeight: '700',
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  error: {
    fontSize: '0.9rem',
    color: '#ef4444',
    marginTop: '12px',
    textAlign: 'center',
  },
  successMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    color: '#111',
    fontSize: '1.15rem',
    padding: '20px',
  },
  checkmark: {
    color: '#10b981',
    fontSize: '1.6rem',
  },
  footer: {
    padding: '50px 20px',
    borderTop: '1px solid #e5e7eb',
    textAlign: 'center',
    background: '#fff',
  },
  footerText: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  footerLocation: {
    fontSize: '0.8125rem',
    color: '#9ca3af',
    marginTop: '8px',
  },
}
