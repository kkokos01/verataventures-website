'use client'

import { useState } from 'react'

/**
 * OPTION 2: Bold Startup Energy
 *
 * Design Philosophy:
 * - Dynamic gradient backgrounds
 * - Bold typography
 * - Modern, energetic feel
 * - Glassmorphism effects
 *
 * Best for: Positioning as an innovative, forward-thinking venture builder
 */

export default function Option2() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setSubmitted(true)
  }

  return (
    <main style={styles.main}>
      {/* Animated gradient orbs (static for now, can add CSS animation) */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.container}>
        {/* Badge */}
        <div style={styles.badge}>
          <span style={styles.badgeDot} />
          Launching 2025
        </div>

        {/* Main Content */}
        <h1 style={styles.title}>
          Verata<br />
          <span style={styles.titleAccent}>Ventures</span>
        </h1>

        <p style={styles.tagline}>
          We build software products that<br />
          <strong>change how people work and live.</strong>
        </p>

        {/* Product Hints */}
        <div style={styles.productHints}>
          <span style={styles.productTag}>Education Tech</span>
          <span style={styles.productTag}>Consumer Apps</span>
          <span style={styles.productTag}>Healthcare</span>
        </div>

        {/* Email Capture */}
        {!submitted ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Join the Waitlist
              <span style={styles.arrow}>→</span>
            </button>
          </form>
        ) : (
          <div style={styles.successCard}>
            <div style={styles.successIcon}>🚀</div>
            <h3 style={styles.successTitle}>You're in!</h3>
            <p style={styles.successText}>
              We'll let you know when we launch.
            </p>
          </div>
        )}

        {/* Stats/Social Proof */}
        <div style={styles.stats}>
          <div style={styles.stat}>
            <span style={styles.statNumber}>4</span>
            <span style={styles.statLabel}>Products in Development</span>
          </div>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          &copy; {new Date().getFullYear()} Verata Ventures, LLC
        </footer>
      </div>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b4e 100%)',
    padding: '40px 20px',
    position: 'relative',
    overflow: 'hidden',
  },
  orb1: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
    top: '-100px',
    right: '-100px',
    filter: 'blur(60px)',
  },
  orb2: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
    bottom: '-50px',
    left: '-50px',
    filter: 'blur(60px)',
  },
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    position: 'relative',
    zIndex: 1,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '100px',
    color: '#a5b4fc',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '32px',
    backdropFilter: 'blur(10px)',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22c55e',
    animation: 'pulse 2s infinite',
  },
  title: {
    fontSize: '4rem',
    fontWeight: '700',
    color: '#fff',
    lineHeight: '1.1',
    marginBottom: '24px',
    letterSpacing: '-0.03em',
  },
  titleAccent: {
    background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  tagline: {
    fontSize: '1.25rem',
    color: '#94a3b8',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  productHints: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  productTag: {
    padding: '6px 14px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '100px',
    color: '#cbd5e1',
    fontSize: '0.8125rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '360px',
    margin: '0 auto 48px',
  },
  input: {
    padding: '18px 24px',
    fontSize: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    outline: 'none',
    backdropFilter: 'blur(10px)',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '18px 32px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  arrow: {
    fontSize: '1.25rem',
  },
  successCard: {
    padding: '32px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    marginBottom: '48px',
    maxWidth: '360px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  successIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
  },
  successTitle: {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '8px',
  },
  successText: {
    color: '#94a3b8',
  },
  stats: {
    marginBottom: '48px',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#fff',
  },
  statLabel: {
    color: '#64748b',
    fontSize: '0.875rem',
  },
  footer: {
    color: '#475569',
    fontSize: '0.875rem',
  },
}
