'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * OPTION 5: Founder-Led Story
 *
 * Design Philosophy:
 * - Personal, authentic approach
 * - Founder story and values
 * - Warm, inviting design
 * - Builds trust through transparency
 * - Human-centered narrative
 *
 * Best for: Building personal brand and authentic connection
 * Uses founder's voice to create emotional connection with audience
 */

export default function Option5() {
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

  return (
    <main style={styles.main}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Verata Ventures</div>
          <Link href="/landing-options" style={styles.backLink}>
            ← Back to Options
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <div style={styles.greeting}>Hi, I'm building Verata Ventures 👋</div>
            <h1 style={styles.heroTitle}>
              Creating software that solves problems I care about
            </h1>
            <p style={styles.heroText}>
              I'm a software engineer who believes technology should make people's lives genuinely better.
              That's why I'm building a portfolio of products that tackle real challenges—from helping families
              plan healthy meals to supporting parents navigating special education.
            </p>
            <p style={styles.heroText}>
              Each product starts with a simple question: <em>What if we could make this easier?</em>
            </p>
          </div>

          <div style={styles.heroImage}>
            <div style={styles.imagePlaceholder}>
              <div style={styles.imageIcon}>👨‍💻</div>
              <div style={styles.imageCaption}>Founder Photo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Build Section */}
      <section style={styles.whySection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why We Build</h2>

          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <div style={styles.valueIcon}>🎯</div>
              <h3 style={styles.valueTitle}>Real Problems</h3>
              <p style={styles.valueText}>
                We only build products that solve problems we understand deeply. No vanity metrics,
                no chasing trends—just software that genuinely helps people.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.valueIcon}>🤝</div>
              <h3 style={styles.valueTitle}>User-First</h3>
              <p style={styles.valueText}>
                Every decision starts with the user. What do they actually need? How can we make
                their lives easier? Simple questions that guide everything we do.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.valueIcon}>🚀</div>
              <h3 style={styles.valueTitle}>Build & Learn</h3>
              <p style={styles.valueText}>
                We ship early, learn fast, and iterate constantly. Perfect is the enemy of good,
                and real users teach us more than any amount of planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section style={styles.journeySection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>The Journey So Far</h2>
          <p style={styles.sectionSubtitle}>
            From idea to reality—here's where we are
          </p>

          <div style={styles.timeline}>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Early 2025</div>
                <div style={styles.timelineTitle}>The Beginning</div>
                <div style={styles.timelineText}>
                  Started with a simple idea: what if I could build multiple products that
                  solve problems I care about? Committed to building in public.
                </div>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Q3 2025</div>
                <div style={styles.timelineTitle}>First Products</div>
                <div style={styles.timelineText}>
                  Started building four products: Culinova (meal planning), IEP Copilot (parent advocacy),
                  Rare Disease Navigator (healthcare navigation), and EMR Platform (mental health records).
                </div>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Late 2025</div>
                <div style={styles.timelineTitle}>Beta Testing</div>
                <div style={styles.timelineText}>
                  Working with early users to refine each product. Learning what works,
                  what doesn't, and what really matters to people.
                </div>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={{...styles.timelineDot, background: '#fbbf24'}}></div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineDate}>Q1-Q2 2026</div>
                <div style={styles.timelineTitle}>First Launches</div>
                <div style={styles.timelineText}>
                  Launching our first products to the public. This is just the beginning—
                  we'll keep building and improving based on what we learn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section style={styles.productsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What We're Building</h2>
          <p style={styles.sectionSubtitle}>
            Four products, each solving a different problem
          </p>

          <div style={styles.productsList}>
            <div style={styles.productItem}>
              <div style={styles.productEmoji}>🍳</div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>Culinova</h3>
                <p style={styles.productDesc}>
                  AI-powered meal planning for busy families. Because dinner shouldn't be stressful.
                </p>
              </div>
            </div>

            <div style={styles.productItem}>
              <div style={styles.productEmoji}>📚</div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>IEP Copilot</h3>
                <p style={styles.productDesc}>
                  Helping parents understand and advocate for their children's education plans.
                </p>
              </div>
            </div>

            <div style={styles.productItem}>
              <div style={styles.productEmoji}>🏥</div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>Rare Disease Navigator</h3>
                <p style={styles.productDesc}>
                  Finding expert doctors and clinical trials for rare disease families.
                </p>
              </div>
            </div>

            <div style={styles.productItem}>
              <div style={styles.productEmoji}>🧠</div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>EMR Platform</h3>
                <p style={styles.productDesc}>
                  Modern electronic health records for mental health clinicians.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Join the Journey</h2>
          <p style={styles.ctaText}>
            I send occasional updates on what we're building, lessons learned, and when products launch.
            No spam, just honest updates from someone building in public.
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
              <p>Thanks for joining! I'll keep you posted on our progress.</p>
            </div>
          )}

          <p style={styles.ctaFootnote}>
            You can unsubscribe anytime. I respect your inbox.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>&copy; {new Date().getFullYear()} Verata Ventures, LLC</p>
          <p style={styles.footerLocation}>Built with care in New Jersey 🌳</p>
        </div>
      </footer>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: '#fffbeb',
  },
  nav: {
    padding: '24px 0',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(251, 191, 36, 0.2)',
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
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#78350f',
  },
  backLink: {
    fontSize: '0.875rem',
    color: '#92400e',
    textDecoration: 'none',
  },
  hero: {
    padding: '80px 20px',
  },
  heroContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  heroContent: {},
  greeting: {
    fontSize: '1.125rem',
    color: '#92400e',
    marginBottom: '16px',
    fontWeight: '500',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#78350f',
    letterSpacing: '-0.02em',
    marginBottom: '24px',
    lineHeight: '1.2',
  },
  heroText: {
    fontSize: '1.125rem',
    color: '#92400e',
    lineHeight: '1.8',
    marginBottom: '16px',
  },
  heroImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '280px',
    height: '280px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #fbbf24',
  },
  imageIcon: {
    fontSize: '5rem',
    marginBottom: '16px',
  },
  imageCaption: {
    fontSize: '0.875rem',
    color: '#92400e',
    fontWeight: '500',
  },
  whySection: {
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
    color: '#78350f',
    textAlign: 'center',
    marginBottom: '16px',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    color: '#92400e',
    textAlign: 'center',
    marginBottom: '60px',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
  },
  valueCard: {
    padding: '32px',
    background: '#fffbeb',
    borderRadius: '16px',
    border: '2px solid #fde68a',
  },
  valueIcon: {
    fontSize: '2.5rem',
    marginBottom: '16px',
  },
  valueTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#78350f',
    marginBottom: '12px',
  },
  valueText: {
    fontSize: '1rem',
    color: '#92400e',
    lineHeight: '1.7',
  },
  journeySection: {
    padding: '80px 20px',
    background: '#fffbeb',
  },
  timeline: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
  },
  timelineItem: {
    display: 'flex',
    gap: '24px',
    marginBottom: '40px',
    position: 'relative',
  },
  timelineDot: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: '#fbbf24',
    marginTop: '4px',
    flexShrink: 0,
    zIndex: 1,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: '20px',
    borderLeft: '2px solid #fde68a',
    paddingLeft: '24px',
    marginLeft: '7px',
  },
  timelineDate: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#d97706',
    marginBottom: '8px',
  },
  timelineTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#78350f',
    marginBottom: '8px',
  },
  timelineText: {
    fontSize: '1rem',
    color: '#92400e',
    lineHeight: '1.7',
  },
  productsSection: {
    padding: '80px 20px',
    background: '#fff',
  },
  productsList: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  productItem: {
    display: 'flex',
    gap: '20px',
    padding: '24px',
    background: '#fffbeb',
    borderRadius: '12px',
    border: '1px solid #fde68a',
  },
  productEmoji: {
    fontSize: '2rem',
    flexShrink: 0,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#78350f',
    marginBottom: '8px',
  },
  productDesc: {
    fontSize: '1rem',
    color: '#92400e',
    lineHeight: '1.6',
  },
  ctaSection: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)',
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
  ctaText: {
    fontSize: '1.125rem',
    color: '#fde68a',
    marginBottom: '40px',
    lineHeight: '1.7',
  },
  ctaForm: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',
  },
  ctaInput: {
    flex: 1,
    padding: '16px 20px',
    fontSize: '1rem',
    border: '2px solid #d97706',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    outline: 'none',
  },
  ctaButton: {
    padding: '16px 32px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    background: '#fbbf24',
    color: '#78350f',
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
    marginBottom: '16px',
  },
  checkmark: {
    color: '#4ade80',
    fontSize: '1.5rem',
  },
  ctaFootnote: {
    fontSize: '0.875rem',
    color: '#fde68a',
  },
  footer: {
    padding: '40px 20px',
    borderTop: '2px solid #fde68a',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#92400e',
    background: '#fffbeb',
  },
  footerLocation: {
    marginTop: '8px',
    fontSize: '0.8125rem',
  },
}
