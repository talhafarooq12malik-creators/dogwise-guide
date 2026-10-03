export const site = {
  name: "Dogwise Guide",
  description:
    "Clear, practical dog-care guides covering health, safety, nutrition, behavior, training, grooming, breeds, puppies and useful calculators.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://dogwise-guide.netlify.app").replace(/\/$/, ""),
  locale: "en_US",
};
