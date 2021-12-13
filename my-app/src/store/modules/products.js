import axios from "axios";

const state = {
    products : [],
    product :{}
};
const getters = {
    allProducts : state => state.products,
    singleProduct : state => state.product
};

const actions = {
    async getData({commit}){
        const responce = await axios.get("http://localhost:3000/todos");
        commit("setData" , responce.data);
        console.log(responce.data)
    },

    async getData1({commit} , id){
        const responce = await axios.get(`http://localhost:3000/todos/${id}`);
        commit("setData1" , responce.data);
        console.log(responce.data)
    },
    
    async postData({commit} , post){
        const responce = await axios.post("http://localhost:3000/todos",post);
        commit("addData" , responce.data);
        console.log(responce.data)
    } ,

    async updateData({commit} , update){
        const responce = await axios.put(`http://localhost:3000/todos/${update.id}`,update);
        commit("editData" , responce.data);
        console.log(responce.data)
    } ,

    async deleteData({commit} , id){
        const responce = await axios.delete(`http://localhost:3000/todos/${id}`);
        commit("removeData" , responce.data);
        console.log(responce.data)
    } 
}

const mutations = {
    setData: (state , products) => { state.products = products} ,
    setData1: (state , product) => { state.product = product} ,

    addData: (state , post) => { state.products.unshift(post)},
    editData : (state , update) => { console.log(state, update)},
    removeData:(state , id ) => {state.products.filter(product => product.id !== id)}
}

export default{
    state,
    getters,
    actions,
    mutations
}