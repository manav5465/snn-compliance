import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'
import { industries } from '../data/siteData'
export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Compliance expertise shaped around your industry"
        text="Every product category has distinct standards, risks and approval pathways. We help you approach them with clarity."
      />
      <section className="section">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ name, icon: Icon, text }) => (
            <article className="card min-h-56" key={name}>
              <span className="inline-block rounded-2xl bg-blue-50 p-4 text-brand">
                <Icon size={30} />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{name}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  )
}
