<script setup>
import Chart from 'chart.js/auto';
import { onMounted, ref, watch, computed } from 'vue';
import axios from 'axios';

const chartData = ref(null);
let myChart = null;
let readinessData = [];

const isLoggedIn = computed(() => {
  const userData = localStorage.getItem('user');
  return userData !== null;
});

const fetchData = async () => {
  if(!isLoggedIn.value) return;

  try {
    const response = await axios.get('http://localhost:3000/api/readiness/');
    readinessData = response.data;

    console.log('readinessData:', readinessData);

    const transformData = (readinessType) => {
      console.log('readinessType:', readinessType);
      if (!readinessData) return; // handle the case where readinessData is null or undefined
      const filteredResults = readinessData.filter((result) => {
        const resultObj = JSON.parse(result.result);
        return resultObj.some((maturity) => {
          return maturity.type === readinessType && maturity.score && maturity.indicator;
        });
      });
      console.log('filteredResults:', filteredResults);

      const typeScores = filteredResults.reduce((acc, result) => {
        const resultObj = JSON.parse(result.result);
        const scoreObjs = resultObj.filter(score => score.type === readinessType && score.score && score.indicator);

        if (scoreObjs.length) {
          acc.scores.push(...scoreObjs.map(score => ({
            score: score.score,
            indicator: score.indicator,
          })));
        }

        return acc;
      }, { type: readinessType, scores: [] });

      chartData.value.push(typeScores);
    };

    
    chartData.length = 0;
    chartData.value = [];
    transformData('people');
    transformData('process');
    transformData('technology');
  } catch (error) {
    console.log(error);
  }
};

const createChart = () => {
  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(document.getElementById('myChart'), {
    type: 'line',
    data: {
      labels: ['Initial', 'Repeatable', 'Defined', 'Managed', 'Optimized'],
      datasets: chartData.value.map((typeScores) => ({
        label: typeScores.type,
        backgroundColor: typeScores.type === 'people' ? 'rgb(196, 17, 17)' : typeScores.type === 'process' ? 'rgba(0, 17, 168)' : 'rgb(13, 226, 13)',
        data: typeScores.scores.map(score => score.score),
        indicators: typeScores.scores.map(score => score.indicator),
      })),
    },
    options: {
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const dataset = data.datasets[tooltipItem.datasetIndex];
            const score = dataset.data[tooltipItem.index];
            const type = dataset.label;
            const level = data.labels[tooltipItem.index];

            const result = readinessData.find(result => {
              const resultObj = JSON.parse(result.result);
              return resultObj.some(indicator => {
                return indicator.type === type && indicator.score === score && indicator.level === level;
              });
            });

            const indicators = JSON.parse(result.result).filter(indicator => {
              return indicator.type === type && indicator.score === score && indicator.level === level;
            });

            const indicatorList = indicators.map(indicator => indicator.indicator).join(", ");

            return `${type} - ${level}: ${indicatorList}`;
          }
        }
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  });
};

onMounted(() => {
  fetchData();
});

watch(chartData, () => {
  createChart();
});
</script>

<template>
  <div v-if="isLoggedIn" class="chart-container">
      <canvas id="myChart"></canvas>
      <div class="card-text">
          <h1>Score Each Indicator</h1>
      </div>
  </div>
</template>

<style lang="scss" scoped>

.chart-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    width: auto;

    .card-text {
        padding: 10px 5px;
        justify-content: center;
    }
}
</style>