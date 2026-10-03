import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/content";
import { site } from "@/lib/site";
import { notFound } from "next/navigation";
import ToolClient from "@/components/ToolClient";

export function generateStaticParams() { return tools.map((t) => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const t = tools.find((x) => x.slug === slug);
  return t ? { title: t.name, description: t.description, alternates: { canonical: `/tools/${t.slug}` } } : { title: "Dog tool", robots: { index: false } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = tools.find((x) => x.slug === slug); if (!t) return notFound();
  const schema = { "@context": "https://schema.org", "@type": "WebApplication", name: t.name, description: t.description, applicationCategory: "EducationalApplication", operatingSystem: "Web", url: `${site.url}/tools/${t.slug}`, isAccessibleForFree: true, publisher: { "@type": "Organization", name: site.name, url: site.url } };
  return <main className="article"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><div className="crumb"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / {t.name}</div><span className="pill">FREE EDUCATIONAL TOOL</span><h1>{t.name}</h1><p>{t.description}</p><div className="note"><b>Important:</b> This calculator provides an estimate for education and planning. It is not a diagnosis or veterinary prescription.</div><ToolClient slug={slug}/></main>;
}
