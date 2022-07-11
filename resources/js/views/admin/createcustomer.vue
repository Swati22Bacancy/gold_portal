<template>
  <div>
    <form class="crt-customer" @submit.prevent="create_customer">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Create New Customer</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
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
                    v-model="formdata.companycode"
                  />
                </div>
              </div>
              <div class="col-md-6"></div>
            </div>
            <div class="row" v-if="customerType=='business'">
              <div class="col-md-6 detail-div">
                <h6>Company Details</h6>
                <div class="form-group customer-input">
                  <label>Company Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.companyname"
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Registered Address</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.registeredaddress"
                  />
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
                <h6>Company Details</h6>
                <div class="form-group customer-input">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.email"
                  />
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
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.firstname"
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Last Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.lastname"
                  />
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
                    v-model="formdata.creditlimit"
                  />
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
                  />
                </div>
                <div class="form-group customer-input">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Last Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-md-6 primary-div">
                <div class="form-group customer-input">
                  <label>Registered Address</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
                <div class="form-group customer-input">
                  <label>Telephone</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
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

export default {
  name: "Dashboard",
  data() {
    return {
      customerType: 'business',
      theme: 'cust-type',
      formdata: {},
    };
  },
  methods:
  {
    changetype(type)
    {
      
      this.customerType = type;
      console.log(this.customerType);
    },
    async create_customer() {
      try {
        const response = await axios.post("create_customer", {
          formdata: this.formdata,
        });

        
      } catch (error) {
        notify.authError(error);
      }
    },
  }
};
</script>
<style scoped>

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
    border-right: 1.5px solid rgb(204, 204, 204);
    padding-right: 8%;
  }
  .primary-div
  {
    padding-left: 8%;
  }
}
</style>
