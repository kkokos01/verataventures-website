'use client'

import { useState } from 'react'

export default function Option2() {
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
    { name: 'Culinova', description: 'AI-powered meal planning for families', icon: '🍳', status: 'Beta', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { name: 'IEP Copilot', description: 'Parent advocacy platform for special education', icon: '📚', status: 'Beta', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { name: 'Rare Disease Navigator', description: 'Healthcare navigation for rare diseases', icon: '🏥', status: 'Development', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { name: 'EMR Platform', description: 'Mental health practice management', icon: '🧠', status: 'Development', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
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
          <h1 style={styles.heroTitle}>Transforming Healthcare & Education with AI Innovation</h1>
          <p style={styles.heroSubtitle}>
            A next-generation venture studio building breakthrough products that empower people and organizations.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What We Do</h2>
          <p style={styles.sectionText}>
            Verata Ventures combines cutting-edge AI technology with deep industry insight to launch transformative products.
            We move fast, think big, and build solutions that create meaningful change in healthcare and education sectors.
            Our innovation-first approach delivers tools that don't just work—they inspire.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.productsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Products</h2>
          <div style={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.name} style={{...styles.productCard, background: product.gradient}}>
                <div style={styles.cardGlass}>
                  <div style={styles.productIcon}>{product.icon}</div>
                  <div style={styles.productBadge}>{product.status}</div>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productDescription}>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.container}>
          <h2 style={styles.contactTitle}>Get in Touch</h2>
          <p style={styles.contactText}>
            Ready to explore the future of AI-powered solutions?
          </p>

          {!submitted ? (
            <>
              <div style={styles.contactMethods}>
                <a href="mailto:info@verataventures.com" style={styles.contactButton}>
                  Let's Talk
                </a>
              </div>

              <div style={styles.divider}>
                <span style={styles.dividerText}>or</span>
              </div>

              <div style={styles.emailSignup}>
                <p style={styles.signupText}>Join our innovation journey:</p>
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
                    {loading ? 'Joining...' : 'Subscribe'}
                  </button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
              </div>
            </>
          ) : (
            <div style={styles.successMessage}>
              <span style={styles.checkmark}>✓</span>
              <p>Welcome aboard! Get ready for exciting updates.</p>
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
    background: 'linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    color: '#fff',
  },
  header: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  backLink: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  hero: {
    padding: '100px 20px',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.03em',
    marginBottom: '24px',
    lineHeight: '1.1',
  },
  heroSubtitle: {
    fontSize: '1.35rem',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.6',
    fontWeight: '400',
  },
  section: {
    padding: '80px 20px',
  },
  productsSection: {
    padding: '80px 20px',
    background: 'rgba(0, 0, 0, 0.2)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '24px',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.8',
    textAlign: 'center',
    maxWidth: '850px',
    margin: '0 auto',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '32px',
    marginTop: '50px',
  },
  productCard: {
    borderRadius: '20px',
    padding: '2px',
    position: 'relative',
  },
  cardGlass: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '18px',
    padding: '36px 28px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  productIcon: {
    fontSize: '3.5rem',
    marginBottom: '16px',
  },
  productBadge: {
    display: 'inline-block',
    padding: '6px 16px',
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  productName: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '12px',
  },
  productDescription: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.6',
  },
  contactSection: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
  },
  contactTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '16px',
    textAlign: 'center',
  },
  contactText: {
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: '50px',
  },
  contactMethods: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '35px',
  },
  contactButton: {
    padding: '18px 50px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
  },
  divider: {
    textAlign: 'center',
    position: 'relative',
    margin: '35px 0',
  },
  dividerText: {
    padding: '0 20px',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '0.9rem',
    position: 'relative',
    zIndex: 1,
  },
  emailSignup: {
    maxWidth: '550px',
    margin: '0 auto',
  },
  signupText: {
    fontSize: '1.05rem',
    color: 'rgba(255, 255, 255, 0.9)',
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
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    backdropFilter: 'blur(10px)',
  },
  submitButton: {
    padding: '16px 36px',
    fontSize: '1rem',
    fontWeight: '700',
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  error: {
    fontSize: '0.9rem',
    color: '#ff6b6b',
    marginTop: '12px',
    textAlign: 'center',
  },
  successMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    color: '#fff',
    fontSize: '1.2rem',
    padding: '20px',
  },
  checkmark: {
    color: '#4ade80',
    fontSize: '1.8rem',
  },
  footer: {
    padding: '50px 20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  footerLocation: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.4)',
    marginTop: '8px',
  },
}
