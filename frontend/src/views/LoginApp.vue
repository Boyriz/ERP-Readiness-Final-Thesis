<script setup>
import { ref, computed, reactive } from 'vue';
import axios from 'axios';
import { useRouter, RouterLink } from 'vue-router';

const email = ref('');
const password = ref('');
const hidePassword = ref(true);
const passwordFieldIcon = computed(() => hidePassword.value ? 'fa-eye' : 'fa-eye-slash');
const passwordFieldType = computed(() => hidePassword.value ? 'password' : 'text');

const router = useRouter();

const state = reactive({
  user: null,
  isLoggedIn: false,
  navigation: false,
});

const doLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/local/signin', {
      email: email.value,
      password: password.value,
    });

    console.log(response.data);
    const tokens = response.data;

    if (!tokens.access_token || !tokens.refresh_token) {
      throw new Error('Invalid response data');
    }

    // save tokens to local storage
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('refresh_token', tokens.refresh_token);

    const userId = JSON.parse(atob(tokens.access_token.split('.')[1])).sub;
    const userResponse = await axios.get(`http://localhost:3000/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });
    const user = userResponse.data;

    // save user data to local storage
    localStorage.setItem('user', JSON.stringify(user));

    state.user = userId;
    state.isLoggedIn = true;

    // redirect to home page
    alert('Login successful!');
    router.push('/');
  } catch (error) {
    console.log(error);
    alert('Login failed!');
  }
};
</script>


<template>
    <div class="login">
        <div class="description">
            <h1>LOGIN</h1>
            <p>ERP Readiness Application for Production Planning</p>
        </div>
        <div class="form">
            <form @submit.prevent="doLogin">
                <!-- email -->
                <span class="material-icons">mail</span>
                <label for="email">Email</label>
                <input type="text" id="email" v-model="email" placeholder="enter email..." autocomplete="off">
                
                <!-- password -->
                <span class="material-icons">lock</span>
                <label for="password">Password</label>&nbsp;
                <i class="fas" :class="{passwordFieldIcon}" @click="hidePassword = !hidePassword"></i>
                <input :type="passwordFieldType" id="password" v-model="password" placeholder="enter password...">

                <button type="submit">LOGIN</button>
                <p class="login-register">
                    Don't have an account?
                    <router-link class="router-link" :to="{ name: 'register'}">Register</router-link>
                </p>
            </form>
        </div>
    </div>
</template>


<style lang="scss" scoped>

   .login {
        background-image: url('https://systemever.co.id/uploads/compress/7ad4355b261ba72903664d32539c3ce3.webp');
        background-size: cover;
        background-position: center; 
        min-height: 100vh;
        align-items: center;
        background-color: #e2e2e5;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;

        .description {
            background-color: #fff;
            width: 280px;
            height: 180px;
            padding: 35px;

            h1, p {
                margin: 0;
            }

            p {
                font-size: 15px;
                color: #95a5a6;
                margin-top: 10px;
            }
        }

        .form {
            background-color: #34495e;
            border-radius: 5px;
            box-shadow: 0px 0px 30px 0px #666;
            color: #ecf0f1;
            width: 500px;
            padding: 35px;

            .material-icons {
                    font-size: 0.7rem;
                    color: white;
                    transition: 0.2s ease-out;
            }

            label, input {
                outline: none;
                width: 100%;
            }

            label {
                color: #95a5a6;
                font-size: 0.8em;
            }

            input {
                background-color: transparent;
                border: none;
                color: #ecf0f1;
                font-size: 1em;
                margin-bottom: 20px;
            }

            ::placeholder {
                color: #ecf0f1;
                opacity: 1;           
            }

            button {
                background-color: #ffffff;
                cursor: pointer;
                border: none;
                padding: 10px;
                transition: background-color 0.2s ease-in-out;
                width: 100%;

                &:hover {
                    background-color: #34495e;
                    color: white;
                }
            }

            .login-register {
                margin-top: 12px;
                margin-bottom: 0px;

                .router-link {
                    color: rgb(0, 140, 255);

                    &:hover {
                        background-color: #34495e;
                        color: white;
                    }
                }
            }
        }
   }
</style>