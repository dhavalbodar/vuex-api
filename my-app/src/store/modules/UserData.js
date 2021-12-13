import axios from "axios";

const state = {
    
};
const getters = {
   
};

const actions = {
    async createUser({commit} , user){
        const responce = await axios.post("http://localhost:3000/users",user);
        commit("addUser");
        console.log(responce.data)
        if (responce.status === 201){
            alert("signup successful")
            localStorage.setItem("user-info",JSON.stringify(responce.data))
        }
    } ,
    async loginUser({commit} , user){
        const responce = await axios.get(`http://localhost:3000/users?email=${user.email}&password=${user.password}`,user);
        console.log("res",responce.status , responce)
        if (responce.status === 200 && responce.data.length > 0){
             alert("Login successful")
             localStorage.setItem("user-info",JSON.stringify(responce.data))
         }

        commit("loginUser");
        console.log(responce.data)
    }
}

const mutations = {
  addUser(){
      console.log("user created ")
  }
}

export default{
    state,
    getters,
    actions,
    mutations
}