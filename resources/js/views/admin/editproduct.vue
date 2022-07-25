<template>
  <div>
    <form class="crt-product" @submit.prevent="update_product">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">{{formdata.name}}</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/products"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 createproduct-div">
        
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Product Name</label>
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
                  <label>Product Type</label>
                  <select class="form-control form-control-user" v-model="formdata.type_id">
                    <option v-for="producttype in producttypes" :key="producttype.id" :value="producttype.id">{{producttype.name}}</option>
                  </select>
                </div>
                
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Weight (gm)</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-typename"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.weight"
                  />
                </div>
                
              </div>
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Tax Rate</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-typerate"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.rate"
                  />
                </div>
                
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group">
                  <div class="custom-checkbox small check-position">
                    <input type="checkbox" class="custom-control-input" id="customCheck" v-model="formdata.output_tax"
                    />
                    <label class="custom-control-label" for="customCheck" style="color:#000"
                      >Buyer accountable for Output Tax in case of B2B Sales ?</label
                    >
                  </div>
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
  name: "UpdateProduct",
  data() {
    return {
      rules : customerRules,
      formdata: {},
      producttypes:{}
    };
  },
  methods:
  {
    async update_product() {
      try {
        const response = await axios.post("update_product", {
          id: this.$route.params.id,
          rate: this.formdata.rate,
          name: this.formdata.name,
          type_id: this.formdata.type_id,
          weight: this.formdata.weight,
          output_tax: this.formdata.output_tax,
        });
        let message =
            "Product has been successfully updated.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/products");
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
    getProductTypes() {
        return axios.get("producttypelist").then(response => {
            this.producttypes = response.data;
        });
    },
  },
  mounted()
  {
    this.getProductTypes();
    axios.get('/productdetails/'+this.$route.params.id)
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

.createproduct-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-product label
{
  font-size: 12px;
}
.crt-product
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}
.check-position
{
  margin-left: 4%;
}
</style>
