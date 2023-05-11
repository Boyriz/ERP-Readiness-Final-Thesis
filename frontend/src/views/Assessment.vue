<script setup>
import Navbar from "../components/NavBar.vue";
import Questions from "../components/Questions.vue"; 
import QuestionHeader from "../components/QuestionHeader.vue" 
import { useRoute, useRouter } from "vue-router"; 
import { ref, computed } from "vue";
import assessment from "../json/assessment.json";
import Result from "../components/Results.vue";

const route = useRoute();
const router = useRouter();
const assessId = parseInt(route.params.id);
const assess = assessment.find(a => a.id === assessId)
const currentQuestionIndex = ref(0)

const levelOfSelected = ref("")

const numberOfInitial = ref(0)
const numberOfRepeatable = ref(0)
const numberOfDefined = ref(0)
const numberOfManaged = ref(0)
const numberOfOptimized = ref(0)

const showResult = ref(false)

const selectedAnswers = ref([])
const questions = computed(() => assess.questions)

const questionStatus = computed(() => `${currentQuestionIndex.value}/${assess.questions.length}`)

const barPercentage = computed(() => `${currentQuestionIndex.value/assess.questions.length * 100}%`)

const onOptionSelected = (level) => {
    if(level === "INITIAL"){
      numberOfInitial.value++;
    } else if (level === "REPEATABLE"){
      numberOfRepeatable.value++;
    } else if (level === "DEFINED"){
      numberOfDefined.value++;
    } else if (level === "MANAGED"){
      numberOfManaged.value++;
    } else if (level === "OPTIMIZED"){
      numberOfOptimized.value++;
    } else {
      console.error(`Invalid level: ${level}`);
    }

    if(assess.questions.length - 1 === currentQuestionIndex.value){
      showResult.value = true
    }

    currentQuestionIndex.value++;
}

const calculateResults = () => {
  const results = [];

  questions.value.forEach((question, index) => {
    const level = selectedAnswers.value[index].level;
    const score = selectedAnswers.value[index].score;
    const type = selectedAnswers.value[index].type;
    const indicator = question.text;

    results.push({
      number: index + 1,
      indicator,
      level,
      score,
      type,
    });

    switch (level) {
      case "INITIAL":
        numberOfInitial.value++;
        break;
      case "REPEATABLE":
        numberOfRepeatable.value++;
        break;
      case "DEFINED":
        numberOfDefined.value++;
        break;
      case "MANAGED":
        numberOfManaged.value++;
        break;
      case "OPTIMIZED":
        numberOfOptimized.value++;
        break;
      default:
        console.error(`Invalid level: ${level}`);
        break;
    }
  });

  return results;
};


const onSelectedLevel = (level, score, type) => {
  selectedAnswers.value[currentQuestionIndex.value] = { level, score, type };

  if (assess.questions.length - 1 === currentQuestionIndex.value) {
    showResult.value = true;
  }

  currentQuestionIndex.value++;
};

const results = computed(() => calculateResults());

// check if user is logged in
const isLoggedIn = localStorage.getItem('access_token') ? true : false;

if (isLoggedIn === false) {
  alert("Please login to access the assessment page.");
  router.push('/login'); // redirect to login page
}

</script>

<template>
    <div class="container">
        <h1>{{ assess.name }}</h1>
        <hr>
        <QuestionHeader 
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <main>
            <body>
              <Questions
              v-if="!showResult" 
                :question="assess.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
                @selectLevel="onSelectedLevel"  
                @selectCalculate="calculateResults"
              />           
              <Result 
                v-if="showResult"
                :numberOfInitial="numberOfInitial"
                :numberOfRepeatable="numberOfRepeatable"
                :numberOfDefined="numberOfDefined"
                :numberOfManaged="numberOfManaged"
                :numberOfOptimized="numberOfOptimized"

                :levelOfSelected="levelOfSelected"
                :result="results"
              />
            </body>
            <hr>
        </main>
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
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 35px;
  }

  main {
    margin-right: 1rem;
    margin-left: 1rem;
  }

  body {
    margin: 10px 3px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 0rem;
    background-color: transparent;
  }

</style>