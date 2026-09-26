import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://english-test.ee',
  // Clean URLs without a trailing slash: /ru/topics is served from ru/topics.html on Cloudflare Pages.
  trailingSlash: 'never',
  build: { format: 'file' },
  // The / -> /ru redirect lives in public/_redirects; defining it here too makes
  // the Cloudflare build emit a duplicate rule and the deploy fails.
});
