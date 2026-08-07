import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s simplify your compliance journey"
        text="Share your product, target market and required approval. Our team will help identify the next step."
      />
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <h2 className="section-title">Talk to our team</h2>
            <p className="section-copy">
              Use the form or reach us directly. Replace the placeholder contact details below
              before launch.
            </p>
            <div className="mt-8 space-y-5">
              <p className="flex gap-3">
                <Mail className="text-brand" />
                info@snncompliance.com
              </p>
              <p className="flex gap-3">
                <Phone className="text-brand" />
                +91 00000 00000
              </p>
              <p className="flex gap-3">
                <MapPin className="text-brand" />
                India
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
