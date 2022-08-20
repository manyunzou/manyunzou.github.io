<script>

</script>

<div class="container">
    <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="row headerRow">
                <span class="header-title">
                    <a class="header-title-link" href="https://manyunzou.github.io">Manyun Zou</a>
                </span>
                <div class="col header-col">
                    <a class="nav-item" href="/Resume">
                        Resume
                    </a>
                    <a class="nav-item" href="https://triviaonly.github.io/" target="_blank" style="margin-left:20px">
                        Side Projects
                    </a>
                </div>
            </div>
        </div>
    </header>
</div>


<style>
    .container {
        margin-bottom: 5%;
    }


    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-left: 1px;
    }

    .header-title-link {
        color: #000;
        text-decoration: none;
    }


    .nav-item {
        left: 30px;
        top: 30px;
        font-size: 14px;
        position: relative;
    }

    .nav-item a {
        color: #000;
        text-decoration: none;
    }

    .nav-item:visited {
        color: #000;
        text-decoration: none;
    }

    .nav-item:hover {
        color: #000;
        background-color: #fff;
        text-decoration: none;
    }


    .nav-item:visited {
        color: #000;
        text-decoration: none;
    }


    /* 
        media quiery 
    */

    @media screen and (min-width: 270px) {

        .blog-header {
            border-bottom: none;
            border-bottom: 1px solid #000000;
        }

        .header-title {
            font-size: 20px;
            font-weight: 800;
            font-family: 'Limelight', cursive;
            margin-left: 0px;
            width: 50%;
        }

        .headerRow {
            font-weight: 400;
            margin-left: 1px;
            /* margin-bottom: 20px; */
        }

        .header-col {
            width: 390px;
            left: -80px;
            bottom: 28px;
        }

    }


    @media screen and (min-width: 481px) {
        /* same with 270+ */
    }


    @media screen and (min-width: 767px) {
        .blog-header {
            /* width: 100%; */
            line-height: 1;
            border-bottom: 1px solid #000000;
        }

        .header-title {
            width: 60%;
            margin-left: 0px;
            font-size: 40px;
            font-weight: 800;
            font-family: 'Limelight', cursive;
        }

        .headerRow {
            font-weight: 400;
        }

        .header-col {
            width: 580px;
            left: -80px;
            bottom: 12px;
        }



    }

    @media screen and ( min-width: 1025px ){
        .blog-header {
            /* width: 100%; */
            line-height: 1;
            border-bottom: 1px solid #000000;
        }

        .header-title {
            width: 50%;
            margin-left: 0px;
            font-size: 50px;
            font-weight: 800;
            font-family: 'Limelight', cursive;
        }

        .headerRow {
            font-weight: 400;
        }

        .header-col {
            width: 500px;
            left: -80px;
            bottom: 5px;
        }
        
    }




</style>


