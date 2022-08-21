<script>
    import * as d3 from 'd3';

    import Meta from "/src/components/Meta.svelte";
    import App from "/src/components/App.svelte";

    import Header from "/src/components/Header.svelte";
    import Footer from "/src/components/Footer.svelte";
    import Resumes from "/src/components/Resumes.svelte";

    import resume_data from "/src/data/resume-data.js";
    import award_data from "/src/data/awards-data.js";
</script>

<Header />


<div class="container job-container">
    <h2>Contact</h2>
    <div class="row contact-container">
        <div class="col-md-8">
            <span class="social-button"><img src="/assets/icons/fake-twitter.png" width="20px" style="margin-right: 5px"><a href="https://twitter.com/Manyun_Zou">Twitter</a></span>
            <span class="social-button"><img src="/assets/icons/fake-linkedin.png" width="20px" style="margin-right: 5px"><a href="https://www.linkedin.com/in/manyun-mandy-zou-09580bb5/">LinkedIn</a></span>
            <span class="social-button"><img src="/assets/icons/fake-email.png" width="20px" style="margin-right: 5px"><a href="mailto:manyunzou@gmail.com">Email</a></span>
        </div>
    </div>


    <h2>Job Experience</h2>
    {#each resume_data as { no,title,company,time,location,duty01,duty02,duty03,duty04,duty05 }, i}
        <div class="row">

            <div class="col-md-8 job-title">{title} | {company}</div>
            <div class="col-6 col-md-4 job-time">{time}</div>

            
            <p class="col-md-8 job-loc">{location}</p>

            <ul class="duty-list">
                <li>{duty01}</li>
                <li>{duty02}</li>

                {#if duty03 != ""}
                    <li>{duty03}</li>
                {/if}

                {#if duty04 != ""}
                    <li>{duty04}</li>
                {/if}

                {#if duty05 != ""}
                    <li>{duty05}</li>
                {/if}
            </ul>
        </div>
    {/each}


    <h2>Awards and Fellowships</h2>
    <div class="awards-container">
        {#each award_data as { award, detail }}
            <p><span class="awards-name">{award} -- </span>{detail}</p>
        {/each}
    </div>




</div>


<Footer />

<style>
    .contact-container {
        margin-bottom: 50px;
    }

    .social-button a {
        margin-right: 30px;
        color: var(--gray-dark);
        text-decoration: none;
    }


    .social-button:visited {
        color: var(--gray-dark);
        text-decoration: none;
    }

    .social-button:hover {
        color: var(--gray-dark);
        background-color: #fff;
        text-decoration: none;
    }


    .social-button:visited {
        color: var(--gray-dark);
        text-decoration: none;
    }


    .job-container {
        width: 50%;
        font-family: 'Roboto Slab', serif;
    }


    .job-title {
        font-weight: 700;
    }

    .job-loc {
        color: var(--secondary);
        margin-bottom: 20px;
    }

    .duty-list {
        font-weight: 400;
        color: var(--gray-dark);
        margin-bottom: 40px;
    }

    .duty-list li {
        margin-bottom: 5px;
    }

    .awards-container {
        margin-left: -10px;
        margin-bottom: 50px;
    }

    .awards-name {
        font-weight: 700;
        margin-bottom: 0;
        margin-left: 10px;
    }



    /* media query */

    @media screen and (min-width: 270px) {

        .job-container {
            width: 100%;
        }

    }


    @media screen and (min-width: 481px) {
        .job-container {
            width: 80%;
        }
    }


    @media screen and (min-width: 767px) {
        .job-container {
            width: 50%;
        }
    }

</style>