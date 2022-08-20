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


import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
						assets: "docs",
						fallback: "index.html",
        }),
    }
};

export default config;