<template>
  <div>
    <form class="vat_setting" @submit.prevent="formdata.id ? updateVatSettings() : storeVatSettings()">
    <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">VAT Settings</h1>
        <div>
          <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
          <router-link to="/settings"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
        </div>
      </div>
      <div class="company-cstm">
        <div class="row">
          <div class="col-md-12">
            <div class="box-content box-align box-padding">
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
                  <label>Tax Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.tax_name"
                  />
                  <label>VAT Number</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.vat_number"
                  />
                </div>
              </div>
              <h6 class="pb-0 mb-0">My annual turnover is above 85,000</h6>
              <span style="font-size:12px;">(Select No if you are exempt from MTD for VAT)</span>
              <div class="row pt-2 pb-4">
                <div class="form-group col-md-4">
                  <input type="radio" id="turnover_above" name="turnover" v-model="formdata.turnover" value="turnover_above">
                  <label class="radio-label pr-5" for="turnover_above">Yes</label>
                  <input type="radio" id="turnover_below" name="turnover" v-model="formdata.turnover" value="turnover_below">
                  <label class="radio-label" for="turnover_below">No</label><br>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <input type="radio" id="vat_quarter" name="vat_period" v-model="formdata.vat_period" value="vat_quarter">
                  <label class="radio-label pr-5" for="vat_quarter" style="font-weight:700;">I report my VAT quarterly</label>
                  <input type="radio" id="vat_monthly" name="vat_period" v-model="formdata.vat_period" value="vat_monthly">
                  <label class="radio-label" for="vat_monthly" style="font-weight:700;">I report my VAT monthly</label><br>
                  <span style="font-size:12px;">Select the option that corresponds with the first months of your VAT periods</span><br>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <select v-if="formdata.vat_period=='vat_quarter' || !formdata.vat_period" class="form-control form-control-user" v-model="formdata.report_quarter">
                    <option value="first_quarter">Jan, Apr, Jul, Oct</option>
                  </select>

                  <select v-if="formdata.vat_period=='vat_monthly'" class="form-control form-control-user" v-model="formdata.report_monthly">
                    <option value="january">January</option>
                  </select>
                </div>
              </div>
              <div class="row pt-5 pb-4">
                <div class="form-group col-md-6">
                  <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="owe_vat" v-model="formdata.owe_vat"/>
                    <label class="custom-control-label" for="owe_vat" style="color:#000;font-weight:700;"
                      >On my overview page, show me how much I owe for the current VAT period</label>
                  </div>
                  <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="remind_vat" v-model="formdata.remind_vat"/>
                    <label class="custom-control-label" for="remind_vat" style="color:#000;font-weight:700;"
                      >Remind me regrading my VAT return</label>
                  </div>
                  <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="lock_transaction" v-model="formdata.lock_transaction"/>
                    <label class="custom-control-label" for="lock_transaction" style="color:#000;font-weight:700;"
                      >Automatically lock transactions after I submit a VAT return</label>
                  </div>
                </div>
              </div>
              <h6 class="pb-0">Calculation Method:</h6>
              <div class="row pb-4">
                <div class="form-group col-md-8">
                  <span style="font-size:12px;">There are two ways to calculate the tax on your sales invoices:<br>
                  You can work out the tax due on the total value of the line amount (qty x rate) or you can calculate the tax due on a single item<br>
                  and then multiply it by quantity. The second option is often used by companies that sell products to the public at a tax inclusive price.</span><br>
                  <input type="radio" id="tax_total" name="calculation_method" v-model="formdata.calculation_method" value="tax_total">
                  <label class="radio-label pt-3 pr-5" for="tax_total" style="">A - Calculate tax on line total</label>
                  <input type="radio" id="tax_individual" name="calculation_method" v-model="formdata.calculation_method" value="tax_individual">
                  <label class="radio-label" for="tax_individual" style="">B - Calculate tax on individual unit price</label><br>
                </div>
              </div>
              <h6 class="pb-0">VAT Rates:</h6>
              <div class="row">
                <div class="form-group col-md-4">
                  <span style="font-size:12px;">To delete a VAT rate, select it from the list and click the Trash icon.<br>
                  To add a VAT rate, enter it in the box and click the 'Add' icon</span><br>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-2" style="display: inline-flex;">
                  <select class="form-control form-control-user" v-model="formdata.vat_rate">
                    <option value="january">January</option>
                  </select>
                  <span class="material-symbols-outlined" style="margin-right: 5px;color: red;cursor: pointer;">delete</span>
                </div>
                <div class="form-group col-md-2" style="display: inline-flex;">
                  <input type="text" class="form-control form-control-user"  aria-describedby="emailHelp" placeholder="" v-model="formdata.entered_vatrate"
                  />
                  <i class="fas fa-plus" style="margin-right: 5px;"></i>
                </div>
              </div>
              <div class="row pb-4">
                <div class="form-group col-md-2">
                  <select class="form-control form-control-user" v-model="formdata.default_vatrate">
                    <option value="20">20%</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <span style="font-size:12px;">Select the default tax rate for newly created sales invoices and receipts.</span><br>
                </div>
              </div>
              <h6 class="pb-0">Cash Accounting:</h6>
              <div class="row pb-4">
                <div class="form-group col-md-8">
                  <span style="font-size:12px;">Some nusinesses uses a VAT scheme called "Cash Accounting". This allows you to only pay/reclaim VT on payments actually made/received - as opposed to sales invoices issued.</span><br>
                  <div class="custom-checkbox small check-position vat_checkbox mb-2 pt-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="scheme_cash" v-model="formdata.scheme_cash"/>
                    <label class="custom-control-label" for="scheme_cash" style="color:#000;"
                      >I am on the Cash Accounting Scheme</label>
                  </div>
                  <input type="radio" id="sales_scheme" name="cash_scheme" v-model="formdata.cash_scheme" value="sales_scheme">
                  <label class="radio-label pt-3 pr-5" for="sales_scheme" style="font-size:12px !important;">Sales invoice & Purchases</label><br>
                  <input type="radio" id="invoice_scheme" name="cash_scheme" v-model="formdata.cash_scheme" value="invoice_scheme">
                  <label class="radio-label" for="invoice_scheme" style="font-size:12px !important;">Sales invoices only</label><br>
                  <input type="radio" id="purchase_scheme" name="cash_scheme" v-model="formdata.cash_scheme" value="purchase_scheme">
                  <label class="radio-label" for="purchase_scheme" style="font-size:12px !important;">Purchases only</label><br>
                </div>
              </div>
              <h6 class="pb-0">Flat Rate Scheme (FRS)</h6>
              <div class="row">
                <div class="custom-checkbox small check-position vat_checkbox mb-2 pt-2">
                  <label></label>
                  <input type="checkbox" class="custom-control-input" id="flatrate_scheme" v-model="formdata.flatrate_scheme"/>
                  <label class="custom-control-label" for="flatrate_scheme" style="color:#000;"
                    >I use the Flat Rate Sceheme for VAT</label><br>
                </div>
              </div>
              <div class="row" v-if="formdata.flatrate_scheme">
                <div class="form-group col-md-4">
                  <label>FRS Rate (%)</label>
                  <input type="text" class="form-control form-control-user"  aria-describedby="emailHelp" placeholder="" v-model="formdata.frs_rate"
                  />
                </div>
              </div>
              <div class="row" v-if="formdata.flatrate_scheme">
                <div class="form-group col-md-4">
                  <label>Retained VAT Code - Code for recording any gain you make from FRS</label>
                  <select class="form-control form-control-user" v-model="formdata.flatvat_rate">
                    <option value="january">0 - Other</option>
                  </select>
                </div>
              </div>
              <div class="row pb-4" v-if="formdata.flatrate_scheme">
                <div class="form-group col-md-2">
                  <label>Prior FRS Rate (%)</label>
                  <input type="text" class="form-control form-control-user"  aria-describedby="emailHelp" placeholder="" v-model="formdata.priorfrs_rate"
                  />
                </div>
                <div class="form-group col-md-2">
                  <label>Prior To</label>
                  <input type="text" class="form-control form-control-user"  aria-describedby="emailHelp" placeholder="" v-model="formdata.prior_to"
                  />
                </div>
              </div>

              <h6 class="pb-0">ECS Sales List</h6>
              <span style="font-size:12px;">If you register for online filing of VAT returns, then we can send your EC Sales List to HMRC electronically on your behalf.</span><br>
              <div class="row">
                <div class="custom-checkbox small check-position vat_checkbox mb-2 pt-2">
                  <label></label>
                  <input type="checkbox" class="custom-control-input" id="enable_filing" v-model="formdata.enable_filing"/>
                  <label class="custom-control-label" for="enable_filing" style="color:#000;"
                    >Enable Online Filing</label><br>
                </div><br>
              </div>
              <p class="pt-4" v-if="formdata.enable_filing"> HRMC Online Filing Username &  Password</p>
              <div class="row" v-if="formdata.enable_filing">
                <div class="form-group col-md-3">
                  <label>Username</label>
                  <input type="text" class="form-control form-control-user"  aria-describedby="emailHelp" placeholder="Enter Username" v-model="formdata.username"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label>Password</label>
                  <input type="password" class="form-control form-control-user"  aria-describedby="emailHelp" placeholder="Enter Password" v-model="formdata.password"
                  />
                </div>
              </div>
              <div class="row" v-if="formdata.enable_filing">
                <div class="form-group col-md-3">
                  <label>Branch</label>
                  <input type="text" class="form-control form-control-user"  aria-describedby="emailHelp" placeholder="" v-model="formdata.branch"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label></label>
                  <span style="font-size:12px;">Only required for sending EC Sales Lists
                  </span>
                </div>
              </div>
              <div class="row" v-if="formdata.enable_filing">
                <div class="form-group col-md-3">
                  <label>Postcode</label>
                  <input type="text" class="form-control form-control-user"  aria-describedby="emailHelp" placeholder="Enter Postcode" v-model="formdata.postcode"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label>VAT No.</label>
                  <input type="text" class="form-control form-control-user"  aria-describedby="emailHelp" placeholder="Enter VAT No." v-model="formdata.ecs_vat"
                  />
                </div>
              </div>
              <div class="row">
                <div class="custom-checkbox small check-position vat_checkbox mb-2 pt-2">
                  <label></label>
                  <input type="checkbox" class="custom-control-input" id="ecs_exclude" v-model="formdata.ecs_exclude"/>
                  <label class="custom-control-label" for="ecs_exclude" style="color:#000;"
                    >Don't include EC Sales List with  VAT return. Select this option if your EC Sales List needs  to be submitted seperately from your VAT return.</label><br>
                </div><br>
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
import {objectToFormData} from '../../object-to-formdata';
export default {
  name: "VatSettings",
  computed: {
    ...mapGetters(["user","permissions"]),
  },
  data() {
    return {
      tabList: ["Basic Settings", "Field Names"],
      formdata: {}
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
    async storeVatSettings() {
      try {
        const response = await axios.post("store_vatsettings", this.formdata);
        let message =
            "VAT Settings has been successfully saved.";
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
    async updateVatSettings() {
      try {
        const response = await axios.post("update_vatsettings",this.formdata);

        let message =
            "VAT Settings has been successfully saved.";
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
  },
  mounted()
  {
    axios.get('/saved_vatsettings/')
        .then((response) => {
            this.formdata = response.data;
            this.formdata.password = "";
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
  margin-left: 0;
}
.vat_checkbox label{
  font-size: 14px !important;
  letter-spacing: 0.7px;
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
.vat_setting label {
    font-size: 14px;
}
.invoice_basic span
{
  color: #807e7e;
  font-size: 11px;
}
.vat_setting label {
    font-size: 12px;
}
.check-position
{
  margin-left: 4%;
}
.box-content h6
{
 padding: 2% 0 1% 0;
 font-family: 'Titillium-Web-Bold';
}
.upload_text
{
  font-size: 14px;
  margin-left: 1%;
}
.document_title
{
  font-size: 15px;
}
.download_link
{
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background-color: #7ADAAA;
  font-size: 13px !important;
  color: #000;
  border-radius: 5px;
  height: auto;
  margin-left: 10px;
}
</style>
