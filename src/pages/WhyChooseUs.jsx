import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'
import { benefits } from '../data/siteData'
export default function WhyChooseUs() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="A dependable team for complex requirements"
        text="Focused expertise, transparent communication and practical coordination—built to help you reach the market with confidence."
      />
      <section className="section">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {benefits.map(({ title, text, icon: Icon }) => (
            <article className="card flex gap-5" key={title}>
              <Icon className="shrink-0 text-brand" size={30} />
              <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="container-site mt-16 rounded-[24px] bg-slate-50 p-8 lg:p-12">
          <h2 className="section-title">What you can expect</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              'Clear assessment before work begins',
              'A documented certification roadmap',
              'Proactive updates and issue escalation',
              'Support across testing and submissions',
              'Attention to renewal obligations',
              'One team across multiple approvals',
            ].map((x) => (
              <p className="flex gap-3" key={x}>
                <CheckCircle2 className="text-green-500" size={21} />
                {x}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
