<script>
    import { getContext } from "svelte";
    import Header from "/src/components/Header.svelte";
    import Footer from "/src/components/Footer.svelte";
    import Quote from "/src/components/Quote.svelte";

    const copy = getContext("copy");
    const data = getContext("data");
    const components = {Quote};
</script>


<article>
    <Header />
    {#each copy.sections as { id, chunks }}
        <section {id}>
            {#each chunks as { type, text, component }}
                <svelte:element this={type}>
                    {#if text}
                        {@html text}
                    {:else}
                        <svelte:component this={components[component]}/>
                    {/if}
                </svelte:element>
            {/each}
        </section>
    {/each}
</article>


<Footer />

<style>
    article {
        padding: 0 16px;
        font-family: 'Roboto Slab', serif;
        background-color: var(--brown);
    }

    #intro {
        width: 70%;
        font-size: 18px;
        color: var(--gray-dark);
        margin-bottom: 30px;
        padding-right: 15px;
        padding-left: 15px;

    }

    #works {
        width: 70%;
        margin: 0 auto;
        padding-right: 15px;
        padding-left: 15px;
    }

    @media screen and (min-width: 270px) {
       #works {
           margin-left: 0px;
           padding-left: 0px;
       }
    }


    @media screen and (min-width: 481px) {
        #intro {
            width: 100%;
        }

        #works {
            width: 100%;
            margin-left: 65px;
            padding-left: 0px;
        }

    }

    @media screen and (min-width: 769px) {
        #intro {
            padding-left: 25px;
        }

        #works {
            width: 100%;
            margin-left: 65px;
            padding-left: 10px;
        }

    }

    @media screen and ( min-width: 1025px ){
        #intro {
            width: 70%;
            margin: 0 auto;
        }

        #works {
            width: 70%;
            margin: 0 auto;
        }

    }


</style>