<template>
  <div>
    <form class="crt-type" @submit.prevent="updateprofile">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Update Profile</h1>
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
                  <label class="required-field">First Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder="Enter First name"
                    v-model="formdata.first_name"
                  />
                  <span v-if="$v.formdata.first_name.$error" class="text-danger">Please enter your first name</span>
                </div>
                
              </div>
                <div class="col-md-6">
                <div class="form-group customer-input">
                  <label class="required-field">Last Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder="Enter Last name"
                    v-model="formdata.last_name"
                  />
                  <span v-if="$v.formdata.last_name.$error" class="text-danger">Please enter your last name</span>
                </div>
                </div>
              </div>
            <div class="row mb-4">
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
                     <span v-if="$v.formdata.email.$error" class="text-danger">Email must be valid</span>
                </div>
              </div>
              <div class="col-md-6">
               <div class="form-group customer-input">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    v-mask="'(###) ###-####'"
                    aria-describedby="emailHelp"
                    placeholder="Enter Contact number"
                    v-model="formdata.mobile_number"
                  />
                  <span v-if="$v.formdata.mobile_number.$error" class="text-danger">Phone format should be : (000) 000-0000</span>
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
import { mask } from "vue-the-mask";
const isName = helpers.regex("custom", /^[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}$/);
const isPhone = (value) => /^\(\d{3}\)\s?\d{3}-\d{4}$/.test(value);
export default {
  name: "UpdatePassword",
  directives: { mask },
  data() {
    return {
      rules : customerRules,
      formdata: {},
      errors: {},
      profile:{},
    };
  },
  methods:
  {
    async updateprofile() {
        this.$v.formdata.$touch();
      if (this.$v.formdata.$error) {
        return;
      }
     
      
      try {
        const response = await axios.post("updateprofile", {
          first_name: this.formdata.first_name,
          last_name: this.formdata.last_name,
          email: this.formdata.email,
          mobile_number: this.formdata.mobile_number,
        });
        let message =
            "Profile has been successfully updated.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        //this.$router.push("/profile");
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
    getProfile() {
        return axios.get("user").then(response => {
          this.formdata = response.data;
        });
    },
  },
 
  validations: {
    formdata: {
      first_name: {
        required,
        isName
      },
      last_name: {
        required,
        isName
      },
      email: {
        required,
        email,
      },
       mobile_number: {
        //isPhone,
      },
    },
  },
  mounted()
  {
    this.getProfile();
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
.text-danger{
  font-size: 12px;
}
</style>
