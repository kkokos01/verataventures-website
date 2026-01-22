'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to your email service (e.g., Resend, ConvertKit)
    console.log('Email submitted:', email)
    setSubmitted(true)
  }

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>Verata Ventures</h1>
        <p style={styles.subtitle}>Something exciting is coming</p>

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
              Notify Me
            </button>
          </form>
        ) : (
          <p style={styles.thanks}>Thanks! We'll be in touch.</p>
        )}

        <p style={styles.footer}>
          &copy; {new Date().getFullYear()} Verata Ventures, LLC
        </p>
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
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    padding: '20px',
  },
  container: {
    textAlign: 'center',
    color: '#ffffff',
    maxWidth: '500px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#94a3b8',
    marginBottom: '2.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '320px',
    margin: '0 auto',
  },
  input: {
    padding: '14px 18px',
    fontSize: '1rem',
    border: '1px solid #334155',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#ffffff',
    outline: 'none',
  },
  button: {
    padding: '14px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    background: '#3b82f6',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  thanks: {
    fontSize: '1.1rem',
    color: '#22c55e',
    marginBottom: '2rem',
  },
  footer: {
    marginTop: '3rem',
    fontSize: '0.875rem',
    color: '#64748b',
  },
}
