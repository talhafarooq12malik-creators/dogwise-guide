import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categories } from "../../../lib/content";
import { site } from "../../../lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((x) => x.slug === slug);

  if (!article) {
    return {
      title: "Dog guide",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${site.url}/articles/${article.slug}`,
      title: article.title,
      description: article.description,
      siteName: site.name,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((x) => x.slug === slug);

  if (!article) {
    return notFound();
  }

  const articleUrl = `${site.url}/articles/${article.slug}`;

  const category = categories.find((c) => c.slug === article.category);

  const categoryName =
    category?.name || article.category.replaceAll("-", " ");

  const relatedArticles = articles
    .filter(
      (x) =>
        x.slug !== article.slug &&
        x.category === article.category
    )
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Organization",
      name: "Dogwise Guide Editorial Team",
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    articleSection: categoryName,
    inLanguage: "en-US",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `${site.url}/category/${article.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <main className="article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />

      <div className="crumb">
        <Link href="/">Home</Link>
        {" / "}
        <Link href={`/category/${article.category}`}>
          {categoryName}
        </Link>
      </div>

      <span className="pill">DOG CARE GUIDE</span>

      <h1>{article.title}</h1>

      <p
        style={{
          fontSize: "1.08rem",
          lineHeight: 1.75,
        }}
      >
        {article.intro}
      </p>

      <p
        style={{
          fontSize: "0.9rem",
          opacity: 0.7,
          marginTop: "-6px",
        }}
      >
        By the Dogwise Guide Editorial Team
      </p>

      <div className="note">
        <b>Important:</b> This guide provides general educational
        information for dog owners. It does not diagnose illness or
        replace advice from a veterinarian. If your dog is seriously
        ill, injured, poisoned, having trouble breathing, or showing
        another emergency warning sign, contact a veterinarian promptly.
      </div>

      {article.sections.map((section, index) => (
        <section key={`${section.h}-${index}`}>
          <h2>{section.h}</h2>
          <p>{section.p}</p>
        </section>
      ))}

      {article.sources?.length ? (
        <section>
          <h2>Sources & further reading</h2>

          <p>
            These resources are included to help readers learn more from
            established veterinary and animal-welfare organizations.
          </p>

          {article.sources.map((source) => (
            <p className="source" key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.name}
              </a>
            </p>
          ))}
        </section>
      ) : null}

      {relatedArticles.length > 0 && (
        <section>
          <h2>More dog care guides</h2>

          <div className="formgrid">
            {relatedArticles.map((related) => (
              <div className="toolbox" key={related.slug}>
                <h3>{related.title}</h3>

                <p>{related.description}</p>

                <Link
                  className="btn"
                  href={`/articles/${related.slug}`}
                >
                  Read guide
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
