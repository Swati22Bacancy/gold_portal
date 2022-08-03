<template>
  <div>
    <form class="crt-type" @submit.prevent="create_user">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Create New User</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/users"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 createtype-div">
        
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-typename"
                    aria-describedby="emailHelp"
                    placeholder="Enter full name here"
                    v-model="formdata.name"
                  />
                </div>
                <p v-if="anyError && !isNameValid">Please enter valid name.</p>
                
              </div>
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="crt-typerate"
                    aria-describedby="emailHelp"
                    placeholder="Enter email here"
                    v-model="formdata.email"
                    
                  />
                  
                </div>
                 <p v-if="anyError && !isEmailValid">Please enter valid email.</p>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>User Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-typename"
                    aria-describedby="emailHelp"
                    placeholder="Enter user name here"
                    v-model="formdata.username"
                  />
                </div>
              
               
                
              </div>
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Select Role</label>
                  <select class="form-control form-control-user" v-model="formdata.role_id">
                    <option v-for="role in roles" :key="role.id" :value="role.id">{{role.name}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>
    
  </div>
</template>

<script>
import { customerRules } from './rules/customerRules'
export default {
  name: "CreateUser",
  data() {
    return {
      rules : customerRules,
      formdata: {},
      roles:{},
      anyError: false,
    };
  },
  methods:
  {
    async create_user() {
      this.anyError= true;
      if(this.isNameValid && this.isEmailValid){
      try {
        const response = await axios.post("create_user", {
          username: this.formdata.username,
          name: this.formdata.name,
          email: this.formdata.email,
          role_id: this.formdata.role_id
        });
        let message =
            "User has been successfully added.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/users");
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
        console.log(error);
      }
      }
    },
    getRoles() {
        return axios.get("rolelist").then(response => {
            this.roles = response.data;
        });
    },
  },
  computed: {
        isNameValid(){
          console.log(this.formdata.name)
            const regx = new RegExp(/^[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}$/);
            if(!this.formdata.name || !regx.test(this.formdata.name)){
             
                return false;
            }
           
            return true;
        },
        isEmailValid(){
            const regx = new RegExp(/^[a-zA-Z0-9]{1,}[a-zA-Z0-9.-_]{1,}@[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}[.]{0,1}[a-zA-Z]{0,}$/);
            if(this.formdata.email === '' || !regx.test(this.formdata.email)){
           
                return false;
            }
            return true;
        },
      
  },
  mounted()
  {
    this.getRoles();
  }
};
</script>
<style scoped>

.createtype-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-type label
{
  font-size: 12px;
}
.crt-type
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}
p{
  color: red;
}
</style>
