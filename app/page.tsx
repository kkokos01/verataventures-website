'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)
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

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* Logo/Brand Mark */}
        <div style={styles.logoMark}>V</div>

        {/* Main Content */}
        <h1 style={styles.title}>Verata Ventures</h1>

        <div style={styles.divider} />

        <p style={styles.tagline}>
          Building software that matters
        </p>

        <p style={styles.description}>
          We create thoughtful software products that solve real problems.
          <br />
          Our first ventures are launching soon.
        </p>

        {/* Email Capture */}
        {!submitted ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={{
              ...styles.inputWrapper,
              borderColor: focused ? '#000' : '#e5e7eb',
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="your@email.com"
                required
                style={styles.input}
              />
              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? 'Sending...' : 'Get Updates'}
              </button>
            </div>
            {error && <p style={styles.error}>{error}</p>}
            <p style={styles.privacy}>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div style={styles.successMessage}>
            <span style={styles.checkmark}>✓</span>
            <p>You're on the list. We'll be in touch.</p>
          </div>
        )}

        {/* Footer */}
        <footer style={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Verata Ventures, LLC</p>
          <p style={styles.location}>New Jersey, USA</p>
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
    background: '#fafafa',
    padding: '40px 20px',
  },
  container: {
    textAlign: 'center',
    maxWidth: '480px',
  },
  logoMark: {
    width: '60px',
    height: '60px',
    margin: '0 auto 40px',
    background: '#000',
    color: '#fff',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: '600',
    letterSpacing: '-0.02em',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '300',
    color: '#111',
    letterSpacing: '-0.03em',
    marginBottom: '16px',
  },
  divider: {
    width: '40px',
    height: '1px',
    background: '#000',
    margin: '0 auto 24px',
  },
  tagline: {
    fontSize: '1.125rem',
    color: '#666',
    fontWeight: '400',
    marginBottom: '16px',
  },
  description: {
    fontSize: '0.9375rem',
    color: '#888',
    lineHeight: '1.7',
    marginBottom: '40px',
  },
  form: {
    marginBottom: '60px',
  },
  inputWrapper: {
    display: 'flex',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden',
    background: '#fff',
    transition: 'border-color 0.2s',
  },
  input: {
    flex: 1,
    padding: '16px 20px',
    fontSize: '0.9375rem',
    border: 'none',
    outline: 'none',
    background: 'transparent',
  },
  button: {
    padding: '16px 24px',
    fontSize: '0.9375rem',
    fontWeight: '500',
    border: 'none',
    background: '#000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  privacy: {
    fontSize: '0.8125rem',
    color: '#999',
    marginTop: '12px',
  },
  error: {
    fontSize: '0.875rem',
    color: '#ef4444',
    marginTop: '12px',
  },
  successMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '60px',
    color: '#111',
  },
  checkmark: {
    color: '#22c55e',
    fontSize: '1.25rem',
  },
  footer: {
    fontSize: '0.8125rem',
    color: '#999',
  },
  location: {
    marginTop: '4px',
    fontSize: '0.75rem',
  },
}
