<script>
    import { getContext, onMount } from "svelte";
    import * as d3 from 'd3';

    const data = getContext("data");
</script>

<div class="container legend-box">
    <div class="row">
        <span class="col-6 col-sm-2"><img src="/assets/icons/english.png" width="15px">English</span>
        
        <span class="col-6 col-sm-2 legend02"><img src="/assets/icons/chinese.png" width="15px" style="margin-left: 15px">Chinese</span>
    </div>
</div>
<div class="container featureBody">
	{#each data as { no, name, bref, url, process, language, python,js, excel, illustrator }, i}
		<div class="row featureRow">
			<div class="col-md-">
				<a href={url} target="_blank">
					<img class="img-fluid" src="/assets/features/{no}.png" alt="image" width="300">
				</a>
			</div>
			<div class="col feature-wrap">
				<span style="margin-bottom: 20px; margin-top:0px">
					<a class="feature-title" href={url} target="_blank">{name}</a>
                    {#if language == "eng"}
                        <img src="/assets/icons/english.png" alt="english-icon" width="15px">
                    {:else}
                        <img src="/assets/icons/chinese.png" alt="chinese-icon" width="15px">
                    {/if}
				<br/>
					<!-- <span class="feature-text">{date}</span> -->
				<!-- <br/> -->
				<span class="feature-text">{bref}</span>
                <br/>
                <span class="feature-roles" style="font-style:italic">{process}</span>
                <br/>
                {#if python == "y"}
                    <img src="/assets/icons/icon-python.png" alt="python-icon" width="70px" margin-top="10px">
                {/if}
                {#if excel == "y"}
                    <img src="/assets/icons/icon-excel.png" alt="python-icon" width="70px" margin-top="10px">
                {/if}
                {#if js == "y"}
                    <img src="/assets/icons/icon-js.png" alt="python-icon" width="70px" margin-top="10px">
                {/if}
                {#if illustrator=="y"}
                    <img src="/assets/icons/icon-illustrator.png" alt="python-icon" width="70px" margin-top="10px">                                     
                {/if}
				<br/>
				</span>
			</div>
		</div>

	{/each}
</div>


<style>
/* 
    body content
*/


/* 
    feature rows 
*/

.featureRow .col-md- img {
    border: 2px solid #021a40;
}

/* feature text align bottom */
.feature-wrap{
    display: flex;
}

.feature-wrap span{
    align-self: flex-end;
}

.feature-title {
	color: #000;
    font-size: 20px;
    font-weight: 600;
}

.feature-title:hover {
	color: #000;
	background-color: #fff;
	text-decoration: none;
}

.feature-text {
	color: var(--gray-dark);
}

.feature-roles {
    color: var(--gray);
}


/* 
    media quiery 
*/


@media screen and (min-width: 270px) {
    .legend02 {
        padding-left: 0px;
    }

    .feature-wrap {
        padding-left: 0px;
		margin-left: 0px;
    }

    .feature-wrap span{
        align-self: flex-end;
        margin-top: 20px
    }

    .feature-title {
        font-size: 18px;
        font-weight: 600;
    }

    .featureRow{
        width: 100%;
        margin-left: 0px;
        margin-top: 10px;
    }

}



@media screen and (min-width: 481px) {
    .legend-box {
        margin-top: 40px;
        margin-left: -65px;
    }

    .featureRow {
        margin-left: 20px;
    }


	.col{
		flex-basis: auto;
	}

    .feature-wrap {
        padding-left: 0px;
    }

    .feature-wrap span{
        align-self: flex-end;
        margin-top: 20px
    }

    .feature-title {
        font-size: 18px;
        font-weight: 600;
    }

    .featureBody {
        margin-left: -85px;
    }

}


@media screen and (min-width: 769px) {
    .legend-box {
        margin-top: 40px;
        margin-left: -65px;
    }

    .featureRow {
        margin-left: 20px;
    }

    .feature-wrap {
        padding-left: 0px;
		margin-left: 0px;
    }

    .feature-wrap span{
        align-self: flex-end;
        margin-top: 20px;
    }

    .feature-title {
        font-size: 18px;
        font-weight: 600;
    }

}

@media screen and ( min-width: 1025px ){

    .legend-box {
        margin-top: 40px;
        margin-left: 0px;
    }


    .featureBody {
        margin-top: -60px;
        margin-bottom: 100px;
        margin-left: -20px;
        padding-left: 0px;
        font-size: 15px;
        line-height: 22px;
    }


	.feature-wrap {
		 margin-left: 20px;
    }

	.feature-wrap span {
		margin-bottom: 30px;
    }
    
    .featureRow{
        width: 100%;
        margin-left: 20px;
        margin-top: 80px;
    }

    .featureBody {
        margin-left: -8px;
    }

    .col{
		flex-basis: 0;
	}

}


</style>