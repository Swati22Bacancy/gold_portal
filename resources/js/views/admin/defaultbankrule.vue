<template>
  <div>
    <form class="crt-role" @submit.prevent="formdata.id ? updateDefaultBankrule() : storeDefaultBankrule()">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Default Bank Allocation Rules</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/bankaccount"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>
    <div class="contentgrp">
      <div class="pb-2 mb-4">
        <div class="">
            <h6 class="pl-3 pt-3" style="font-weight: 600;color: #245388;">Match Rules (Inward Payments) (Default)</h6>
            <hr style="margin-bottom:0">
            <div class="row p-3">
              <div class="col-md-2">
                Invoice Date
              </div>
              <div class="col-md-1" style="font-size: 13px;">
                Matches
              </div>
              <div class="col-md-2">
                Payment Date
              </div>
              <div class="col-md-3">
                <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="invoice_date" v-model="formdata.invoice_date"/>
                    <label class="custom-control-label" for="invoice_date" style="color:#000;font-weight:700;"
                    ></label>
                </div>
              </div>
            </div>

            <div class="row p-3">
              <div class="col-md-2">
                Customer Name
              </div>
              <div class="col-md-1" style="font-size: 13px;">
                Matches
              </div>
              <div class="col-md-2">
                Receipient Name
              </div>
              <div class="col-md-3">
                <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="customer_name" v-model="formdata.customer_name"/>
                    <label class="custom-control-label" for="customer_name" style="color:#000;font-weight:700;"
                    ></label>
                </div>
              </div>
            </div>

            <div class="row p-3">
              <div class="col-md-2">
                Invoice Number
              </div>
              <div class="col-md-1" style="font-size: 13px;">
                Matches
              </div>
              <div class="col-md-2">
                Reference
              </div>
              <div class="col-md-3">
                <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="invoice_number" v-model="formdata.invoice_number"/>
                    <label class="custom-control-label" for="invoice_number" style="color:#000;font-weight:700;"
                    ></label>
                </div>
              </div>
            </div>

            <div class="row p-3">
              <div class="col-md-2">
                Invoice Amount
              </div>
              <div class="col-md-1" style="font-size: 13px;">
                Matches
              </div>
              <div class="col-md-2">
                Transaction Amount
              </div>
              <div class="col-md-3">
                <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="invoice_amount" v-model="formdata.invoice_amount"/>
                    <label class="custom-control-label" for="invoice_amount" style="color:#000;font-weight:700;"
                    ></label>
                </div>
              </div>
            </div>
            
        </div>

        <div class="mt-3">
            <h6 class="pl-3 pt-3" style="font-weight: 600;color: #245388;">Match Rules (Outward Payments) (Default)</h6>
            <hr style="margin-bottom:0">
            <div class="row p-3">
              <div class="col-md-2">
                Purchase Invoice Date
              </div>
              <div class="col-md-1" style="font-size: 13px;">
                Matches
              </div>
              <div class="col-md-2">
                Payment Date
              </div>
              <div class="col-md-3">
                <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="purchase_date" v-model="formdata.purchase_date"/>
                    <label class="custom-control-label" for="purchase_date" style="color:#000;font-weight:700;"
                    ></label>
                </div>
              </div>
            </div>

            <div class="row p-3">
              <div class="col-md-2">
                Customer Name
              </div>
              <div class="col-md-1" style="font-size: 13px;">
                Matches
              </div>
              <div class="col-md-2">
                Beneficiary Name
              </div>
              <div class="col-md-3">
                <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="purchase_customer" v-model="formdata.purchase_customer"/>
                    <label class="custom-control-label" for="purchase_customer" style="color:#000;font-weight:700;"
                    ></label>
                </div>
              </div>
            </div>

            <div class="row p-3">
              <div class="col-md-2">
                Purchase Number
              </div>
              <div class="col-md-1" style="font-size: 13px;">
                Matches
              </div>
              <div class="col-md-2">
                Reference
              </div>
              <div class="col-md-3">
                <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="purchase_number" v-model="formdata.purchase_number"/>
                    <label class="custom-control-label" for="purchase_number" style="color:#000;font-weight:700;"
                    ></label>
                </div>
              </div>
            </div>

            <div class="row p-3">
              <div class="col-md-2">
                Purchase Invoice Amount
              </div>
              <div class="col-md-1" style="font-size: 13px;">
                Matches
              </div>
              <div class="col-md-2">
                Debited Amount
              </div>
              <div class="col-md-3">
                <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="purchase_amount" v-model="formdata.purchase_amount"/>
                    <label class="custom-control-label" for="purchase_amount" style="color:#000;font-weight:700;"
                    ></label>
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
export default {
  name: "DefaultBankRule",
  data() {
    return {
      formdata: {},
      
    };
  },
  methods:
  {
    async storeDefaultBankrule() {
      try {
        const response = await axios.post("store_defaultbankrule", this.formdata);
        let message =
            "Default Bank Rule has been successfully saved.";
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
    async updateDefaultBankrule() {
      try {
        const response = await axios.post("update_defaultbankrule", this.formdata);
        let message =
            "Default Bank Rule has been successfully saved.";
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
    axios.get('/saved_defaultbankrule/')
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

.createrole-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-role label
{
  font-size: 12px;
}
.crt-role
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}

.contentgrp
{
  background-color: #fff;
  border-radius: 0px 5px 5px 5px;
}
#permission-datatable thead
{
  background: #3376C2;
  color: #fff;
  font-size: 13px;
}

#permission-datatable
{
  color: #000;
  font-size: 13px;
}
#permission-datatable thead tr th 
{
  font-weight: 100 !important;
}
table.dataTable thead th
{
  padding: 10px 10px !important;
}
table.dataTable.no-footer
{
  border-bottom: 1px solid #e3e6f0;
}

</style>
