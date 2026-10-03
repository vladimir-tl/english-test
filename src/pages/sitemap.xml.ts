import type { APIRoute } from 'astro';
import { languages, type Lang } from '../i18n/ui';
import { allTopics } from '../data/topics';
import { listeningTasks } from '../data/listening';

const langs = Object.keys(languages) as Lang[];
const paths = ['', '/test', '/listening', ...listeningTasks.map((x) => `/listening/${x.slug}`), '/topics', ...allTopics.map(({ topic }) => `/topics/${topic.slug}`)];

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const alternates = (path: string) =>
    [
      ...langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(`/${l}${path}`)}"/>`),
      `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(`/ru${path}`)}"/>`,
    ].join('');
  const urls = paths.flatMap((path) =>
    langs.map((l) => `<url><loc>${abs(`/${l}${path}`)}</loc>${alternates(path)}</url>`),
  );
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
