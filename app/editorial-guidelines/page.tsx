import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Guidelines",
  description:
    "Learn how Dogwise Guide approaches sources, accuracy, health claims, corrections and content quality.",
  alternates: {
    canonical: "/editorial-guidelines",
  },
};

export default function Page() {
  return (
    <main className="article">
      <div className="crumb">
        <Link href="/">Home</Link>
        {" / "}
        Editorial Guidelines
      </div>

      <span className="pill">EDITORIAL GUIDELINES</span>

      <h1>Editorial Guidelines</h1>

      <p
        style={{
          fontSize: "1.08rem",
          lineHeight: 1.75,
        }}
      >
        Dogwise Guide aims to publish useful, accurate and clearly
        written information for dog owners. Our goal is to answer real
        questions rather than create pages simply to attract search
        traffic.
      </p>

      <h2>People-first content</h2>

      <p>
        We write with the needs of dog owners in mind. Articles should
        provide a clear answer, useful context and practical information
        rather than unnecessary repetition or keyword-filled text.
      </p>

      <p>
        We also aim to keep important limitations visible. A general
        recommendation should not be presented as though it applies
        identically to every dog.
      </p>

      <h2>Sources</h2>

      <p>
        For health, nutrition, poisoning, safety and behavior topics, we
        prioritize reliable sources such as veterinary organizations,
        animal-welfare organizations, professional associations,
        scientific research and established educational resources.
      </p>

      <p>
        Sources are included when they provide important supporting
        information or give readers a useful place to learn more.
      </p>

      <h2>Health and safety information</h2>

      <p>
        Dog health information requires particular care. We do not
        present online information as a diagnosis, prescription or
        substitute for veterinary examination.
      </p>

      <p>
        When a situation could represent an emergency, such as
        poisoning, serious injury, breathing difficulty, seizures or
        another potentially life-threatening problem, readers should be
        directed toward timely professional veterinary help.
      </p>

      <h2>Calculators and estimates</h2>

      <p>
        Our calculators are educational tools. They use general formulas
        or guidelines to produce starting estimates, but an individual
        dog's needs can be different.
      </p>

      <p>
        Factors such as age, breed, size, activity, body condition,
        pregnancy, medical conditions and medications can affect a dog's
        needs. Calculator results should therefore not be treated as
        personalized veterinary prescriptions.
      </p>

      <h2>Authors and credentials</h2>

      <p>
        We do not claim that a writer, reviewer or member of the Dogwise
        Guide team is a veterinarian, veterinary technician, nutritionist
        or other qualified professional unless that person genuinely
        holds the stated credentials.
      </p>

      <p>
        We believe being transparent about qualifications is more
        important than using impressive-sounding titles to make content
        appear more authoritative.
      </p>

      <h2>Corrections and updates</h2>

      <p>
        Reliable information can change as research and professional
        guidance develop. We aim to review important information and
        correct factual errors when they are identified.
      </p>

      <p>
        If you notice an important factual problem, outdated information
        or an incorrect source, please report it through our{" "}
        <Link href="/contact">Contact page</Link> so the relevant
        material can be reviewed.
      </p>

      <h2>Originality and content quality</h2>

      <p>
        We aim to create original explanations and useful resources
        rather than simply rewriting information from other websites.
        External sources are used for research and verification, while
        the final presentation is written for Dogwise Guide readers.
      </p>

      <p>
        We do not intentionally introduce grammar mistakes, factual
        errors or awkward wording to make content appear less
        sophisticated. Natural writing and accuracy are both important
        parts of our editorial standard.
      </p>

      <h2>Our commitment</h2>

      <p>
        The purpose of these guidelines is simple: publish information
        that is genuinely useful to dog owners, be honest about
        limitations, use reliable sources and improve the site when
        better information becomes available.
      </p>
    </main>
  );
}
