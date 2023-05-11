<script setup>
const emit = defineEmits(["selectLevel"])

const { question } = defineProps(['question'])

const selectedEmit = (level, score, type) => {
    emit("selectLevel", level, score, type)
}
</script>

<template>
    <h2>{{ question.text }}</h2>
    <div class="images">
      <img :src="question.picture" alt="">
    </div>
    <div class="questions">
        <h4 class="quiz">
            {{ question.ask }}
        </h4>
    </div>
    <div class="answers-initial">
        <div 
            v-for="selection in question.options" 
            :key="selection.id" 
            class="selection" 
            @click="selectedEmit(selection.level, selection.score, selection.type)"
          >
            <p class="select-label">{{ selection.label }}</p>
            <div class="select-option">
                <p>{{ selection.value }}</p>
            </div>  
        </div>
    </div>
</template>

<style lang="scss" scoped>
body h2 {
    font-weight: bold;
    margin-left: 5px;
    margin-right: 30px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 30px;
    font-family: 'Rowdies', cursive;
    text-align: center;
    box-shadow: 5px 5px 7px rgb(75, 75, 75);
    overflow: hidden;
    background-color: white;
    border-radius: 2%;
  }

.images {
    width: 470px;
    height: 300px;
    overflow: hidden;
    border-radius: 7%;
    box-shadow: 5px 5px 7px rgb(75, 75, 75);
    margin-bottom: 35px;
    margin-left: 15rem;
    cursor: pointer;
    display: flex;
    transition: .5s ease all;
    display: flex; /* Use flexbox to center the image vertically */
    justify-content: center;
    align-items: center;
    text-align: center;

    .images img {
      width: 20%;
      height: 120px;
      margin-left: auto;
      padding-left: 100px;
    }
}
.questions {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 15px;
    overflow: hidden;
    border-radius: 5px;
    padding-left: 20px;
    padding-bottom: 10px;
    width: auto;
    box-shadow: 5px 5px 7px rgb(75, 75, 75);
    margin-left: 10px;
    background-color: whitesmoke;

    h4 { 
      margin-left: 5px;
      margin-right: 30px;
      margin-top: 10px;
      font-size: 25px;
    }
  }

  .answers-initial {
    margin: 10px 12px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 15px;

    .selection {
        display: flex;
        margin-bottom: 10px;
        overflow: hidden;
        border-radius: 5px;
        padding-bottom: 10px;
        width: 600px;
        box-shadow: 5px 5px 7px rgb(75, 75, 75);
        background-color: whitesmoke;
        cursor: pointer;
        transition: .5s ease all;
        
        &:hover {
        transform: rotateZ('-1deg') scale(2);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        background-color: rgb(146, 144, 144);
        }
    }

    .select-label {
      background-color: rgb(214, 213, 211);
      width: 30px;
      height: 30px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: blue;
        color: white;
      }
    }

    p {
      margin-left: 5px;
      margin-right: 30px;
      margin-top: 10px;
    }

    .select-option {
      width: 100%;
      font-size: 20px;
      padding: 0 20px;
    }

  }

</style>