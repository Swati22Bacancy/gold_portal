<template>
  <div>
    <form class="company_setting" @submit.prevent="formdata.id ? updateCompanyDetails() : storeCompanyDetails()">
    <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Company Details</h1>
        <div>
          <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
          <router-link to="/settings"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
        </div>
      </div>
      <div class="company-cstm">
        <div class="row">
          <div class="col-md-12">
            <div class="box-content box-align box-padding">
              <h6 >Business Type</h6>
              <div class="row">
                <div class="form-group col-md-12">
                  <input type="radio" id="limited" name="business_type" v-model="formdata.business_type" value="limited">
                  <label class="radio-label" for="limited">Limited Company</label><br>
                  <input type="radio" id="sole" name="business_type" v-model="formdata.business_type" value="sole">
                  <label class="radio-label" for="sole">Sole Trader</label><br>
                  <input type="radio" id="liability" name="business_type" v-model="formdata.business_type" value="liability">
                  <label class="radio-label" for="liability">Limited Liability Partnership</label><br>
                  <input type="radio" id="plc" name="business_type" v-model="formdata.business_type" value="plc">
                  <label class="radio-label" for="plc">PLC</label>
                </div>
              </div>
              <h6 >Company Details</h6>
              <div class="row">
                <div class="form-group col-md-3">
                  <label>Company Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.company_name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-3">
                    <label>Address Line 1</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.address1"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Address Line 2</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.address2"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Post Code</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.postcode"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Country</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.country"
                    />
                  </div>
                
              </div>
              <h6 >Contact Details</h6>
              <div class="row">
                <div class="form-group col-md-3">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.contact_name"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Email</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.contact_email"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Telephone</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.contact_telephone"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Mobile</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.contact_mobile"
                    />
                  </div>
                
              </div>
              <h6 >Default Payment Terms</h6>
              <div class="row">
                <div class="form-group col-md-1">
                  <label>Days</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.payment_days"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label>Condition</label>
                  <select class="form-control form-control-user" v-model="formdata.payment_condition">
                    <option value="after_invoice">Days after sales invoice date</option>
                    <option value="after_delivery">Days after delivery date</option>
                  </select>
                </div>
              </div>
              <h6 >Home Currency</h6>
              <div class="row">
                <div class="form-group col-md-3">
                  <label>Currency Name</label>
                  <select class="form-control form-control-user" @change="fetchCurrency()" v-model="formdata.currency_id">
                    <option v-for="currency in currencies" :key="currency.id" :value="currency.id">{{currency.name}}</option>
                  </select>
                </div>
                <div class="form-group col-md-1">
                  <label>Symbol</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.currency_symbol" readonly
                  />
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label></label>
                    <div class="custom-checkbox small check-position">
                      <input type="checkbox" class="custom-control-input" id="customCheck" v-model="formdata.output_tax"
                      />
                      <label class="custom-control-label" for="customCheck" style="color:#000"
                        >Position to the right of the value</label>
                    </div>
                  </div>
                </div>
              </div>
              <h6 >VAT Registration Status</h6>
              <div class="row">
                <div class="form-group col-md-12">
                  <input type="radio" id="vat_uk" name="vat_status" v-model="formdata.vat_status" value="vat_uk">
                  <label class="radio-label" for="vat_uk">VAT registered in the UK (includes Northern Ireland)</label><br>
                  <input type="radio" id="vat_eu" name="vat_status" v-model="formdata.vat_status" value="vat_eu">
                  <label class="radio-label" for="vat_eu">VAT registered in an EU member state</label><br>
                  <input type="radio" id="vat_not" name="vat_status" v-model="formdata.vat_status" value="vat_not">
                  <label class="radio-label" for="vat_not">Not VAT registered</label>
                </div>
                <div class="form-group col-md-3" v-if="formdata.vat_status=='vat_uk' || formdata.vat_status=='vat_eu'">
                  <label>VAT Reg. Number</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.vat_number"
                  />
                </div>
              </div>
              <h6 >Industry Sector</h6>
              <div class="row">
                <div class="form-group col-md-3">
                  <select class="form-control form-control-user" v-model="formdata.sector_id">
                    <option v-for="industrysector in industrysectors" :key="industrysector.id" :value="industrysector.id">{{industrysector.title}}</option>
                  </select>
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
import { mapGetters } from "vuex";

