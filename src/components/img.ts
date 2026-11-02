import type { ImageMetadata } from 'astro';
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.jpg', { eager: true });
export const img = (name: string): ImageMetadata => {
  const f = files[`../assets/img/${name}.jpg`];
  if (!f) throw new Error(`Missing image ${name}`);
  return f.default;
};
