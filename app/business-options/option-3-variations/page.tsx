'use client'

import Link from 'next/link'

export default function Option3Variations() {
  const variations = [
    {
      id: '3a',
      name: 'Clean Text-Only Cards',
      description: 'No icons at all - just clean typography with subtle colored left borders for visual interest.',
      approach: 'Minimalist, enterprise-grade',
      icon: '📝',
    },
    {
      id: '3b',
      name: 'Letter Badges',
      description: 'Circular letter badges (C, I, R, E) with professional colors - typography-based approach.',
      approach: 'Modern, clean iconography',
      icon: '🔤',
    },
    {
      id: '3c',
      name: 'Colored Accent Bars',
      description: 'Thick colored top border on each card - tab-like design with no icons.',
      approach: 'Modern, visual hierarchy',
      icon: '🎨',
    },
    {
      id: '3d',
      name: 'Category Tags + Minimal',
      description: 'Category labels (Consumer Tech, Healthcare, Education) instead of icons - most corporate feel.',
      approach: 'Enterprise, text-focused',
      icon: '🏷️',
    },
  ]

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <header style={styles.header}>
          <Link href="/business-options" style={styles.backLink}>
            ← Back to All Options
          </Link>
          <h1 style={styles.title}>Option 3 Variations</h1>
          <p style={styles.subtitle}>
            Same messaging, same corporate style - 4 different approaches to product cards
          </p>
        </header>

        <div style={styles.grid}>
          {variations.map((variation) => (
            <Link
              key={variation.id}
              href={`/business-options/option-${variation.id}`}
              style={styles.cardLink}
            >
              <div style={styles.card}>
                <div style={styles.cardIcon}>{variation.icon}</div>
                <h2 style={styles.cardTitle}>{variation.name}</h2>
                <p style={styles.cardDescription}>{variation.description}</p>
                <div style={styles.approach}>
                  <strong>Approach:</strong> {variation.approach}
                </div>
                <div style={styles.viewButton}>View Variation →</div>
              </div>
            </Link>
          ))}
        </div>

        <section style={styles.notes}>
          <h2 style={styles.notesTitle}>What Changed?</h2>
          <ul style={styles.notesList}>
            <li><strong>Removed:</strong> Amateur-looking emoji icons from product cards</li>
            <li><strong>Kept Same:</strong> All messaging, corporate navy blue style, statistics section</li>
            <li><strong>Tested:</strong> 4 different professional approaches to product card design</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: '#f8fafc',
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
    color: '#64748b',
    fontSize: '0.875rem',
    textDecoration: 'none',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#64748b',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
    border: '2px solid #e2e8f0',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '12px',
  },
  cardDescription: {
    fontSize: '0.9375rem',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  approach: {
    fontSize: '0.875rem',
    color: '#475569',
    marginBottom: '20px',
    padding: '12px',
    background: '#f8fafc',
    borderRadius: '6px',
  },
  viewButton: {
    textAlign: 'center',
    padding: '12px',
    background: '#1e3a8a',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '0.9375rem',
  },
  notes: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '32px',
    background: '#fff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  notesTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '16px',
  },
  notesList: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.8',
    paddingLeft: '24px',
  },
}
