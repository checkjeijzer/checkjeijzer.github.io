import Link from "next/link";

// Exported as 404.html by Next static export — GitHub Pages serves this for
// unknown paths, avoiding hard 404s.
export default function NotFound() {
  return (
    <main className="container content" style={{ textAlign: "center", paddingTop: 80 }}>
      <h1>404</h1>
      <p className="lead">Pagina niet gevonden / Page not found.</p>
      <p>
        <Link className="btn" href="/">Terug naar start / Back home</Link>
      </p>
    </main>
  );
}
