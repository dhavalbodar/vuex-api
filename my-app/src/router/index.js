import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import AddData from "../components/AddData.vue";
import HelloWorld from "../components/HelloWorld.vue";
import UpdateData from "../components/UpdateData.vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/add',
    name: 'AddData',
    component : AddData,
    
  },
  {
    path: '/update/:id',
    name: 'Update',
    component : UpdateData,
    
  },
  {
    path : '/signup',
    name : "SignUp",
    component : Register,
  },
  {
    path : '/login',
    name : "Login",
    component : Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
