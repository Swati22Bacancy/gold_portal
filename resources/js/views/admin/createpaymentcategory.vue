<template>
  <div>
    <form class="crt-paymentcategory" @submit.prevent="create_paymentcategory">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Create New Payment Category</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/payment-categories"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
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
                    class="form-control form-control-role"
                    id="crt-paymentcategoryname"
                    aria-describedby="emailHelp"
                    placeholder="Enter name here"
                    v-model="formdata.name"
                  />
                  <span v-if="$v.formdata.name.$error" class="text-danger">Please enter name</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </form>
    
  </div>
</template>

<script>
import { required} from "vuelidate/lib/validators";
import { customerRules } from './rules/customerRules'
export default {
  name: "CreatePaymentCategory",
  data() {
    return {
      rules : customerRules,
      formdata: {
        name:"",
      },
      errors: {},
    };
  },
  methods:
  {
    async create_paymentcategory() {
      this.$v.formdata.$touch();
      if (this.$v.formdata.$error) {
        return;
      }
      try {
        const response = await axios.post("create_paymentcategory", {
          name: this.formdata.name,
        });
        let message =
            "Payment Category has been successfully added.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/payment-categories");
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
       
      },
    }
   }
};
</script>
<style scoped>
.required-field::after {
  content: "*";
  color: red;
}
.text-danger{
  font-size: 12px;
}
.createtype-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-paymentcategory label
{
  font-size: 12px;
}
.crt-paymentcategory
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}

</style>
