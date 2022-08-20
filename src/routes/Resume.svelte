<script>
    import "/src/styles/bootstrap.min.css";
    import { getContext } from "svelte";

    import Meta from "/src/components/Meta.svelte";
    import App from "/src/components/App.svelte";
    import * as d3 from 'd3';

    import Header from "/src/components/Header.svelte";
    import Footer from "/src/components/Footer.svelte";
    import Resumes from "/src/components/Resumes.svelte";

    import copy from "/src/data/copy.json";
    const preloadFont = [];
    const { title, description, url, keywords } = copy;

</script>

<Meta {title} {description} {url} {preloadFont} {keywords}/>
<Resumes />