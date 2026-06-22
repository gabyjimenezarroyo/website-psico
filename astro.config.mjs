import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://gabrielajimenezpsicologia.com",
  integrations: [react(), mdx(), sitemap()],
  output: "static",
  adapter: cloudflare(),
});