<template>
  <div>
    <form class="crt-type" @submit.prevent="create_producttype">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Create New Product Type</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/product-types"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 createtype-div">
        
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label class="required-field">Product Type Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-typename"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group customer-input">
                   <label class="required-field">Metal type </label>
                  <div class="form-group col-md-12">
                    <input type="radio" id="product_gold" name="metal_type" v-model="formdata.metal_type" value="gold">
                    <label class="radio-label" for="product_gold">Gold</label>
                    <input type="radio" id="product_silver" name="metal_type" v-model="formdata.metal_type" value="silver">
                    <label class="radio-label" for="product_silver">Silver</label>
                    <input type="radio" id="product_other" name="metal_type" v-model="formdata.metal_type" value="other">
                    <label class="radio-label" for="product_other">Others</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Sales Tax Rate (in %)</label>
                  <input
                    type="number"
                    class="form-control form-control-user"
                    id="crt-typerate"
                    aria-describedby="emailHelp"
                    placeholder=""
                    min="0"
                    v-model="formdata.rate"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Purchase Tax Rate (in %)</label>
                  <input
                    type="number"
                    class="form-control form-control-user"
                    id="crt-typerate"
                    aria-describedby="emailHelp"
                    placeholder=""
                    min="0"
                    v-model="formdata.purchase_rate"
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
import { required,helpers} from "vuelidate/lib/validators";
import { customerRules } from './rules/customerRules'
const isName = helpers.regex("custom", /^[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}$/);
export default {
  name: "CreateProductType",
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
    async create_producttype() {
      this.$v.formdata.$touch();
      if (this.$v.formdata.$error) {
        return;
      }
      try {
        const response = await axios.post("create_producttype", {
          rate: this.formdata.rate,
          name: this.formdata.name,
          purchase_rate: this.formdata.purchase_rate,
          metal_type: this.formdata.metal_type,
        });
        let message =
            "Product type has been successfully added.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/product-types");
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
        required
      },
    }
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
