import { createRouter, createWebHistory } from 'vue-router'
import RegisterApp from '../views/RegisterApp.vue'
import LoginApp from '../views/LoginApp.vue'
import HomeApp from '../views/HomeApp.vue'
import Characteristic from '../views/Characteristic.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import Assessment from '../views/Assessment.vue'
import Checklist from '../views/Checklist.vue'

const requireAuth = (to, from, next) => {
  const isLoggedIn = localStorage.getItem('access_token');
  if (isLoggedIn) {
    next();
  } else {
    next({ name: 'login', query: { redirect: to.fullPath }});
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeApp
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterApp
    },
    {
      path: '/login',
      name: 'login',
      component: LoginApp
    },
    {
      path: '/characteristic/:id',
      name: 'characteristic',
      component: Characteristic,
    },
    {
      path: '/assessment/:id',
      name: 'assessment',
      component: Assessment,
    },
    {
      path: '/checklist/:id',
      name: 'checklist',
      component: Checklist,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});


// const isAuthenticated = true;

// router.beforeEach((to, from, next) => {
//   const isAuthenticated =  localStorage.getItem('access_token');
  
//   if (to.name !== "login" && !isAuthenticated) next({ name: "login" }) && next({ name: "register" });
//   if (to.name === "login" && isAuthenticated) next({ name: "home" });
//   else next();
// });

export default router
