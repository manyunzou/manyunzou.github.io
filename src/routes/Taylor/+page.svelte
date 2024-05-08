<script>
    import Rectplot from "/src/components/SwiftSongs.svelte";
    import Scatterplot from "/src/components/SwiftScatterplot.svelte";

    import Footer from "/src/components/Footer.svelte";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">

<section>
	<div class='hero'>
		<h1> 
			Is TTPD the Saddest Album of Taylor Swift?
		</h1>
		<h2>
			By Manyun Zou
		</h2>
	</div>

    <p class="main-text">I bet you can also feel the heartbreaking vibe from Taylor's latest album, The Tortued Poets Department (TTPD). And you might also ponder over the same question as mine: is this her saddest album?</p>

    <p class="main-text">Some of TTPD's songs have definitely made it to the ranking of Taylor's saddest songs. After all, she released this album after the breakup of a 6-year relationship. But surprisingly, according to computer judgment, which can be vastly different from human feelings, the saddest song overall comes from another popular album, 1989.</p>

    <p class="main-text">Here is the chart. As you can see, on the left end, which represents the most negative emotion scores, four songs come from 1989.</p>

    <div class="Section-container" style="margin-top:20px">
        <h2>Taylor Swift's Songs by Emotion</h2>
        <Rectplot />
    </div>

    <p class="main-text">The top 10 saddest songs are mostly from three albums, 1989, TTPD, and Lover:</p>

    <p class="main-text"><span style="text-decoration:underline 5px #B5E5F8">Shake It Off</span>, <span style="text-decoration:underline 5px #B5E5F8">This Love</span>, <span style="text-decoration:underline 5px #B5E5F8">I Wish You Would</span>, <span style="text-decoration:underline 5px #D30000">I Knew You Were Trouble</span>, <span style="text-decoration:underline 5px #000000">Down Bad</span>, <span style="text-decoration:underline 5px #000000">Cassandra</span>, <span style="text-decoration:underline 5px #B5E5F8">Bad Blood</span>, <span style="text-decoration:underline 5px #000000">The Albatross</span>, <span style="text-decoration:underline 5px #F7B0CC">Miss Americana & The Heartbreak Prince</span>, and <span style="text-decoration:underline 5px #F7B0CC">I Forgot That You Existed</span>.</p>

    <p class="main-text">What is more surprising is that Taylor's saddest album, judged by the computer, is none of these three. The chart below presents 11 studio albums released by Swift since 2006. The longer the bar is, the higher positive scores the album has. (Yes, overall, all Taylor's albums are positive.)</p>

    <p class="main-text">And the answer is: Folklore is the saddest album, and TTPD comes the next.</p>

    <Scatterplot />

    <p class="main-text">If you are interested in running the sentiment analysis, feel free to check my <a href='https://github.com/manyunzou/python_projects/tree/main/taylor-lyrics-sentiment' >Python script</a> here.</p>

</section>

<Footer />




<style>
	:global(body) {
        overflow-x: hidden;
        background-color: #f3f3f3;
        width: 80%;
        margin: 0 auto;
	}

    section {
        margin-bottom: 40px;
    }

	.hero {
		display: flex;
		place-items: center;
		flex-direction: column;
		justify-content: center;
		text-align: center;
        background-color: #f3f3f3;
	}

    .hero h1 {
        font-size: 50px;
        font-family: 'Roboto Mono', serif;
    }

    .hero h2 {
        font-size: 20px;
        margin-top: 0;
        font-weight: 500;
        font-family: "Quicksand", sans-serif;
    }


    .main-text {
        /* font-family: 'Lato'; */
        font-family: "Quicksand", sans-serif;
        font-size: 25px;
        margin: 0 auto;
        width: 60%;
        padding-top: 20px;
    }

    .main-text a{
        text-decoration:none;
        color: #000;
        background-color: #fff;
    }

    .main-text a:hover{
        background-color: #000;
        color: #fff;
    }

    .main-text a:visited{
        text-decoration:none;
    }

    .section-container {
        margin-top: 1em;
        text-align: center;
        transition: background 100ms;
        display: flex;
    }

    .Section-container p{
        font-size: 30px;
        margin: 0 auto;
        width: 50%;
    }

</style>

