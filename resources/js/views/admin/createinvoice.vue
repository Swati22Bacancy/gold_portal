<template>
  <div>
    <form class="crt-invoice" @submit.prevent="create_invoice">
    <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">New Sales Invoice</h1>
        <div>
          <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
          <button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
        </div>
        
      </div>

      <div class="row">
        <div class="col-md-12 createinvoice-div">
          
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Customer</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="crt-invoice"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.companycode"
                />
              </div>
              
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Invoice No.</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="crt-invoice"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.companycode"
                />
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Issue Date</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="crt-invoice"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.companycode"
                />
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Due Date</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="crt-invoice"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.companycode"
                />
              </div>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-md-4">
              <div class="form-group">
                <label>Delivery & Billing Address</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="crt-invoice"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.companycode"
                />
              </div>
              
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Reference</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="crt-invoice"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.companycode"
                />
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Currency</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="crt-invoice"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.companycode"
                />
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Amounts are</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="crt-invoice"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.companycode"
                />
              </div>
            </div>
          </div>
          
          <div class="row mb-4">
            <div class="col-md-2">
              <div class="form-group">
                <input type="checkbox" class="custom-control-input" id="customCheck" />
                <label class="custom-control-label" for="customCheck"
                  >Recurring Invoice</label>
              </div>
              
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Frequency</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="crt-invoice"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.companycode"
                />
              </div>
            </div>
                
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 createinvoice-div pb-3" style="padding:0">
          <div class="">
            <div class="table-responsive table-div">
              <table class="table" id="createinvoice-datatable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Product</th>
                      <th>Weight(gm)</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Vat</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>
                          <select class="tab-selector">
                            <option value="Option 1" selected>Group</option>
                            <option value="Option 1" >Option 1</option>
                          </select>
                        </td>
                        <td>
                          <select class="tab-selector">
                            <option value="Option 1" selected>Group</option>
                            <option value="Option 1" >Option 1</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="crt-invoice"
                            aria-describedby="emailHelp"
                            placeholder=""
                            v-model="formdata.companycode"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="crt-invoice"
                            aria-describedby="emailHelp"
                            placeholder=""
                            v-model="formdata.companycode"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="crt-invoice"
                            aria-describedby="emailHelp"
                            placeholder=""
                            v-model="formdata.companycode"
                          />
                        </td>
                        <td>
                          <select class="tab-selector">
                            <option value="Option 1" selected>Group</option>
                            <option value="Option 1" >Option 1</option>
                          </select>
                        </td>
                        <td>4320</td>
                        <td>GB78602023</td>
                    </tr>
                    
                  </tbody>
              </table>
            </div>
          </div>
          <div class="">
            <button type="submit" class="btn admin-btn mobile-mb btn-addwidth" style="background-color: #7ADAAA !important;"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Line Item</button>
            <button type="button" class="btn admin-btn mobile-mb btn-addwidth"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Comment</button>
          </div>
        </div>
        
      </div>
      <div class="row">
        <div class="col-md-12 mt-4">
            <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;float: right;">Save</button>
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
    },
    async create_invoice() {
      try {
        this.formdata.customertype= this.customerType;
        const response = await axios.post("create_invoice", {
          firstname: this.formdata.firstname,
          lastname: this.formdata.lastname,
          email: this.formdata.email,
          companyname: this.formdata.companyname,
          registeredaddress: this.formdata.registeredaddress,
          vat: this.formdata.vat,
          telephone: this.formdata.telephone,
          whatsapp: this.formdata.whatsapp,
          title: this.formdata.title,
          creditlimit: this.formdata.creditlimit,
          companycode: this.formdata.companycode,
          customertype: this.formdata.customertype,
        });

        
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>
<style scoped>
#createinvoice-datatable thead {
    background: #3376C2;
    color: #fff;
    font-size: 13px;
}
#createinvoice-datatable thead tr th {
    font-weight: 100 !important;
}
#createinvoice-datatable
{
  font-size: 13px;
  color: #000;
}
.createinvoice-div
{
  background: #fff;
  padding: 34px 23px 0px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-invoice label
{
  font-size: 12px;
}
.crt-invoice
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
.table-div
{
  border-radius: 8px;
}
.tab-selector
{
  border: 1px solid #D6E3F2 !important;
  height: 40px;
  border-radius: 5px;
  width: 100%;
  font-size: 13px;
}
.btn-addwidth
{
  width: 130px;
}
</style>
