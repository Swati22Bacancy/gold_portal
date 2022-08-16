<template>
  <div>
    <form class="crt-role" @submit.prevent="update_role">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">{{formdata.name}}</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/roles"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 createrole-div">
        
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label class="required-field">Name</label>
                  <input
                    type="text"
                    class="form-control form-control-role"
                    id="crt-typename"
                    aria-describedby="emailHelp"
                    placeholder="Enter name here"
                    v-model="formdata.name"
                  />
                   <span v-if="$v.formdata.name.$error" class="text-danger">Please enter valid name</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </form>
    
  </div>
</template>

<script>
import { required,helpers } from "vuelidate/lib/validators";
import { customerRules } from './rules/customerRules'
const isName = helpers.regex("custom", /^[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}$/);
export default {
  name: "UpdateRole",
  data() {
    return {
      rules : customerRules,
      formdata: {
        name: "",
      },
    };
  },
  methods:
  {
    async update_role() {
      
      try {
        const response = await axios.post("update_role", {
          id: this.$route.params.id,
          name: this.formdata.name,
        });
        let message =
            "Role has been successfully updated.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/roles");
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
   validations: {
    formdata: {
      name: {
        required,
        isName,
      },
    }
  },
  mounted()
  {
    axios.get('/roledetails/'+this.$route.params.id)
        .then((response) => {
            this.formdata = response.data;
        })
        .catch(function(error) {
            //app.$notify(error.response.data.error, "error");
        });
  }
};
</script>
<style scoped>

.createrole-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-role label
{
  font-size: 12px;
}
.crt-role
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}
.required-field::after {
  content: "*";
  color: red;
}
.text-danger{
  font-size: 12px;
}
</style>
