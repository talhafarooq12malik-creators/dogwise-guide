import type { Metadata } from "next";
import Link from "next/link";
import { articles, categories, tools } from "../../lib/content";

export const metadata: Metadata = {
  title: "Search Dogwise Guide",
  description:
    "Search Dogwise Guide for dog-care articles, health information, training guides and practical tools.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;

  const searchTerm = q.trim();
  const normalizedSearch = searchTerm.toLowerCase();

  const matchingArticles = articles.filter((article) =>
    `${article.title} ${article.description} ${article.intro}`
      .toLowerCase()
      .includes(normalizedSearch)
  );

  const matchingCategories = categories.filter((category) =>
    `${category.name} ${category.description}`
      .toLowerCase()
      .includes(normalizedSearch)
  );

  const matchingTools = tools.filter((tool) =>
    `${tool.name} ${tool.description}`
      .toLowerCase()
      .includes(normalizedSearch)
  );

  const hasResults =
    matchingArticles.length > 0 ||
    matchingCategories.length > 0 ||
    matchingTools.length > 0;

  return (
    <main className="article">
      <div className="crumb">
        <Link href="/">Home</Link>
        {" / "}
        Search
      </div>

      <span className="pill">DOGWISE GUIDE</span>

      <h1>Search Dogwise Guide</h1>

      <p>
        Search our dog-care guides, calculators and topic pages to find
        information about health, nutrition, training, breeds and
        everyday care.
      </p>

      <form className="search" action="/search">
        <label className="sr-only" htmlFor="q">
          Search dog topics
        </label>

        <input
          id="q"
          name="q"
          defaultValue={searchTerm}
          placeholder="Search dog health, food, training..."
          aria-label="Search dog topics"
        />

        <button type="submit">Search</button>
      </form>

      {searchTerm && (
        <>
          <h2>
            Results for &ldquo;{searchTerm}&rdquo;
          </h2>

          {hasResults ? (
            <>
              {matchingArticles.length > 0 && (
                <section>
                  <h3>Dog-care guides</h3>

                  <div className="list">
                    {matchingArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/articles/${article.slug}`}
                      >
                        <b>{article.title}</b>
                        <br />
                        <span className="small">
                          {article.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {matchingCategories.length > 0 && (
                <section>
                  <h3>Dog-care topics</h3>

                  <div className="list">
                    {matchingCategories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                      >
                        <b>{category.name}</b>
                        <br />
                        <span className="small">
                          {category.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {matchingTools.length > 0 && (
                <section>
                  <h3>Dog tools</h3>

                  <div className="list">
                    {matchingTools.map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                      >
                        <b>{tool.name}</b>
                        <br />
                        <span className="small">
                          {tool.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            <div className="note">
              <b>No matching guide found yet.</b>

              <p>
                Try a broader search such as &ldquo;puppy,&rdquo;
                &ldquo;food,&rdquo; &ldquo;training,&rdquo; or
                &ldquo;health.&rdquo;
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
}
