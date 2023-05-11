<script setup>
import LeftBar from "../components/leftbar/LeftBar.vue";
import Footer from "../components/Footer.vue";
import { useRoute } from "vue-router";
import characteristic from "../json/characteristic.json";

import { ref } from "vue";
// const character = ref(null)
const route = useRoute()
// const {id} = route.params;

const character = characteristic.find(c => c.id === parseInt(route.params.id))
</script>

<template>
<LeftBar />
    <div class="container">
      <main>
        <header>
          <h1 class="headline">{{ character.name }}</h1>
        </header>
        <body>
          <div class="characters-container">
            <div class="card">
              <div class="card-text">
                  <h2>LEVEL</h2>
                  <h2>{{ character.initial.level }}</h2>
                  <p>{{ character.initial.stage }}</p>
              </div>
            </div>
            <div class="card-explain">
                <div class="card-text">
                    <p>1. {{ character.initial.ex1 }}</p>
                    <p>2. {{ character.initial.ex2 }}</p>
                    <p>3. {{ character.initial.ex3 }}</p>
                    <p>4. {{ character.initial.ex4 }}</p>
                    <p>5. {{ character.initial.ex5 }}</p>
                </div>
            </div>
            <div class="images">
              <img :src="character.initial.images" alt="">
            </div>
            <div class="cardRepeat">
                <div class="card-text">
                    <h2>LEVEL</h2>
                    <h2>{{ character.repeatable.level }}</h2>
                    <p>{{ character.repeatable.stage }}</p>
                </div>
            </div>
            <div class="card-explain-repeat">
                <div class="card-text">
                    <p>1. {{ character.repeatable.ex1 }}</p>
                    <p>2. {{ character.repeatable.ex2 }}</p>
                    <p>3. {{ character.repeatable.ex3 }}</p>
                    <p>4. {{ character.repeatable.ex4 }}</p>
                    <p>5. {{ character.repeatable.ex5 }}</p>
                </div>
            </div>
            <div class="images">
              <img :src="character.repeatable.images" alt="">
            </div>
            <div class="cardDefined">
                <div class="card-text">
                    <h2>LEVEL</h2>
                    <h2>{{ character.defined.level }}</h2>
                    <p>{{ character.defined.stage }}</p>
                </div>
            </div>
            <div class="card-explain-defined">
                <div class="card-text">
                    <p>1. {{ character.defined.ex1 }}</p>
                    <p>2. {{ character.defined.ex2 }}</p>
                    <p>3. {{ character.defined.ex3 }}</p>
                    <p>4. {{ character.defined.ex4 }}</p>
                    <p>5. {{ character.defined.ex5 }}</p>
                </div>
            </div>
            <div class="images">
              <img :src="character.defined.images" alt="">
            </div>
            <div class="cardManaged">
                <div class="card-text">
                    <h2>LEVEL</h2>
                    <h2>{{ character.managed.level }}</h2>
                    <p>{{ character.managed.stage }}</p>
                </div>
            </div>
            <div class="card-explain-managed">
                <div class="card-text">
                    <p>1. {{ character.managed.ex1 }}</p>
                    <p>2. {{ character.managed.ex2 }}</p>
                    <p>3. {{ character.managed.ex3 }}</p>
                    <p>4. {{ character.managed.ex4 }}</p>
                    <p>5. {{ character.managed.ex5 }}</p>
                </div>
            </div>
            <div class="images">
              <img :src="character.managed.images" alt="">
            </div>
            <div class="cardOptimized">
                <div class="card-text">
                    <h2>LEVEL</h2>
                    <h2>{{ character.optimized.level }}</h2>
                    <p>{{ character.optimized.stage }}</p>
                </div>
            </div>
            <div class="card-explain-optimized">
                <div class="card-text">
                    <p>1. {{ character.optimized.ex1 }}</p>
                    <p>2. {{ character.optimized.ex2 }}</p>
                    <p>3. {{ character.optimized.ex3 }}</p>
                    <p>4. {{ character.optimized.ex4 }}</p>
                    <p>5. {{ character.optimized.ex5 }}</p>
                </div>
            </div>
            <div class="images">
              <img :src="character.optimized.images" alt="">
            </div>
          </div>
        </body>
      </main>
    </div>
