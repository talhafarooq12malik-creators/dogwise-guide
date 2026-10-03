import type { MetadataRoute } from "next";
import { articles, categories, tools } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/editorial-guidelines`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${site.url}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/tools`, changeFrequency: "monthly", priority: 0.8 },
  ];
  return [
    ...pages,
    ...categories.map((x) => ({ url: `${site.url}/category/${x.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...articles.map((x) => ({ url: `${site.url}/articles/${x.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...tools.map((x) => ({ url: `${site.url}/tools/${x.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
