<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8 mobile-mb">
            <h1 class="h3 mb-0 text-gray-800">Invoice Options</h1>
          </div>
          
        </div>
        
      </div>
    </div>

    <div class="tabs-cstm">
      <customer-tabs :tabList="tabList">
        <template v-slot:tabPanel-1> 
          <form class="invoice_setting" @submit.prevent="formdata.id ? updateInvoiceOptions() : storeInvoiceOptions()">
           <div class="row">
            <div class="col-md-12 box-align invoice_basic">
                <p>For options that affect how your sales invoices and other documents look when printed or emailed</p>
                <div class="form-group">
                  <div class="custom-checkbox small check-position">
                    <input type="checkbox" class="custom-control-input" id="customCheckRate" v-model="formdata.name_include"
                    />
                    <label class="custom-control-label" for="customCheckRate" style="color:#000;font-size: 14px;;"
                      >Include contact name with company name at the top of sales invoices.</label
                    >
                  </div>
                </div>
                <p>if most payments you receieve are by a specific method, i.e. Cash, then you can set this to your default method so that when you are adding payments to an invoice the method is already set for you.</p>
                <div class="form-group inv_setting_input">
                  <label>Method</label>
                  <select class="form-control form-control-user" v-model="formdata.method">
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="cash">Cash</option>
                    <option value="other">Other</option>
                  </select>
                </div>
            </div>
           </div>
           <div class="row">
            <div class="col-md-12 box-align" style="text-align:center;">
              <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
            </div>
           </div>
          </form>
        </template>
        <template v-slot:tabPanel-2> 
           <form class="invoice_setting" @submit.prevent="formdata.id ? updateInvoiceFields() : storeInvoiceFields()">
           <div class="row">
            <div class="col-md-12 box-align invoice_basic">
                <div class="form-group">
                  <label>Sales Invoice Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user inv_setting_input"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.invoice_name"
                  />
                  <span>You can rename your sales invoices, to anything you like. For most people "Sales invoice" is fine, but some people want to rename this.</span>
                </div>
                <div class="form-group">
                  <label>Credit Note Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user inv_setting_input"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.creditnote_name"
                  />
                  <span>You can also rename Credit Notes if you want to. When you create a sales invoice for a negative amount, this is the little it'll have.</span>
                </div>
                <div class="form-group">
                  <label>Customer Reference</label>
                  <input
                    type="text"
                    class="form-control form-control-user inv_setting_input"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.customer_reference"
                  />
                  <span>Sometimes renamed to "Purchase Order".</span>
                </div>
                <div class="form-group">
                  <label>Quantity</label>
                  <input
                    type="text"
                    class="form-control form-control-user inv_setting_input"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.quantity"
                  />
                  <span>Rename the fields to something more appropriate - perhaps 'Hours'.</span>
                </div>
            </div>
           </div>
           <div class="row">
            <div class="col-md-12 box-align" style="text-align:center;">
              <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
            </div>
           </div>
          </form>
        </template>
      </customer-tabs>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomerTabs from "./CustomerTabs";

export default {
  name: "InvoiceOptions",
  computed: {
    ...mapGetters(["user","permissions"]),
  },
  components: {
    CustomerTabs
  },
  data() {
    return {
      tabList: ["Basic Settings", "Field Names"],
      formdata:{}
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
    async storeInvoiceOptions() {
      try {
        const response = await axios.post("store_basic", {
          method: this.formdata.method,
          name_include: this.formdata.name_include
        });
        let message =
            "Invoice Options has been successfully saved.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        //this.$router.push("/invoice-options");
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    async storeInvoiceFields() {
      try {
        const response = await axios.post("store_fields", {
          invoice_name: this.formdata.invoice_name,
          creditnote_name: this.formdata.creditnote_name,
          customer_reference: this.formdata.customer_reference,
          quantity: this.formdata.quantity
        });
        let message =
            "Invoice Options has been successfully saved.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        //this.$router.push("/invoice-options");
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    async updateInvoiceOptions() {
      try {
        const response = await axios.post("update_basic", {
          method: this.formdata.method,
          name_include: this.formdata.name_include
        });
        let message =
            "Invoice Options has been successfully saved.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        //this.$router.push("/invoice-options");
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    async updateInvoiceFields() {
      try {
        const response = await axios.post("update_fields", {
          invoice_name: this.formdata.invoice_name,
          creditnote_name: this.formdata.creditnote_name,
          customer_reference: this.formdata.customer_reference,
          quantity: this.formdata.quantity
        });
        let message =
            "Invoice Options has been successfully saved.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        //this.$router.push("/invoice-options");
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
    axios.get('/saved_invoiceoptions/')
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
.invoice_basic p
{
  color: #807e7e;
  font-size: 14px;
}
.invoice_setting label {
    font-size: 14px;
}
.invoice_basic span
{
  color: #807e7e;
  font-size: 11px;
}
.invoice_setting label {
    font-size: 12px;
}
</style>
