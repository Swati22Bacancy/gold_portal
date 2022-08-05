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
                  <label class="required-field">Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-typename"
                    aria-describedby="emailHelp"
                    placeholder="Enter full name here"
                    v-model="formdata.name"
                  />
                </div>
                <span v-if="$v.formdata.name.$error" class="text-danger">Please enter valid name</span>
                </div>
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label class="required-field">Email</label>
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="crt-typerate"
                    aria-describedby="emailHelp"
                    placeholder="Enter email here"
                    v-model="formdata.email"/>
                </div>
                <span v-if="$v.formdata.email.$error" class="text-danger">Email must be valid</span>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label class="required-field">User Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-typename"
                    aria-describedby="emailHelp"
                    placeholder="Enter user name here"
                    v-model="formdata.username"/>
                </div>
                 <span v-if="$v.formdata.username.$error" class="text-danger"
               >Please enter valid name</span>
              </div>
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label class="required-field">Select Role</label>
                  <select class="form-control form-control-user" v-model="formdata.role_id">
                    <option v-for="role in roles" :key="role.id" :value="role.id">{{role.name}}</option>
                  </select>
                  <span v-if="$v.formdata.role_id.$error" class="text-danger">Role is required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>
    
  </div>
</template>

<script>
import { required, email,helpers} from "vuelidate/lib/validators";
import { customerRules } from './rules/customerRules'
const isName = helpers.regex("custom", /^[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}$/);
export default {
  name: "CreateUser",
  data() {
    return {
      rules : customerRules,
      formdata: {
        name: "",
        email: "",
        username: "",
      },
      errors: {},
      roles:{},
    };
  },
  methods:
  {
    async create_user() {
        this.$v.formdata.$touch();
      if (this.$v.formdata.$error) {
        return;
      }
     
      
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
      
    },
    getRoles() {
        return axios.get("rolelist").then(response => {
            this.roles = response.data;
        });
    },
  },
 
  validations: {
    formdata: {
      name: {
        required,
        isName,
      },
      email: {
        required,
        email,
      },
      username: {
        required,
      },
      role_id: {
       required
      }
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
.required-field::after {
  content: "*";
  color: red;
}
/* p{
  color: red;
} */
</style>
