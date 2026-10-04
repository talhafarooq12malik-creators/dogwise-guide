import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { categories } from "../lib/content";
import { site } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  verification: {
    google: "aLZjFLsV9D0eOIIRQr2GQxWUhhI1RoZe8daihQlkUIw",
  },

  title: {
    default: `${site.name} | Dog Care, Health, Training & Breed Guides`,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  applicationName: site.name,

  authors: [
    {
      name: "Dogwise Guide Editorial Team",
    },
  ],

  creator: site.name,
  publisher: site.name,

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
  },

  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        <div className="top">
          <div className="wrap">
            Independent dog-care education • Health and safety pages list
            their sources
          </div>
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <div className="wrap navin">
            <Link className="logo" href="/">
              Dogwise<span>Guide</span>
            </Link>

            <div className="links">
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                >
                  {category.name}
                </Link>
              ))}

              <Link href="/tools">Tools</Link>
              <Link href="/search">Search</Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <div className="wrap footergrid">
            <div>
              <h2>Dogwise Guide</h2>

              <p>
                Practical, research-informed dog care information for
                everyday owners.
              </p>

              <p className="small">
                Educational information only. It is not a substitute for
                veterinary diagnosis or treatment.
              </p>
            </div>

            <div>
              <h3>Explore</h3>

              {categories.map((category) => (
                <p key={category.slug}>
                  <Link href={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </p>
              ))}
            </div>

            <div>
              <h3>About</h3>

              <p>
                <Link href="/about">About us</Link>
              </p>

              <p>
                <Link href="/editorial-guidelines">
                  Editorial guidelines
                </Link>
              </p>

              <p>
                <Link href="/contact">Contact</Link>
              </p>

              <p>
                <Link href="/privacy">Privacy</Link>
              </p>

              <p>
                <Link href="/terms">Terms</Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
