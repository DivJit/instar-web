import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static'
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte'
import astro from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	site: 'https://instar.vercel.app',
	experimental: {
	  integrations: true,
	},
  integrations: [tailwind(), astro(),svelte()],
  vite:{
	ssr:{
		external:["svgo"]
	}
  }
});