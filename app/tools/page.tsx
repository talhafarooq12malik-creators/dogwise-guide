import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "../../lib/content";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Dog Calculators & Tools",
  description:
    "Free dog-care calculators and practical tools for estimating dog age, calorie needs, feeding amounts, puppy growth and healthy weight.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    type: "website",
    url: `${site.url}/tools`,
    title: "Dog Calculators & Tools",
    description:
      "Free dog-care calculators and practical tools for everyday dog owners.",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Dog Calculators & Tools",
    description:
      "Free dog-care calculators and practical tools for everyday dog owners.",
  },
};

export default function Tools() {
  return (
    <main className="article">
      <div className="crumb">
        <Link href="/">Home</Link>
        {" / "}
        Tools
      </div>

      <span className="pill">DOGWISE GUIDE</span>

      <h1>Dog Calculators & Tools</h1>

      <p
        style={{
          fontSize: "1.08rem",
          lineHeight: 1.75,
        }}
      >
        Use these free tools for quick, practical estimates about your
        dog's age, calorie needs, feeding amounts, puppy growth and body
        condition.
      </p>

      <p
        style={{
          lineHeight: 1.7,
        }}
      >
        Each calculator is designed to give you a useful starting point,
        not a one-size-fits-all answer. Your dog's breed, age, activity,
        health and body condition can all affect the result.
      </p>

      <div className="grid">
        {tools.map((tool) => (
          <Link
            className="card"
            href={`/tools/${tool.slug}`}
            key={tool.slug}
          >
            <span className="pill">FREE TOOL</span>

            <h2>{tool.name}</h2>

            <p>{tool.description}</p>

            <span className="btn">Use this tool</span>
          </Link>
        ))}
      </div>

      <section>
        <h2>Important note about these tools</h2>

        <p>
          Calculator results are general educational estimates. They
          should not be treated as a diagnosis or a personalized
          veterinary recommendation. This is especially important for
          puppies, senior dogs, pregnant or nursing dogs, dogs with
          medical conditions, and dogs experiencing sudden changes in
          weight, appetite or behavior.
        </p>
      </section>
    </main>
  );
}
