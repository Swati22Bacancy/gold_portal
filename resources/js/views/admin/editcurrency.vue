<template>
  <div>
    <form class="crt-currency" @submit.prevent="update_currency">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">{{formdata.name}}</h1>
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
                  <label class="required-field">Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-groupname"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.name"
                  />
                   <span v-if="$v.formdata.name.$error" class="text-danger">Please enter valid name</span>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group customer-input">
                  <label class="required-field">Symbol</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-groupname"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.symbol"
                  />
                   <span v-if="$v.formdata.symbol.$error" class="text-danger">Please enter symbols </span>
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
import { required,helpers} from "vuelidate/lib/validators";
import { customerRules } from './rules/customerRules'
const isName = helpers.regex("custom", /^[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}$/);
export default {
  name: "UpdateCurrency",
  data() {
    return {
      rules : customerRules,
      formdata: {
        name: "",
        symbol: "",
      },
    };
  },
  methods:
  {
    async update_currency() {
       this.$v.formdata.$touch();
      if (this.$v.formdata.$error) {
        return;
      }
      try {
        const response = await axios.post("update_currency", {
          id: this.$route.params.id,
          name: this.formdata.name,
          symbol: this.formdata.symbol,
          exchange_rate: this.formdata.exchange_rate,
          right_position: this.formdata.right_position,
          update_rates: this.formdata.update_rates,
        });
        let message =
            "Currency has been successfully updated.";
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
  },
   validations: {
    formdata: {
      name: {
        required,
        isName,
      },
      symbol: {
        required,
      }
    }
  },
  mounted()
  {
    axios.get('/currencydetails/'+this.$route.params.id)
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

.createcurrency-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-currency label
{
  font-size: 12px;
}
.crt-currency
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
.required-field::after {
  content: "*";
  color: red;
}
.text-danger{
  font-size: 12px;
}
</style>
