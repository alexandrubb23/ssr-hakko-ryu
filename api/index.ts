import { readFileSync } from 'fs';
import { join } from 'path';
import type { VercelRequest, VercelResponse } from '@vercel/node';

import { render } from '../dist/server/entry-server'; // this is your Vite SSR entry

const indexHtml = readFileSync(
  join(__dirname, '../dist/client/index.html'),
  'utf-8'
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const appHtml = await render(req.url!); // or req.query.url if you prefer

    const html = indexHtml.replace(`<!--app-html-->`, appHtml.html);

    res.status(200).setHeader('Content-Type', 'text/html').send(html);
  } catch (e: any) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
}
