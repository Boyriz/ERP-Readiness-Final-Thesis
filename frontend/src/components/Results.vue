<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const { numberOfInitial, numberOfRepeatable, numberOfDefined, numberOfManaged, numberOfOptimized, levelOfSelected, result } = defineProps({
  numberOfInitial: String,
  numberOfRepeatable: String,
  numberOfDefined: String,
  numberOfManaged: String,
  numberOfOptimized: String,
  levelOfSelected: String,
  result: Array,
});

const role = ref('');

const router = useRouter();
const state = reactive({
  numberOfInitial,
  numberOfRepeatable,
  numberOfDefined,
  numberOfManaged,
  numberOfOptimized,
  readinessData: null,
});

function calculateMaturityLevel(averageScore) {
  if (averageScore >= 10 && averageScore <= 24) {
    return "INITIAL";
  } else if (averageScore >= 25 && averageScore <= 29) {
    return "REPEATABLE";
  } else if (averageScore >= 30 && averageScore <= 34) {
    return "DEFINED";
  } else if (averageScore >= 35 && averageScore <= 39) {
    return "MANAGED";
  } else if (averageScore >= 40) {
    return "OPTIMIZED";
  } else {
    return "Unknown";
  }
}

function calculateScoreStats(result) {
  const scoreByNumber = {};
  let totalScore = 0;

  result.forEach(r => {
    if (!scoreByNumber[r.number]) {
      scoreByNumber[r.number] = 0;
    }
    scoreByNumber[r.number] += Number(r.score);
    totalScore += Number(r.score);
  });

  const numScores = Object.keys(scoreByNumber).length;
  const avgScore = totalScore / numScores;
  const maturityLevel = calculateMaturityLevel(avgScore);

  return { totalScore, avgScore, maturityLevel };
}

const { totalScore, avgScore } = calculateScoreStats(result);


const submitResults = async () => {
  try {
    const userId = localStorage.getItem('user');
    const { totalScore, avgScore, maturityLevel } = calculateScoreStats(result);
    
    let roleIsEmpty = !role.value;

    if (roleIsEmpty) {
      alert('You have to fill the role first');
      return;
    }

    const response = await axios.post('http://localhost:3000/api/readiness/', {
      userId,
      result: result.map((r, index) => ({ ...r, number: index + 1 })),
      numberOfInitial: state.numberOfInitial,
      numberOfRepeatable: state.numberOfRepeatable,
      numberOfDefined: state.numberOfDefined,
      numberOfManaged: state.numberOfManaged,
      numberOfOptimized: state.numberOfOptimized,
      totalScore,
      avgScore,
      maturityLevel,
      role: role.value
    });

    console.log(response);
    state.readinessData = response.data.data;

    // Save readinessData to local storage
    localStorage.setItem('readinessData', JSON.stringify(state.readinessData));
    
    // Update the result prop with the new result and recalculate score statistics
    result.push(...response.data.data.result.map(r => ({ ...r, score: String(r.score) })));
    const { totalScore: newTotalScore, avgScore: newAvgScore, maturityLevel: newMaturityLevel } = calculateScoreStats(result);

    // Update the reactive state with the new score statistics
    state.totalScore = newTotalScore;
    state.avgScore = newAvgScore;
    state.maturityLevel = newMaturityLevel;
    
    if (!roleIsEmpty) {
      alert('Results have been saved successfully!');
      router.push('/');
    }
  } catch (error) {
    console.error(error);
  }
};

</script>

<template>
  <div class="results">
    <p>Your Answer</p>
    <div class="table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Indicator</th>
            <th>Maturity Level</th>
            <th>Score</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, index) in result" :key="r.number">
            <td>{{ index + 1 }}</td>
            <td>{{ r.indicator }}</td>
            <td>{{ r.level }}</td>
            <td>{{ r.score }}</td>
            <td>{{ r.type }}</td>
          </tr>
        </tbody>
      </table>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>INITIAL</th>
            <th>REPEATABLE</th>
            <th>DEFINED</th>
            <th>MANAGED</th>
            <th>OPTIMIZED</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ numberOfInitial }}</td>
            <td>{{ numberOfRepeatable }}</td>
            <td>{{ numberOfDefined }}</td>
            <td>{{ numberOfManaged }}</td>
            <td>{{ numberOfOptimized }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-results">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Total Score</th>
                <th>Average Score</th>
                <th>Maturity Level</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ totalScore }}</td>
                    <td>{{ avgScore }}</td>
                    <td>{{ calculateScoreStats(result).maturityLevel }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="form">
            <form>
                <!-- role -->
                <span class="material-icons">supervisor_account</span>
                <label for="role">USER ROLE</label>
                <hr>
                <input type="text" id="role" placeholder="enter role...    (e.g consultant, manager, directur)" autocomplete="off" v-model="role">
            </form>
        </div>
    <!-- <button v-if="showResult" @click="submitResults">Save results</button> -->
    <div class="save" @click="submitResults">
      <button class="save-text">
        <p>SAVE</p>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.results {
  margin-top: 20px;
  p {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .table {
    margin-top: 20px;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
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
      tbody tr:nth-child(even) {
        background-color: #f5f5f5;
      }
      tbody tr:hover {
        background-color: #ebebeb;
      }
    }
  }
}

.table-results {
      margin-top: 50px;
      margin-left: 0rem;
      box-shadow: 3px 3px 5px rgb(75, 75, 75);
      
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

.form {
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgb(75, 75, 75);
  color: #07174b;
  width: 400px;
  height: 100px;
  padding: 15px;
  margin-top: 3rem;
  justify-self: center;

  .material-icons {
    width: 12px;
    color: #07174b;
    transition: 0.2s ease-out;
  }

  label, input {
      outline: none;
      width: 100%;
  }

  label {
      color: #07174b;
      font-size: 20px;
      margin-left: 1rem;
  }

  input {
      background-color: transparent;
      border: none;
      color: #07174b;
      font-size: 1em;
      margin-bottom: 20px;
  }

  ::placeholder {
      color: #3f465e;
      opacity: 1;
      font-style: italic;           
  }
}  
.save {
  display: inline-block;
  margin-top: 20px;
  padding-top: 10px;
}

.save-text {
  display: inline-block;
  padding: 7px 20px;
  background-color: rgb(28, 28, 128);
  color: #fff;
  font-size: 16px;
  height: 45px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  border: 2px solid rgb(28, 28, 128);
  transition: background-color 0.3s ease;
}

.save-text:hover {
  background-color: #fff;
  color: rgb(28, 28, 128);
}

</style>