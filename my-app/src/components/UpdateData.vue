<template>
<div>
<br>
    <div>Update Data</div>
    <p>{{$route.params.id}}</p>
    <div class="main">
        <div class = "child">
      <form @submit.prevent="handleUpdate" class="form" >
        <input type="text" class="inputfield" v-model="singleProduct.userId" name = "userId" placeholder="add UserID">
        <input type="text" class="inputfield" v-model="singleProduct.title" name = "title" placeholder="add Title" >
        <button type="submit" class="inputfield">Update data</button> 
      </form>
    </div>
    </div>
</div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex'

export default {
    name : 'UpdateData',
    computed :  mapGetters(['singleProduct']),
    methods : {
        ...mapActions(['getData1' , 'updateData']),
        handleUpdate(){
            this.updateData(this.singleProduct).then(() =>{
        this.$router.push({
            name : 'Home'
        })
      })
        }
    },
    
    created(){
        this.getData1(this.$route.params.id)
    }
    
    
}
</script>


<style scoped>
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
