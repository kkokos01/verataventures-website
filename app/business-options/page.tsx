'use client'

import Link from 'next/link'

export default function BusinessOptionsIndex() {
  const options = [
    {
      id: 'option-1',
      name: 'Option 1: Clean Professional',
      description: 'Straightforward business site with clear sections. Professional without being stuffy.',
      style: 'Modern, clean, organized',
      bestFor: 'General professional image',
    },
    {
      id: 'option-2',
      name: 'Option 2: Bold & Modern',
      description: 'Dynamic gradients and modern design. Shows innovation and tech-forward thinking.',
      style: 'Vibrant gradients, modern cards, energetic',
      bestFor: 'Standing out, attracting tech talent',
    },
    {
      id: 'option-3',
      name: 'Option 3: Corporate Trust',
      description: 'Enterprise-grade professional design. Builds credibility with serious buyers.',
      style: 'Structured, formal, trustworthy',
      bestFor: 'Enterprise clients, investors',
    },
    {
      id: 'option-4',
      name: 'Option 4: Product Showcase',
      description: 'Detailed product cards with visual hierarchy. Emphasizes your portfolio depth.',
      style: 'Product-first, visual cards, progress indicators',
      bestFor: 'Showing capability, attracting partners',
    },
    {
      id: 'option-5',
      name: 'Option 5: Personal & Approachable',
      description: 'Warm, authentic founder story approach. Makes the business feel accessible.',
      style: 'Conversational, warm colors, personal touch',
      bestFor: 'Building personal connection, early customers',
    },
  ]

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Professional Website Options</h1>
          <p style={styles.subtitle}>
            5 design approaches for Verata Ventures - review and annotate with Agentation
          </p>
        </header>

        <div style={styles.grid}>
          {options.map((option, idx) => (
            <Link
              key={option.id}
              href={`/business-options/${option.id}`}
              style={styles.cardLink}
            >
              <div style={styles.card}>
                <div style={styles.cardNumber}>Option {idx + 1}</div>
                <h2 style={styles.cardTitle}>{option.name}</h2>
                <p style={styles.cardDescription}>{option.description}</p>

                <div style={styles.meta}>
                  <div style={styles.metaItem}>
                    <strong>Style:</strong> {option.style}
                  </div>
                  <div style={styles.metaItem}>
                    <strong>Best for:</strong> {option.bestFor}
                  </div>
                </div>

                <div style={styles.viewButton}>View Option →</div>
              </div>
            </Link>
          ))}
        </div>

        <section style={styles.instructions}>
          <h2 style={styles.instructionsTitle}>How to Review</h2>
          <ol style={styles.instructionsList}>
            <li>Click each option to view the full professional website</li>
            <li><strong>Use Agentation</strong> (toolbar in bottom-right) to annotate sections you like or want changed</li>
            <li>Test the email button and signup form</li>
            <li>Compare messaging and tone across options</li>
            <li>Note which design best represents Verata Ventures</li>
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
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#111',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '60px',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    background: '#fff',
    padding: '32px',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  cardNumber: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#111',
    marginBottom: '12px',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  meta: {
    marginBottom: '24px',
    paddingTop: '20px',
    borderTop: '1px solid #f3f4f6',
  },
  metaItem: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '8px',
  },
  viewButton: {
    textAlign: 'center',
    padding: '12px',
    background: '#111',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: '500',
  },
  instructions: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '40px',
    background: '#fff',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
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
