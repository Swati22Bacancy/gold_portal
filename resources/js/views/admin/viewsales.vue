<template>
  <div>
    
    <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">INV-2001</h1>
        <div>
          <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
          <button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
        </div>
        
      </div>

      <div class="row">
        <div class="col-md-12 viewsales-div">
          
          <div class="row">
            <div class="col-md-2">
              <p>Customer</p>
              <span>Robert Malasawaliki</span>
            </div>
            <div class="col-md-2">
              <p>VAT No.</p>
              <span>140187339</span>
            </div>
            <div class="col-md-2">
              <p>Issue Date</p>
              <span>17/04/2021</span>
            </div>
            <div class="col-md-2">
              <p>Due Date</p>
              <span>17/04/2021</span>
            </div>
            <div class="col-md-2">
              <p>Amount Due</p>
              <span><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i> 47,992</span>
            </div>
            <div class="col-md-2">
              <p>Status</p>
              <span><button type="button" class="btn table-btn" style="margin-left: auto;width: 68px;">UnPaid</button></span>
            </div>
          </div>

          
          
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 viewsales-div pb-3" style="padding:0">
          <div class="">
            <div class="table-responsive table-div mb-2">
              <table class="table" id="createinvoice-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Description</th>
                      <th>Weight(gms)</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Vat(%)</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>FGB/BULLION</td>
                        <td>Investment Gold Bar</td>
                        <td>50.00</td>
                        <td>20</td>
                        <td><i class="fa fa-pound-sign" style="font-size:10px;"></i>2020.50</td>
                        <td>70</td>
                        <td><i class="fa fa-pound-sign" style="font-size:10px;"></i>48490.00</td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2 sum-price">
              <ul style="text-align: right;">
                <li style="color:#3376C2">Sub Total (<i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>)</li>
                <li style="color:#3376C2">VAT Total (<i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>)</li>
                <li style="color:#3376C2">Total (<i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>)</li>
              </ul>
            </div>
            <div class="col-md-2 sum-price">
              <ul>
                <li style="font-size:13px;">8000</li>
                <li style="font-size:13px;">640</li>
                <li style="font-size:13px;">8640</li>
              </ul>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-md-6">
              
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2">Sub Total</div>
            <div class="col-md-2">8000</div>
          </div>
          <div class="row">
            <div class="col-md-6">
              
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2">Sub Total</div>
            <div class="col-md-2">8000</div>
          </div> -->
        </div>
        
      </div>
      <div class="row">
        <div class="col-md-12 mt-4">
            <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;float: right;">Save</button>
        </div>
      </div>
    
    
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
      rows: [],
      invoice_items: [{
          invoice_type: '',
          invoice_product: '',
          weight: '',
          quantity: '',
          unitprice: '',
          vat: '',
          invoice_amount:''
      }]
    };
  },
  methods:
  {
    changetype(type)
    {
      
      this.customerType = type;
    },
    addLine(){
      this.invoice_items.push({
          invoice_type: '',
          invoice_product: '',
          weight: '',
          quantity: '',
          unitprice: '',
          vat: '',
          invoice_amount:''
      });
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
.viewsales-div
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
  border-bottom: 1px solid #ccc;
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
.sum-price ul
{
  list-style-type: none;
}
.sum-price li{
  padding: 5px 0px;
  font-size: 11px;
};
.viewsales-div > p {
    color: #3376C2;
    font-size: 12px;
}
.viewsales-div span {
    color: #000;
    font-size: 13px;
}
</style>
