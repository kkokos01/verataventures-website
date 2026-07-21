'use client'

import { useState } from 'react'

export default function Option1() {
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
    { name: 'Culinova', description: 'AI-powered meal planning for families', icon: '🍳', status: 'Beta' },
    { name: 'IEP Copilot', description: 'Parent advocacy platform for special education', icon: '📚', status: 'Beta' },
    { name: 'Rare Disease Navigator', description: 'Healthcare navigation for rare diseases', icon: '🏥', status: 'Development' },
    { name: 'EMR Platform', description: 'Mental health practice management', icon: '🧠', status: 'Development' },
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
          <h1 style={styles.heroTitle}>Building AI-Powered Software for Healthcare & Education</h1>
          <p style={styles.heroSubtitle}>
            We're a venture studio creating products that solve real problems in underserved markets.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What We Do</h2>
          <p style={styles.sectionText}>
            Verata Ventures is a software venture studio focused on building AI-powered products across healthcare and education.
            We identify meaningful problems, build solutions, and bring them to market. Our approach combines deep domain expertise
            with modern AI capabilities to create tools that make a real difference.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Products</h2>
          <div style={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.name} style={styles.productCard}>
                <div style={styles.productIcon}>{product.icon}</div>
                <div style={styles.productBadge}>{product.status}</div>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
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
            Interested in our products or want to discuss a partnership?
          </p>

          {!submitted ? (
            <>
              <div style={styles.contactMethods}>
                <a href="mailto:info@verataventures.com" style={styles.contactButton}>
                  Email Us
                </a>
              </div>

              <div style={styles.divider}>
                <span style={styles.dividerText}>or</span>
              </div>

              <div style={styles.emailSignup}>
                <p style={styles.signupText}>Stay updated on our progress:</p>
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
                    {loading ? 'Sending...' : 'Subscribe'}
                  </button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
              </div>
            </>
          ) : (
            <div style={styles.successMessage}>
              <span style={styles.checkmark}>✓</span>
              <p>Thanks for subscribing! We'll keep you updated on our progress.</p>
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
    background: '#ffffff',
  },
  header: {
    borderBottom: '1px solid #e5e7eb',
    background: '#fff',
    padding: '20px 0',
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
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#111',
  },
  backLink: {
    fontSize: '0.9rem',
    color: '#6b7280',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  hero: {
    padding: '80px 20px',
    background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#111',
    letterSpacing: '-0.02em',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
    lineHeight: '1.7',
  },
  section: {
    padding: '60px 20px',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111',
    marginBottom: '20px',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: '1.125rem',
    color: '#374151',
    lineHeight: '1.7',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  },
  productCard: {
    padding: '32px 24px',
    background: '#f9fafb',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    textAlign: 'center',
    transition: 'all 0.2s',
  },
  productIcon: {
    fontSize: '3rem',
    marginBottom: '12px',
  },
  productBadge: {
    display: 'inline-block',
    padding: '4px 12px',
    background: '#dbeafe',
    color: '#1e40af',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '600',
    marginBottom: '12px',
  },
  productName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111',
    marginBottom: '8px',
  },
  productDescription: {
    fontSize: '0.9375rem',
    color: '#6b7280',
    lineHeight: '1.6',
  },
  contactSection: {
    padding: '60px 20px',
    background: '#f9fafb',
  },
  contactText: {
    fontSize: '1.125rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '40px',
  },
  contactMethods: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  contactButton: {
    padding: '16px 40px',
    background: '#111',
    color: '#fff',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
  divider: {
    textAlign: 'center',
    position: 'relative',
    margin: '30px 0',
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
    maxWidth: '500px',
    margin: '0 auto',
  },
  signupText: {
    fontSize: '1rem',
    color: '#374151',
    textAlign: 'center',
    marginBottom: '16px',
  },
  form: {
    display: 'flex',
    gap: '12px',
  },
  input: {
    flex: 1,
    padding: '14px 18px',
    fontSize: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    outline: 'none',
  },
  submitButton: {
    padding: '14px 32px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    background: '#111',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  error: {
    fontSize: '0.875rem',
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
    fontSize: '1.125rem',
    padding: '20px',
  },
  checkmark: {
    color: '#22c55e',
    fontSize: '1.5rem',
  },
  footer: {
    padding: '40px 20px',
    borderTop: '1px solid #e5e7eb',
    textAlign: 'center',
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
