<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const {checklist} = defineProps(['checklist'])

const navigateToChecklist = () => {
  router.push(`/checklist/${checklist.id}`)
}

</script>

<template>
    <div class="card" @click="navigateToChecklist">
        <img :src="checklist.img" alt="">
        <div class="card-text">
            <h2>{{ checklist.name }}</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 7%;
    box-shadow: 20px 15px 20px grey;
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
  }

</style>