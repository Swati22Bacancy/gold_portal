<template>
  <div>
    <form class="company_setting" @submit.prevent="formdata.id ? updateCustomerSettings() : storeCustomerSettings()">
    <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Customer & Supplier Settings</h1>
      </div>
      <div class="company-cstm">
        <div class="row">
          <div class="col-md-12">
            <div class="box-content box-align section-padding">
              <p>How you would like customer names to be displayed in your lists ?</p>
              <div class="row">
                <div class="form-group col-md-3">
                  <select class="form-control form-control-user" v-model="formdata.display_option">
                    <option value="company_name">Company Name</option>
                    <option value="bank_transfer">Bank Transaction</option>
                    <option value="customer">Customer</option>
                    <option value="invoice">Invoice</option>
                    <option value="invoice_payment">Invoice Payment</option>
                    <option value="receipt">Receipt</option>
                    <option value="receipt_payment">Receipt Payment</option>
                    <option value="journal_entry">Journal Entry</option>
                    <option value="supplier">Supplier</option>
                    <option value="nominal_code">Nominal Code</option>
                    <option value="product">Product</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <div class="custom-checkbox small check-position">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="customCheck" v-model="formdata.post_code"
                    />
                    <label class="custom-control-label" for="customCheck" style="color:#000"
                      >Append Post Code</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <div class="custom-checkbox small check-position">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="due_date" v-model="formdata.due_date"/>
                    <label class="custom-control-label" for="due_date" style="color:#000"
                      >Include 'Due Date' field on Statements</label>
                  </div>
                  <div class="custom-checkbox small check-position">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="payment_method" v-model="formdata.payment_method"/>
                    <label class="custom-control-label" for="payment_method" style="color:#000"
                      >Include 'Payment Method' field on Statements</label>
                  </div>
                  <div class="custom-checkbox small check-position">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="customer_records" v-model="formdata.customer_records"/>
                    <label class="custom-control-label" for="customer_records" style="color:#000"
                      >Extra Field on Customer Records</label>
                  </div>
                  <div class="custom-checkbox small check-position">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="supplier_records" v-model="formdata.supplier_records"/>
                    <label class="custom-control-label" for="supplier_records" style="color:#000"
                      >Extra Field on Supplier Records</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 box-align" style="text-align:center;">
                  <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
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
  name: "CustomerSettings",
  computed: {
    ...mapGetters(["user","permissions"]),
  },
  data() {
    return {
      formdata: {},
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
    async storeCustomerSettings() {
      try {
        const response = await axios.post("store_customersettings", this.formdata);
        let message =
            "Customer Settings has been successfully saved.";
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
    async updateCustomerSettings() {
      try {
        const response = await axios.post("update_customersettings", this.formdata);
        let message =
            "Customer Settings has been successfully saved.";
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
    axios.get('/saved_customersettings/')
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
.check-position
{
  margin-left: 2%;
}
.company_setting label {
    font-size: 14px !important;
    margin: 2% 0;
}
.company_setting label {
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
.section-padding
{
  padding: 3% 3%;
}
</style>
