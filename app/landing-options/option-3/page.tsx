'use client'

import { useState } from 'react'

/**
 * OPTION 3: Professional & Trust-Building
 *
 * Design Philosophy:
 * - Clean, corporate feel
 * - Trust indicators
 * - Clear value proposition
 * - Social proof elements
 *
 * Best for: Establishing credibility with enterprise/healthcare verticals
 */

export default function Option3() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setSubmitted(true)
  }

  return (
    <main style={styles.main}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>◇</span>
          Verata Ventures
        </div>
      </header>

      <div style={styles.container}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <span style={styles.overline}>Software Ventures</span>
          <h1 style={styles.title}>
            We build products that<br />
            solve meaningful problems
          </h1>
          <p style={styles.description}>
            Verata Ventures is a software venture studio focused on creating
            impactful products in education, healthcare, and consumer technology.
          </p>
        </section>

        {/* Email Capture Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Be the first to know</h2>
          <p style={styles.cardDescription}>
            Get notified when we launch our first products.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formRow}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  required
                  style={styles.input}
                />
                <button type="submit" style={styles.button}>
                  Subscribe
                </button>
              </div>
              <p style={styles.hint}>
                Join 0 others on the waitlist
              </p>
            </form>
          ) : (
            <div style={styles.success}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.successIcon}>
                <circle cx="12" cy="12" r="10" fill="#dcfce7"/>
                <path d="M8 12l2.5 2.5L16 9" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <p style={styles.successTitle}>You're subscribed!</p>
                <p style={styles.successText}>We'll send updates to your inbox.</p>
              </div>
            </div>
          )}
        </div>

        {/* Focus Areas */}
        <section style={styles.focusSection}>
          <h3 style={styles.sectionTitle}>Our Focus Areas</h3>
          <div style={styles.focusGrid}>
            <div style={styles.focusItem}>
              <div style={{ ...styles.focusIcon, background: '#dbeafe' }}>
                <span>📚</span>
              </div>
              <h4 style={styles.focusTitle}>Education</h4>
              <p style={styles.focusText}>
                Tools for parents and educators
              </p>
            </div>
            <div style={styles.focusItem}>
              <div style={{ ...styles.focusIcon, background: '#fce7f3' }}>
                <span>🏥</span>
              </div>
              <h4 style={styles.focusTitle}>Healthcare</h4>
              <p style={styles.focusText}>
                Solutions for better patient care
              </p>
            </div>
            <div style={styles.focusItem}>
              <div style={{ ...styles.focusIcon, background: '#d1fae5' }}>
                <span>🍳</span>
              </div>
              <h4 style={styles.focusTitle}>Consumer</h4>
              <p style={styles.focusText}>
                Apps that improve daily life
              </p>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section style={styles.trustSection}>
          <div style={styles.trustItem}>
            <span style={styles.trustLabel}>Based in</span>
            <span style={styles.trustValue}>New Jersey, USA</span>
          </div>
          <div style={styles.trustDivider} />
          <div style={styles.trustItem}>
            <span style={styles.trustLabel}>Structure</span>
            <span style={styles.trustValue}>LLC</span>
          </div>
          <div style={styles.trustDivider} />
          <div style={styles.trustItem}>
            <span style={styles.trustLabel}>Products</span>
            <span style={styles.trustValue}>4 in development</span>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Verata Ventures, LLC. All rights reserved.</p>
      </footer>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '24px 40px',
    borderBottom: '1px solid #e2e8f0',
    background: '#fff',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#0f172a',
  },
  logoIcon: {
    fontSize: '1.5rem',
    color: '#3b82f6',
  },
  container: {
    flex: 1,
    maxWidth: '720px',
    margin: '0 auto',
    padding: '60px 24px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  overline: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#3b82f6',
    marginBottom: '16px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#0f172a',
    lineHeight: '1.2',
    marginBottom: '20px',
    letterSpacing: '-0.02em',
  },
  description: {
    fontSize: '1.125rem',
    color: '#64748b',
    lineHeight: '1.7',
    maxWidth: '540px',
    margin: '0 auto',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
    marginBottom: '48px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: '8px',
  },
  cardDescription: {
    color: '#64748b',
    marginBottom: '24px',
  },
  form: {},
  formRow: {
    display: 'flex',
    gap: '12px',
  },
  input: {
    flex: 1,
    padding: '14px 16px',
    fontSize: '1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    padding: '14px 24px',
    fontSize: '1rem',
    fontWeight: '500',
    border: 'none',
    borderRadius: '8px',
    background: '#0f172a',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background 0.2s',
    whiteSpace: 'nowrap',
  },
  hint: {
    fontSize: '0.875rem',
    color: '#94a3b8',
    marginTop: '12px',
  },
  success: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    background: '#f0fdf4',
    borderRadius: '8px',
  },
  successIcon: {
    flexShrink: 0,
  },
  successTitle: {
    fontWeight: '500',
    color: '#166534',
    marginBottom: '2px',
  },
  successText: {
    fontSize: '0.875rem',
    color: '#16a34a',
  },
  focusSection: {
    marginBottom: '48px',
  },
  sectionTitle: {
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#64748b',
    marginBottom: '24px',
    textAlign: 'center',
  },
  focusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  focusItem: {
    textAlign: 'center',
  },
  focusIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    margin: '0 auto 16px',
  },
  focusTitle: {
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: '4px',
  },
  focusText: {
    fontSize: '0.875rem',
    color: '#64748b',
  },
  trustSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    padding: '24px',
    background: '#fff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  trustItem: {
    textAlign: 'center',
  },
  trustLabel: {
    display: 'block',
    fontSize: '0.75rem',
    color: '#94a3b8',
    marginBottom: '4px',
  },
  trustValue: {
    fontWeight: '500',
    color: '#0f172a',
  },
  trustDivider: {
    width: '1px',
    height: '32px',
    background: '#e2e8f0',
  },
  footer: {
    padding: '24px',
    textAlign: 'center',
    borderTop: '1px solid #e2e8f0',
    background: '#fff',
    color: '#64748b',
    fontSize: '0.875rem',
  },
}
