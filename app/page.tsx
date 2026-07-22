const audiences = [
  {
    label: 'Capital',
    title: 'Venture investors',
    description:
      'A disciplined path from thesis to operating evidence, with capital efficiency and direct accountability built in.',
    outcome: 'Make the idea testable before making it expensive.',
  },
  {
    label: 'Enterprise',
    title: 'Corporate partners',
    description:
      'Executive-level problem framing, phase-gated decisions, and startup speed that respects real organizational constraints.',
    outcome: 'Introduce velocity without introducing chaos.',
  },
  {
    label: 'Direct',
    title: 'Founders and operators',
    description:
      'Senior access, practical judgment, candid tradeoffs, and visible progress from the person accountable for the work.',
    outcome: 'Work directly with the judgment you hired.',
  },
]

const operatingModel = [
  {
    number: '01',
    title: 'Frame the decision',
    description:
      'Define the real constraint, the evidence required, and the point at which the next investment becomes rational.',
  },
  {
    number: '02',
    title: 'Validate the signal',
    description:
      'Turn assumptions into customer, market, and operating evidence quickly enough to change course while it is still inexpensive.',
  },
  {
    number: '03',
    title: 'Build and operate',
    description:
      'Use an AI-native delivery system to move from recommendation to working software without losing the strategic thread.',
  },
]

const ventures = [
  {
    number: '01',
    sector: 'Consumer · Family nutrition',
    status: 'Production',
    signal: 'live',
    audience:
      'Households managing overlapping dietary constraints, allergies, medical diets, and differing needs across family members.',
    product:
      'AI-assisted recipe generation, meal planning, pantry tracking, and shopping workflows across web and iOS.',
  },
  {
    number: '02',
    sector: 'Education · Special education advocacy',
    status: 'Production',
    signal: 'live',
    audience:
      'Parents and advocates navigating the US K–12 Individualized Education Program process.',
    product:
      'Structured IEP analysis, year-over-year change detection, compliance tracking, and advocacy workflows.',
  },
  {
    number: '03',
    sector: 'Healthcare · Rare disease navigation',
    status: 'Pre-launch',
    signal: 'next',
    audience:
      'Families navigating a rare-disease diagnosis, specialist discovery, clinical trials, and fragmented records.',
    product:
      'Evidence-grounded specialist discovery, trial matching, and a structured longitudinal record for complex care journeys.',
  },
]

