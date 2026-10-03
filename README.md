# Dogwise Guide

A Next.js 15 dog-care education site with articles, topic pages and simple educational calculators.

## Deploy on Netlify

1. Put this project in a GitHub repository.
2. In your Netlify account choose **Add new project → Import an existing project**.
3. Select the GitHub repository.
4. Netlify should detect Next.js automatically. The project also includes `netlify.toml` with the build command.
5. After the Netlify site is created, set the environment variable `NEXT_PUBLIC_SITE_URL` to the exact public site URL, including `https://` and no trailing slash.
6. Redeploy after setting the variable.

## Before launch

- Add the site's real contact email to `app/contact/page.tsx`. Do not publish a made-up email address.
- If analytics, advertising, forms, cookies or other data-collecting services are added, update `app/privacy/page.tsx` to describe what is actually used.
- Review every health/safety article against current authoritative sources before publishing.
- If you later use a custom domain, change `NEXT_PUBLIC_SITE_URL` to that exact domain and redeploy.

## SEO included

- Canonical URLs
- XML sitemap
- robots.txt
- Page titles and descriptions
- Open Graph metadata
- Article, breadcrumb, collection-page and web-application structured data
- Noindex for internal search results
- Helpful-content/editorial guidance pages
- Clean internal linking
- Basic security headers

No SEO implementation can guarantee a ranking position or a 100% score in a third-party audit. Google recommends people-first content, clear site purpose, accessible pages and valid structured data; Search Console should be used after launch to validate the live site.
