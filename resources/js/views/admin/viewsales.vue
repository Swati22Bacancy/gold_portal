<template>
  <div class="row">
    <div class="col-1" v-if="sidebarflag" style="font-size: 12px;">
      <p><strong>INV-2001</strong></p>
      <p>INV-2000</p>
      <p>INV-1999</p>
      <p>INV-1998</p>
      <p>INV-1997</p>
      <p>INV-1996</p>
      <p>INV-1995</p>
      <p>INV-1994</p>
      <p>INV-1993</p>
      <p>INV-1992</p>
      <p>INV-1991</p>
      <p>INV-1990</p>
      <p>INV-1989</p>
      <p>INV-1988</p>
      <p>INV-1987</p>
      <p>INV-1986</p>
      <p>INV-1985</p>
      <p>INV-1984</p>
      <p>INV-1983</p>
      <p>INV-1982</p>
      <p>INV-1981</p>
    </div>
    <!-- Page Heading -->
    <div class="col-11">

      <div class="d-sm-flex align-items-center justify-content-between mb-4" style="margin-right:65px">
        <div class="d-sm-flex align-items-center justify-content-between">
          <button @click="sidebarToggle" class="btn-head"><i class="fas fa-arrow-left"></i></button>
          <h1 class="h3 mb-0 text-gray-800"  style="margin-left:20px; margin-right: 20px;">INV-2001</h1>
          <button @click="sidebarToggle" class="btn-head"><i class="fas fa-arrow-right"></i></button>
        </div>
        <div class="d-sm-flex align-items-center justify-content-between">
       <i class="fa fa-download" style="background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%;"></i>
       <i class="fab fa-whatsapp" style="background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%;"></i>
       <i class="fas fa-envelope" style="background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 30%;"></i>
       <i class="fas fa-print" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 30%;"></i>
        </div>
        <div class="d-sm-flex align-items-center justify-content-between">
          <i class="fas fa-link" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-right:35%"></i>
          <i class="fas fa-pencil-alt" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-right:35%"></i>
          <i class="fas fa-trash-alt" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; "></i>
        </div>
     </div>
      <div class="row">
        <div class="col-md-12 viewsales-div">
          
          <div class="row" style="padding-bottom:40px">
            <div class="col-md-2" style="border-right:  0.5px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Customer</p>
              <span>Robert Malasawaliki, <br>215 The broadway, Southall,<br>Middlesex UB1 1NB,</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">VAT No.</p>
              <span>140187339</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Issue Date</p>
              <span>17/04/2021</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4;font-size: 15px;">Due Date</p>
              <span>17/04/2021</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Amount Due</p>
              <span><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i> 47,992</span>
            </div>
            <div class="col-md-2">
              <p style="color:#4682B4; font-size: 15px;">Status</p>
              <span><button type="button" class="btn table-btn" style="margin-left: auto;width: 100px;">Partially Paid</button></span>
            </div>
          </div>

          
          
        </div>
      </div>
      <div class="mt-3">
        <div class="viewsales-div pb-3" style="padding:0">
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
                        <td>FGB/BULLION 50g PAMP</td>
                        <td>Investment Gold Bar</td>
                        <td>50.00</td>
                        <td>20</td>
                        <td><i class="fa fa-pound-sign" style="font-size:10px;"></i>2020.50</td>
                        <td>20</td>
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
              <ul style="text-align: left;">
                <li style="color:#3376C2">Sub Total</li>
                <li style="color:#3376C2">VAT Total</li>
                <li style="color:#3376C2">Total</li>
              </ul>
            </div>
            <div class="col-md-2 sum-price">
              <ul>
                <li style="font-size:13px;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>40,410.00</li>
                <li style="font-size:13px;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>8,082.00</li>
                <li style="font-size:13px;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i><b>48,492.00</b></li>
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
        <div>
        <div class="mt-4 btn-container">
          <div>
            <button type="submit" class="cont" style="background-color: #EDF2F6;" @click="tabclick('payment')" :class="{'selectedclr':!tabflag}">Payment(1)</button>
            <button type="submit" class="cont" style="background-color: #EDF2F6">Notes(0)</button>
            <button type="submit" class="cont" style="background-color: #EDF2F6" @click="tabclick('customer')" :class="{'selectedclr':tabflag}">Customer Kyc(4)</button>
            <button type="submit" class="cont" style="background-color: #EDF2F6 !important;">History</button>
          </div>
          <div>  
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;" @click="addLine"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Payment</button>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;">Apply Credit</button>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;">Refund</button>
        </div>
        </div> 
      </div>
      </div>
        <div class="table-div mb-2" v-if="!tabflag" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
              <table class="table" id="createinvoice-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
  
                  <tbody>
                    <tr v-for="(invoice_item, k) in invoice_items" :key="k">
                        <td>
                          <Datepicker class="datapicker" id="mydatepicker"></Datepicker>
                        </td>
                        <td>
                          <input type="text" class="form-control form-control-user" placeholder="" v-model="invoice_item.weight">
                       </td>
                        <td>
                          <select class="form-control form-control-user"  v-model="invoice_item.invoice_type">
                            <option>ICIC Bank Accounts</option>
                             <option>Baroda Bank</option>
                           
                          </select>
                        </td>
                        <td>
                          <select class="form-control form-control-user"  v-model="invoice_item.invoice_product">
                             <option>Cash</option>
                             <option>Cheque</option>
                          
                          </select>
                        </td>
                        <td>
                          <input type="text" class="form-control form-control-user" placeholder="" v-model="invoice_item.unitprice"/>
                        </td>
                        
                  
                        <td> <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;float: right;" @click="removeLine(k)">Cancle</button></td>
                        <td> <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;float: right;">Save</button></td>
                    </tr>
                  </tbody>
              </table>
            </div>
            <div v-else style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
             <div class="table-responsive">
            <table class="table" id="dash-datatable" width="100%" cellspacing="0">
                <tbody>
                  <tr>
                      <td style="color:black">Registration Certificate</td>
                      <td style="color:#3376C2">Regcert.pdf<i class="fa fa-download" style="margin-left:20px;"></i></td>
                      <td><i class="fas fa-upload" style="font-size:20px;margin-right:20px;color:green;"></i><i class="fa fa-trash" aria-hidden="true" style="font-size:20px;margin-right:5px;color:red;"></i></td>
                   </tr>
                  <tr>
                      <td style="color:black">VAT Certificate</td>
                      <td style="color:#3376C2">VatCert.pdf<i class="fa fa-download" style="margin-left:20px;"></i></td>
                      <td><i class="fas fa-upload" style="font-size:20px;margin-right:20px;color:green;"></i><i class="fa fa-trash" aria-hidden="true" style="font-size:20px;margin-right:5px;color:red;"></i></td>
                 </tr>
                 <tr>
                      <td style="color:black">ID Documents</td>
                      <td style="color:#3376C2">DriverLicence.pdf<i class="fa fa-download" style="margin-left:20px;"></i></td>
                      <td><i class="fas fa-upload" style="font-size:20px;margin-right:20px;color:green;"></i><i class="fa fa-trash" aria-hidden="true" style="font-size:20px;margin-right:5px;color:red;"></i></td>
                   </tr>
                  <tr>
                      <td style="color:black">Credit Report</td>
                      <td style="color:#3376C2">CreditRepoer.pdf<i class="fa fa-download" style="margin-left:20px;"></i></td>
                      <td><i class="fas fa-upload" style="font-size:20px;margin-right:20px;color:green;"></i><i class="fa fa-trash" aria-hidden="true" style="font-size:20px;margin-right:5px;color:red;"></i></td>
                   </tr>
                </tbody>
            </table>
          </div>
            </div>

    
    </div>
    
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
  name: "Dashboard",
  components: {
    Datepicker,
  },
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
      }],
      tabflag:false,
      sidebarflag:false,
    };

  },
  methods:
  {
    sidebarToggle(){
      this.sidebarflag = !this.sidebarflag;
    },
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
     removeLine(index)
    {
      this.invoice_items.splice(index,1);
    },
    tabclick(param){
     if(param == "customer"){
      this.tabflag = true;
     }
     else{
      this.tabflag = false;
     }
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
.btn-head{
  border-radius: 50%;

}
.btn-container{
  display: flex;
  justify-content: space-between !important;
  width:100% !important;
}
.selectedclr{
  background-color: #245388 !important;
}
.cont{
   
  width: auto;
    font-size: 13px  !important;
    color: #000;
   border:none;
    height: 40px;
    
    margin-left: 10px;
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
