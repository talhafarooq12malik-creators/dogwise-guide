import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/content";
import { site } from "@/lib/site";
import { notFound } from "next/navigation";

export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return { title: "Dog guide", robots: { index: false, follow: true } };
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords || undefined,
    alternates: { canonical: `/articles/${a.slug}` },
    openGraph: { type: "article", url: `${site.url}/articles/${a.slug}`, title: a.title, description: a.description, siteName: site.name },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return notFound();
  const articleUrl = `${site.url}/articles/${a.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    author: { "@type": "Organization", name: "Dogwise Guide Editorial Team", url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: a.category.replaceAll("-", " "), item: `${site.url}/category/${a.category}` },
      { "@type": "ListItem", position: 3, name: a.title, item: articleUrl },
    ],
  };
  return <main className="article">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="crumb"><Link href="/">Home</Link> / <Link href={`/category/${a.category}`}>{a.category.replaceAll("-", " ")}</Link></div>
    <span className="pill">EDUCATIONAL DOG GUIDE</span>
    <h1>{a.title}</h1>
    <p>{a.intro}</p>
    <div className="note"><b>Important:</b> This article provides general educational information. It does not diagnose illness or replace advice from a veterinarian.</div>
    {a.sections.map((s) => <section key={s.h}><h2>{s.h}</h2><p>{s.p}</p></section>)}
    {a.sources?.length ? <section><h2>Sources & further reading</h2>{a.sources.map((s) => <p className="source" key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer nofollow">{s.name}</a></p>)}</section> : null}
  </main>;
}