export default {
  name: "CompanyDetails",
  computed: {
    ...mapGetters(["user","permissions"]),
  },
  data() {
    return {
      tabList: ["Basic Settings", "Field Names"],
      formdata: {},
      industrysectors:{},
      currencies:{}
    };
  },
  methods:
  {
    is_super_admin(){
      if(this.user)
      {
        if(this.user.role_id==1){
          return true;
        }
        else{
          return false;
        }
      }
    },
    checkPermission(permission) {
      if(this.permissions.length>0)
      {
        for (var i = 0; i <= this.permissions.length; i++) {
          if (this.permissions[i] === permission) {
            return true;
          } else false;
        }
      }
    },
    fetchCurrency()
    {
      axios.get('/currencydetails/'+this.formdata.currency_id)
        .then((response) => {
            this.formdata.currency_symbol = response.data.symbol;
        })
        .catch(function(error) {
        });
    },
    async storeCompanyDetails() {
      try {
        const response = await axios.post("store_details", {
          company_name: this.formdata.company_name,
          address1: this.formdata.address1,
          address2: this.formdata.address2,
          postcode: this.formdata.postcode,
          country: this.formdata.country,
          contact_name: this.formdata.contact_name,
          contact_email: this.formdata.contact_email,
          contact_telephone: this.formdata.contact_telephone,
          contact_mobile: this.formdata.contact_mobile,
          payment_days: this.formdata.payment_days,
          payment_condition: this.formdata.payment_condition,
          currency_id: this.formdata.currency_id,
          vat_status: this.formdata.vat_status,
          vat_number: this.formdata.vat_number,
          sector_id: this.formdata.sector_id,
          business_type: this.formdata.business_type
        });
        let message =
            "Company Details has been successfully saved.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    async updateCompanyDetails() {
      try {
        const response = await axios.post("update_details", {
          company_name: this.formdata.company_name,
          address1: this.formdata.address1,
          address2: this.formdata.address2,
          postcode: this.formdata.postcode,
          country: this.formdata.country,
          contact_name: this.formdata.contact_name,
          contact_email: this.formdata.contact_email,
          contact_telephone: this.formdata.contact_telephone,
          contact_mobile: this.formdata.contact_mobile,
          payment_days: this.formdata.payment_days,
          payment_condition: this.formdata.payment_condition,
          currency_id: this.formdata.currency_id,
          vat_status: this.formdata.vat_status,
          vat_number: this.formdata.vat_number,
          sector_id: this.formdata.sector_id,
          business_type: this.formdata.business_type
        });
        let message =
            "Company Details has been successfully saved.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    getIndustrySectors() {
      return axios.get("industrysector_list").then(response => {
          this.industrysectors = response.data;
      });
    },
    getCurrencies() {
      return axios.get("currencylist").then(response => {
          this.currencies = response.data;
      });
    },
  },
  mounted()
  {
    this.getIndustrySectors();
    this.getCurrencies();
    axios.get('/saved_companydetails/')
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
.tab-selector
{
  border: 1px solid #D6E3F2 !important;
  height: 40px;
  border-radius: 5px;
  width: 11%;
  color: #3377c2;
  font-size: 13px;
}
.check-position
{
  margin-left: 2%;
}
.inv_setting_input
{
  width: 20%;
}
.invoice_basic
{
  max-width:80%;
}
.radio-label
{
  font-size: 15px !important;
  margin-left: 5px;
}
.company_setting label {
    font-size: 14px;
}
.invoice_basic span
{
  color: #807e7e;
  font-size: 11px;
}
.company_setting label {
    font-size: 12px;
}
.check-position
{
  margin-left: 10%;
}
.box-content h6
{
 padding: 2% 0 1% 0;
 font-family: 'Titillium-Web-Bold';
}
</style>
