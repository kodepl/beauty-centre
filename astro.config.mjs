import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://www.beautycentre.pl",
  trailingSlash: "always",
  compressHTML: true,
  markdown: { rehypePlugins: [rehypeSlug] },
  integrations: [tailwind()],
});
