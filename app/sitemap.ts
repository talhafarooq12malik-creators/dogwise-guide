import type { MetadataRoute } from "next";
import { articles, categories, tools } from "../lib/content";
import { site } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const categoryUrls: MetadataRoute.Sitemap = categories.map(
    (category) => ({
      url: `${site.url}/category/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${site.url}/articles/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const toolUrls: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${site.url}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${site.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${site.url}/editorial-guidelines`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${site.url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },

    {
      url: `${site.url}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${site.url}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${site.url}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    ...categoryUrls,
    ...articleUrls,
    ...toolUrls,
  ];
}
