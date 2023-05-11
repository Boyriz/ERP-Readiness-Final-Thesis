<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router';
import NavBar from './components/NavBar.vue';
import LeftBar from './components/leftbar/LeftBar.vue';
import Footer from './components/Footer.vue';
import { reactive, onMounted, watch } from 'vue';
import axios from 'axios';

const state = reactive({
  navigation: false,
  isLoggedIn: true,
  user: null,
});

const checkRoute = async () => {
  const route = useRoute();
  if (route.name === "login" || route.name === "register") {
    state.navigation = false;
    state.isLoggedIn = false;
    state.user = null;
    return;
  }

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    state.isLoggedIn = false;
    state.user = null;
    state.navigation = false;
    return;
  }

  state.isLoggedIn = true;
  state.user = user;
  state.navigation = false;
};


const router = useRouter();

const logout = async () => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/auth/logout`,
      { userId: state.user }
    )
    state.isLoggedIn = false
    state.user = null
    localStorage.setItem('isLoggedIn', false);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user'); // remove the user data from localStorage
    localStorage.removeItem('readinessData');

    // Add the axios.delete call to clear the data
    await axios.delete('http://localhost:3000/api/readiness/clear-all');

    router.push('/', response)
  } catch (error) {
    console.error(error)
  }
}


const route = useRoute();

onMounted(() => {
  checkRoute();
  watch(
    () => route.value,
    (to) => {
      checkRoute();
    }
  );
  state.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  // state.user = JSON.parse(localStorage.getItem('user'));
});

</script>

<template>
  <div class="app">
    <NavBar v-bind="checkRoute()"
        :isLoggedIn="state.isLoggedIn"
        :user="state.user"
        :logout="logout"
    />
    <LeftBar v-if="state.navigation" />
    <div>
      <transition name="fade">
        <RouterView />
      </transition>
    </div>
    <Footer v-if="state.navigation" />
  </div>
</template>


<style lang="scss">
  :root {
    --primary: #3A526F;
    --blue: #2d6ebe;
    --dark: #1e1e1f;
    --dark-alt: #26313d;
    --light: #bfc0c0;
    --sidebar-width: 300px;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Rowdies', cursive;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.7s ease-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }

  .app {
    background-image: url('https://cdn.kibrispdr.org/data/1761/erp-gif-10.gif');
    background-repeat: repeat; 
    background-size: contain;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    position: relative;
    

    main {
      flex: 0;
      padding: 1rem;

      @media (max-width: 768px) {
        padding-left: 6rem;
      }
    }
  }


  // .container {
  //   max-width: 1440px;
  //   margin: 0 auto;
  // }

  .link {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
  }

  .link-light {
    color: white;
  }
  // .app {
  //   display: flex;

  //   main {
  //     flex: 1 1 0;
  //     padding: 30rem;
  //   }
  // }

</style>
