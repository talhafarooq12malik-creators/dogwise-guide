import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dogwise Guide",
  description:
    "Learn about Dogwise Guide, our approach to practical dog-care information, and how we handle health, safety and veterinary topics.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return (
    <main className="article">
      <div className="crumb">
        <Link href="/">Home</Link>
        {" / "}
        About
      </div>

      <span className="pill">ABOUT DOGWISE GUIDE</span>

      <h1>About Dogwise Guide</h1>

      <p
        style={{
          fontSize: "1.08rem",
          lineHeight: 1.75,
        }}
      >
        Dogwise Guide is an independent educational website created to
        make everyday dog-care information easier for dog owners to
        understand and use.
      </p>

      <p>
        Dog ownership comes with a lot of questions. What should a dog
        eat? How much exercise does a puppy need? Why is a dog suddenly
        behaving differently? Which foods are unsafe? Our goal is to
        provide clear starting points for these common questions without
        making the information unnecessarily complicated.
      </p>

      <h2>Our editorial approach</h2>

      <p>
        We focus on practical, people-first information rather than
        writing articles simply to target search engines. Our guides aim
        to answer the question a dog owner actually has, explain the
        important context, and make it clear when professional veterinary
        advice is more appropriate.
      </p>

      <p>
        When a topic involves health, nutrition, poisoning, safety or
        animal behavior, we prioritize established veterinary,
        scientific and animal-welfare sources where appropriate.
      </p>

      <h2>Accuracy matters</h2>

      <p>
        Dog-care information can vary depending on a dog's age, breed,
        size, activity level, body condition and health. For that reason,
        we avoid presenting general estimates as if they were exact
        medical instructions.
      </p>

      <p>
        Our calculators and educational tools are intended to help owners
        understand a topic and provide a useful starting point. They are
        not designed to diagnose disease or prescribe treatment.
      </p>

      <h2>What Dogwise Guide does not claim</h2>

      <p>
        Dogwise Guide is not a veterinary clinic and does not provide
        individualized veterinary care. We do not diagnose individual
        animals, prescribe medication or replace an examination by a
        veterinarian.
      </p>

      <p>
        If a dog is seriously ill, injured, poisoned, having difficulty
        breathing, experiencing a seizure or showing another emergency
        warning sign, contacting a veterinarian or emergency veterinary
        service should take priority over information found online.
      </p>

      <h2>How we improve the site</h2>

      <p>
        Dogwise Guide is intended to grow into a useful reference library
        rather than a collection of short pages created only for search
        traffic. We plan to expand existing topics, improve explanations,
        add useful tools and update information when reliable guidance
        changes.
      </p>

      <p>
        We also aim to keep the difference between published guides,
        planned topics and educational estimates clear so that readers
        know what they are looking at.
      </p>

      <h2>Learn more</h2>

      <p>
        For more information about how we approach sources, accuracy and
        updates, read our{" "}
        <Link href="/editorial-guidelines">
          editorial guidelines
        </Link>
        .
      </p>

      <p>
        You can also browse our{" "}
        <Link href="/tools">dog calculators and tools</Link> or return to
        the <Link href="/">Dogwise Guide home page</Link>.
      </p>
    </main>
  );
}
