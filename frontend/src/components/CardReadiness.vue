<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const {checklist} = defineProps(['checklist'])

const navigateToChecklist = () => {
  router.push(`/checklist/${checklist.id}`)
}

</script>


<template>
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
</template>

<style lang="scss" scoped> 
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