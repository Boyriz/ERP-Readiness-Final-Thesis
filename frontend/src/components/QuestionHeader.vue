<script setup>

const {
        questionStatus, 
        barPercentage
    } = defineProps([
        "questionStatus",
        "barPercentage"
    ])
</script>

<template>
    <div class="bar">
        <div class="completion" :style="{width: barPercentage}">
        </div>
        <h4>Question {{ questionStatus }}</h4>
    </div>
</template>

<style lang="scss" scoped>
.bar {
    width: 300px;
    height: 50px;
    border: 3px solid rgb(49, 49, 145);
    border-radius: 5%;
    margin-left: 21.5rem;
    margin-top: 2rem;
    background-color: azure;

    h4 {
        text-align: center;
    }
  }

  .completion {
    height: 100%;
    width: 0%;
    background-color: rgb(49, 49, 145);
  }
</style>