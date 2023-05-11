<script setup>
import { reactive, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

const props = defineProps(['isLoggedIn', 'user', 'logout']);

const state = reactive({
  isLoggedIn: localStorage.getItem('access_token') ? true : false,
  user: JSON.parse(localStorage.getItem('user')),
});


watch(() => localStorage.getItem('access_token'), (value) => {
  state.isLoggedIn = value ? true : false;
});

</script>

<template>
  <div class="container-fluid">
    <nav class="topbar">
      <img src="../assets/gmf aeroasia logo new blue text.png" alt="">
    </nav>
    <div class="nav-links">
      <ul v-if="props.isLoggedIn">
        <router-link class="link-logged" :to="{ name: 'home'}">
          <span class="text">HOME</span>
        </router-link>
        <button class="button-logged" @click="props.logout">
          <span class="text">LOGOUT</span>
        </button>
      </ul>
      <ul v-else>
        <router-link class="link" :to="{ name: 'home'}">
          <span class="text">HOME</span>
        </router-link>
        <router-link class="link" :to="{ name: 'login'}">
          <span class="text">LOGIN</span>
        </router-link>
        <router-link class="link" :to="{ name: 'register'}">
          <span class="text">REGISTER</span>
        </router-link>
      </ul>
      <div v-if="!props.isLoggedIn" class="logo">
        <img src="https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif" alt="account">
      </div>
      <div v-else class="picture">
        <img src="https://i.pinimg.com/originals/19/00/54/19005430985f1e7e4022b4301b44ba35.gif" alt="">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .container-fluid {
    display: flex;
    background-color: #ffffff;
    margin: 0 7rem;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 7rem;
    padding-left: 10px;
    box-shadow: 0 7px 8px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    .topbar {
        img {
            width: 20%;
        }
    }

    .nav-links {
        display: flex;
        align-items: flex-end;
        padding-bottom: 10px;
        padding-right: 10px;
        padding-left: 120px;

        ul {
            .link {
                margin-right: 25px;
                font-weight: 300;
                font-size: 20px;
                padding: 0 8px;
                transition: .3s color ease;

                &:hover {
                    color: #5181bb;
                }
            }

            .link-logged {
              margin-right: 25px;
              margin-top: 10px;
              font-weight: 500;
              padding: 0 8px;
              display: flex;
              transition: .3s color ease;
              font-size: 18px;

              &:hover {
                  color: #5181bb;
              }
            }

            .button-logged {
              margin-right: 25px;
              margin-top: 10px;
              font-weight: 500;
              padding: 0 8px;
              display: flex;
              transition: .3s color ease;
              font-size: 18px;

              &:hover {
                  color: #5181bb;
              }
            }
        }

        .logo {
            display: flex;
            align-items: flex-end;

            img {
                width: 70%;
                margin-bottom: -10px;
            }
        }
        .picture {
          display: flex;
          align-items: flex-end;

          img {
              width: 70%;
              margin-top: -15px;
              margin-bottom: -10px;
          }
        }
    }
  }

</style>