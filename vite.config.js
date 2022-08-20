import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	vite: {
		resolve: {
			alias: {
				"$styles": path.resolve("/src/styles")
			}
		}
	},
};



export default config;
