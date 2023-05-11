<script setup>
import Navbar from "../components/Navbar.vue";
import LeftBar from "../components/leftbar/LeftBar.vue";
import Footer from "../components/Footer.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import checklist from  "../json/checklist.json";
import axios from "axios";

const route = useRoute()
const check = checklist.find(c => c.id === parseInt(route.params.id))

const checklisted = ref(null)




axios.get(`http://localhost:3000/api/readiness/${route.params.type}/${route.params.id}`)
  .then(response => {
    checklisted.value = response.data
  })
  .catch(error => {
    console.error(error)
  })

</script>

<template>
  <div v-if="checklisted">
      <Navbar />
      <LeftBar />
      <div class="container">
          <main>
              <header>
                  <h1>{{ check.name }}</h1>
              </header>
              <body>
                <div class="readiness-container">
                  <div class="card">
                      <div class="card-text">
                          <h2>Indicator #1</h2>
                          <p>Weight: ...</p>
                      </div>
                  </div>
                  <div class="readiness-results">
                      <div class="table">
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                      <th>Maturity Level</th>
                                      <th>Explanation</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>defined</td>
                                      <td>proses bisnis sudah mulai terintegrasi namun belum sesuai dengan standar</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="card">
                      <div class="card-text">
                          <h2>Indicator #2</h2>
                          <p>Weight: ...</p>
                      </div>
                  </div>
                  <div class="readiness-results">
                      <div class="table">
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                      <th>Maturity Level</th>
                                      <th>Explanation</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>defined</td>
                                      <td>proses bisnis sudah mulai terintegrasi namun belum sesuai dengan standar</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="card">
                      <div class="card-text">
                          <h2>Indicator #3</h2>
                          <p>Weight: ...</p>
                      </div>
                  </div>
                  <div class="readiness-results">
                      <div class="table">
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                      <th>Maturity Level</th>
                                      <th>Explanation</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>defined</td>
                                      <td>proses bisnis sudah mulai terintegrasi namun belum sesuai dengan standar</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="card">
                      <div class="card-text">
                          <h2>Indicator #4</h2>
                          <p>Weight: ...</p>
                      </div>
                  </div>
                  <div class="readiness-results">
                      <div class="table">
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                      <th>Maturity Level</th>
                                      <th>Explanation</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>defined</td>
                                      <td>proses bisnis sudah mulai terintegrasi namun belum sesuai dengan standar</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="card">
                      <div class="card-text">
                          <h2>Indicator #5</h2>
                          <p>Weight: ...</p>
                      </div>
                  </div>
                  <div class="readiness-results">
                      <div class="table">
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                      <th>Maturity Level</th>
                                      <th>Explanation</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>defined</td>
                                      <td>proses bisnis sudah mulai terintegrasi namun belum sesuai dengan standar</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="table-results">
                      <table class="table table-striped">
                          <thead>
                          <tr>
                              <th>Score</th>
                              <th>Average Score</th>
                              <th>Maturity Level</th>
                          </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>...</td>
                                  <td>...</td>
                                  <td>...</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              </body>
          </main>
      </div>
    <Footer />  
  </div>
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
  }

  main {
    margin-right: -11rem;
    margin-left: 1rem;
  }

  header {
    margin: 10px 5px;
    display: flex;
    justify-self: center;
    font-size: 20px;
    font-style: italic;
  }


  header h1 {
    font-weight: bold;
    margin-left: -15px;
    margin-right: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  body {
    margin: 10px -20px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 0;
    background-color: transparent;
  }

  body h2 {
    font-weight: bold;
    margin-left: 5px;
    margin-right: 30px;
    margin-top: 10px;
    font-size: 28px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  body p {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: rgb(139, 138, 138);
    margin-left: -25px;
    font-size: 20px;
  }

  .readiness-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;

    .card {
        width: 210px;
        overflow: hidden;
        align-self: center;
        background-color: rgb(233, 233, 233);
        border-radius: 7%;
        box-shadow: 12px 10px 20px grey;
        margin-bottom: 35px;
        margin-right: 20px;
        padding-left: 25px;
        padding-top: 3px;
        padding-bottom: 5px;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        transition: .5s ease all;
        
        &:hover {
        transform: rotateZ('-20deg') scale(0.02);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .card .card-text {
            padding: 0 5px;
            justify-content: center;
        }

        .card .card-text h2 {
            font-weight: bold;
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
            color: rgb(0, 0, 0);
        }
        .card .card-text p {
            font-weight: bold;
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
            color: rgb(0, 0, 0);
            margin-left: -25px;
            font-size: 20px;
        }
    }
    .readiness-results {
        width: 750px;
        overflow: hidden;
        border-radius: 4%;
        box-shadow: 12px 10px 20px grey;
        margin-bottom: 35px;
        margin-right: 20px;
        padding-bottom: 20px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
        flex-direction: column;
        background-color: transparent;

        .table {
            margin-top: 20px;
            
            table {
                width: 100%;
                border-collapse: collapse;
                th, td {
                    padding: 15px;
                    text-align: left;
                    border-bottom: 1px solid transparent;
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
                    background-color: transparent;
                }
                tbody tr:hover {
                    background-color: #ebebeb;
                }
            }
        }
    }
    .table-results {
        margin-top: 50px;
        margin-left: 19rem;
        box-shadow: 12px 10px 20px grey;
        
        table {
            width: 100%;
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
</style>