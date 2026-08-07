import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function CtaSection() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="rounded-[28px] bg-brand-dark px-6 py-12 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Start your compliance journey
          </p>
          <h2 className="mt-3 text-3xl font-bold">Need clarity on the right certification?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Tell us about your product and target market. Our team will help you map the next steps.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-orange-500"
          >
            Get Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
