import { useEffect, useState } from 'react'

const services = [
  {
    number: '01',
    title: 'BIS Certification',
    text: 'End-to-end support for ISI marking, CRS registration and product conformity under Indian standards.',
    tags: ['ISI Mark', 'CRS', 'FMCS'],
  },
  {
    number: '02',
    title: 'WPC & TEC Approvals',
    text: 'Clear guidance for wireless, radio, telecom and connected products entering the Indian market.',
    tags: ['ETA', 'MTCTE', 'Wireless'],
  },
  {
    number: '03',
    title: 'Global Market Access',
    text: 'A coordinated path through international testing, documentation and certification requirements.',
    tags: ['CE', 'FCC', 'RoHS'],
  },
  {
    number: '04',
    title: 'Product Testing',
    text: 'Laboratory coordination, technical file review and gap analysis before formal submission.',
    tags: ['Safety', 'EMC', 'Quality'],
  },
]

const industries = [
  ['Consumer electronics', 'Mobile devices, appliances and connected products'],
  ['Industrial equipment', 'Machinery, electrical systems and control products'],
  ['Automotive & mobility', 'Components, batteries and transport technologies'],
  ['Medical devices', 'Regulated equipment and supporting documentation'],
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle')

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setFormStatus('submitting')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })

      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="SNN Compliance home">
          <img src="/snn-logo.png" alt="SNN" />
          <span><strong>Compliance</strong><small>Your Trusted Compliance Partner</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#why-us">Why us</a>
          <a className="nav-cta" href="#contact">Start a project <Arrow diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span /> Compliance without uncertainty</p>
              <h1>Market access,<br /><em>made clear.</em></h1>
              <p className="hero-intro">We help ambitious manufacturers and brands navigate certification, testing and regulatory approvals across India and global markets.</p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">Discuss your product <Arrow /></a>
                <a className="text-link" href="#services">Explore services <Arrow diagonal /></a>
              </div>
            </div>
            <div className="hero-visual reveal delay-one" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="compliance-card">
                <span className="status-dot" />
                <p>Regulatory pathway</p>
                <strong>India market entry</strong>
                <div className="progress"><span /></div>
                <div className="card-meta"><span>Scope mapped</span><b>Ready</b></div>
              </div>
              <div className="market-badge"><strong>14+</strong><span>Approval<br />pathways</span></div>
              <div className="signal-lines"><i /><i /><i /><i /></div>
            </div>
          </div>
          <div className="trust-strip reveal delay-two">
            <span>Built for regulated growth</span>
            <div>Manufacturers</div><i />
            <div>Importers</div><i />
            <div>Exporters</div><i />
            <div>Global brands</div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-label">01 / About SNN</div>
          <div className="about-grid">
            <h2>Regulation is complex.<br />Our advice is not.</h2>
            <div className="about-copy">
              <p>SNN Compliance brings technical knowledge, practical coordination and transparent communication together in one focused consultancy.</p>
              <p>From identifying the right approval route to closing the final documentation gap, we keep every requirement visible and every next step actionable.</p>
              <a className="text-link" href="#why-us">How we work <Arrow diagonal /></a>
            </div>
          </div>
          <div className="metrics">
            <div><strong>One</strong><span>accountable partner from scope to certificate</span></div>
            <div><strong>Clear</strong><span>milestones, owners and documentation status</span></div>
            <div><strong>Global</strong><span>perspective with local regulatory expertise</span></div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading">
            <div><div className="section-label light">02 / Core Services</div><h2>Every approval starts<br />with the right route.</h2></div>
            <p>Focused support across testing, certification and ongoing product compliance.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.title}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <Arrow diagonal />
              </article>
            ))}
          </div>
        </section>

        <section className="section industries" id="industries">
          <div className="section-label">03 / Industries</div>
          <div className="industries-layout">
            <div className="sticky-copy">
              <h2>Technical sectors demand technical guidance.</h2>
              <p>We translate product standards into a practical approval plan for teams operating in high-accountability environments.</p>
            </div>
            <div className="industry-list">
              {industries.map(([name, description], index) => (
                <article key={name}>
                  <span>0{index + 1}</span>
                  <div><h3>{name}</h3><p>{description}</p></div>
                  <Arrow diagonal />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="why-us">
          <div className="process-copy">
            <div className="section-label light">04 / Why SNN</div>
            <h2>A direct line from requirement to result.</h2>
            <p>Compliance projects move faster when the scope, evidence and accountability are clear from day one.</p>
          </div>
          <div className="steps">
            <div><span>01</span><h3>Scope</h3><p>We assess the product, intended market and applicable regulations.</p></div>
            <div><span>02</span><h3>Prepare</h3><p>We organize testing, documentation and submission requirements.</p></div>
            <div><span>03</span><h3>Coordinate</h3><p>We manage communication across labs, authorities and your team.</p></div>
            <div><span>04</span><h3>Approve</h3><p>We close observations and guide the project through certification.</p></div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-intro">
            <div className="section-label">05 / Start a Conversation</div>
            <h2>Bring us the product.<br /><em>We’ll map the path.</em></h2>
            <p>Tell us what you are launching and where. We’ll help identify the most practical route to market.</p>
            <div className="contact-note"><span>Response standard</span><strong>Within one business day</strong></div>
          </div>
          <form className="contact-form" name="project-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="project-enquiry" />
            <label className="honeypot">Do not fill this out<input name="bot-field" /></label>
            <label><span>Your name</span><input name="name" type="text" placeholder="Full name" required /></label>
            <label><span>Work email</span><input name="email" type="email" placeholder="name@company.com" required /></label>
            <label><span>Company</span><input name="company" type="text" placeholder="Organization name" /></label>
            <label><span>What do you need help with?</span><select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>BIS Certification</option><option>WPC & TEC Approvals</option><option>Global Market Access</option><option>Product Testing</option></select></label>
            <label className="wide"><span>Project details</span><textarea name="message" placeholder="Product, target market and expected timeline" rows="4" required /></label>
            <button className="primary-button wide" type="submit" disabled={formStatus === 'submitting'}>{formStatus === 'submitting' ? 'Sending…' : 'Send enquiry'} <Arrow /></button>
            {formStatus === 'success' && <p className="form-success wide" role="status">Thank you. Your project details have been received and the SNN team can follow up from here.</p>}
            {formStatus === 'error' && <p className="form-error wide" role="alert">The enquiry could not be sent. Please check your connection and try again.</p>}
          </form>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#home"><img src="/snn-logo.png" alt="SNN" /><span><strong>Compliance</strong><small>Your Trusted Compliance Partner</small></span></a>
        <p>Certification clarity for products moving across borders.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#industries">Industries</a><a href="#contact">Contact</a></div>
        <span className="copyright">© {new Date().getFullYear()} SNN Compliance</span>
      </footer>
    </div>
  )
}

export default App
