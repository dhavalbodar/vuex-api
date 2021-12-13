<template>
    <div>
        <div>
            <li v-for="(errors, index) in errors" :key="index">{{ errors }}</li>
            <!-- <p>Hello world</p> -->
            <form @submit="loginUser">

                <div>
                    <input type="text" v-model="signUp.email" placeholder="Enter your email" >
                </div>

                <div>
                    <input type="password" v-model="signUp.password" placeholder="Enter your pasword">
                </div>
                 <div>
                    <button type="submit"> Login</button>
                </div>

            </form>
            
        </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
    name:'Register',
    data() {
        return({
            errors : [],
            signUp : {
              
                email : null ,
                password : null 
            }
        })
    },
    methods:{
        ...mapActions(['loginUser']),
        loginUser(e){
             this.errors=[];
            
            // console.log(e)
            // console.log(this.signUp)
            // console.log(this.signUp.username)
                
         if (!this.signUp.email) {
            this.errors.push('Email required.');
            // console.log("Email is required")
            console.log(this.errors)
        } else
         if (!this.validEmail(this.signUp.email)) {
                this.errors.push('Valid email required.');
                // console.log("hellp")
                console.log(this.errors)
            }
          
        if(!this.signUp.password){
            this.errors.push("Password required.");
            // console.log("enter a password")/
            console.log(this.errors)
        }

if (this.errors.length > 0 ) {
    e.preventDefault()
} else {
        // console.log(this.user)
        this.loginUser(this.user)
        this.$router.push({ name: 'Home' })
      }

    },
     validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
}
}
</script>


<style scoped>

     .main{
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 40px;
    flex-direction: column;
    
  }

    .input{
        height: 45px;
        width: 70%;
        margin-top: 20px;
    }
  .child{
      margin-top:30px ;
      border: 2px solid grey;
      box-shadow: 0px 0px 22px -3px black;
      display: flex;
     flex-direction: column;
    /* padding-top: 20px; */
    padding-bottom: 20px;
    width:300px
  }
</style>