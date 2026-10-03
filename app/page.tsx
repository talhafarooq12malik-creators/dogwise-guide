import Link from "next/link";
import { categories, tools, articles, siteDescription } from "../lib/content";
import { site } from "../lib/site";

export default function Home() {
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: site.name, description: site.description, url: site.url, publisher: { "@type": "Organization", name: site.name, url: site.url } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    <header className="hero"><div className="wrap"><span className="pill">DOG CARE • HEALTH • TRAINING • BREEDS</span><h1>Clear answers for better everyday dog care.</h1><p>{siteDescription}</p><form className="search" action="/search"><label className="sr-only" htmlFor="home-search">Search dog topics</label><input id="home-search" name="q" placeholder="Search dog health, breeds, food, training..."/><button>Search</button></form></div></header>
    <main>
      <section className="section"><div className="wrap"><h2>Explore dog care topics</h2><div className="grid">{categories.map(c => <Link className="card" href={`/category/${c.slug}`} key={c.slug}><span className="pill">DOGS</span><h3>{c.name}</h3><p>{c.description}</p></Link>)}</div></div></section>
      <section className="section"><div className="wrap"><h2>Useful dog tools</h2><div className="grid">{tools.map(t => <Link className="card" href={`/tools/${t.slug}`} key={t.slug}><span className="pill">TOOL</span><h3>{t.name}</h3><p>{t.description}</p></Link>)}</div></div></section>
      <section className="section"><div className="wrap"><h2>Featured guides</h2><div className="grid">{articles.slice(0, 6).map(a => <Link className="card" href={`/articles/${a.slug}`} key={a.slug}><span className="pill">GUIDE</span><h3>{a.title}</h3><p>{a.description}</p></Link>)}</div></div></section>
    </main>
  </>;
}
