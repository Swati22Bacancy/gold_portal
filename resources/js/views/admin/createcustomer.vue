<template>
  <div>
    <form class="crt-customer" @submit.prevent="create_customer">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Create New Customer</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/customers"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 createcust-div">
        
            <div class="row mb-4">
              <div class="col-md-3">
                <div class="form-group customer-input">
                  <label>Customer Type</label><br>
                  <button type="button" v-on:click="changetype('business')" class="btn admin-btn mobile-mb" :class="customerType=='business' ? 'dark-theme-btn' : 'light-theme-btn'" style="margin:0">Business</button>
                  <button type="button" v-on:click="changetype('individual')" class="btn admin-btn mobile-mb" :class="customerType=='individual' ? 'dark-theme-btn' : 'light-theme-btn'" style="margin:0">Individual</button>
                </div>
                
              </div>
              <div class="col-md-3">
                <div class="form-group customer-input">
                  <label>Company Code</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.company_code"
                  />
                </div>
              </div>
              <div class="col-md-6"></div>
            </div>
            <div class="row" v-if="customerType=='business'">
              <div class="col-md-6 detail-div">
                <h6>Company Details</h6>
                <div class="form-group customer-input">
                  <label class="required-field">Company Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.company_name"
                  />
                  <span v-if="$v.formdata.company_name.$error" class="text-danger">Please enter valid name</span>
                </div>    
                <div class="form-group customer-input">
                  <label class="required-field">Registered Address</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.registered_address"
                  />
                  <span v-if="$v.formdata.registered_address.$error" class="text-danger">Please enter address</span>
                </div>
                <div class="form-group customer-input">
                  <label>VAT No.</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.vat"
                  />
                </div>
                <h6>Contact Details</h6>
                <div class="form-group customer-input">
                  <label class="required-field">Email</label>
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.email"
                  />
                  <span v-if="$v.formdata.email.$error" class="text-danger">Email must be valid</span>
                </div>
                <div class="form-group customer-input">
                  <label>Telephone</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.telephone"
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Whatsapp Number</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.whatsapp"
                  />
                </div>
              </div>
              <div class="col-md-6 primary-div">
                <h6>Primary Contact</h6>
                <div class="form-group customer-input">
                  <label>Title</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.title"
                  />
                </div>
                <div class="form-group customer-input">
                  <label class="required-field">First Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.first_name"
                  />
                  <span v-if="$v.formdata.first_name.$error" class="text-danger">Please your first name</span>
                </div>

                <div class="form-group customer-input">
                  <label class="required-field">Last Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.last_name"
                  />
                  <span v-if="$v.formdata.last_name.$error" class="text-danger">Please your last name</span>
                </div>

                <h6>Settings</h6>
                <div class="form-group customer-input">
                  <label>Credit Limit (<i class="fa fa-pound-sign" style="font-size:10px;"></i>)</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.credit_limit"
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Credit Period</label>
                  <input
                    type="number"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.credit_period"
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Select Group</label><br>
                  <select class="form-control form-control-user" v-model="formdata.group_id">
                    <option v-for="group in groups" :key="group.id" :value="group.id">{{group.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row" v-if="customerType=='individual'">
              <div class="col-md-6 detail-div">
                <div class="form-group customer-input">
                  <label>Title</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.title"
                  />
                </div>
                <div class="form-group customer-input">
                  <label class="required-field">First Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.first_name"
                  />
                  <span v-if="$v.formdata.first_name.$error" class="text-danger">Please your first name</span>
                </div>

                <div class="form-group customer-input">
                  <label class="required-field">Last Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.last_name"
                  />
                  <span v-if="$v.formdata.last_name.$error" class="text-danger">Please your last name</span>
                </div>
                
                <div class="form-group customer-input">
                  <label class="required-field">Email</label>
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.email"
                  />
                   <span v-if="$v.formdata.email.$error" class="text-danger">Email must be valid</span>
                </div>
                
              </div>
              <div class="col-md-6 primary-div">
                <div class="form-group customer-input">
                  <label class="required-field">Registered Address</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.registered_address"
                  />
                </div>
                <span v-if="$v.formdata.registered_address.$error" class="text-danger">Please enter address</span>
                <div class="form-group customer-input">
                  <label>Telephone</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.telephone"
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Whatsapp Number</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.whatsapp"
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Select Group</label><br>
                  <select class="form-control form-control-user" v-model="formdata.group_id">
                    <option v-for="group in groups" :key="group.id" :value="group.id">{{group.name}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>
    
  </div>
</template>

<script>
import { required,email,helpers} from "vuelidate/lib/validators";
import { customerRules } from './rules/customerRules'
const isName = helpers.regex("custom", /^[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}$/);
export default {
  name: "CreateCustomer",
  data() {
    return {
      rules : customerRules,
      customerType: 'business',
      theme: 'cust-type',
      formdata: {
        company_name: "",
        registered_address:"",
        first_name: "",
        last_name: "",
      },
      groups:{}
    };
  },
  methods:
  {
    changetype(type)
    {
      
      this.customerType = type;
    },
    async create_customer() {
      this.$v.formdata.$touch();
      if (this.$v.formdata.$error) {
        return;
      }
      try {
        this.formdata.customertype= this.customerType;
        const response = await axios.post("create_customer", {
          first_name: this.formdata.first_name,
          last_name: this.formdata.last_name,
          email: this.formdata.email,
          company_name: this.formdata.company_name,
          registered_address: this.formdata.registered_address,
          vat: this.formdata.vat,
          telephone: this.formdata.telephone,
          whatsapp: this.formdata.whatsapp,
          title: this.formdata.title,
          credit_limit: this.formdata.credit_limit,
          company_code: this.formdata.company_code,
          customertype: this.formdata.customertype,
          group_id: this.formdata.group_id,
        });
        let message =
            "Customer has been successfully added.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/customers");
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
    getGroups() {
        return axios.get("grouplist").then(response => {
            this.groups = response.data;
        });
    },
  },
   validations: {
    formdata: {
      company_name: {
        required,
        isName,
      },
       email: {
        required,
        email
      },
      registered_address: {
        required,
      },
      first_name: {
        required,
      },
      last_name: {
        required,
      }
    }
   },
  mounted()
  {
    this.getGroups();
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
#dash-datatable
{
  font-size: 13px;
  color: #000;
}
.createcust-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-customer label
{
  font-size: 12px;
}
.crt-customer
{
  padding: 0px 2%;
  color: #000;
}

.dark-theme-btn
{
  background-color: #245388 !important;
  color: #fff;
  width: 100px;
  font-size: 12px !important;
}
.light-theme-btn
{
  background-color: #EDF2F6 !important;
  color: #000;
  width: 100px;
  font-size: 12px !important;
}
.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}
@media (min-width: 768px) {
  .detail-div
  {
    border-right: 2px solid #eee;
    padding-right: 8%;
  }
  .primary-div
  {
    padding-left: 8%;
  }
}
</style>
