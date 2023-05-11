<script setup>

const {stage} = defineProps(['stage'])

</script>

<template>
    <div class="card">
        <div class="card-text">
            <h2>LEVEL</h2>
            <h2>{{ stage.initial.level }}</h2>
            <h2>{{ stage.initial.stage }}</h2>
        </div>
    </div>
    <div class="card-explain">
        <div class="card-text">
            <h2>- {{ stage.initial.ex1 }}</h2>
            <h2>- {{ stage.initial.ex2 }}</h2>
        </div>
    </div>
    <div class="cardRepeat">
        <div class="card-text">
            <h2>LEVEL</h2>
            <h2>{{ stage.repeatable.level }}</h2>
            <h2>{{ stage.repeatable.stage }}</h2>
        </div>
    </div>
    <div class="card-explain">
        <div class="card-text">
            <h2>- {{ stage.repeatable.ex1}}</h2>
            <h2>- {{ stage.repeatable.ex2 }}</h2>
        </div>
    </div>
    <div class="cardDefined">
        <div class="card-text">
            <h2>LEVEL</h2>
            <h2>{{ stage.defined.level }}</h2>
            <h2>{{ stage.defined.stage }}</h2>
        </div>
    </div>
    <div class="card-explain">
        <div class="card-text">
            <h2>- {{ stage.defined.ex1 }}</h2>
            <h2>- {{ stage.defined.ex2 }}</h2>
        </div>
    </div>
    <div class="cardManaged">
        <div class="card-text">
            <h2>LEVEL</h2>
            <h2>{{ stage.managed.level }}</h2>
            <h2>{{ stage.managed.stage }}</h2>
        </div>
    </div>
    <div class="card-explain">
        <div class="card-text">
            <h2>- {{ stage.managed.ex1 }}</h2>
        </div>
    </div>
    <div class="cardOptimized">
        <div class="card-text">
            <h2>LEVEL</h2>
            <h2>{{ stage.optimized.level }}</h2>
            <h2>{{ stage.optimized.stage }}</h2>
        </div>
    </div>
    <div class="card-explain">
        <div class="card-text">
            <h2>- {{ stage.optimized.ex1 }}</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 170px;
    overflow: hidden;
    background-color: rgb(196, 17, 17);
    border-radius: 7%;
    box-shadow: 12px 10px 20px grey;
    margin-bottom: 35px;
    margin-right: 20px;
    padding-left: 5px;
    padding-top: 5px;
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
  }

  .card .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
  }

.card-explain {
    width: 400px;
    overflow: hidden;
    border-radius: 7%;
    box-shadow: 12px 10px 20px grey;
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
    flex-direction: column;
    background-color: whitesmoke;
}

.card-explain .card-text {
    padding: 0 5px;
}

.card-explain .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: baseline;
    font-size: 20px;
}

.cardRepeat {
    width: 170px;
    overflow: hidden;
    background-color: rgb(235, 149, 213);
    border-radius: 7%;
    box-shadow: 12px 10px 20px grey;
    margin-bottom: 35px;
    margin-right: 20px;
    padding-left: 5px;
    padding-top: 5px;
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
    padding: 0 5px;
  }

  .cardRepeat .card-text h2 {
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: white;
  }
.cardDefined {
    width: 170px;
    overflow: hidden;
    background-color: rgb(235, 231, 8);
    border-radius: 7%;
    box-shadow: 12px 10px 20px grey;
    margin-bottom: 35px;
    margin-right: 20px;
    padding-left: 5px;
    padding-top: 5px;
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
.cardManaged {
    width: 170px;
    overflow: hidden;
    background-color: rgb(231, 121, 17);
    border-radius: 7%;
    box-shadow: 12px 10px 20px grey;
    margin-bottom: 35px;
    margin-right: 20px;
    padding-left: 5px;
    padding-top: 5px;
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
.cardOptimized {
    width: 170px;
    overflow: hidden;
    background-color: rgb(8, 197, 40);
    border-radius: 7%;
    box-shadow: 12px 10px 20px grey;
    margin-bottom: 35px;
    margin-right: 20px;
    padding-left: 5px;
    padding-top: 5px;
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
</style>