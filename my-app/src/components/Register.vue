<template>
    <div class="main">
                    <li v-for="(errors, index) in errors" :key="index">{{ errors }}</li>

        <div class="child">
            <!-- <li v-for="(errors, index) in errors" :key="index">{{ errors }}</li> -->
            <!-- <p>Hello world</p> -->
            <form @submit.prevent="loginUser">
    
                <div>
         
                    <input class="input" type="text" v-model="signUp.username" placeholder="Username" >
                    <!-- <p v-if="uname">Please Enter Your Username</p> -->
                </div>

                <!-- <div>
                    <input class="input" type="number" v-model="signUp.phoneno" placeholder="Enter your Number" >
                </div> -->

                <div>
                    <input class="input" type="text" v-model="signUp.email" placeholder="Enter your email" >
                </div>

                <div>
                    <input class="input" type="password" v-model="signUp.password" placeholder="Enter your pasword">
                </div>

                <div>
                    <input class="input" type="password" v-model="cpassword" placeholder="Confirm pasword">
                </div>
                <div>
                    <button class="input" type="submit"> SignUp</button>
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
                username :  null ,
                // phoneno : null ,
                email : null ,
                password : null ,
            },
                cpassword : null 
        })
    },
    methods:{
        ...mapActions(['createUser']),
        loginUser(e){
             this.errors=[];
            
            // console.log(e)
            // console.log(this.signUp)
            // console.log(this.signUp.username)
           

        if (!this.signUp.username) {
        this.errors.push("Name required.");
        console.log(this.errors)
        }

        // if (!this.signUp.phoneno) {
        //     this.errors.push("Phone-no required.");
        //     // console.log("enter a phone no")
        //     console.log(this.errors)
        // }
        // else 
        // if (this.signUp.phoneno.length > 10 || this.signUp.phoneno.length < 10) {
        //     this.errors.push("Enter Valid Phone-no")
        // }

         
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
    
        if (!this.cpassword) {
            this.errors.push("Confirm your password.");
            // console.log("Pls Confirm password")
            console.log(this.errors)
        } 
        if (this.signUp.password != this.cpassword) {
            this.errors.push("Password not same")
        }

if (this.errors.length > 0 ) {
    console.log("world")
    e.preventDefault()

}else{
    console.log("hello")
    this.createUser(this.signUp).then(()=>{
          this.$router.push({ name: 'Home' })
        }).catch((err)=>console.log(err))
}

    },
     validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
//      mounted() {
//     if (localStorage.signUp.username) {
//       this.signUp.username = localStorage.signUp.username;
//     }
//   },
//   watch: {
//     username(newName) {
//       localStorage.signUp.username = newName;
//     }

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