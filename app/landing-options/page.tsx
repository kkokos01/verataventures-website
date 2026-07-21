'use client'

import Link from 'next/link'

export default function LandingOptionsIndex() {
  const options = [
    {
      id: 'option-1',
      name: 'Option 1: Minimal & Elegant',
      description: 'Ultra-clean design with premium feel. Perfect for positioning as a sophisticated, professional venture studio.',
      features: ['Lots of white space', 'Typography-focused', 'Subtle animations', 'Minimal branding'],
      bestFor: 'Premium/professional positioning',
      color: '#fafafa',
    },
    {
      id: 'option-2',
      name: 'Option 2: Bold Startup Energy',
      description: 'Dynamic gradients and modern glassmorphism. Shows innovation and forward-thinking approach.',
      features: ['Gradient backgrounds', 'Bold typography', 'Glassmorphism effects', 'Energetic feel'],
      bestFor: 'Innovation-focused, tech-forward image',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 'option-3',
      name: 'Option 3: Professional & Trust-Building',
      description: 'Clean corporate design with trust indicators. Establishes credibility with enterprise clients.',
      features: ['Professional layout', 'Trust indicators', 'Focus areas showcase', 'Social proof'],
      bestFor: 'Enterprise/healthcare verticals',
      color: '#f8fafc',
    },
    {
      id: 'option-4',
      name: 'Option 4: Portfolio Showcase',
      description: 'Venture studio identity with product portfolio. Demonstrates capability across multiple verticals.',
      features: ['Product cards', 'Progress indicators', 'Visual portfolio', 'Multi-product focus'],
      bestFor: 'Attracting partners, investors, or talent',
      color: '#ffffff',
    },
    {
      id: 'option-5',
      name: 'Option 5: Founder-Led Story',
      description: 'Personal, authentic approach with founder story. Builds connection and trust through transparency.',
      features: ['Founder photo', 'Personal narrative', 'Values-driven', 'Authentic voice'],
      bestFor: 'Building personal brand and authentic connection',
      color: '#fffbeb',
    },
  ]

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <Link href="/" style={styles.backLink}>
            ← Back to Current Site
          </Link>
          <h1 style={styles.title}>Landing Page Options</h1>
          <p style={styles.subtitle}>
            5 distinct design and messaging approaches for Verata Ventures
          </p>
        </header>

        {/* Options Grid */}
        <div style={styles.grid}>
          {options.map((option) => (
            <Link
              key={option.id}
              href={`/landing-options/${option.id}`}
              style={styles.cardLink}
            >
              <div style={styles.card}>
                <div
                  style={{
                    ...styles.preview,
                    background: option.color,
                  }}
                >
                  <span style={styles.previewText}>Preview</span>
                </div>

                <div style={styles.cardContent}>
                  <h2 style={styles.cardTitle}>{option.name}</h2>
                  <p style={styles.cardDescription}>{option.description}</p>

                  <div style={styles.features}>
                    <p style={styles.featuresTitle}>Key Features:</p>
                    <ul style={styles.featuresList}>
                      {option.features.map((feature, i) => (
                        <li key={i} style={styles.featureItem}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={styles.bestFor}>
                    <strong>Best for:</strong> {option.bestFor}
                  </div>

                  <div style={styles.viewButton}>
                    View Option →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Instructions */}
        <section style={styles.instructions}>
          <h2 style={styles.instructionsTitle}>How to Review with Agentation</h2>
          <ol style={styles.instructionsList}>
            <li>Click each option above to view the full page</li>
            <li>Use the Agentation toolbar (bottom-right) to annotate elements and provide feedback</li>
            <li>Test the email signup form (it works with your existing API)</li>
            <li>View on mobile (resize your browser)</li>
            <li>Note which messaging resonates most with your vision</li>
            <li>Consider which design best represents your brand</li>
          </ol>
        </section>
      </div>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: '#f9fafb',
    padding: '40px 20px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  backLink: {
    display: 'inline-block',
    color: '#6b7280',
    fontSize: '0.875rem',
    textDecoration: 'none',
    marginBottom: '24px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#111',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
    marginBottom: '80px',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.3s',
    cursor: 'pointer',
    border: '2px solid transparent',
  },
  preview: {
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #e5e7eb',
  },
  previewText: {
    fontSize: '0.875rem',
    color: '#9ca3af',
    fontWeight: '500',
  },
  cardContent: {
    padding: '24px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111',
    marginBottom: '12px',
  },
  cardDescription: {
    fontSize: '0.9375rem',
    color: '#6b7280',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  features: {
    marginBottom: '20px',
  },
  featuresTitle: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    fontSize: '0.8125rem',
    color: '#6b7280',
    marginBottom: '4px',
    paddingLeft: '16px',
    position: 'relative',
  },
  bestFor: {
    fontSize: '0.875rem',
    color: '#374151',
    padding: '12px',
    background: '#f3f4f6',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  viewButton: {
    textAlign: 'center',
    padding: '12px',
    background: '#111',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '0.9375rem',
  },
  instructions: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '40px',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  instructionsTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#111',
    marginBottom: '20px',
  },
  instructionsList: {
    fontSize: '1rem',
    color: '#374151',
    lineHeight: '1.8',
    paddingLeft: '24px',
  },
}
