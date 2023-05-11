<script setup>
import Chart from 'chart.js/auto';
import { onMounted, ref, watch, computed } from 'vue';
import axios from 'axios';

const pieData = ref([]);
let pieChart = null;
let scoreData = [];

const isLoggedIn = computed(() => {
  const userData = localStorage.getItem('user');
  return userData !== null;
});

const fetchData = async () => {
  const response = await axios.get('http://localhost:3000/api/readiness/');
  scoreData = response.data;

  const transformData = (readinessType) => {
    const pieResults = scoreData.filter((result) => {
      const resultObj = JSON.parse(result.result);
      return resultObj.some((maturity) => {
        return maturity.type === readinessType;
      });
    });

    const typeScores = pieResults.reduce((acc, result) => {
      const resultObj = JSON.parse(result.result);
      const typeObj = resultObj.filter((types) => types.type === readinessType);

      if (typeObj.length) {
        acc.push(
          ...typeObj.map((types) => ({
            type: types.type,
            score: types.score,
          }))
        );
      }

      return acc;
    }, []);

    pieData.value.push({
      type: readinessType,
      maturity: typeScores,
    });
  };

  pieData.length = 0;
  pieData.value = [];
  transformData('people');
  transformData('process');
  transformData('technology');

  createPieChart();
};

const createPieChart = () => {
  if (pieChart) {
    pieChart.destroy();
  }

  pieChart = new Chart(document.getElementById('pie-chart'), {
    type: 'doughnut',
    data: {
      labels: ['People', 'Process', 'Technology'],
      datasets: [
        {
          label: 'Total Score',
          data: pieData.value.map((data) =>
            data.maturity.reduce((acc, curr) => acc + curr.score, 0)
          ),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
      },
    },
  });
};

watch(pieData, () => {
  createPieChart();
});

onMounted(async () => {
  await fetchData();
});
</script>

<template>
    <div v-if="isLoggedIn" class="chart-container">
        <canvas id="pie-chart"></canvas>
        <div class="card-text">
            <h1>Total Score</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.chart-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    width: 450px;
    height: 27rem;

    .card-text {
        padding: 10px 5px;
        justify-content: center;
    }
}
</style>