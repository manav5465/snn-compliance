import { useState } from 'react'
import { serviceGroups } from '../data/siteData'
export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  const input =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-blue-100'
  return (
    <form onSubmit={submit} className="card grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-medium">
        Name *<input required name="name" className={`${input} mt-2`} />
      </label>
      <label className="text-sm font-medium">
        Company *<input required name="company" className={`${input} mt-2`} />
      </label>
      <label className="text-sm font-medium">
        Email *<input required type="email" name="email" className={`${input} mt-2`} />
      </label>
      <label className="text-sm font-medium">
        Phone *<input required type="tel" name="phone" className={`${input} mt-2`} />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Service Required *
        <select required name="service" className={`${input} mt-2`}>
          <option value="">Select a service</option>
          {serviceGroups.map((g) => (
            <option key={g.title}>{g.title}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Message
        <textarea name="message" rows="5" className={`${input} mt-2`} />
      </label>
      <div className="sm:col-span-2">
        <button className="btn-primary" type="submit">
          Send Enquiry
        </button>
        {sent && (
          <p role="status" className="mt-3 text-sm text-green-600">
            Form structure is ready. Connect EmailJS or Formspree before launch.
          </p>
        )}
      </div>
    </form>
  )
}
