import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import products from "./modules/products"
import UserData from "./modules/UserData"

// import UserData from "./modules/UserData";

export default new Vuex.Store({
  modules: {
    products,
    UserData
  }
})
