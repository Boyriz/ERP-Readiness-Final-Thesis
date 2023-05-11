<script setup>
import LeftBar from '../components/leftbar/LeftBar.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
    <LeftBar />
    <div class="container">
        <header>
            <h1>About this Project</h1>
        </header>
        <hr>
        <main>
            <body>
                <div class="images">
                    <img src="https://mes-production-assets.s3.ap-southeast-1.amazonaws.com/blogs/JsSWaMcmHjVlLhZRhLYHxlSRLnLE3MbixIawgPvw.jpg" alt="">
                </div>
                <div class="card">
                    <p>
                        Pada penelitian ini, akan dilakukan evaluasi penggunaan ERP modul produksi yang digunakan oleh PT GMF Aero Asia, 
                        Tbk mengadopsi model IS Success dengan hasil atau output berupa aplikasi website. Tujuan dari penelitian ini adalah untuk mengukur 
                        tingkat kesiapan perusahaan dalam mengimplementasikan ERP khususnya pada modul produksi yang pada PT GMF Aero Asia, Tbk. Dengan dikembangkannya 
                        aplikasi ini, diharapkan mampu menjadi tools dalam pengukuran yang akurat ketika perusahaan ingin mengimplementasikan ERP.
                    </p>
                    <br>
                    <hr>
                    <h5>
                        Rayhan Rista
                    </h5>
                </div>
            </body>
        </main>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
    min-height: 100vh;
  }

  h1 {
    text-align: center;
    margin: 10px 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 35px;
  }

  main {
    margin-right: 1rem;
    margin-left: 1rem;
  }

  body {
    margin: 10px -2rem;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 0rem;
    background-color: transparent;

    img {
        box-shadow: 3px 3px 5px rgb(75, 75, 75);
    }

    .card {
        width: auto;
        overflow: hidden;
        align-self: center;
        background-color: rgb(230, 225, 225);
        border-radius: 4%;
        box-shadow: 5px 5px 7px rgb(75, 75, 75);
        margin-bottom: 35px;
        margin-right: 20px;
        margin-top: 10px;
        margin-left: 40px;
        padding-left: 25px;
        padding-top: 3px;
        padding-bottom: 5px;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        transition: .5s ease all;

        p {
            font-weight: normal;
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            text-align: justify;
            color: rgb(41, 41, 41);
            margin-left: -25px;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 20px;
        }

        h5 {
          font-weight: normal;
          text-align: center;
          font-size: 15px;
          color: rgb(68, 68, 68);
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    }
  }
</style>