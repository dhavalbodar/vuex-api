<template>
  <div class="HelloWorld">
    <h2>Products</h2>
    
    <table border="1" class="table">
      <tr>
        <th>id</th>
        <th>userId</th>
        <th>Title</th> <th>
          edit
        </th>
        <th>
          delete
        </th>
      </tr>
      <tr v-for="product in allProducts" :key = "product.id">
        <td>
          {{product.id}}
        </td>
        <td>
          {{product.userId}}
        </td>
        <td>
          {{product.title}}
        </td>
        <td>
        <router-link :to="{path:`/update/${product.id}`}"> 
              <input type="button" value="edit" > 
          </router-link>  
        </td>
        <td>
          <input type="button" value="delete" @click="handleDelete(product.id)">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  computed : mapGetters(["allProducts"]),
  methods : {
    ...mapActions(['getData' , 'deleteData' ]),
    handleDelete(id){
      this.deleteData(id).then(() =>{
        this.getData()
      })
    }
  },

   created(){
      this.getData()
},
  props: {
    msg: String
  }
}
</script>

<style scoped>
      .HelloWorld{
        justify-content: center;
      }
</style>