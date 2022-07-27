<template>
  <div>
    <form class="crt-user" @submit.prevent="update_user">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">{{formdata.name}}</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/users"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 createuser-div">
        
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
                
              </div>
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-typerate"
                    aria-describedby="emailHelp"
                    placeholder="Enter email here"
                    v-model="formdata.email"
                  />
                </div>
                
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
              
            </div>
          </div>
        </div>
    </form>
    
  </div>
</template>

<script>
import { customerRules } from './rules/customerRules'
export default {
  name: "UpdateUser",
  data() {
    return {
      rules : customerRules,
      formdata: {},
    };
  },
  methods:
  {
    async update_user() {
      try {
        const response = await axios.post("update_user", {
          id: this.$route.params.id,
          username: this.formdata.username,
          name: this.formdata.name,
          email: this.formdata.email,
        });
        let message =
            "User has been successfully updated.";
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
    },
  },
  mounted()
  {
    axios.get('/userdetails/'+this.$route.params.id)
        .then((response) => {
            
            this.formdata = response.data;
            this.formdata.name = response.data.first_name+' '+response.data.last_name;
            
        })
        .catch(function(error) {
            //app.$notify(error.response.data.error, "error");
        });
  }
};
</script>
<style scoped>

.createuser-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-user label
{
  font-size: 12px;
}
.crt-user
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}

</style>
