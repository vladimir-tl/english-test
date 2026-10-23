import type { APIRoute } from 'astro';
import { execFileSync } from 'node:child_process';
import { languages, type Lang } from '../i18n/ui';
import { allTopics } from '../data/topics';
import { listeningTasks } from '../data/listening';

const langs = Object.keys(languages) as Lang[];

const git = (...args: string[]) => execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });

// lastmod comes from git history. Cloudflare Workers Builds clones the repo shallow, so the history is
// fetched first; if that fails, the dates would be wrong and the sitemap is built without lastmod.
const hasHistory = (() => {
  try {
    if (git('rev-parse', '--is-shallow-repository').trim() === 'true') git('fetch', '--unshallow', '--quiet');
    return git('rev-parse', '--is-shallow-repository').trim() === 'false';
  } catch {
    return false;
  }
})();

/** Last commit time of a file, in seconds. */
const fileTime = (file: string) => Number(git('log', '-1', '--format=%ct', '--', file).trim()) || 0;

/**
 * Last change of each topic / listening task in a data file: the newest line in its block,
 * from the line with its slug up to the next slug. Editing one topic doesn't move the date of the others.
 */
const blockTimes = (file: string) => {
  const times = new Map<string, number>();
  let slug = '';
  let time = 0;
  for (const line of git('blame', '--line-porcelain', '--', file).split('\n')) {
    if (line.startsWith('committer-time ')) time = Number(line.slice(15));
    else if (line.startsWith('\t')) {
      slug = line.match(/^\s+slug: '([^']+)'/)?.[1] ?? slug;
      if (slug) times.set(slug, Math.max(times.get(slug) ?? 0, time));
    }
  }
  return times;
};

const lastmods = (): Record<string, number> => {
  const ui = fileTime('src/i18n/ui.ts');
  const page = (template: string, ...data: string[]) => Math.max(ui, ...[template, ...data].map(fileTime));
  const topics = blockTimes('src/data/topics.ts');
  const listening = blockTimes('src/data/listening.ts');
  const topicPage = fileTime('src/pages/[lang]/topics/[slug].astro');
  const listeningPage = fileTime('src/pages/[lang]/listening/[slug].astro');
  return {
    '': page('src/pages/[lang]/index.astro'),
    '/test': page('src/pages/[lang]/test.astro', 'src/data/questions.ts'),
    '/listening': page('src/pages/[lang]/listening/index.astro', 'src/data/listening.ts'),
    ...Object.fromEntries(listeningTasks.map((x) => [`/listening/${x.slug}`, Math.max(ui, listeningPage, listening.get(x.slug) ?? 0)])),
    '/topics': page('src/pages/[lang]/topics/index.astro', 'src/data/topics.ts'),
    ...Object.fromEntries(allTopics.map(({ topic }) => [`/topics/${topic.slug}`, Math.max(ui, topicPage, topics.get(topic.slug) ?? 0)])),
  };
};

export const GET: APIRoute = ({ site }) => {
  const times = hasHistory ? lastmods() : {};
  const paths = ['', '/test', '/listening', ...listeningTasks.map((x) => `/listening/${x.slug}`), '/topics', ...allTopics.map(({ topic }) => `/topics/${topic.slug}`)];
  const abs = (p: string) => new URL(p, site).href;
  const lastmod = (path: string) => (times[path] ? `<lastmod>${new Date(times[path] * 1000).toISOString().slice(0, 10)}</lastmod>` : '');
  const alternates = (path: string) =>
    [
      ...langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(`/${l}${path}`)}"/>`),
      `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(`/ru${path}`)}"/>`,
    ].join('');
  const urls = paths.flatMap((path) =>
    langs.map((l) => `<url><loc>${abs(`/${l}${path}`)}</loc>${lastmod(path)}${alternates(path)}</url>`),
  );
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
