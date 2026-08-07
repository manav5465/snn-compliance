import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import CtaSection from '../sections/CtaSection'
import { serviceGroups } from '../data/siteData'
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete regulatory and certification support"
        text="Explore our structured service portfolio for Indian market access, international certification, sustainability and industrial safety."
      />
      {serviceGroups.map((group, i) => {
        const Icon = group.icon
        return (
          <section className={`section ${i % 2 ? 'bg-slate-50' : ''}`} key={group.title}>
            <div className="container-site">
              <div className="flex items-center gap-4">
                <span className="rounded-2xl bg-blue-100 p-3 text-brand">
                  <Icon />
                </span>
                <h2 className="section-title">{group.title}</h2>
              </div>
              <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </div>
          </section>
        )
      })}
      <CtaSection />
    </>
  )
}
