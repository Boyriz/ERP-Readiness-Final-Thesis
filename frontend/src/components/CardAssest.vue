<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const {ask} = defineProps(['ask'])

const navigateToAssessment = () => {
  router.push(`/assessment/${ask.id}`)
}

</script>

<template>
    <div class="card" @click="navigateToAssessment">
        <img :src="ask.img" alt="">
        <div class="card-text">
            <h2>{{ ask.name }}</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 310px;
    overflow: hidden;
    background-color: white;
    border-radius: 7%;
    box-shadow: 5px 5px 7px rgb(75, 75, 75);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
    flex-direction: column;
    transition: .5s ease all;
    
    &:hover {
      transform: rotateZ('-1deg') scale(2);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }

  .card img {
    width: 100%;
    height: 190px;
    margin: 0;
  }

  .card .card-text {
    padding: 0 5px;
  }

  .card .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    padding-bottom: 5px;
  }

</style>