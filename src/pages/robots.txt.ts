import type { APIRoute } from 'astro';
import { BUSINESS } from '../config/business';

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${BUSINESS.domain}/sitemap-index.xml`,
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
