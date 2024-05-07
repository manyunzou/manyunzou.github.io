<script>
    import "/src/styles/bootstrap.min.css";

    import { setContext } from "svelte";
    // import { browser } from "$app/env";
    import { onMount } from "svelte";
    import Meta from "/src/components/Meta.svelte";
    import App from "/src/components/App.svelte";
    import * as d3 from 'd3';

    import copy from "/src/data/copy.json";
    import data from "/src/data/data.js";

    
    const preloadFont = [];
    const { title, description, url, keywords } = copy;
    
    setContext("copy", copy)
    setContext("data", data)


</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<App />