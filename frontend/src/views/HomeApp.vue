<script setup>
  import characteristic from "../json/characteristic.json"
  import assessment from "../json/assessment.json";
  import checklist from "../json/checklist.json";
  import { ref, watch, onMounted, onBeforeMount, reactive } from "vue";
  import CardMain from "../components/CardMain.vue";
  import LeftBar from "../components/leftbar/LeftBar.vue";
  import Footer from "../components/Footer.vue";
  import CardAssest from "../components/CardAssest.vue";
  import axios from "axios";

  const characters = ref(characteristic)
  const assess = ref(assessment)
  const check = ref(checklist)
  const search = ref("")
  const name = ref("")
  
  const state = reactive({
    user: null,
    isLoggedIn: true
  });

  const accessToken = localStorage.getItem('access_token');
  const user = JSON.parse(localStorage.getItem('user'));

  const fetchData = async () => {
    try {
      if (!user) {
        state.isLoggedIn = false;
        state.user = null;
        return;
      }

      state.isLoggedIn = true;
      state.user = user;

      const response = await axios.get(`http://localhost:3000/api/users/${state.user.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      
      name.value = response.data.firstname;
    } catch (error) {
      console.error(error);
      name.value = "";
    }
  };

  onMounted(() => {
    fetchData();
  });

  onBeforeMount(() => {
    name.value = "";
  });

  watch(search, () => {
    characters.value = characteristic.filter(character => character.name.toLowerCase().includes(search.value.toLowerCase()))
  });

</script>


<template>
  <LeftBar />
    <div class="container">
      <h1 class="headline">Welcome {{ name }} to ERP Readiness Application!</h1>
      <hr>
      <main>
        <input v-model.trim="search" type="text" placeholder="Search...">
        <header>
          <h2 class="text-character">READINESS CHARACTERISTIC</h2>
        </header>
        <div class="options-container">
          <CardMain v-for="character in characters" :key="character.id" :character="character" />
        </div>
        <body>
          <h2 class="text-right">READINESS ASSESSMENT</h2>
            <div class="assessment-container">
              <CardAssest v-for="ask in assess" :key="assess.id" :ask="ask"/>
            </div>
            <hr>
            <h3>Why using ERP Readiness?</h3>
            <div class="readiness-container">
              <Section class="img-slider">
                <div class="slides">
                  <div class="slider-item">
                    <img src="https://knic.co.id/uploads/6/how-to-use-erp-technology-to-manage-inventory-management.jpg">
                  </div>
                  <div class="slider-item">
                    <img src="https://www.gmf-aeroasia.co.id/cfind/source/thumb/images/facilities/cover_w815_h380_hangar-2.jpg">
                  </div>
                  <div class="slider-item">
                    <img src="https://pict.sindonews.net/dyn/620/content/2017/09/11/34/1238688/gmf-aero-asia-bukukan-keuntungan-usd57-7-juta-xXs-thumb.jpg">
                  </div>
                  <div class="slider-item">
                    <img src="https://mediabumn.com/wp-content/uploads/2021/01/image_27jan_transportasi_garuda.jpg">
                  </div>
                  <div class="navigation-auto">
                    <div class="auto-btn1"></div>
                    <div class="auto-btn2"></div>
                    <div class="auto-btn3"></div>
                  </div>
                </div>
                <div class="navigation-manual">
                  <label for="radio1" class="manual-btn"></label>
                  <label for="radio2" class="manual-btn"></label>
                  <label for="radio3" class="manual-btn"></label>
                </div>
              </Section>
              <div class="text">
                    <p>
                      "Salah satu tantangan utama organisasi saat ini adalah bagaimana menavigasi perkembangan mereka menjadi organisasi yang ideal
                      organisasi yang berkelanjutan. Namun, setiap tingkat kesiapan membutuhkan rubrik indikator yang berbeda.
                      Oleh karena itu, penelitian ini mengembangkan model kematangan keberlanjutan perusahaan (corporate sustainability maturity model/CSMM), yang dapat digunakan oleh organisasi untuk
                      melakukan penilaian mandiri, mengidentifikasi tingkat kematangan keberlanjutan mereka saat ini dan bertransisi menjadi
                      organisasi yang berkelanjutan."
                    </p>
                    <br>
                    <hr>
                    <h5>
                      Markus Hartono & Harman Susanto
                    </h5>
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
    margin-top: 20px;
  }

  h1 {
    text-align: center;
    margin: 10px 10px;
  }

 

  main {
    margin-right: -15rem;
    margin-left: 1rem;
  }

  input {
    width: 20rem;
    border: 3px solid #a6a8a8;
    padding: 10px;
    height: 20px;
    border-radius: 5px 5px;
    outline: none;
    color: #030303;
    font-style: italic;
    text-align: center;
    margin-left: 20rem;
  }

  header {
    margin: 10px 3px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 11rem;
    background-color: transparent;
  }


  header h2 {
    font-weight: bold;
    margin-left: -20px;
    margin-right: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  header input {
    width: 16rem;
    border: 3px solid #a6a8a8;
    padding: 10px;
    height: 20px;
    border-radius: 5px 5px;
    outline: none;
    color: #030303;
    font-style: italic;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    bottom: 1rem;
  }

  body {
    margin: 10px 3px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 11rem;
    background-color: transparent;

    h2 {
      color: rgb(42, 50, 97);
    }

    .text-character {
      text-align: center;
      box-shadow: 3px 3px 5px rgb(75, 75, 75);
      overflow: hidden;
      background-color: white;
      border-radius: 2%;
      font-size: 23px;
      padding: 5px 5px;
    }

    .text-right {
      text-align: center;
      box-shadow: 3px 3px 5px rgb(75, 75, 75);
      overflow: hidden;
      background-color: white;
      border-radius: 2%;
      font-size: 23px;
      padding: 5px 5px;
    }

    .text {
        width: auto;
        overflow: hidden;
        align-self: center;
        background-color: rgb(230, 225, 225);
        border-radius: 4%;
        box-shadow: 3px 3px 5px rgb(75, 75, 75);
        margin-bottom: 35px;
        margin-right: 10px;
        margin-top: 10px;
        margin-left: 40px;
        padding-left: 35px;
        padding-right: 25px;
        padding-top: 3px;
        padding-bottom: 5px;
        right: 4.5rem;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        transition: .5s ease all;

        p {
            font-weight: normal;
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            text-align: justify;
            font-style: italic;
            color: rgb(41, 41, 41);
            margin-left: -25px;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 20px;
        }

        h5 {
          font-weight: normal;
          text-align: right;
          font-size: 15px;
          color: rgb(68, 68, 68);
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    }
  }
  
  body h2 {
    font-weight: normal;
    margin-left: 5px;
    margin-right: 30px;
    margin-top: 10px;
    font-size: 30px;
    font-family: 'Rowdies', cursive;
  }

  body h3 {
    text-align: center;
    margin: 10px 10px;
    font-weight: normal;
    font-size: 40px;
    font-family: 'Rowdies', cursive;
    text-align: center;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
    overflow: hidden;
    background-color: white;
    border-radius: 2%;
  }

  .assessment-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .readiness-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-left: 6rem;

    .img-slider {
        width: 800px;
        height: 500px;
        border-radius: 10px;
        overflow: hidden;
    }

    .slides {
      width: 500%;
      height: 500px;
      display: flex;
      animation-duration: 15s; /* set animation duration */
      animation-timing-function: ease-out; /* set animation timing function */
      animation-name: slides; /* set animation name */
    }

    .slider-item {
      width: 20%;
      transition: 8s;
    }

    .slider-item img {
      width: 800px;
      height: 500px;
    }

    .navigation-manual {
      position: absolute;
      width: 800px;
      margin-top: -40px;
      display: flex;
      justify-content: center;
    }

    .manual-btn{
      border: 2px solid #40D3DC;
      padding: 5px;
      border-radius: 10px;
      cursor: pointer;
      transition: 1s;
    }

    .manual-btn:not(:last-child){
      margin-right: 40px;
    }

    .manual-btn:hover{
      background: #40D3DC;
    }

    #radio1:checked ~ .first{
      margin-left: 0;
    }
    #radio2:checked ~ .first{
      margin-left: -20%;
    }
    #radio3:checked ~ .first{
      margin-left: -40%;
    }
    #radio4:checked ~ .first{
      margin-left: -60%;
    }

    .navigation-auto {
      position: absolute;
      display: flex;
      width: 800px;
      justify-content: center;
      margin-top: 460px;
    }

    .navigation-auto div{
      border: 2px solid #40D3DC;
      padding: 5px;
      border-radius: 10px;
      transition: 1s;
    }

    .navigation-auto div:not(:last-child){
      margin-right: 40px;
    }

    @keyframes slides {
      0%, 25%, 100%{left: 0}
    
      30%, 55%{left: -100%}
      
      60%, 85%{left: -200%}
    }
    #radio1:checked ~ .navigation-auto .auto-btn1{
      background: #40D3DC;
    }
    #radio2:checked ~ .navigation-auto .auto-btn2{
      background: #40D3DC;
    }
    #radio3:checked ~ .navigation-auto .auto-btn3{
      background: #40D3DC;
    }
    #radio4:checked ~ .navigation-auto .auto-btn4{
      background: #40D3DC;
    }
  }

</style>