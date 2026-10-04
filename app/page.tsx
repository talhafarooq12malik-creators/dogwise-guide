import Link from "next/link";
import {
  categories,
  tools,
  articles,
  siteDescription,
} from "../lib/content";
import { site } from "../lib/site";

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    description: site.description,
    url: site.url,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  const featuredArticles = articles.slice(0, 6);
  const featuredTools = tools.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <header className="hero">
        <div className="wrap">
          <span className="pill">
            DOG CARE • HEALTH • TRAINING • BREEDS
          </span>

          <h1>Clear answers for better everyday dog care.</h1>

          <p>{siteDescription}</p>

          <form className="search" action="/search">
            <label
              className="sr-only"
              htmlFor="home-search"
            >
              Search dog topics
            </label>

            <input
              id="home-search"
              name="q"
              placeholder="Search dog health, food, training, breeds..."
              aria-label="Search dog topics"
            />

            <button type="submit">Search</button>
          </form>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="wrap">
            <h2>Explore dog care topics</h2>

            <p
              style={{
                maxWidth: "760px",
                lineHeight: 1.7,
              }}
            >
              Browse practical information about the parts of dog
              ownership that matter most, from nutrition and health to
              training, grooming, puppies and breed-specific care.
            </p>

            <div className="grid">
              {categories.map((category) => (
                <Link
                  className="card"
                  href={`/category/${category.slug}`}
                  key={category.slug}
                >
                  <span className="pill">DOG CARE</span>

                  <h3>{category.name}</h3>

                  <p>{category.description}</p>

                  <span className="btn">Explore guides</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2>Free dog calculators & tools</h2>

            <p
              style={{
                maxWidth: "760px",
                lineHeight: 1.7,
              }}
            >
              Get quick educational estimates for common dog-care
              questions. Results are starting points and should be
              considered alongside your dog's individual needs.
            </p>

            <div className="grid">
              {featuredTools.map((tool) => (
                <Link
                  className="card"
                  href={`/tools/${tool.slug}`}
                  key={tool.slug}
                >
                  <span className="pill">FREE TOOL</span>

                  <h3>{tool.name}</h3>

                  <p>{tool.description}</p>

                  <span className="btn">Use tool</span>
                </Link>
              ))}
            </div>

            <p style={{ marginTop: "20px" }}>
              <Link href="/tools">
                View all dog calculators and tools →
              </Link>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2>Latest dog-care guides</h2>

            <p
              style={{
                maxWidth: "760px",
                lineHeight: 1.7,
              }}
            >
              Read practical guides covering everyday questions that dog
              owners commonly face.
            </p>

            <div className="grid">
              {featuredArticles.map((article) => (
                <Link
                  className="card"
                  href={`/articles/${article.slug}`}
                  key={article.slug}
                >
                  <span className="pill">DOG GUIDE</span>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <span className="btn">Read guide</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="note">
              <h2>About Dogwise Guide</h2>

              <p>
                Dogwise Guide is designed to make dog-care information
                easier to understand and use. We focus on practical
                explanations, established veterinary and animal-welfare
                sources, and clear guidance for everyday dog owners.
              </p>

              <p>
                Our information is educational and does not replace
                individualized advice from a veterinarian.
              </p>

              <Link href="/about">Learn more about Dogwise Guide →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
