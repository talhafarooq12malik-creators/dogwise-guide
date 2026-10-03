import type { Metadata } from "next";
import Link from "next/link";
import { categories, topicLists, articles } from "@/lib/content";
import { site } from "@/lib/site";
import { notFound } from "next/navigation";

export function generateStaticParams() { return categories.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = categories.find((x) => x.slug === slug);
  return c ? { title: c.name, description: c.description, alternates: { canonical: `/category/${c.slug}` } } : { title: "Dog topics", robots: { index: false } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const c = categories.find((x) => x.slug === slug); if (!c) return notFound();
  const list = topicLists[slug as keyof typeof topicLists] || []; const related = articles.filter((a) => a.category === slug);
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: c.name, description: c.description, url: `${site.url}/category/${c.slug}`, isPartOf: { "@type": "WebSite", name: site.name, url: site.url } };
  return <main className="article"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><div className="crumb"><Link href="/">Home</Link> / {c.name}</div><span className="pill">DOGWISE GUIDE</span><h1>{c.name}</h1><p>{c.description}</p><h2>Published guides</h2><div className="list">{related.map((a) => <Link href={`/articles/${a.slug}`} key={a.slug}><b>{a.title}</b><br/><span className="small">{a.description}</span></Link>)}</div><h2>Topic library</h2><p>These are the core subjects this section is designed to cover. A topic is listed here only when a full guide is available.</p><div className="list">{list.map((x) => <div key={x}>{x}</div>)}</div></main>;
}
