import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

/**
 * Vite plugin that updates og:image and twitter:image meta tags
 * to point to the app's opengraph image.
 */
export function metaImagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-meta-images',
    transformIndexHtml(html) {
      // Prefer a local OpenGraph image in the client's public directory.
      const publicDir = path.resolve(process.cwd(), 'client', 'public');
      const candidates = ['opengraph.png', 'opengraph.jpg', 'opengraph.jpeg'];

      let found: string | null = null;
      for (const name of candidates) {
        if (fs.existsSync(path.join(publicDir, name))) {
          found = `/${name}`;
          break;
        }
      }

      if (!found) {
        // no local opengraph image — leave HTML unchanged
        return html;
      }

      const imageUrl = found;
      console.log('[meta-images] setting local meta image to', imageUrl);

      html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/g, `<meta property="og:image" content="${imageUrl}" />`);
      html = html.replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/g, `<meta name="twitter:image" content="${imageUrl}" />`);

      return html;
    },
  };
}
