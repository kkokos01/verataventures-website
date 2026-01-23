'use client'

import { useState } from 'react'

export default function Home() {
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
    { name: 'Culinova', description: 'AI-powered meal planning for families', status: 'Beta', color: '#1e3a8a' },
    { name: 'IEP Copilot', description: 'Parent advocacy platform for special education', status: 'Beta', color: '#0d9488' },
    { name: 'Rare Disease Navigator', description: 'Healthcare navigation for rare diseases', status: 'Development', color: '#4338ca' },
    { name: 'EMR Platform', description: 'Mental health practice management', status: 'Development', color: '#475569' },
  ]

  const stats = [
    { number: '4', label: 'Active Products' },
    { number: '2', label: 'Markets Served' },
    { number: '2', label: 'Beta Deployments' },
  ]

  return (
    <main style={styles.main}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>VERATA VENTURES</div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroLabel}>ENTERPRISE VENTURE STUDIO</div>
          <h1 style={styles.heroTitle}>Strategic AI Solutions for Healthcare & Education</h1>
          <p style={styles.heroSubtitle}>
            Verata Ventures delivers enterprise-grade AI software platforms designed to address critical challenges
            in healthcare and education sectors through proven methodologies and deep industry expertise.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What We Do</h2>
          <div style={styles.dividerLine}></div>
          <p style={styles.sectionText}>
            Verata Ventures operates as a specialized software venture studio with a singular focus on developing
            AI-powered solutions for healthcare and education markets. Our disciplined approach combines rigorous
            market analysis, technical excellence, and domain expertise to build sustainable, scalable products.
            We maintain the highest standards of security, compliance, and operational integrity across all initiatives.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.productsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Products</h2>
          <div style={styles.dividerLine}></div>
          <div style={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.name} style={{
                ...styles.productCard,
                borderTop: `6px solid ${product.color}`,
              }}>
                <div style={styles.productHeader}>
                  <div style={styles.productBadge}>{product.status}</div>
                </div>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
                <div style={styles.productFooter}>
                  <span style={styles.productCategory}>
                    {product.name.includes('IEP') || product.name.includes('Culinova') ? 'Education/Consumer' : 'Healthcare'}
                  </span>
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
          <div style={styles.dividerLine}></div>
          <p style={styles.contactText}>
            For partnership inquiries, investment opportunities, or product information, please contact our team.
          </p>

          {!submitted ? (
            <>
              <div style={styles.contactMethods}>
                <a href="mailto:kevin@verataventures.com" style={styles.contactButton}>
                  Contact Us
                </a>
              </div>

              <div style={styles.divider}>
                <span style={styles.dividerText}>or</span>
              </div>

              <div style={styles.emailSignup}>
                <p style={styles.signupText}>Subscribe to receive quarterly updates:</p>
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
                    {loading ? 'Processing...' : 'Subscribe'}
                  </button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
              </div>
            </>
          ) : (
            <div style={styles.successMessage}>
              <span style={styles.checkmark}>✓</span>
              <p>Thank you. Your subscription has been confirmed.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={styles.footerText}>© {new Date().getFullYear()} Verata Ventures, LLC. All Rights Reserved.</p>
          <p style={styles.footerLocation}>New Jersey, USA</p>
        </div>
      </footer>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: '#ffffff',
  },
  header: {
    background: '#1e3a8a',
    padding: '24px 0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '2px',
  },
  hero: {
    padding: '100px 20px 80px',
    background: 'linear-gradient(180deg, #1e3a8a 0%, #1e40af 100%)',
    color: '#fff',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  heroLabel: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#93c5fd',
    letterSpacing: '2px',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.01em',
    marginBottom: '24px',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: '1.15rem',
    color: '#dbeafe',
    lineHeight: '1.8',
    maxWidth: '750px',
    margin: '0 auto',
  },
  statsSection: {
    background: '#f8fafc',
    padding: '60px 20px',
    borderTop: '4px solid #1e3a8a',
    borderBottom: '1px solid #e2e8f0',
  },
  statsContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
  },
  statCard: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#1e3a8a',
    marginBottom: '8px',
  },
  statLabel: {
    fontSize: '0.95rem',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
  },
  section: {
    padding: '80px 20px',
  },
  productsSection: {
    padding: '80px 20px',
    background: '#f8fafc',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '16px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  dividerLine: {
    width: '80px',
    height: '4px',
    background: '#1e3a8a',
    margin: '0 auto 40px',
  },
  sectionText: {
    fontSize: '1.05rem',
    color: '#475569',
    lineHeight: '1.8',
    textAlign: 'center',
    maxWidth: '850px',
    margin: '0 auto',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '30px',
    marginTop: '50px',
  },
  productCard: {
    padding: '36px 28px',
    background: '#fff',
    border: '2px solid #e2e8f0',
    borderRadius: '4px',
    transition: 'all 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  productHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  productBadge: {
    padding: '6px 12px',
    background: '#1e3a8a',
    color: '#fff',
    fontSize: '0.7rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  productName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '12px',
  },
  productDescription: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: '1.7',
    marginBottom: '20px',
  },
  productFooter: {
    borderTop: '1px solid #e2e8f0',
    paddingTop: '16px',
  },
  productCategory: {
    fontSize: '0.8rem',
    color: '#1e3a8a',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  contactSection: {
    padding: '80px 20px',
    background: '#fff',
  },
  contactText: {
    fontSize: '1.05rem',
    color: '#64748b',
    textAlign: 'center',
    marginBottom: '50px',
  },
  contactMethods: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  contactButton: {
    padding: '18px 48px',
    background: '#1e3a8a',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.2s',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  divider: {
    textAlign: 'center',
    position: 'relative',
    margin: '40px 0',
  },
  dividerText: {
    padding: '0 20px',
    background: '#fff',
    color: '#94a3b8',
    fontSize: '0.85rem',
    position: 'relative',
    zIndex: 1,
    textTransform: 'uppercase',
  },
  emailSignup: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  signupText: {
    fontSize: '1rem',
    color: '#475569',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    gap: '12px',
  },
  input: {
    flex: 1,
    padding: '16px 20px',
    fontSize: '1rem',
    border: '2px solid #cbd5e1',
    outline: 'none',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  submitButton: {
    padding: '16px 40px',
    fontSize: '0.95rem',
    fontWeight: '700',
    border: 'none',
    background: '#1e3a8a',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  error: {
    fontSize: '0.9rem',
    color: '#dc2626',
    marginTop: '12px',
    textAlign: 'center',
  },
  successMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    color: '#0f172a',
    fontSize: '1.1rem',
    padding: '20px',
  },
  checkmark: {
    color: '#059669',
    fontSize: '1.5rem',
  },
  footer: {
    padding: '50px 20px',
    background: '#1e3a8a',
    color: '#fff',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '0.85rem',
    color: '#dbeafe',
  },
  footerLocation: {
    fontSize: '0.8rem',
    color: '#93c5fd',
    marginTop: '8px',
  },
}
