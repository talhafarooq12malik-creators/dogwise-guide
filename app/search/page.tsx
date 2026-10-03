import type { Metadata } from "next";
import Link from "next/link";
import { articles, categories, tools } from "../../lib/content";
export const metadata: Metadata = { title: "Search", description: "Search Dogwise Guide for dog-care guides and tools.", robots: { index: false, follow: true } };
export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams; const s = q.toLowerCase().trim();
  const A = articles.filter((a) => (a.title + " " + a.description).toLowerCase().includes(s));
  const C = categories.filter((c) => (c.name + " " + c.description).toLowerCase().includes(s));
  const T = tools.filter((t) => (t.name + " " + t.description).toLowerCase().includes(s));
  return <main className="article"><h1>Search</h1><form className="search"><label className="sr-only" htmlFor="q">Search dog topics</label><input id="q" name="q" defaultValue={q} placeholder="Search dog topics..."/><button>Search</button></form>{s && <><h2>Results for “{q}”</h2><div className="list">{[...A.map((a) => <Link key={a.slug} href={`/articles/${a.slug}`}><b>{a.title}</b><br/><span className="small">{a.description}</span></Link>), ...C.map((c) => <Link key={c.slug} href={`/category/${c.slug}`}><b>{c.name}</b><br/><span className="small">{c.description}</span></Link>), ...T.map((t) => <Link key={t.slug} href={`/tools/${t.slug}`}><b>{t.name}</b><br/><span className="small">{t.description}</span></Link>)]}</div>{!A.length && !C.length && !T.length && <p>No matching guide is published yet.</p>}</>}</main>;
}
