import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categories, topicLists } from "../../../lib/content";
import { site } from "../../../lib/site";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "Dog Care Category",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: `${category.name} Guides`,
    description: category.description,
    alternates: {
      canonical: `/category/${category.slug}`,
    },
    openGraph: {
      type: "website",
      url: `${site.url}/category/${category.slug}`,
      title: `${category.name} Guides`,
      description: category.description,
      siteName: site.name,
    },
    twitter: {
      card: "summary",
      title: `${category.name} Guides`,
      description: category.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = articles.filter(
    (article) => article.category === category.slug
  );

  const topics =
    topicLists[category.slug as keyof typeof topicLists] ?? [];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Guides`,
    description: category.description,
    url: `${site.url}/category/${category.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
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
        name: category.name,
        item: `${site.url}/category/${category.slug}`,
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
        <span>{category.name}</span>
      </div>

      <span className="pill">DOG CARE CATEGORY</span>

      <h1>{category.name}</h1>

      <p
        style={{
          fontSize: "1.08rem",
          lineHeight: 1.75,
        }}
      >
        {category.description}
      </p>

      {categoryArticles.length > 0 && (
        <section>
          <h2>Published guides</h2>

          <div className="formgrid">
            {categoryArticles.map((article) => (
              <div className="toolbox" key={article.slug}>
                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <Link
                  className="btn"
                  href={`/articles/${article.slug}`}
                >
                  Read guide
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {topics.length > 0 && (
        <section>
          <h2>Topics we plan to cover</h2>

          <p>
            These are useful topics within this category that Dogwise
            Guide may cover as the site grows. They are listed here as
            future topics, not as published guides.
          </p>

          <ul>
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </section>
      )}

      {categoryArticles.length === 0 && topics.length === 0 && (
        <section>
          <h2>More guides coming soon</h2>

          <p>
            New practical dog-care guides will be added to this category
            as the site grows.
          </p>
        </section>
      )}

      <section>
        <h2>Explore other dog-care categories</h2>

        <div className="formgrid">
          {categories
            .filter((item) => item.slug !== category.slug)
            .map((item) => (
              <div className="toolbox" key={item.slug}>
                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <Link
                  className="btn"
                  href={`/category/${item.slug}`}
                >
                  Explore category
                </Link>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
