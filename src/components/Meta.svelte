<script>
    export let title = "Manyun Zou, Data Storyteller";
    export let description = "I write, analyze, code, and design.";
    export let url = "https://manyunzou.github.io/";
    export let keywords= "Manyun Zou, Mandy Zou, reporter, data visualization, storyteller, the paper, caixin, caixinglobal";
    export let preloadFont = [];

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content="Manyun Zou" />
    <meta name="keywords" content={keywords} />

    <!-- facebook -->
    <meta property="og:title" content={title} />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="en_US" />

    <meta property="og:image" content="{url}/static/assets/socialmediaSHARE.png" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="600" />

    <!-- twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="{url}" />
    <meta name="twitter:creator" content="@Manyun_Zou" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image:src" content="{url}/assets/img/socialmediaSHARE.png" />

    <meta name="robots" content="max-image-preview:large" />

    <link rel="canonical" href="{url}/" />
    <!-- <link rel="icon" href="/assets/favicon.ico"> -->

    <!-- fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Limelight&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="/src/styles/bootstrap.min.css" rel="stylesheet">



    <style>
        body {
            background-color: var(--brown);
        }
    </style>

    {#each preloadFont as href}
        <link rel="preload" {href} as="font" type="font/woff2" crossorigin />
    {/each}
</svelte:head>