function MarkLockup({ dark = false }: { dark?: boolean }) {
  return (
    <span className="brand-lockup">
      <img
        className="brand-mark"
        src={dark ? '/brand/verata-mark-dark.svg' : '/brand/verata-mark-light.svg'}
        alt=""
      />
      <span className="brand-name">
        <strong>VERATA</strong>
        <span>VENTURES</span>
      </span>
    </span>
  )
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="home-link" href="#top" aria-label="Verata Ventures home">
            <MarkLockup />
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#model">Operating model</a>
            <a href="#ventures">Ventures</a>
            <a href="#founder">Founder</a>
            <a className="nav-cta" href="mailto:kevin@verataventures.com?subject=Verata%20Ventures%20conversation">
              Start a conversation
            </a>
          </nav>
        </div>
      </header>

      <div id="main-content">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Founder-led venture studio / New Jersey</p>
            <h1>Executive judgment.<br />Startup velocity.</h1>
            <p className="hero-lede">
              Verata Ventures builds, validates, and operates new businesses for enterprises,
              capital partners, and individual operators—combining senior accountability with
              AI-native execution.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:kevin@verataventures.com?subject=Verata%20Ventures%20conversation">
                Start a conversation
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#ventures">
                See the operating evidence <span aria-hidden="true">↓</span>
              </a>
            </div>
            <dl className="hero-evidence">
              <div>
                <dt>Active ventures</dt>
                <dd>03</dd>
              </div>
              <div>
                <dt>Operating model</dt>
                <dd>AI-native</dd>
              </div>
              <div>
                <dt>Partner access</dt>
                <dd>Founder-direct</dd>
              </div>
            </dl>
          </div>

          <aside className="hero-signal" aria-label="Verata Ventures brand statement">
            <div className="signal-top">
              <span className="mono-label">Signal / 01</span>
              <span className="status-line"><i /> Active</span>
            </div>
            <div className="signal-mark-wrap">
              <img
                className="signal-mark"
                src="/brand/verata-mark-expressive.svg"
                alt="Verata Ventures one-to-many V mark"
              />
            </div>
            <div className="signal-copy">
              <p>Judgment,<br />accelerated.</p>
              <span className="mono-label">One operator / multiplied execution</span>
            </div>
          </aside>
        </section>

        <section className="audiences section-light" aria-labelledby="audience-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <p className="eyebrow">Partner posture / One character</p>
              <div>
                <h2 id="audience-title">One operating model.<br />Three rooms.</h2>
                <p>
                  The evidence changes by audience. The judgment, directness, and accountability
                  do not.
                </p>
              </div>
            </div>
            <div className="audience-list">
              {audiences.map((audience, index) => (
                <article className="audience-row" key={audience.title}>
                  <span className="row-number">0{index + 1}</span>
                  <div>
                    <span className="mono-label">{audience.label}</span>
                    <h3>{audience.title}</h3>
                  </div>
                  <p>{audience.description}</p>
                  <p className="row-outcome">{audience.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="operating-section" id="model" aria-labelledby="model-title">
          <div className="shell operating-grid">
            <div className="operating-thesis">
              <p className="eyebrow eyebrow-dark">Operating model / Controlled speed</p>
              <h2 id="model-title">One accountable operator. Multiplied execution.</h2>
              <p>
                Verata combines direct senior accountability with an AI-native delivery system.
                The result is faster evidence, tighter decisions, and no handoff between the
                person setting direction and the work.
              </p>
            </div>
            <div className="operating-steps">
              {operatingModel.map((step) => (
                <article className="operating-step" key={step.number}>
                  <span className="mono-label">Phase / {step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ventures-section" id="ventures" aria-labelledby="ventures-title">
          <div className="shell">
            <div className="section-heading split-heading ventures-heading">
              <p className="eyebrow">Portfolio / Operating evidence</p>
              <div>
                <h2 id="ventures-title">Evidence over theater.</h2>
                <p>
                  Three ventures across domains where workflows are complex, consequences are
                  real, and general-purpose software fits poorly.
                </p>
              </div>
              <span className="as-of mono-label">Status / July 2026</span>
            </div>

            <div className="venture-list">
              {ventures.map((venture) => (
                <article className="venture-row" key={venture.number}>
                  <div className="venture-id">
                    <span className="row-number">{venture.number}</span>
                    <span className={`status status-${venture.signal}`}>
                      <i /> {venture.status}
                    </span>
                  </div>
                  <div className="venture-title">
                    <span className="mono-label">Sector</span>
                    <h3>{venture.sector}</h3>
                  </div>
                  <div className="venture-detail">
                    <span className="mono-label">Who it serves</span>
                    <p>{venture.audience}</p>
                  </div>
                  <div className="venture-detail">
                    <span className="mono-label">What is operating</span>
                    <p>{venture.product}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="portfolio-proof" aria-label="Portfolio status summary">
              <div><strong>03</strong><span>Active ventures</span></div>
              <div><strong>02</strong><span>In production</span></div>
              <div><strong>01</strong><span>Pre-launch</span></div>
              <p>Product names and additional operating detail are available in direct partner conversations.</p>
            </div>
          </div>
        </section>

        <section className="founder-section section-light" id="founder" aria-labelledby="founder-title">
          <div className="shell founder-grid">
            <div>
              <p className="eyebrow">Founder-direct / No theater</p>
              <h2 id="founder-title">The person in the room is the person accountable.</h2>
            </div>
            <div className="founder-copy">
              <p className="founder-lede">
                Verata Ventures is deliberately compact. Partners work directly with Kevin
                Kokoszka from problem framing through recommendation and execution.
              </p>
              <p>
                The model is designed for work that benefits from experienced judgment, a high
                rate of iteration, and clear ownership. Specialists and collaborators join when
                the work requires them—not to manufacture the appearance of scale.
              </p>
              <div className="founder-signature">
                <span>Kevin Kokoszka</span>
                <small>Founder &amp; operating partner</small>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="shell contact-grid">
            <div className="contact-mark">
              <img src="/brand/verata-mark-expressive.svg" alt="" />
            </div>
            <div className="contact-copy">
              <p className="eyebrow eyebrow-dark">Partner inquiry / Direct access</p>
              <h2 id="contact-title">Bring the consequential problem.</h2>
              <p>
                For venture collaboration, enterprise builds, investment conversations, or a
                direct operating question, email Kevin.
              </p>
              <a className="contact-email" href="mailto:kevin@verataventures.com">
                kevin@verataventures.com <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <MarkLockup />
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} Verata Ventures, LLC</span>
            <span>New Jersey, USA</span>
            <span>Judgment, accelerated.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
