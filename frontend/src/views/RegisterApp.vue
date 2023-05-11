<script setup>
import { computed, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const firstname = ref("");
const hidePassword = ref(true);
const lastname = ref("");
const password = ref("");

const passwordFieldIcon = computed(() => (hidePassword.value ? "fa-eye" : "fa-eye-slash"));
const passwordFieldType = computed(() => (hidePassword.value ? "password" : "text"));

const doRegister = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/local/signup", {
      email: email.value,
      firstname: firstname.value,
      lastname: lastname.value,
      password: password.value
    });
    console.log(response.data);
    alert("Registration successful!");
    router.push("/login");
  } catch (error) {
    console.log(error.response.data);
    alert("Registration failed!");
  }
};
</script>

<template>
  <div class="register">
    <div class="description">
      <h1>REGISTER</h1>
      <p>Make Your New Account!</p>
    </div>
    <div class="form">
      <form @submit.prevent="doRegister">
        <!-- firstname -->
        <label for="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          v-model="firstname"
          placeholder="enter first name..."
          autocomplete="off"
        />
        <!-- lastname -->
        <label for="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          v-model="lastname"
          placeholder="enter last name..."
          autocomplete="off"
        />
        <!-- email -->
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          v-model="email"
          placeholder="enter email..."
          autocomplete="off"
        />
        <!-- password -->
        <label for="password">Password</label>&nbsp;
        <i
          class="fas"
          :class="{ [passwordFieldIcon]: true }"
          @click="hidePassword = !hidePassword"
        ></i>
        <input
          :type="passwordFieldType"
          id="password"
          v-model="password"
          placeholder="enter password..."
        />

        <button type="submit">REGISTER</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

   .register {
        background-image: url('https://wallpaperaccess.com/full/8492562.jpg');
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