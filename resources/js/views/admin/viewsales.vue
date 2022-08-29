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
        <div class="col-md-12 viewsales-div">
          
          <div class="row" style="padding-bottom:40px">
            <div class="col-md-2" style="border-right:  0.5px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Customer</p>
              <span>{{formdata.firstname}} {{formdata.lastname}}, <br>{{formdata.billing_address}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">VAT No.</p>
              <span>{{formdata.vat}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Issue Date</p>
              <span>{{formdata.issue_date}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4;font-size: 15px;">Due Date</p>
              <span>{{formdata.due_date}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Amount Due</p>
              <span><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>{{due_payment}}</span>
            </div>
            <div class="col-md-2">
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
        <div class="viewsales-div pb-3" style="padding:0">
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
                    <tr v-for="saleitem in formdata.salesitem" :key="saleitem.id">
                        <td>{{saleitem.typename}}</td>
                        <td>{{saleitem.productname}}</td>
                        <td>{{saleitem.weight}}</td>
                        <td>{{saleitem.quantity}}</td>
                        <td><i class="fa fa-pound-sign" style="font-size:10px;"></i>{{saleitem.unitprice}}</td>
                        <td>{{saleitem.vat}}</td>
                        <td><i class="fa fa-pound-sign" style="font-size:10px;"></i>{{saleitem.invoice_amount}}</td>
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
            <button type="button" class="cont" style="background-color: #EDF2F6" @click="tabclick('customer')" :class="{'selectedclr':selectedtab=='customer'}">Customer Kyc(4)</button>
            <button type="button" class="cont" style="background-color: #EDF2F6;" @click="tabclick('history')" :class="{'selectedclr':selectedtab=='history'}">History</button>
          </div>
          <div>  
        <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;" @click="addLine"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Payment</button>
        <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;">Apply Credit</button>
        <!-- <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;" @click="tabclick('refund')" >Refund</button> -->
        <div class="dropdown show" style="display:inline;">
          <a class="btn admin-btn mobile-mb btn-nwidth dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Refund
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" @click="tabclick('refund'),refundform()" style="cursor: pointer;">Add Refund</a>
            <a class="dropdown-item" @click="tabclick('refund'),refundhistory()" style="cursor: pointer;">Refund History</a>
          </div>
        </div>
        </div>
        </div> 
      </div>
      </div>
        <div class="table-div mb-2" v-if="selectedtab=='payment'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
          <table class="table salesdata" v-if="!addpayment" id="showpayment-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr v-for="salepayment in formdata.salepayments" :key="salepayment.id">
                    <td>{{salepayment.payment_date}}</td>
                    <td></td>
                    <td>{{salepayment.method}}</td>
                    <td></td>
                    <td style="color:#7adaaa;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i> {{salepayment.totalamount}} Received</td>
                    <td>
                      
                    </td>
                    <td>
                      <span class="material-symbols-outlined" style="margin-right: 10px;color: #3376C2;" @click="editpayment(salepayment)">edit</span>
                      <span class="material-symbols-outlined" style="margin-right: 5px;color: red;cursor: pointer;" data-toggle="modal" data-target="#deleteConfirmation" @click="selectrecord(salepayment.id)">delete</span>
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
                    <td>
                      <input type="number" class="form-control form-control-user" placeholder="Amount" v-model="invoice_item.totalamount">
                    </td>
                    <td>
                      <select class="form-control form-control-user"  v-model="invoice_item.bank">
                        <option value="ICIC Bank Accounts">ICIC Bank Accounts</option>
                        <option value="Baroda Bank">Baroda Bank</option>
                        <option value="Cash Account">Cash Account</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-control form-control-user"  v-model="invoice_item.method">
                          <option value="Bank Transfer">Bank Transfer</option>
                          <option value="Cash">Cash</option>
                          <option value="Other">Other</option>
                      
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

        <div v-if="selectedtab=='customer'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
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

       <div class="table-div mb-2" v-if="selectedtab=='history'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
          <table class="table salesdata" id="saleshistory-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr v-for="salehistory in formdata.saleshistory" :key="salehistory.id">
                    <td>{{salehistory.comment}}</td>
                    <td><span v-if="salehistory.note">Note: </span>{{salehistory.note}}</td>
                    <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;" v-if="salehistory.amount"></i> {{salehistory.amount}}</td>
                    <td>{{salehistory.log_date}}</td>
                </tr>
              </tbody>
          </table>
        </div>

        <div class="table-div mb-2" v-if="selectedtab=='refund'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
          <table class="table salesdata" v-if="!addrefund" id="showrefund-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr v-for="salerefund in formdata.salerefunds" :key="salerefund.id">
                    <td>{{salerefund.refund_date}}</td>
                    <td></td>
                    <td>{{salerefund.method}}</td>
                    <td></td>
                    <td style="color:#7adaaa;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i> {{salerefund.totalamount}} Refunded</td>
                    <td>
                      
                    </td>
                    <td>
                      <span class="material-symbols-outlined" style="margin-right: 10px;color: #3376C2;" @click="editpayment(salerefund)">edit</span>
                      <span class="material-symbols-outlined" style="margin-right: 5px;color: red;cursor: pointer;" data-toggle="modal" data-target="#deleteConfirmationRefund" @click="selectrefund(salerefund.id)">delete</span>
                    </td>
                </tr>
                
              </tbody>
          </table>
          <table v-if="addrefund" class="table" id="createrefund-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr v-for="(refund_item, k) in refund_items" :key="k">
                    <td>
                      <Datepicker class="datapicker" id="mydatepicker" v-model="refund_item.refund_date"></Datepicker>
                    </td>
                    <td>
                      <input type="number" class="form-control form-control-user" placeholder="Amount" v-model="refund_item.totalamount">
                    </td>
                    <td>
                      <select class="form-control form-control-user"  v-model="refund_item.bank">
                        <option value="ICIC Bank Accounts">ICIC Bank Accounts</option>
                        <option value="Baroda Bank">Baroda Bank</option>
                        <option value="Cash Account">Cash Account</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-control form-control-user"  v-model="refund_item.method">
                          <option value="Bank Transfer">Bank Transfer</option>
                          <option value="Cash">Cash</option>
                          <option value="Other">Other</option>
                      
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control form-control-user" placeholder="Note" v-model="refund_item.comment"/>
                    </td>
                    <td> <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;float: right;" @click="removeRefund(k)">Cancel</button></td>
                    <td> <button type="button" @click="save_refund(k)" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;float: right;">Save</button></td>
                </tr>
              </tbody>
          </table>
        </div>
        <!-- Modal -->

        <div class="modal fade" id="deleteConfirmationRefund" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationRefundLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title" id="deleteConfirmationRefundLabel">Confirmation</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" style="color:#fff">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <p style="color:#000;font-size:14px;">Are you sure you want to delete this refund?</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deleteRefund(refundid)">Delete</button>
                  </div>
              </div>
          </div>
      </div>

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
      addrefund:'',
      theme: 'cust-type',
      formdata: {},
      rows: [],
      invoice_items: [{
          payment_date:Date.now(),
          totalamount:'',
          bank:'ICIC Bank Accounts',
          method:'Bank Transfer',
          comment:''
      }],
      refund_items: [{
          refund_date:Date.now(),
          totalamount:'',
          bank:'ICIC Bank Accounts',
          method:'Bank Transfer',
          comment:''
      }],
      tabflag:false,
      sidebarflag:false,
      paymentid:'',
      refundid:'',
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
      refundcount:0,
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
      this.addpayment='show';
      // this.invoice_items.push({
      //     invoice_type: '',
      //     invoice_product: '',
      //     weight: '',
      //     quantity: '',
      //     unitprice: '',
      //     vat: '',
      //     invoice_amount:''
      // });
    },
     removeLine(index)
    {
      this.addpayment='';
      //this.invoice_items.splice(index,1);
    },
     removeRefund(index)
    {
      this.addrefund='';
      //this.invoice_items.splice(index,1);
    },
    editpayment(paymentdata)
    {
      
    },
    tabclick(param){
      this.selectedtab=param;
      return false;
     if(param == "customer"){
      this.tabflag = true;
     }
     else{
      this.tabflag = false;
     }
    },
    refundform()
    {
      this.addrefund='show';
    },
    refundhistory()
    {
      this.addrefund='';
    },
    async save_payment(index)
    {
      this.invoice_items[index].sales_id = this.$route.params.id;
      var date = new Date(this.invoice_items[index].payment_date);
      this.invoice_items[index].payment_date=date;
      const response = await axios.post("create_payment", this.invoice_items[index]);
      if(response.data.id)
      {
        var arr={};
        arr.payment_date = response.data.payment_date;
        arr.method = this.invoice_items[index].method;
        arr.totalamount = this.invoice_items[index].totalamount;
        arr.id = response.data.id;
        this.formdata.salepayments.push(arr);
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
      var notedata={sales_id:this.$route.params.id,note:this.note};
      const response = await axios.post("create_note", notedata);
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
    async save_refund(index)
    {
      this.refund_items[index].sales_id = this.$route.params.id;
      var date = new Date(this.refund_items[index].refund_date);
      this.refund_items[index].refund_date=date;
      const response = await axios.post("create_refund", this.refund_items[index]);
      if(response.data.id)
      {
        var arr={};
        arr.refund_date = response.data.refund_date;
        arr.method = this.refund_items[index].method;
        arr.totalamount = this.refund_items[index].totalamount;
        arr.id = response.data.id;
        this.formdata.salerefunds.push(arr);
        this.addrefund='';
        this.refundcount =this.refundcount+1;
        //this.refund_items.splice(index,1);
        this.due_payment = parseFloat(this.due_payment) + parseFloat(this.refund_items[index].totalamount);
        this.due_payment = this.due_payment.toFixed(2);
        if(this.due_payment<0)
        {
          this.over_paid = this.due_payment;
        }
        this.due_payment = (this.due_payment<0)?0:this.due_payment;
        
        this.refund_items= [{
          refund_date:Date.now(),
          totalamount:'',
          bank:'ICIC Bank Accounts',
          method:'Bank Transfer',
          comment:''
        }];
        
        // if(this.paymentcount==0)
        // {
        //   this.invoice_status='UnPaid';
        //   this.payment_check='Yes';
        // }
        // else if(this.over_paid< 0)
        // {
        //   this.invoice_status='Over Paid';
        //   this.payment_check='';
        // }
        // else if(this.due_payment==0)
        // {
        //   this.invoice_status='Paid';
        //   this.payment_check='';
        // }
        // else
        // {
        //   this.invoice_status='Partially Paid';
        //   this.payment_check='Yes';
        // }
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
    selectrefund(id)
    {
      this.refundid=id;
    },
    deleteRefund(id) {
      axios.get('/delete-refund/'+id)
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
    deleteRecord(id) {
      axios.get('/delete-payment/'+id)
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
    axios.get('/sales_details/'+this.$route.params.id)
      .then((response) => {
          this.formdata = response.data;
          this.paymentcount = this.formdata.salepayments.length;
          if(response.data.payment_due<0)
          {
            this.over_paid = response.data.payment_due;
          }
          this.due_payment = (response.data.payment_due<0)?0:response.data.payment_due;
          this.due_payment = this.due_payment.toFixed(2);
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

    axios.get('/sales_history/'+this.$route.params.id)
      .then((response) => {
          this.formdata.saleshistory = response.data;
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
.salesdata
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
