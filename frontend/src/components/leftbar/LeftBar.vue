<script setup>
import { ref } from 'vue';
import logoURL from '../../assets/gmf white new.jpg'

    const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

    const ToggleMenu = () => {
        is_expanded.value = !is_expanded.value
        localStorage.setItem("is_expanded", is_expanded.value)
    }

</script>

<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img :src="logoURL" alt="vue">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>
 
        <h3>MENU</h3>
        <br>
        <div class="menu">
            <router-link class="button" to="/about">
                <span class="material-icons">subtitles</span>
                <span class="text">About</span>
            </router-link>
            <router-link class="button" to="/dashboard">
                <span class="material-icons">analytics</span>
                <span class="text">Dashboard</span>
            </router-link>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    aside {
        display: flex;
        flex-direction: column;

        color: white;
        background-color: #152436;

        width: calc(2rem + 32px);
        overflow: hidden;
        min-height: 100vh;
        padding: 1rem;

        float: left;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0.5rem;

        transition: 0.3s ease-in-out;

        button {
            cursor: pointer;
            appearance: none;
            border: none;
            outline: none;
            background: none;
        }

        .logo {
            margin-bottom: 1rem;

            img {
                width: 3rem;
            }
        }

        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin: 0 0.5rem;

            position: relative;
            top: 0;
            transition: 0.2s ease-in-out;

            .menu-toggle {
                transition: 0.2s ease-in-out;

                .material-icons {
                    font-size: 2rem;
                    color: white;
                    transition: 0.2s ease-out;
                }

                &:hover {
                    .material-icons {
                        color: #152436;
                        transform: translateX(0.5rem);
                    }
                }
            }
        }

        h3, .button .text {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        h3 {
            color: #8e939b;
            font-size: 0.875rem;
            margin: 0 0.5rem;
            text-transform: uppercase;
        }

        .menu {
            margin: 0 -0.5rem;

            .button {
                display: flex;
                align-items: center;
                text-decoration: none;

                transition: 0.2s ease-in-out;
                padding: 0.5rem 1rem;

                .material-icons {
                    font-size: 2rem;
                    color: white;
                    transition: 0.2s ease-in-out;
                }

                .text {
                    color: #f1f4f8;
                    transition: 0.2s ease-in-out;
                }

                &:hover {
                    background-color: #2a67b3;

                    .material-icons, .text {
                        color: #152436;
                    }
                }

                &.router-link-exact-active {
                    background-color: #152436;
                    border-right: 5px solid #2a67b3;

                    .material-icons, .text {
                        color: #2a67b3;
                    }
                }
            }
        }

        &.is-expanded {
            width: 300px;
            box-shadow: 15px 10px 15px grey;

            .menu-toggle-wrap {
                top: -3rem;
                .menu-toggle {
                    transform: rotate(-180deg);
                }
            }

            h3, .button .text {
                opacity: 1;
                
            }

            .button {
                .material-icons {
                    margin-right: 1rem;
                }
            }
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 99;
        }
    }
</style>