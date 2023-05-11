<script setup>
import NavBar from "../components/NavBar.vue";
import LeftBar from "../components/leftbar/LeftBar.vue";
import Footer from "../components/Footer.vue";
import Chart from "../components/Chart.vue";
import PieChart from "../components/PieChart.vue";
import Recommendation from "../components/Recommendation.vue"
import { useRoute } from 'vue-router';

const route = useRoute();
const redirect = route.query.redirect || null;


</script>

<template>
<LeftBar />
    <div v-if="redirect">
      <p>You must log in first</p>
      <router-link :to="{ name: 'login', query: { redirect: redirect }}">
        Log in
      </router-link>
    </div>
    <div class="container">
        <header>
            <h1 class="headline">Readiness Dashboard Analytics</h1>
        </header>
        <hr>
        <main>
            <body>
                <div class="chart-line">
                    <Chart />
                </div>
                <div class="chart-round">
                    <PieChart />
                </div>
            </body>
            <div class="recommendation">
                <Recommendation />
            </div>
        </main>
    </div>
<Footer />
</template>

<style lang="scss" scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
    min-height: 50vh;
  }

  header {
    text-align: center;
    margin: 0 auto;
    width: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 35px;
    margin: 10px 3px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 11rem;
    background-color: transparent;
  }

  main {
    margin-right: -11rem;
    margin-left: -10rem;
  }

  header {
    margin: 10px 5px;
    display: flex;
    justify-self: center;
    font-size: 20px;
    font-style: italic;
  }

  body {
    margin: 10px -20px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 0;
    background-color: transparent;

    .chart-line {
        width: 700px;
        height: 450px;
        overflow: hidden;
        border-radius: 7%;
        box-shadow: 5px 5px 7px rgb(75, 75, 75);
        margin-bottom: 35px;
        margin-right: 20px;
        padding-left: 12px;
        padding-right: 12px;
        cursor: pointer;
        flex-direction: column;
        background-color: whitesmoke;
    }

    .chart-round {
        width: 500px;
        height: 550px;
        overflow: hidden;
        border-radius: 7%;
        box-shadow: 5px 5px 7px rgb(75, 75, 75);
        margin-bottom: 35px;
        margin-right: 20px;
        padding-left: 12px;
        padding-right: 12px;
        position: absolute;
        bottom: 35.2rem;
        right: 13rem;
        left: 33rem;
        transform: translate(50%, 50%);
        cursor: pointer;
        flex-direction: column;
        background-color: whitesmoke;
    }

    .recommendation {
        flex-wrap: wrap;
        margin-top: 10px;
        margin-bottom: 30px;
        margin-left: -20px;
        bottom: 12rem;
    }

    .table {
      margin-top: 20px;
      box-shadow: 5px 5px 7px rgb(75, 75, 75);
      
      table {
        width: 53%;
        
        border-collapse: collapse;
        th, td {
          padding: 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: rgb(28, 28, 128);
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #fff;
        }
        tr:last-child td {
          border-bottom: none;
        }
        tbody tr:nth-child(odd) {
          background-color: #f5f5f5;
        }
        tbody tr:hover {
          background-color: #ebebeb;
        }
      }
    }
  }

  body h2 {
    font-weight: bold;
    margin-left: 5px;
    margin-right: 30px;
    margin-top: 10px;
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }


</style>