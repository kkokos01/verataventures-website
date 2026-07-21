'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * OPTION 4: Portfolio Showcase
 *
 * Design Philosophy:
 * - Venture studio identity (we build multiple products)
 * - Product-focused with visual cards
 * - Progress indicators and launch timelines
 * - Professional but approachable
 * - Shows capability across verticals
 *
 * Best for: Attracting partners, investors, or talent
 * Demonstrates capability and transparency about what you're building
 */

export default function Option4() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Subscription error:', error)
    }
  }

  const products = [
    {
      name: 'Culinova',
      tagline: 'AI-Powered Recipe Platform',
      description: 'Smart meal planning and recipe generation for busy families. AI creates personalized recipes, manages pantry inventory, and builds weekly meal plans.',
      status: 'In Development',
      progress: 85,
      gradient: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
      icon: '🍳',
      targetAudience: 'Home cooks & families',
      launchDate: 'Q1 2026',
    },
    {
      name: 'IEP Copilot',
      tagline: 'Parent Advocacy Platform',
      description: 'AI-powered IEP document analysis for parents. Upload IEP documents, get plain-English summaries, and receive advocacy guidance.',
      status: 'In Development',
      progress: 75,
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
      icon: '📚',
      targetAudience: 'Parents of special needs children',
      launchDate: 'Q1 2026',
    },
    {
      name: 'Rare Disease Navigator',
      tagline: 'Healthcare Navigation',
      description: 'Find expert doctors, match clinical trials, and organize medical records for rare disease families. AI-powered research tools and alerts.',
      status: 'In Development',
      progress: 70,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      icon: '🏥',
      targetAudience: 'Rare disease families',
      launchDate: 'Q2 2026',
    },
    {
      name: 'EMR Platform',
      tagline: 'Mental Health EHR',
      description: 'AI-native electronic health records for mental health practices. Voice-to-SOAP notes, automated billing, and patient management.',
      status: 'In Development',
      progress: 65,
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      icon: '🧠',
      targetAudience: 'Mental health clinicians',
      launchDate: 'Q2 2026',
    },
  ]

  return (
    <main style={styles.main}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            <span style={styles.logoText}>Verata Ventures</span>
          </div>
          <Link href="/landing-options" style={styles.backLink}>
            ← Back to Options
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div style={styles.badge}>Venture Studio</div>
          <h1 style={styles.heroTitle}>
            Building software that solves real problems
          </h1>
          <p style={styles.heroSubtitle}>
            We're a venture studio creating AI-powered products across healthcare, education, and consumer tech.
            Our first four ventures are launching in 2026.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.productsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Ventures</h2>
          <p style={styles.sectionSubtitle}>
            Four products in active development, each solving a unique problem
          </p>

          <div style={styles.productsGrid}>
            {products.map((product, index) => (
              <div key={index} style={styles.productCard}>
                <div style={{
                  ...styles.productHeader,
                  background: product.gradient,
                }}>
                  <span style={styles.productIcon}>{product.icon}</span>
                </div>

                <div style={styles.productContent}>
                  <div style={styles.productStatus}>
                    <span style={styles.statusDot}></span>
                    {product.status}
                  </div>

                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productTagline}>{product.tagline}</p>
                  <p style={styles.productDescription}>{product.description}</p>

                  <div style={styles.productMeta}>
                    <div style={styles.metaItem}>
                      <span style={styles.metaLabel}>Target:</span>
                      <span style={styles.metaValue}>{product.targetAudience}</span>
                    </div>
                    <div style={styles.metaItem}>
                      <span style={styles.metaLabel}>Launch:</span>
                      <span style={styles.metaValue}>{product.launchDate}</span>
                    </div>
                  </div>

                  <div style={styles.progressBar}>
                    <div style={{
                      ...styles.progressFill,
                      width: `${product.progress}%`,
                      background: product.gradient,
                    }}></div>
                  </div>
                  <p style={styles.progressLabel}>{product.progress}% Complete</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Stay Updated</h2>
          <p style={styles.ctaSubtitle}>
            Be the first to know when our products launch. We'll send occasional updates on our progress.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={styles.ctaForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={styles.ctaInput}
              />
              <button type="submit" style={styles.ctaButton}>
                Get Updates
              </button>
            </form>
          ) : (
            <div style={styles.successMessage}>
              <span style={styles.checkmark}>✓</span>
              <p>Thanks! We'll keep you posted on our progress.</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <div style={styles.container}>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutContent}>
              <h2 style={styles.aboutTitle}>About Verata Ventures</h2>
              <p style={styles.aboutText}>
                We're a venture studio focused on building AI-powered software that solves meaningful problems.
                Our approach is simple: identify underserved markets, build great products, and create lasting value.
              </p>
              <p style={styles.aboutText}>
                Each venture operates independently but benefits from shared infrastructure, AI capabilities,
                and a proven development methodology.
              </p>
            </div>

            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>4</div>
                <div style={styles.statLabel}>Ventures</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>2026</div>
                <div style={styles.statLabel}>First Launches</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>3</div>
                <div style={styles.statLabel}>Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>&copy; {new Date().getFullYear()} Verata Ventures, LLC • New Jersey, USA</p>
        </div>
      </footer>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: '#fff',
  },
  nav: {
    borderBottom: '1px solid #e5e7eb',
    padding: '20px 0',
    background: '#fff',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111',
  },
  backLink: {
    fontSize: '0.875rem',
    color: '#6b7280',
    textDecoration: 'none',
  },
  hero: {
    padding: '80px 20px',
    background: 'linear-gradient(to bottom, #fff 0%, #f9fafb 100%)',
  },
  heroContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  badge: {
    display: 'inline-block',
    padding: '8px 16px',
    background: '#f3f4f6',
    borderRadius: '24px',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '24px',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#111',
    letterSpacing: '-0.03em',
    marginBottom: '24px',
    lineHeight: '1.1',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
    lineHeight: '1.7',
    maxWidth: '680px',
    margin: '0 auto',
  },
  productsSection: {
    padding: '80px 20px',
    background: '#fff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: '12px',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '60px',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
  },
  productCard: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
    transition: 'all 0.3s',
  },
  productHeader: {
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productIcon: {
    fontSize: '3rem',
  },
  productContent: {
    padding: '24px',
  },
  productStatus: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 12px',
    background: '#f0fdf4',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#16a34a',
    marginBottom: '16px',
  },
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#22c55e',
  },
  productName: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#111',
    marginBottom: '4px',
  },
  productTagline: {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500',
    marginBottom: '12px',
  },
  productDescription: {
    fontSize: '0.9375rem',
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  productMeta: {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #f3f4f6',
  },
  metaItem: {
    flex: 1,
  },
  metaLabel: {
    display: 'block',
    fontSize: '0.75rem',
    color: '#9ca3af',
    marginBottom: '4px',
    fontWeight: '500',
  },
  metaValue: {
    display: 'block',
    fontSize: '0.875rem',
    color: '#111',
    fontWeight: '500',
  },
  progressBar: {
    width: '100%',
    height: '6px',
    background: '#f3f4f6',
    borderRadius: '3px',
    overflow: 'hidden',
    marginBottom: '8px',
  },
  progressFill: {
    height: '100%',
    transition: 'width 0.3s',
  },
  progressLabel: {
    fontSize: '0.8125rem',
    color: '#6b7280',
    textAlign: 'right',
  },
  ctaSection: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #111 0%, #374151 100%)',
  },
  ctaContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '16px',
  },
  ctaSubtitle: {
    fontSize: '1.125rem',
    color: '#d1d5db',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  ctaForm: {
    display: 'flex',
    gap: '12px',
    maxWidth: '480px',
    margin: '0 auto',
  },
  ctaInput: {
    flex: 1,
    padding: '16px 20px',
    fontSize: '1rem',
    border: '2px solid #4b5563',
    borderRadius: '8px',
    background: '#1f2937',
    color: '#fff',
    outline: 'none',
  },
  ctaButton: {
    padding: '16px 32px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    background: '#fff',
    color: '#111',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  successMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    color: '#fff',
    fontSize: '1.125rem',
  },
  checkmark: {
    color: '#22c55e',
    fontSize: '1.5rem',
  },
  aboutSection: {
    padding: '80px 20px',
    background: '#f9fafb',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '60px',
    alignItems: 'center',
  },
  aboutContent: {},
  aboutTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111',
    marginBottom: '24px',
  },
  aboutText: {
    fontSize: '1rem',
    color: '#374151',
    lineHeight: '1.7',
    marginBottom: '16px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  statCard: {
    textAlign: 'center',
    padding: '24px',
    background: '#fff',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#111',
    marginBottom: '8px',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  footer: {
    padding: '40px 20px',
    borderTop: '1px solid #e5e7eb',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#6b7280',
  },
}
