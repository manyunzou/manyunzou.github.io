// // import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter({
// 		  fallback: 'index.html'
// 		}),
// 	}
// };

// export default config;

import { readFileSync } from "fs";
import adapter from "@sveltejs/adapter-static";

const { subdirectory } = JSON.parse(readFileSync("package.json", "utf8"));
const dev = process.env.NODE_ENV === "development";
const dir = subdirectory || "";
const prefix = dir.startsWith("/") ? "" : "/";
const base = dev || !dir ? "" : `${prefix}${dir}`;

// const dev = "production" === "development";

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter({
// 			fallback: '404.html'
// 		}),
// 		paths: {
// 			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
// 		}
// 	}
// };

const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
        }),
        prerender: {
            default: true,
        },
        trailingSlash: 'always',
        paths: {
            base: '/repo_name'
        }
    }
};

export default config;