import { Eye, Handshake, Target } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import CtaSection from '../sections/CtaSection'
export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      text: 'Make regulatory compliance clear, efficient and accessible for growing businesses.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      text: 'Become the most trusted bridge between innovative products and regulated global markets.',
    },
    {
      icon: Handshake,
      title: 'Our Promise',
      text: 'Offer transparent guidance, reliable coordination and responsible professional support.',
    },
  ]
  return (
    <>
      <PageHero
        eyebrow="About SNN"
        title="Expert guidance. Practical compliance."
        text="We help businesses navigate complex certification systems without losing focus on products, customers and growth."
      />
      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Who We Are"
            title="A compliance partner built around your business"
            text="SNN Compliance supports manufacturers, importers, exporters and brands through Indian and international approvals. We bring requirements, documentation, testing and authority coordination into one accountable workflow."
          />
          <div className="rounded-[24px] bg-slate-50 p-8 text-slate-600">
            <p className="leading-7">
              From early product planning to renewals and post-certification obligations, our role
              is to reduce uncertainty and keep every stakeholder aligned.
            </p>
            <p className="mt-4 leading-7">
              Our approach is professional, responsive and grounded in clear communication at every
              step.
            </p>
          </div>
        </div>
        <div className="container-site mt-16 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <article className="card" key={title}>
              <Icon className="text-brand" />
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  )
}
