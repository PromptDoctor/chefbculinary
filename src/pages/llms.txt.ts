import type { APIRoute } from 'astro';
import { BUSINESS } from '../config/business';

export const GET: APIRoute = () => {
  const serviceList = BUSINESS.services
    .map((s) => `- ${s.name}: ${s.description}`)
    .join('\n');

  const areaList = BUSINESS.areaServed.join(', ');

  const hoursList = BUSINESS.hours
    .map((h) => `- ${h.days}: ${h.hours}`)
    .join('\n');

  const aboutLines: string[] = [];
  if (BUSINESS.foundingDate) aboutLines.push(`- Founded: ${BUSINESS.foundingDate}`);
  if (BUSINESS.founders?.length) aboutLines.push(`- Founders: ${BUSINESS.founders.join(', ')}`);
  aboutLines.push(`- Service area: ${areaList}`);
  aboutLines.push('');
  aboutLines.push(hoursList);

  const body = `# ${BUSINESS.name}

> ${BUSINESS.tagline}

${BUSINESS.description}

## Services

${serviceList}

## Contact

- Phone: ${BUSINESS.phone}
- Email: ${BUSINESS.email}
- Address: ${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}
- Website: ${BUSINESS.domain}

## About

${aboutLines.join('\n')}
`.trimEnd();

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
