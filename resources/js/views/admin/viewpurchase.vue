<template>
  <div class="row">
    <div class="col-1" v-if="sidebarflag" style="font-size: 12px;">
      <div v-for="purchase in purchases" :key="purchase.id"  v-bind:class = "(purchase.invoiceno==formdata.invoiceno)?'bold_font':''" style="color:#000">
      
      <div @click="sideClick(purchase.id)"><b>{{purchase.invoiceno}}</b></div></div>
    </div>
    <!-- Page Heading -->
    <div class="col-11">

      <div class="d-sm-flex align-items-center justify-content-between mb-4" style="margin-right:65px">
        <div class="d-sm-flex align-items-center justify-content-between">
          <button @click="sidebarToggle" class="btn-head"><i class="fas fa-arrow-left"></i></button>
          <h1 class="h3 mb-0 text-gray-800"  style="margin-left:20px; margin-right: 20px;">{{formdata.invoiceno}}</h1>
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
      <div class="">
        <div class="col-md-12 viewpurchase-div">
          
          <div class="row" style="padding-bottom:40px">
            <div class="col-md-3" style="border-right:  0.5px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Supplier</p>
              <span>{{formdata.firstname}} {{formdata.lastname}}, <br>{{formdata.billing_address}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Issue Date</p>
              <span>{{dateFormateChanger(formdata.issue_date)}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4;font-size: 15px;">Due Date</p>
              <span>{{dateFormateChanger(formdata.due_date)}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Amount Due</p>
              <span><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>{{due_payment}}</span>
            </div>
            <div class="col-md-3">
              <p style="color:#4682B4; font-size: 15px;">Status</p>
              <span>
                <button type="button" v-if="invoice_status!='Paid'" class="btn table-btn" style="margin-left: auto;width: 100px;">{{invoice_status}}</button><br>
                <span v-if="over_paid<0"> Over Amount: {{Math.abs(over_paid)}}</span>
                <button type="button" v-if="invoice_status=='Paid'" class="btn table-btn" style="margin-left: auto;width: 100px;background-color: #00AA5B !important;">{{invoice_status}} </button>
              </span>
            </div>
          </div>

          
          
        </div>
      </div>
      <div class="mt-3">
        <div class="viewpurchase-div pb-3" style="padding:0">
          <div class="">
            <div class="table-responsive table-div mb-2" style="border-radius: 8px;">
              <table class="table" id="createinvoice-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
                  <thead>
                    <tr>
                      <th>Product Type</th>
                      <th>Product</th>
                      <th>Weight(gms)</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Vat(%)</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="purchaseitem in formdata.purchaseitem" :key="purchaseitem.id">
                        <td>{{purchaseitem.typename}}</td>
                        <td>{{purchaseitem.productname}}</td>
                        <td>{{purchaseitem.weight}}</td>
                        <td>{{purchaseitem.quantity}}</td>
                        <td><i class="fa fa-pound-sign" style="font-size:10px;"></i>{{purchaseitem.unitprice}}</td>
                        <td>{{purchaseitem.vat}}</td>
                        <td><i class="fa fa-pound-sign" style="font-size:10px;"></i>{{purchaseitem.invoice_amount}}</td>
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
                <li style="font-size:13px;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>{{formdata.subtotal}}</li>
                <li style="font-size:13px;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>{{formdata.vattotal}}</li>
                <li style="font-size:13px;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i><b>{{formdata.totalamount}}</b></li>
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
            <button type="button" class="cont" style="background-color: #EDF2F6;" @click="tabclick('payment')" :class="{'selectedclr':selectedtab=='payment'}">Payment({{paymentcount}})</button>
            <button type="button" class="cont" style="background-color: #EDF2F6" @click="tabclick('note')" :class="{'selectedclr':selectedtab=='note'}">Notes</button>
            <button type="button" class="cont" style="background-color: #EDF2F6;" @click="tabclick('history')" :class="{'selectedclr':selectedtab=='history'}">History</button>
          </div>
          <div>  
            <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;" @click="addLine"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Payment</button>
          </div>
        </div> 
      </div>
      </div>
        <div class="table-div mb-2" v-if="selectedtab=='payment'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
          <table class="table purchasedata" v-if="!addpayment" id="showpayment-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr v-for="purchasepayment in formdata.purchasepayments" :key="purchasepayment.id">
                    <td>{{dateFormateChanger(purchasepayment.payment_date)}}</td>
                    <td></td>
                    <td>{{purchasepayment.method}}</td>
                    <td></td>
                    <td style="color:#7adaaa;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i> {{purchasepayment.totalamount}} Paid</td>
                    <td>
                      
                    </td>
                    <td>
                      <span class="material-symbols-outlined" style="margin-right: 10px;color: #3376C2;" @click="editpayment(purchasepayment)">edit</span>
                      <span class="material-symbols-outlined" style="margin-right: 5px;color: red;cursor: pointer;" data-toggle="modal" data-target="#deleteConfirmation" @click="selectrecord(purchasepayment.id)">delete</span>
                    </td>
                </tr>
                
              </tbody>
          </table>
          <table v-if="addpayment" class="table" id="createpayment-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr v-for="(invoice_item, k) in invoice_items" :key="k">
                    <td>
                      <Datepicker class="datapicker" id="mydatepicker" v-model="invoice_item.payment_date"></Datepicker>
                    </td>
                    <td style="width:130px;" >
                      <input type="number" class="form-control form-control-user" placeholder="Amount" v-model="invoice_item.totalamount">
                    </td>
                    <td>
                      <select class="form-control form-control-user"  v-model="invoice_item.bank" @change="dropdownCash(k)">
                        <option value="ICIC Bank Accounts">ICIC Bank Accounts</option>
                        <option value="Baroda Bank">Baroda Bank</option>
                        <option value="Cash Account">Cash in hand account</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-control form-control-user"  v-model="invoice_item.method">
                          <option value="Bank Transfer" v-if="!cashSelected">Bank Transfer</option>
                          <option value="Cash">Cash</option>
                          <option value="Cheque" v-if="!cashSelected">Cheque</option>
                      
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control form-control-user" placeholder="Note" v-model="invoice_item.comment"/>
                    </td>
                    <td> <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;float: right;" @click="removeLine(k)">Cancel</button></td>
                    <td> <button type="button" @click="save_payment(k)" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;float: right;">Save</button></td>
                </tr>
              </tbody>
          </table>
        </div>

        <div class="table-div mb-2" v-if="selectedtab=='note'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
          <table class="table" id="addnote_table" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr>
                    <td>
                      <input type="text" class="form-control form-control-user" placeholder="Add note" v-model="note">
                    </td>
                    <td> 
                      <button type="button" @click="save_note()" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;float: right;">Save</button>
                    </td>
                </tr>
              </tbody>
          </table>
        </div>
        
        <div class="table-div mb-2" v-if="selectedtab=='history'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
          <table class="table purchasedata" id="purchasehistory-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
               <thead>
                    <tr>
                        <th style="width: 140px;">Changes</th>
                        <th style="width: 140px;">Date</th>
                        <th style="width: 140px;">User</th>
                        <th>Details</th>
                    </tr>
                </thead>
              <tbody>
                <tr v-for="purchasehistory in formdata.purchasehistory" :key="purchasehistory.id">
                    <td>{{purchasehistory.changes}}</td>
                    <td>{{ dateFormateChanger(purchasehistory.log_date) }}</td>
                    <td>{{ purchasehistory.firstname }} {{ purchasehistory.lastname }}</td>
                    <td>{{ purchasehistory.comment }}</td>
                </tr>
              </tbody>
          </table>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="deleteConfirmation" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title" id="deleteConfirmationLabel">Confirmation</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" style="color:#fff">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <p style="color:#000;font-size:14px;">Are you sure you want to delete this payment?</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deleteRecord(paymentid)">Delete</button>
                  </div>
              </div>
          </div>
      </div>
    
    </div>
    
  </div>
</template>

<script>
  import { thisTypeAnnotation } from '@babel/types';
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';
export default {
  name: "Dashboard",
  components: {
    Datepicker,
  },
  data() {
    return {
      customerType: 'business',
      addpayment:'',
      theme: 'cust-type',
      formdata: {},
      rows: [],
      cashSelected: false,
      invoice_items: [{
          payment_date:Date.now(),
          totalamount:'',
          bank:'ICIC Bank Accounts',
          method:'Bank Transfer',
          comment:''
      }],
      tabflag:false,
      sidebarflag:false,
      paymentid:'',
      paymentcount:0,
      due_payment:'',
      invoice_status:'',
      payment_check:'',
      paymenttab:false,
      notestab:false,
      kyctab:false,
      selectedtab:'payment',
      note:'',
      over_paid:0,
      purchases:[]
    };
  },
  methods:
  {
    dateFormateChanger(d){
      return moment(d,'YYYY-MM-DD').format('DD MMM YYYY')
     },
     sideClick(id){
      this.$router.push("/viewpurchase/"+id);
      location.reload()
     },
     dropdownCash(index){
      if(this.invoice_items[index].bank == 'Cash Account'){
        this.invoice_items[index].method = 'Cash';
        this.cashSelected = true;
      }
      else{
        this.cashSelected = false;
      }
     },
    sidebarToggle(){
      this.sidebarflag = !this.sidebarflag;
    },
    changetype(type)
    {
      this.customerType = type;
    },
    addLine(){
      this.addpayment='show';
    },
     removeLine(index)
    {
      this.addpayment='';
      //this.invoice_items.splice(index,1);
    },
    editpayment(paymentdata)
    {
      
    },
    tabclick(param){
      this.selectedtab=param;
    },
    async save_payment(index)
    {
      this.invoice_items[index].purchase_id = this.$route.params.id;
      var date = new Date(this.invoice_items[index].payment_date);
      this.invoice_items[index].payment_date=date;
      const response = await axios.post("create_purchasepayment", this.invoice_items[index]);
      if(response.data.id)
      {
        var arr={};
        arr.payment_date = response.data.payment_date;
        arr.method = this.invoice_items[index].method;
        arr.totalamount = this.invoice_items[index].totalamount;
        arr.id = response.data.id;
        this.formdata.purchasepayments.push(arr);
        this.addpayment='';
        this.paymentcount =this.paymentcount+1;
        //this.invoice_items.splice(index,1);
        this.due_payment = this.due_payment-this.invoice_items[index].totalamount;
        this.due_payment = this.due_payment.toFixed(2);
        if(this.due_payment<0)
        {
          this.over_paid = this.due_payment;
        }
        this.due_payment = (this.due_payment<0)?0:this.due_payment;
        
        this.invoice_items= [{
          payment_date:Date.now(),
          totalamount:'',
          bank:'ICIC Bank Accounts',
          method:'Bank Transfer',
          comment:''
        }];
        
        if(this.paymentcount==0)
        {
          this.invoice_status='UnPaid';
          this.payment_check='Yes';
        }
        else if(this.over_paid< 0)
        {
          this.invoice_status='Over Paid';
          this.payment_check='';
        }
        else if(this.due_payment==0)
        {
          this.invoice_status='Paid';
          this.payment_check='';
        }
        else
        {
          this.invoice_status='Partially Paid';
          this.payment_check='Yes';
        }
        this.statusdata={};
        this.statusdata.purchase_id = this.$route.params.id;
        //this.statusdata.status = (this.invoice_status=='Over Paid')?'Paid':this.invoice_status;
        this.statusdata.status = this.invoice_status;
        const response1 = axios.post("update_orderstatus", this.statusdata);
      }
      else
      {
        let toast = Vue.toasted.show('Something went wrong, Please try again', {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    async save_note()
    {
      var notedata={purchase_id:this.$route.params.id,note:this.note};
      const response = await axios.post("create_purchasenote", notedata);
      if(response.data.id)
      {
        this.note='';
        let toast = Vue.toasted.show('Note successfully added', {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
      }
      else
      {
        let toast = Vue.toasted.show('Something went wrong, Please try again', {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    selectrecord(id)
    {
      this.paymentid=id;
    },
    deleteRecord(id) {
      axios.get('/delete_purchasepayment/'+id)
        .then(resp => {
            this.$router.go();
        })
        .catch(error => {
          let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
            console.log(error);
        })
    },
  },
  mounted()
  {
    axios.get('/purchase_details/'+this.$route.params.id)
      .then((response) => {
          this.formdata = response.data;
          this.paymentcount = this.formdata.purchasepayments.length;
          if(response.data.payment_due<0)
          {
            this.over_paid = response.data.payment_due;
          }
          this.due_payment = (response.data.payment_due<0)?0:response.data.payment_due;
          if(this.paymentcount==0)
          {
            this.invoice_status='UnPaid';
            this.payment_check='Yes';
          }
          else if(this.over_paid< 0)
          {
            this.invoice_status='Over Paid';
            this.payment_check='';
          }
          else if(this.due_payment==0)
          {
            this.invoice_status='Paid';
            this.payment_check='';
          }
          else
          {
            this.invoice_status='Partially Paid';
            this.payment_check='Yes';
          }
      })
      .catch(function(error) {
          //app.$notify(error.response.data.error, "error");
      });

    axios.get('/purchase_history/'+this.$route.params.id)
      .then((response) => {
          this.formdata.purchasehistory = response.data;
      })
      .catch(function(error) {
          //app.$notify(error.response.data.error, "error");
      });

    axios.get('/purchase_list/')
    .then((response) => {
        this.purchases = response.data;
        console.log(this.purchases)
    })
    .catch(function(error) {
        //app.$notify(error.response.data.error, "error");
    });
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
.purchasedata
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
  color: #fff !important;
}
.cont{
   
  width: auto;
    font-size: 13px  !important;
    color: #000;
    border:none;
    height: 40px;
    padding: 5px 20px;
    border-radius: 5px 5px 0px 0px;
}
.viewpurchase-div
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
.viewpurchase-div > p {
    color: #3376C2;
    font-size: 12px;
}
.viewpurchase-div span {
    color: #000;
    font-size: 13px;
}
#purchasehistory-datatable thead
{
    background-color: #3376c2;
    color: #fff;
}
#purchasehistory-datatable thead th
{
    font-weight: 100;
}
</style>
