'use client'

import { useState } from 'react'

export default function Option5() {
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
          <h1 style={styles.heroTitle}>We're building software that helps real people solve real problems</h1>
          <p style={styles.heroSubtitle}>
            Hi there! We're a small team passionate about creating AI tools that make a genuine difference in healthcare
            and education. No corporate speak—just honest work on problems we care about.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What We're All About</h2>
          <p style={styles.sectionText}>
            Here's the deal: we noticed that some of the biggest challenges people face—managing family meals,
            navigating special education, dealing with rare diseases, running a therapy practice—don't get the
            tech attention they deserve. So we decided to do something about it. We're building practical,
            AI-powered tools that actually help. No fluff, just useful software made by people who get it.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.productsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What We're Building</h2>
          <p style={styles.productsIntro}>
            Each of these started from a real conversation with someone facing a tough problem.
            Here's where we're at with each one:
          </p>
          <div style={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.name} style={styles.productCard}>
                <div style={styles.productHeader}>
                  <div style={styles.productIcon}>{product.icon}</div>
                  <div style={styles.productBadge}>{product.status}</div>
                </div>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
                {product.status === 'Beta' && (
                  <p style={styles.betaNote}>Already helping early users!</p>
                )}
                {product.status === 'Development' && (
                  <p style={styles.devNote}>Coming together nicely</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Let's Chat</h2>
          <p style={styles.contactText}>
            Curious about what we're building? Have ideas? Just want to say hi? We'd love to hear from you.
          </p>

          {!submitted ? (
            <>
              <div style={styles.contactMethods}>
                <a href="mailto:info@verataventures.com" style={styles.contactButton}>
                  Drop Us a Line
                </a>
              </div>

              <div style={styles.divider}>
                <span style={styles.dividerText}>or</span>
              </div>

              <div style={styles.emailSignup}>
                <p style={styles.signupText}>Want to follow along with what we're building?</p>
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
                    {loading ? 'Adding you...' : 'Count Me In'}
                  </button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
                <p style={styles.formNote}>We'll send occasional updates—nothing spammy, promise.</p>
              </div>
            </>
          ) : (
            <div style={styles.successMessage}>
              <span style={styles.checkmark}>✓</span>
              <p>Awesome! Thanks for joining us on this journey.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={styles.footerText}>© {new Date().getFullYear()} Verata Ventures, LLC</p>
          <p style={styles.footerLocation}>Made with care in New Jersey, USA</p>
        </div>
      </footer>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: '#fffbf5',
  },
  header: {
    background: '#fff9f0',
    padding: '20px 0',
    borderBottom: '2px solid #fed7aa',
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
    color: '#c2410c',
  },
  backLink: {
    fontSize: '0.9rem',
    color: '#ea580c',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  hero: {
    padding: '80px 20px',
    background: 'linear-gradient(to bottom, #fff9f0 0%, #ffedd5 100%)',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '850px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '2.75rem',
    fontWeight: '700',
    color: '#7c2d12',
    lineHeight: '1.3',
    marginBottom: '24px',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#9a3412',
    lineHeight: '1.8',
  },
  section: {
    padding: '70px 20px',
    background: '#fff',
  },
  productsSection: {
    padding: '70px 20px',
    background: '#fffbf5',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#7c2d12',
    marginBottom: '20px',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: '1.15rem',
    color: '#78350f',
    lineHeight: '1.8',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  productsIntro: {
    fontSize: '1.05rem',
    color: '#92400e',
    lineHeight: '1.7',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 50px',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '28px',
  },
  productCard: {
    padding: '32px 28px',
    background: '#fff',
    borderRadius: '16px',
    border: '2px solid #fed7aa',
    boxShadow: '0 4px 12px rgba(194, 65, 12, 0.08)',
  },
  productHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  productIcon: {
    fontSize: '3rem',
  },
  productBadge: {
    padding: '6px 14px',
    background: '#ffedd5',
    color: '#c2410c',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '700',
  },
  productName: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#7c2d12',
    marginBottom: '10px',
  },
  productDescription: {
    fontSize: '1rem',
    color: '#92400e',
    lineHeight: '1.6',
    marginBottom: '12px',
  },
  betaNote: {
    fontSize: '0.9rem',
    color: '#ea580c',
    fontStyle: 'italic',
    marginTop: '8px',
  },
  devNote: {
    fontSize: '0.9rem',
    color: '#f97316',
    fontStyle: 'italic',
    marginTop: '8px',
  },
  contactSection: {
    padding: '70px 20px',
    background: '#fff9f0',
  },
  contactText: {
    fontSize: '1.15rem',
    color: '#92400e',
    textAlign: 'center',
    marginBottom: '45px',
  },
  contactMethods: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '35px',
  },
  contactButton: {
    padding: '18px 44px',
    background: '#ea580c',
    color: '#fff',
    borderRadius: '12px',
    fontSize: '1.05rem',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.2s',
    boxShadow: '0 4px 14px rgba(234, 88, 12, 0.25)',
  },
  divider: {
    textAlign: 'center',
    position: 'relative',
    margin: '35px 0',
  },
  dividerText: {
    padding: '0 16px',
    background: '#fff9f0',
    color: '#fdba74',
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
    color: '#78350f',
    textAlign: 'center',
    marginBottom: '16px',
  },
  form: {
    display: 'flex',
    gap: '12px',
    marginBottom: '12px',
  },
  input: {
    flex: 1,
    padding: '16px 20px',
    fontSize: '1rem',
    border: '2px solid #fed7aa',
    borderRadius: '10px',
    outline: 'none',
    background: '#fff',
  },
  submitButton: {
    padding: '16px 32px',
    fontSize: '1rem',
    fontWeight: '700',
    border: 'none',
    background: '#ea580c',
    color: '#fff',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  },
  formNote: {
    fontSize: '0.85rem',
    color: '#c2410c',
    textAlign: 'center',
    fontStyle: 'italic',
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
    color: '#7c2d12',
    fontSize: '1.15rem',
    padding: '20px',
  },
  checkmark: {
    color: '#16a34a',
    fontSize: '1.6rem',
  },
  footer: {
    padding: '50px 20px',
    borderTop: '2px solid #fed7aa',
    textAlign: 'center',
    background: '#fff',
  },
  footerText: {
    fontSize: '0.9rem',
    color: '#92400e',
  },
  footerLocation: {
    fontSize: '0.85rem',
    color: '#c2410c',
    marginTop: '8px',
  },
}
