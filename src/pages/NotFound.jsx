import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="section">
      <div className="container-site text-center">
        <p className="eyebrow">404</p>
        <h1 className="section-title">Page not found</h1>
        <p className="section-copy mx-auto">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn-primary mt-7">
          Return Home
        </Link>
      </div>
    </section>
  )
}
