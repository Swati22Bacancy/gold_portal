<template>
  <div>
    <form class="crt-type" @submit.prevent="updatepassword">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Change Password</h1>
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
                  <label class="required-field">Old Password</label>
                  <input
                    type="password"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder="Enter First name"
                    v-model="formdata.oldpassword"
                  />
                  <span v-if="$v.formdata.oldpassword.$error" class="text-danger">Please enter old passsword</span>
                </div>
                
              </div>
                <div class="col-md-6">
                
                </div>
              </div>
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label class="required-field">New Password</label>
                  <input
                    type="password"
                    class="form-control form-control-user"
                    id="crt-typerate"
                    aria-describedby="emailHelp"
                    placeholder="Enter new password here"
                    v-model="formdata.password"/>
                     <span v-if="$v.formdata.password.$error" class="text-danger">Please enter new passsword</span>
                </div>
              </div>
              <div class="col-md-6">
               <div class="form-group customer-input">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder="Enter confirm password here"
                    v-model="formdata.repassword"
                  />
                  <span v-if="$v.formdata.repassword.$error" class="text-danger">Please enter confirm passsword</span>
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
import { mask } from "vue-the-mask";
const isName = helpers.regex("custom", /^[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}$/);
const isPhone = (value) => /^\(\d{3}\)\s?\d{3}-\d{4}$/.test(value);
export default {
  name: "ChangePassword",
  directives: { mask },
  data() {
    return {
      formdata: {},
      errors: {},
    };
  },
  methods:
  {
    updatepassword() {
        this.$v.formdata.$touch();
        if (this.$v.formdata.$error) {
            return;
        }
        if(this.formdata.password == this.formdata.repassword){
            axios.post("updatepassword", {
                oldpassword: this.formdata.oldpassword,
                password: this.formdata.password
                }).then(function(response) {
                    let message =
                    "Password has been successfully updated.";
                    let toast = Vue.toasted.show(message, {
                        theme: "toasted-success",
                        position: "top-center",
                        duration: 5000,
                    });
                })
                .catch(function(error) {
                    let message=(error.response.data.message)?error.response.data.message:'Something went wrong, Please try again';
                    let toast = Vue.toasted.show(message, {
                        theme: "toasted-error",
                        position: "top-center",
                        duration: 5000,
                    });
                });
        }
        else
        {
            let message='Password Must be Same';
            let toast = Vue.toasted.show(message, {
                theme: "toasted-error",
                position: "top-center",
                duration: 5000,
            });
        }
        
    },
  },
 
  validations: {
    formdata: {
      oldpassword: {
        required,
      },
      password: {
        required,
      },
      repassword: {
        required,
      }
    },
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