<Footer />
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

  .headline {
    text-align: center;
      box-shadow: 3px 3px 5px rgb(75, 75, 75);
      overflow: hidden;
      background-color: white;
      border-radius: 2%;
  }

  main {
    margin-right: -11rem;
    margin-left: 1rem;
  }

  header {
    margin: 10px 3px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 11rem;
    background-color: transparent;
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
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .characters-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .card {
    width: 210px;
    overflow: hidden;
    align-self: center;
    background-color: rgb(196, 17, 17);
    border-radius: 7%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
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
    color: white;
  }
  .card .card-text p {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
    margin-left: -25px;
    font-size: 20px;
  }

.card-explain {
    width: 500px;
    overflow: hidden;
    border-radius: 4%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
    margin-bottom: 35px;
    margin-right: 20px;
    padding-bottom: 5px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    flex-direction: column;
    background-color: whitesmoke;
}

.card-explain .card-text {
    padding: 0 5px;
}

  p {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 8px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

.card-explain .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-size: 20px;
}

.images img {
    width: 100%;
    height: 250px;
    margin: 0px 0;
    border-radius: 2%;
    padding-bottom: 0px;
    background-color: transparent;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
  }

.cardRepeat {
    width: 210px;
    overflow: hidden;
    align-self: center;
    background-color: rgb(235, 149, 213);
    border-radius: 7%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
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
}
  .cardRepeat .card-text {
    padding: 0;
  }

  .cardRepeat .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
  }
  .cardRepeat .card-text p {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
    margin-left: -25px;
    font-size: 20px;
  }
.card-explain-repeat {
    width: 500px;
    overflow: hidden;
    border-radius: 4%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
    margin-bottom: 35px;
    margin-right: 20px;
    padding-bottom: 5px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    flex-direction: column;
    background-color: whitesmoke;
}

.card-explain-repeat .card-text {
    padding: 0 5px;
}

.card-explain-repeat .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-size: 20px;
}
.cardDefined {
    width: 210px;
    overflow: hidden;
    align-self: center;
    background-color: rgb(235, 231, 8);
    border-radius: 7%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
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
}
  .cardDefined .card-text {
    padding: 0 5px;
  }

  .cardDefined .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
  }
  .cardDefined .card-text p {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
    margin-left: -25px;
    font-size: 20px;
  }
.card-explain-defined {
    width: 500px;
    overflow: hidden;
    border-radius: 4%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
    margin-bottom: 35px;
    margin-right: 20px;
    padding-bottom: 5px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    flex-direction: column;
    background-color: whitesmoke;
}

.card-explain-defined .card-text {
    padding: 0 5px;
}

.card-explain-defined .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-size: 20px;
}
.cardManaged {
    width: 210px;
    overflow: hidden;
    align-self: center;
    background-color: rgb(231, 121, 17);
    border-radius: 7%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
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
}
  .cardManaged .card-text {
    padding: 0 5px;
  }

  .cardManaged .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
  }
  .cardManaged .card-text p {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
    margin-left: -25px;
    font-size: 20px;
  }

  .card-explain-managed {
    width: 500px;
    overflow: hidden;
    border-radius: 4%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
    margin-bottom: 35px;
    margin-right: 20px;
    padding-bottom: 5px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    flex-direction: column;
    background-color: whitesmoke;
}

.card-explain-managed .card-text {
    padding: 0 5px;
}

.card-explain-managed .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-size: 20px;
}
.cardOptimized {
    width: 210px;
    overflow: hidden;
    align-self: center;
    background-color: rgb(8, 197, 40);
    border-radius: 7%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
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
}
  .cardOptimized .card-text {
    padding: 0 5px;
  }

  .cardOptimized .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
  }
  .cardOptimized .card-text p {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
    margin-left: -25px;
    font-size: 20px;
  }

  .card-explain-optimized {
    width: 500px;
    overflow: hidden;
    border-radius: 4%;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
    margin-bottom: 35px;
    margin-right: 20px;
    padding-bottom: 5px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    flex-direction: column;
    background-color: whitesmoke;
}

.card-explain-optimized .card-text {
    padding: 0 5px;
}

.card-explain-optimized .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-size: 20px;
}
</style>