<template>
  <div>
    <form class="crt-group" @submit.prevent="create_currency">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Create New Currency</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/currencies"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 createcurrency-div">
        
            <div class="row mb-4">
              <div class="col-md-4">
                <div class="form-group customer-input">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-groupname"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.name"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group customer-input">
                  <label>Symbol</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-groupname"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.symbol"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group customer-input">
                  <label>Ex. Rate</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-groupname"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.exchange_rate"
                  />
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-4">
                <div class="form-group">
                  <div class="custom-checkbox small check-position">
                    <input type="checkbox" class="custom-control-input" id="customCheck" v-model="formdata.right_position"
                    />
                    <label class="custom-control-label" for="customCheck" style="color:#000"
                      >Position to the right of the value</label
                    >
                  </div>
                  
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <div class="custom-checkbox small check-position">
                    <input type="checkbox" class="custom-control-input" id="customCheckRate" v-model="formdata.update_rates"
                    />
                    <label class="custom-control-label" for="customCheckRate" style="color:#000"
                      >Auto-Update Rates</label
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
  name: "CreateCurrency",
  data() {
    return {
      rules : customerRules,
      formdata: {},
    };
  },
  methods:
  {
    async create_currency() {
      try {
        const response = await axios.post("create_currency", {
          name: this.formdata.name,
          symbol: this.formdata.symbol,
          exchange_rate: this.formdata.exchange_rate,
          right_position: this.formdata.right_position,
          update_rates: this.formdata.update_rates,
        });
        let message =
            "Currency has been successfully added.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/currencies");
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
  }
};
</script>
<style scoped>

.createcurrency-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-group label
{
  font-size: 12px;
}
.crt-group
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
