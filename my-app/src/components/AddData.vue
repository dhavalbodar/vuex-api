<template>
    <div class = "main">
        <div class="child">
      <form @submit.prevent="onSubmit" class="form" >
        <input class="inputfield" type="text" v-model="userId" name = "userId" placeholder="add UserID">
        <input class = "inputfield" type="text" v-model="title" name = "title" placeholder="add Title" >
        <button class="inputfield" type="submit">AddData</button> 
      </form>
    </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex' 

export default {
    name : "AddData",

    methods : {
        ...mapActions(["postData"]),
        onSubmit(){
            console.log("hello"),
            this.postData({
                title : this.title,
                userId : this.userId,
            }).then(()=>{
                 this.$router.push({
            name : 'Home'
        })
            })
        }
    },
    data() {
        return({
            title : "",
            userId : ""

        })
    },
}
</script>

<style scoped>
.main{
    margin-top: 40px;
    display: block;
    align-content: center;
    align-items: center;
}
    .child{
        /* border: 2px solid lightgrey; */
        display: block;
        /* flex-direction:column; */
        margin: auto;
        /* padding: 7px; */
        width: 30%;
        box-shadow: 0 0 2px 2px grey;
    }

    .form{
        display: flex;
        flex-direction: column;

    }

    .inputfield{
        margin: 3px;
    }
</style>