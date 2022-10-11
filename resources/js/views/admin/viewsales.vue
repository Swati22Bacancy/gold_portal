<template>
  <div class="row">
      <div class="col-1" v-if="sidebarflag" style="font-size: 12px;">
        <p v-for="sale in sales" class="invoicelist" :key="sale.id" v-bind:class = "(sale.invoiceno==formdata.invoiceno)?'bold_font':''" style="color:#000"><router-link :to="{name : 'viewsales', params: {id : sale.id}}"><b>{{sale.invoiceno}}</b></router-link></p>
      </div>
      <!-- Page Heading -->
      <div class="col-11">
          <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
              style="margin-right:120px">
              <div class="d-sm-flex align-items-center justify-content-between">
                  <button @click="sidebarToggle" class="btn-head">
                      <i class="fas fa-arrow-left"></i>
                  </button>
                  <h1 class="h3 mb-0 text-gray-800" style="margin-left:20px; margin-right: 20px;">
                      {{ formdata.invoiceno }}
                  </h1>
                  <button @click="sidebarToggle" class="btn-head">
                      <i class="fas fa-arrow-right"></i>
                  </button>
              </div>
              <div class="d-sm-flex align-items-center justify-content-between">
                <div>
    <VueHtml2pdf
       :show-layout="false"
       :float-layout="true"
       :enable-download="true"
       :preview-modal="false"
       :paginate-elements-by-height="1400"
       filename="Invoice"
       :pdf-quality="2"
       :manual-pagination="false"
       pdf-format="a4"
       pdf-orientation="portrait"
       pdf-content-width="800px"
       ref="html2Pdf"
>
   <section slot="pdf-content" class="pdf_section" id="pdf_section">
        <div style=" padding: 0px 2%;">
            <div class="container" style=" padding: 30px 6%;">
            <div class="row">
                <div class="col-8"  style="padding-top: 55px;">
            <img width="200" height="46"
                src="data:image/jpg;base64,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"/>
                </div>
        <div class="col-4 s3" style="font-size:9px; text-align:left; float:left">
        <h2  style="padding-top: 45px; padding-left: 13pt;text-indent: -1pt;text-align: left; font-size:11px;">
        {{companydata.company_name}} <br>{{companydata.address1}}<br> {{companydata.address2}}</h2>
        <h2 style="padding:0;padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
        {{companydata.postcode}}
        </h2>
        <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
        Vat No: {{companydata.vat_number}}
        </h2>
        <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
        t: {{companydata.contact_mobile}}
        </h2>
        <p style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
        <a class="a" target="_blank">e: </a>
        <a class="a" target="_blank">{{companydata.contact_email}}</a>
        </p>
        </div>    
    </div>
        </div>
        <!-- ---------------------------------------- -->
        <div class="container">
        <div class="row">
        <div class="col-8 cont2">
        <p style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:11px;">
            {{ formdata.firstname }} {{ formdata.lastname }}
        </p>
        <p style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:11px;">
            {{ formdata.billing_address }}
        </p>
     </div>
        <div class="col-4">
        <p class="s1" style="padding-left: 13pt; text-indent: 0pt; margin-right: 10px; text-align: left">SALES INVOICE</p>
        <div style="font-size:10px;  text-align: left;">
        <h2
        style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:11px;">
        Invoice Date
        </h2>
        <p style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
        <span style="text-align: left; font-size:11px;">{{ dateFormateChanger(formdata.issue_date) }}</span></p>
        
        <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
        Invoice Number
        </h2>
        <p style="padding-left: 13pt;  text-indent: 0pt; text-align: left; font-size:11px; ">
            <span style="text-align: left; font-size:11px;">{{ formdata.invoiceno  }}</span>
        </p>
        <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">Account
        </h2>
        <p style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
        Online OrderVAT Number140187339
        </p><br><br>
    </div>
                </div>
            </div>
        </div><br><br>
        <!-- ----------------------------------------- -->
        <div class="container" style="font-size:10px">
        <table>
            <thead>
            <tr>
                <th style="width:350px">Description</th>
                <th style="width: 100px;">Unit Price</th>
                <th style="width: 100px;">VAT(%)</th>
                <th>Amount GBP</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="saleitem in formdata.salesitem" :key="saleitem.id">
                    <td>{{ saleitem.quantity }} x {{ saleitem.typename }} {{ saleitem.productname }} ({{ saleitem.weight }}g) </td>
                    <td>{{ saleitem.unitprice }}</td>
                    <td>{{ saleitem.vat }}</td>
                    <td>{{ saleitem.invoice_amount }}</td>
                </tr><br><br>
                <tr>
                    <td style="border:none"></td>
                    <td ></td>
                    <td>Total No VAT</td>
                    <td>{{ formdata.vattotal }}</td>
                </tr><br><br>
                <tr>
                    <td style="border:none"></td>
                    <td style="border:none"></td>
                    <td style="border:none"><strong>Amount Due GBP</strong></td>
                    <td style="border:none">{{ formdata.totalamount }}</td>
                </tr><br>
            </tbody>
        </table>
    </div>
        <!-- ------------------------ -->
        <div class="container s3">
        <p style="text-indent: 0pt;text-align: justify;font-size: 12px;">Payment Terms:</p>
        <p style=" text-indent: 0pt; text-align: justify; font-size: 12px;">
        Goods supplied by us remain the property of Gold Warehouse Limited until
        paid for in full. Interest will be charged at 4% per month. The person
        signing for the goods is personally responsible for the payment of this
        invoice and for any loss or damage however caused.
        </p><br><br>
        <p style=" text-indent: 0pt; text-align: left; font-size: 11px;">
        Signed:  <img :src="signaturedata.signature_filename" style="height:100px;"/>
        <span class="ml-3">Signed By: <span style="font-weight:600;">{{signaturedata.signed_by}}</span></span>
        </p>
        </div>
        <div class="container s3" style="font-size:11px">
        <p style="text-indent: 0pt; text-align: left;">
        Gold Bank is a trading name for Gold Warehouse Ltd<br> Cheques can be made
        payable to Gold Warehouse Limited.<br> Please make BACS/CHAPS/FASTER payments
        to:<br>Wise Bank<br> Sort code: <b>23-14-70</b><br>Account No: <b>24730434</b>
        </p><br>
        <p style="padding-left: 6pt; text-indent: 0pt; text-align: left">
        The Output Tax Of £ <span style="font-weight:600;">{{output_tax}}</span> On
        Supply Of This Gold Is To Be Accounted For By The Buyer To HMRC.
        </p><br><br><br><br><br><br><br><br>
        </div>
    </div> 
    <div>
        <p class="s4" style="padding-left: 49pt; text-indent: 0pt; text-align: center">
        Goldbank T/AS Gold Warehouse Limited, 215 The Broadway, Southall,
        Middlesex, UB1 1NB. Registered in England Number 08101794.<br>
        <a href="mailto:accounts@gold-bank.co.uk" class="s5" target="_blank">
            VAT Registration Number 140187339 Telephone:0203 500 1111 Email:
            accounts@gold-bank.co.uk</a></p>
    
    </div>
    </section>
   </VueHtml2pdf>

                  <!-- <i class="fa fa-download" style="background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%;"></i> -->
                  <span class="material-symbols-outlined" v-if="!sign_flag" title="Add Signature" style="color:#00AA5B; background-color: #EDF2F6; margin:3% 0% 3% 0%; border-radius:50%; padding: 11%; font-size: 23px;cursor:pointer;" data-toggle="modal" data-target="#dosign">draw</span>
                  <span style="color:#48c6f6;background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 10%;font-size: 25px; margin-left: 30%;" class="material-symbols-outlined" @click="generateReport">download</span>  </div>
                  <i class="fab fa-whatsapp" style="color:#00AA5B; background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%; font-size: 18px;"></i>
                  <!-- <i class="fas fa-envelope" style="background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 30%;"></i> -->
                  <span style="color:blue;background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 30%;font-size: 19px;" class="material-symbols-outlined">mail</span>
                  <!-- <i class="fas fa-print" @click="ondownload()" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 30%;"></i> -->
                  <span class="material-symbols-outlined" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 30%;" @click="printDiv('pdf_section')">print</span>
              </div>
              <div class="d-sm-flex align-items-center justify-content-between" style="margin-left: -20%;">
                  <i
                      class="fas fa-link"
                      style="color:#48c6f6; background-color: #EDF2F6; border-radius:50%;padding: 22%;margin-right: 35%;font-size: 15px;"
                  ></i>
                  <!-- <i
                      class="fas fa-pencil-alt"
                      style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-right:35%"
                  ></i> -->
                  <span style="background-color: #EDF2F6; border-radius:50%; padding: 18%; margin-right:35%;color:red;cursor: pointer;" class="material-symbols-outlined" data-toggle="modal" data-target="#deleteInvoiceConfirmation">delete</span>
                  <!-- <i
                      class="fas fa-trash-alt"
                      style="background-color: #EDF2F6; border-radius:50%; padding: 15%; "
                  ></i> -->
                  <span style="background-color: #EDF2F6; border-radius:50%; padding: 18%;cursor: pointer;" @click="edit_invoice()" class="material-symbols-outlined">edit</span>
              </div>
          </div>
          <div class="">
              <div class="col-md-12 viewsales-div">
                  <div class="row" style="padding-bottom:40px">
                      <div class="col-md-2" style="border-right:  0.5px solid #4682B4;">
                          <p style="color:#4682B4; font-size: 15px;">
                              Customer
                          </p>
                          <span>{{ formdata.firstname }} {{ formdata.lastname }}, <br />{{
                                  formdata.billing_address
                              }}</span>
                      </div>
                      <div class="col-md-2" style="border-right:  1px solid #4682B4;">
                          <p style="color:#4682B4; font-size: 15px;">
                              VAT No.
                          </p>
                          <span>{{ formdata.vat }}</span>
                      </div>
                      <div class="col-md-2" style="border-right:  1px solid #4682B4;">
                          <p style="color:#4682B4; font-size: 15px;">
                              Issue Date
                          </p>
                          <span>{{ dateFormateChanger(formdata.issue_date) }}</span>
                      </div>
                      <div class="col-md-2" style="border-right:  1px solid #4682B4;">
                          <p style="color:#4682B4;font-size: 15px;">
                              Due Date
                          </p>
                          <span>{{ dateFormateChanger(formdata.due_date) }}</span>
                      </div>
                      <div class="col-md-2" style="border-right:  1px solid #4682B4;">
                          <p style="color:#4682B4; font-size: 15px;">
                              Amount Due
                          </p>
                          <span><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>{{ due_payment }}</span>
                      </div>
                      <div class="col-md-2">
                          <p style="color:#4682B4; font-size: 15px;">
                              Status
                          </p>
                          <span>
                              <button type="button" v-if="invoice_status == 'Over Paid'" class="btn table-btn" style="margin-left: auto;width: 100px;background-color: #ffa500 !important;"> {{ invoice_status }}</button><br />
                              <span v-if="over_paid < 0"> Over Amount: <i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>{{ Math.abs(over_paid) }}</span>

                              <button type="button" v-if="invoice_status != 'Paid' && invoice_status != 'Over Paid'" class="btn table-btn" style="margin-left: auto;width: 100px;"> {{ invoice_status }}</button><br />

                              <button type="button" v-if="invoice_status == 'Paid'" class="btn table-btn"
                                  style="margin-left: auto;width: 100px;background-color: #00AA5B !important;">
                                  {{ invoice_status }}
                              </button>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="mt-3">
              <div class="viewsales-div pb-3" style="padding:0">
                  <div class="">
                      <div
                          class="table-responsive table-div mb-2"
                          style="border-radius: 8px;">
                          <table
                              class="table"
                              id="createinvoice-datatable"
                              width="100%"
                              cellspacing="0"
                              style="margin-bottom:0">
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
                                  <tr
                                      v-for="saleitem in formdata.salesitem"
                                      :key="saleitem.id"
                                  >
                                      <td>{{ saleitem.typename }}</td>
                                      <td>{{ saleitem.productname }}</td>
                                      <td>{{ saleitem.weight }}</td>
                                      <td>{{ saleitem.quantity }}</td>
                                      <td>
                                          <span :class="saleitem.price_status=='mismatch' ? 'red-color' : 'grey-color'"><i class="fa fa-pound-sign" style="font-size:10px;"></i>{{ saleitem.unitprice }}</span>
                                      </td>
                                      <td>{{ saleitem.vat }}</td>
                                      <td>
                                          <i class="fa fa-pound-sign" style="font-size:10px;"></i
                                          >{{ saleitem.invoice_amount }}
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6">
                        <div v-if="sign_flag">
                            <img :src="signaturedata.signature_filename" style="height:100px;"/><br>
                            <span class="ml-3">Signed By: <span style="font-weight:600;">{{signaturedata.signed_by}}</span></span>
                        </div>
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
                              <li style="font-size:13px;">
                                  <i
                                      class="fa fa-pound-sign"
                                      style="font-size:10px;margin-right:3px;"
                                  ></i
                                  >{{ formdata.subtotal }}
                              </li>
                              <li style="font-size:13px;">
                                  <i
                                      class="fa fa-pound-sign"
                                      style="font-size:10px;margin-right:3px;"
                                  ></i
                                  >{{ formdata.vattotal }}
                              </li>
                              <li style="font-size:13px;">
                                  <i
                                      class="fa fa-pound-sign"
                                      style="font-size:10px;margin-right:3px;"
                                  ></i
                                  ><b>{{ formdata.totalamount }}</b>
                              </li>
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
                          <button
                              type="button"
                              class="cont"
                              style="background-color: #EDF2F6;"
                              @click="tabclick('payment')"
                              :class="{
                                  selectedclr: selectedtab == 'payment'
                              }"
                          >
                              Payment({{ paymentcount }})
                          </button>
                          <button
                              type="button"
                              class="cont"
                              style="background-color: #EDF2F6"
                              @click="tabclick('note')"
                              :class="{ selectedclr: selectedtab == 'note' }"
                          >
                              Notes
                          </button>
                          <button
                              type="button"
                              class="cont"
                              style="background-color: #EDF2F6"
                              @click="tabclick('customer')"
                              :class="{
                                  selectedclr: selectedtab == 'customer'
                              }"
                          >
                              Customer Kyc(4)
                          </button>
                          <button
                              type="button"
                              class="cont"
                              style="background-color: #EDF2F6;"
                              @click="tabclick('history')"
                              :class="{
                                  selectedclr: selectedtab == 'history'
                              }"
                          >
                              History
                          </button>
                      </div>
                      <div>
                          <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;" @click="addLine('Receive')">
                              <i class="fas fa-plus" style="margin-right: 5px;"></i>
                              Add Payment
                          </button>
                          <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;" data-toggle="modal" data-target="#applycontra">
                            Apply Contra
                          </button>
                          <!-- Modal -->
                            <div class="modal fade" id="applycontra" tabindex="-1" role="dialog" aria-labelledby="applycontra" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h6 class="modal-title" id="applycontrah1">Apply Contra</h6>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" style="color: #fff">&times;</span>
                                            </button>
                                        </div>

                                        <div class="modal-body">
                                            <div class="mb-4">
                                                <p>Select Purchase Order</p>
                                                
                                                <model-select class="modal-selection" @input="fetchPo()" v-model="purchase_id" :options="purchases" placeholder="Select Purchase Order"></model-select>    
                                                
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" @click="apply_contra()" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7adaaa !important">Save</button>
                                            <button type="button" data-dismiss="modal"
                                            aria-label="Close" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;" @click="addLine('Refund')" >Refund</button>
                          <!-- <div class="dropdown show" style="display:inline;">
                              <a class="btn admin-btn mobile-mb btn-nwidth dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Refund</a>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a class="dropdown-item" @click="tabclick('refund'), refundform()" style="cursor: pointer;">Add Refund</a>
                                  <a class="dropdown-item" @click="tabclick('refund'), refundhistory()" style="cursor: pointer;">Refund History</a>
                              </div>
                          </div> -->
                      </div>
                  </div>
              </div>
          </div>
          <div
              class="table-div mb-2"
              v-if="selectedtab == 'payment'"
              style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);"
          >
              <table
                  class="table salesdata"
                  v-if="!addpayment"
                  id="showpayment-datatable"
                  width="100%"
                  cellspacing="0"
                  style="margin-bottom:0"
              >
                  <tbody>
                      <tr v-for="salepayment in formdata.salepayments" :key="salepayment.id" >
                          <td>{{ dateFormateChanger(salepayment.payment_date) }}</td>
                          <td>{{ salepayment.bank }}</td>
                          <td>{{ salepayment.method }}</td>
                          <td></td>
                          <td style="color: #3376c2;" v-bind:class = "(salepayment.action=='Receive' || salepayment.action=='Exchange') ?'class_green':'class_red'">
                            <span v-if="salepayment.action=='Refund'">- </span>
                            <i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;" ></i>{{ salepayment.totalamount }} 
                              <!-- <span v-if="salepayment.action=='Receive'">Received</span>
                              <span v-if="salepayment.action=='Refund'">Refunded</span>
                              <span v-if="salepayment.action=='Exchange'"></span> -->
                          </td>
                          <td></td>
                          <td>
                              <span
                                  class="material-symbols-outlined"
                                  style="margin-right: 10px;color: #3376C2;"
                                  @click="editpayment(salepayment)"
                                  >edit</span
                              >
                              <span
                                  class="material-symbols-outlined"
                                  style="margin-right: 5px;color: red;cursor: pointer;"
                                  data-toggle="modal"
                                  data-target="#deleteConfirmation"
                                  @click="selectrecord(salepayment.id)"
                                  >delete</span
                              >
                          </td>
                      </tr>
                  </tbody>
              </table>
              <table
                  v-if="addpayment"
                  class="table"
                  id="createpayment-datatable"
                  width="100%"
                  cellspacing="0"
                  style="margin-bottom:0"
              >
                  <tbody>
                      <tr v-for="(invoice_item, k) in invoice_items" :key="k">
                          <td>
                              <Datepicker
                                  class="datapicker"
                                  id="mydatepicker"
                                  v-model="invoice_item.payment_date"
                              ></Datepicker>
                          </td>
                          <td style="width:130px;" >
                              <input
                                  type="number"
                                  class="form-control form-control-user"
                                  placeholder="Amount"
                                  v-model="invoice_item.totalamount"
                              />
                          </td>
                          <td>
                              <select
                                  class="form-control form-control-user" v-model="invoice_item.bank" @change="dropdownCash(k)">
                                  <option value="ICIC Bank Accounts"
                                      >ICIC Bank Accounts</option
                                  >
                                  <option value="Baroda Bank"
                                      >Baroda Bank</option
                                  >
                                  <option value="Cash Account"
                                      >Cash in hand account</option
                                  >
                              </select>
                          </td>
                          <td>
                              <select class="form-control form-control-user" v-model="invoice_item.method">
                                <option value="Bank Transfer" v-if="!cashSelected">Bank Transfer</option>
                                <option value="Cash" >Cash</option>
                                <option value="Cheque" v-if="!cashSelected">Cheque</option>
                              </select>
                          </td>
                          <td>
                              <input
                                  type="text"
                                  class="form-control form-control-user"
                                  placeholder="Note"
                                  v-model="invoice_item.comment"
                              />
                          </td>
                          <td>
                              <button
                                  type="button"
                                  class="btn admin-btn mobile-mb btn-nwidth"
                                  style="background-color: #EDF2F6 !important;float: right;"
                                  @click="removeLine(k)"
                              >
                                  Cancel
                              </button>
                          </td>
                          <td>
                              <button
                                  type="button"
                                  @click="save_payment(k)"
                                  class="btn admin-btn mobile-mb btn-nwidth"
                                  style="background-color: #7ADAAA !important;float: right;"
                              >
                                  Save
                              </button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <div
              class="table-div mb-2"
              v-if="selectedtab == 'note'"
              style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);"
          >
              <table
                  class="table"
                  id="addnote_table"
                  width="100%"
                  cellspacing="0"
                  style="margin-bottom:0"
              >
                  <tbody>
                      <tr>
                          <td>
                              <input
                                  type="text"
                                  class="form-control form-control-user"
                                  placeholder="Add note"
                                  v-model="note"
                              />
                          </td>
                          <td>
                              <button
                                  type="button"
                                  @click="save_note()"
                                  class="btn admin-btn mobile-mb btn-nwidth"
                                  style="background-color: #7ADAAA !important;float: right;"
                              >
                                  Save
                              </button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <div
              v-if="selectedtab == 'customer'"
              style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);"
          >
              <div class="table-responsive">
                  <table class="table" id="kyc-datatable" width="100%" cellspacing="0">
                      <tbody>
                          <tr>
                              <td style="color:black">
                                  Registration Certificate
                              </td>
                              <td style="color:#3376C2">
                                <div class="choose-cont">
                                      <input type="file"  @change="onFileChange($event,1)" multiple class="choose-style"/>
                                      <br />
                                      <br />
                                      <div
                                          v-for="(url, index) in urlArr[1]" :key="url" class="previewContainer">
                                          <img v-if="url.fileType == 'image'" :src="url.url" class="imagePreview"/>
                                          <img
                                              v-else
                                              :src="'/images/fileimage.png'" class="imagePreview"/>
                                          <div class="closeIcon" @click="rmFile(index,1)">
                                          <i class="fa fa-times" aria-hidden="true"></i>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <i class="fas fa-upload" @click="uploadfile(1)" style="font-size:20px;margin-right:20px;color:green;"></i>
                                  <i class="fa fa-trash" aria-hidden="true" style="font-size:20px;margin-right:5px;color:red;"></i>
                              </td>
                          </tr>
                          <tr>
                              <td style="color:black">VAT Certificate</td>
                              <td style="color:#3376C2">
                                <div class="choose-cont">
                                      <input type="file"  @change="onFileChange($event,2)" multiple/><br />
                                      <br />
                                      <div v-for="(url, index) in urlArr[2]" :key="url" class="previewContainer">
                                          <img v-if="url.fileType == 'image'" :src="url.url" class="imagePreview"/>
                                          <img v-else :src="'/images/fileimage.png'" class="imagePreview"/>
                                          <div class="closeIcon" @click="rmFile(index,2)">
                                          <i class="fa fa-times" aria-hidden="true"></i>
                                          </div>
                                      </div>
                                </div>
                                <div class="upload_vat">
                                    <div v-for="vatdoc in kycdocs.vatdocs" :key="vatdoc" class="previewContainer">
                                          <img :src="vatdoc.imageurl" class=""/>
                                          <div class="closeIcon" data-toggle="modal" data-target="#deleteConfirmationFile" @click="selectfile(vatdoc.id)">
                                            <i class="fa fa-times" aria-hidden="true"></i>
                                          </div>
                                          <div class="downloadIcon" @click="download(vatdoc.identification_file)">
                                            <i class="fa fa-download" aria-hidden="true"></i>
                                          </div>
                                      </div>
                                </div>
                              </td>
                              <td>
                                  <i class="fas fa-upload" @click="uploadfile(2)" style="font-size:20px;margin-right:20px;color:green;"></i>
                                  <i class="fa fa-trash" aria-hidden="true" style="font-size:20px;margin-right:5px;color:red;"></i>
                              </td>
                          </tr>
                          <tr>
                              <td style="color:black">ID Documents</td>
                              <td style="color:#3376C2">
                                <div class="choose-cont">
                                      <input type="file"  @change="onFileChange($event,3)" multiple/>
                                      <br />
                                      <br />
                                      <div
                                          v-for="(url, index) in urlArr[3]" :key="url" class="previewContainer">
                                          <img v-if="url.fileType == 'image'" :src="url.url" class="imagePreview"/>
                                          <img v-else :src="'/images/fileimage.png'" class="imagePreview"/>
                                          <div class="closeIcon" @click="rmFile(index,3)">
                                          <i class="fa fa-times" aria-hidden="true"></i>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <i class="fas fa-upload" @click="uploadfile(3)" style="font-size:20px;margin-right:20px;color:green;"></i>
                                  <i class="fa fa-trash" aria-hidden="true" style="font-size:20px;margin-right:5px;color:red;"></i>
                              </td>
                          </tr>
                          <tr>
                              <td style="color:black">Credit Report</td>
                              <td style="color:#3376C2">
                                <div class="choose-cont">
                                      <input type="file"  @change="onFileChange($event,4)" multiple/>
                                      <br />
                                      <br />
                                      <div
                                          v-for="(url, index) in urlArr[4]" :key="url" class="previewContainer">
                                          <img v-if="url.fileType == 'image'" :src="url.url" class="imagePreview"/>
                                          <img v-else :src="'/images/fileimage.png'"
                                              class="imagePreview"/>
                                          <div class="closeIcon" @click="rmFile(index,4)">
                                          <i class="fa fa-times" aria-hidden="true"></i>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <i class="fas fa-upload" @click="uploadfile(4)" style="font-size:20px;margin-right:20px;color:green;"></i>
                                 <i class="fa fa-trash" aria-hidden="true" style="font-size:20px;margin-right:5px;color:red;"></i>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>

          <div class="table-div mb-2" v-if="selectedtab == 'history'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);" >
              <table class="table salesdata" id="saleshistory-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
                <thead>
                    <tr>
                        <th style="width: 140px;">Changes</th>
                        <th style="width: 140px;">Date</th>
                        <th style="width: 140px;">User</th>
                        <th>Details</th>
                    </tr>
                </thead>
                  <tbody>
                      <tr v-for="salehistory in formdata.saleshistory" :key="salehistory.id">
                        <td>{{ salehistory.changes }}</td>
                        <td>{{ dateFormateChanger(salehistory.log_date) }}</td>
                        <td>{{ salehistory.firstname }} {{ salehistory.lastname }}</td>
                        <td>{{ salehistory.comment }}</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <div
              class="table-div mb-2"
              v-if="selectedtab == 'refund'"
              style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);"
          >
              <table
                  class="table salesdata"
                  v-if="!addrefund"
                  id="showrefund-datatable"
                  width="100%"
                  cellspacing="0"
                  style="margin-bottom:0"
              >
                  <tbody>
                      <tr
                          v-for="salerefund in formdata.salerefunds"
                          :key="salerefund.id"
                      >
                          <td>{{ salerefund.refund_date }}</td>
                          <td></td>
                          <td>{{ salerefund.method }}</td>
                          <td></td>
                          <td style="color:#7adaaa;">
                              <i
                                  class="fa fa-pound-sign"
                                  style="font-size:10px;margin-right:3px;"
                              ></i>
                              {{ salerefund.totalamount }} Refunded
                          </td>
                          <td></td>
                          <td>
                              <span
                                  class="material-symbols-outlined"
                                  style="margin-right: 10px;color: #3376C2;"
                                  @click="editpayment(salerefund)"
                                  >edit</span
                              >
                              <span
                                  class="material-symbols-outlined"
                                  style="margin-right: 5px;color: red;cursor: pointer;"
                                  data-toggle="modal"
                                  data-target="#deleteConfirmationRefund"
                                  @click="selectrefund(salerefund.id)"
                                  >delete</span
                              >
                          </td>
                      </tr>
                  </tbody>
              </table>
              <table
                  v-if="addrefund"
                  class="table"
                  id="createrefund-datatable"
                  width="100%"
                  cellspacing="0"
                  style="margin-bottom:0"
              >
                  <tbody>
                      <tr v-for="(refund_item, k) in refund_items" :key="k">
                          <td>
                              <Datepicker
                                  class="datapicker"
                                  id="mydatepicker"
                                  v-model="refund_item.refund_date"
                              ></Datepicker>
                          </td>
                          <td>
                              <input
                                  type="number"
                                  class="form-control form-control-user"
                                  placeholder="Amount"
                                  v-model="refund_item.totalamount"
                              />
                          </td>
                          <td>
                              <select
                                  class="form-control form-control-user"
                                  v-model="refund_item.bank"
                              >
                                  <option value="ICIC Bank Accounts"
                                      >ICIC Bank Accounts</option
                                  >
                                  <option value="Baroda Bank"
                                      >Baroda Bank</option
                                  >
                                  <option value="Cash Account"
                                      >Cash Account</option
                                  >
                              </select>
                          </td>
                          <td>
                              <select
                                  class="form-control form-control-user"
                                  v-model="refund_item.method"
                              >
                                  <option value="Bank Transfer"
                                      >Bank Transfer</option
                                  >
                                  <option value="Cash">Cash</option>
                                  <option value="Other">Other</option>
                              </select>
                          </td>
                          <td>
                              <input
                                  type="text"
                                  class="form-control form-control-user"
                                  placeholder="Note"
                                  v-model="refund_item.comment"
                              />
                          </td>
                          <td>
                              <button
                                  type="button"
                                  class="btn admin-btn mobile-mb btn-nwidth"
                                  style="background-color: #EDF2F6 !important;float: right;"
                                  @click="removeRefund(k)"
                              >
                                  Cancel
                              </button>
                          </td>
                          <td>
                              <button
                                  type="button"
                                  @click="save_refund(k)"
                                  class="btn admin-btn mobile-mb btn-nwidth"
                                  style="background-color: #7ADAAA !important;float: right;"
                              >
                                  Save
                              </button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <!-- Modal -->

          <div class="modal fade" id="deleteConfirmationFile" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationFileLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h6 class="modal-title" id="deleteConfirmationFileLabel">
                              Confirmation
                          </h6>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                              <span aria-hidden="true" style="color:#fff" >&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <p style="color:#000;font-size:14px;">
                              Are you sure you want to delete this file?
                          </p>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">
                              Cancel
                          </button>
                          <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deleteFile(fileid)">
                              Delete
                          </button>
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
                          <p style="color:#000;font-size:14px;">
                              Are you sure you want to delete this record?
                          </p>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">
                              Cancel
                          </button>
                          <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deleteRecord(paymentid)" >
                              Delete
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Modal -->
      <div class="modal fade" id="deleteInvoiceConfirmation" tabindex="-1" role="dialog" aria-labelledby="deleteInvoiceConfirmationLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title" id="deleteInvoiceConfirmationLabel">Confirmation</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" style="color:#fff">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <p style="color:#000;font-size:14px;">Are you sure you want to delete this Sales Invoice?</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deleteSalesInvoice()">Delete</button>
                  </div>
              </div>
          </div>
      </div>
    
      <!-- Modal -->
      <div class="modal fade" id="dosign" tabindex="-1" role="dialog" aria-labelledby="dosign" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="dosignh1">Add Signature</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" style="color: #fff">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                  <label>Signature</label><br />
                  <VueSignaturePad width="560px" height="250px" ref="signaturePad" style="border:1px solid #ccc" :options="{onBegin: () => {$refs.signaturePad.resizeCanvas()}}"/>
                  <!-- <div>
                    <button @click="save">Save</button>
                    <button @click="undo">Undo</button>
                  </div> -->
                  <span v-if="no_sign" class="text-danger">Please add signature</span>
                  <br>
                  <label class="required-field">Signed By</label>
                  <input type="text" class="form-control form-control-user" placeholder="" v-model="signed_by" />
                </div>
                <div class="modal-footer">
                    <button type="button" @click="save" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7adaaa !important">Save</button>
                    <button type="button" @click="undo" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7adaaa !important">Undo</button>
                    <button type="button" data-dismiss="modal"
                    aria-label="Close" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
                </div>
            </div>
        </div>
      </div>

      </div>
  </div>
</template>

<script>
import moment from 'moment';
import { ModelSelect } from 'vue-search-select'
import Datepicker from "vuejs-datepicker";
import {objectToFormData} from '../../object-to-formdata';
import VueHtml2pdf from 'vue-html2pdf';
import VueSignaturePad from "vue-signature-pad";

export default {
  name: "ViewSales",
  components: {
      Datepicker,
      moment,
      ModelSelect,
      VueHtml2pdf,
      VueSignaturePad
  },
  data() {
      return {
          customerType: "business",
          addpayment: "",
          addrefund: "",
          theme: "cust-type",
          formdata: {},
          companydata: {},
          rows: [],
          urlArr: {1:[],2:[],3:[],4:[]},
          filesArr: { 1: null,
                      2: null,
                      3: null,
                      4: null,},
          invoice_items: [
              {
                  payment_date: Date.now(),
                  totalamount: "",
                  bank: "ICIC Bank Accounts",
                  method: "Bank Transfer",
                  comment: "",
                  action:""
              }
          ],
          refund_items: [
              {
                  refund_date: Date.now(),
                  totalamount: "",
                  bank: "ICIC Bank Accounts",
                  method: "Bank Transfer",
                  comment: "",
                  action:"Refund"
              }
          ],
          tabflag: false,
          sidebarflag: false,
          paymentid: "",
          refundid: "",
          fileid: "",
          paymentcount: 0,
          due_payment: "",
          invoice_status: "",
          payment_check: "",
          paymenttab: false,
          notestab: false,
          kyctab: false,
          selectedtab: "payment",
          note: "",
          over_paid: 0,
          refundcount: 0,
          payaction:"",
          paymentclass:"",
          sales:[],
          postFormData: {},
          uploaddata:{
            registration:[],
            vat:[],
            iddoc:[],
            credit:[]
          },
          kycdocs:[],
          cashSelected: false,
          purchases:[],
          purchase_id:"",
          purchase_amount:"",
          signed_by:'',
            no_sign:false,
            signaturedata: {
                signature_filename:'',
                signed_by:'',
            },
            sign_flag:'',
            output_tax:""
      };
  },
  methods: {
    deleteSalesInvoice() {
      axios.get('/delete_salesinvoice/'+this.$route.params.id)
        .then(resp => {
          this.$router.push("/sales");
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
    edit_invoice()
    {
      if(this.paymentcount>0)
      {
        alert('Please delete all the payments first!');
      }
      else
      {
        this.$router.push("/editinvoice/"+this.$route.params.id);
      }
    },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    async save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      if(isEmpty)
      {
        this.no_sign=true;
      }
      else
      { 
        const response = await axios.post("add_salessignature", {'signature':data,'signedby':this.signed_by,'sales_id':this.$route.params.id});
        if(response.data.id)
        {
          this.$router.go();
        }
        else
        {
          let toast = Vue.toasted.show('Something went wrong, Please try again', {
              theme: "toasted-error",
              position: "top-center",
              duration: 5000,
            });
        }
      }
    },
    generateReport () {
           this.$refs.html2Pdf.generatePdf()
    },
    printDiv(divName) { 
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
    },
    ondownload() {
        axios({
                url: 'downloadPdf',
                method: 'GET',
                responseType: 'arraybuffer',
            }).then((response) => {
                let blob = new Blob([response.data], {
                        type: 'application/pdf'
                    })
                    let link = document.createElement('a')
                    link.href = window.URL.createObjectURL(blob)
                    link.download = 'test.pdf'
                    link.click()
            });
        },
      fetchPo()
      {
        axios.get('/purchase_details/'+this.purchase_id)
        .then((response) => {
            this.purchase_amount = response.data.totalamount;
        });
      },
      dateFormateChanger(d){
         return moment(d,'YYYY-MM-DD').format('DD MMM YYYY')
      },
      gotosales(id)
      {
        this.$router.push("/viewsales/"+id);
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
      sidebarToggle() {
          this.sidebarflag = !this.sidebarflag;
      },
      changetype(type) {
          this.customerType = type;
      },
      addLine(action) {
          this.addpayment = "show";
          this.payaction=action;
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
      removeLine(index) {
          this.addpayment = "";
          //this.invoice_items.splice(index,1);
      },
      removeRefund(index) {
          this.addpayment = "";
          //this.invoice_items.splice(index,1);
      },
      editpayment(paymentdata) {},
      tabclick(param) {
          this.selectedtab = param;
          return false;
          if (param == "customer") {
              this.tabflag = true;
          } else {
              this.tabflag = false;
          }
      },
      refundform() {
          this.addrefund = "show";
      },
      refundhistory() {
          this.addrefund = "";
      },
      async save_payment(index) {
          this.invoice_items[index].sales_id = this.$route.params.id;
          var date = new Date(this.invoice_items[index].payment_date);
          this.invoice_items[index].payment_date = date;
          this.invoice_items[index].action = this.payaction;
          const response = await axios.post(
              "create_payment",
              this.invoice_items[index]
          );
          if (response.data.id) {
              var arr = {};
              arr.payment_date = response.data.payment_date;
              arr.method = this.invoice_items[index].method;
              arr.totalamount = this.invoice_items[index].totalamount;
              arr.action = this.payaction;
              arr.id = response.data.id;
              this.formdata.salepayments.push(arr);
              this.addpayment = "";
              this.paymentcount = this.paymentcount + 1;
              //this.invoice_items.splice(index,1);
              if(this.payaction=='Receive')
              {
                this.due_payment = this.due_payment - this.invoice_items[index].totalamount;
                this.paymentclass='receive_class';
              }
              else
              {
                if(this.over_paid<0)
                {
                    this.due_payment = parseFloat(this.over_paid) + parseFloat(this.invoice_items[index].totalamount);
                    this.over_paid = (this.due_payment>0)?0:parseFloat(Math.abs(this.over_paid))-parseFloat(this.invoice_items[index].totalamount);
                }
                else
                {
                    this.due_payment = parseFloat(this.due_payment) + parseFloat(this.invoice_items[index].totalamount);
                }
                //this.due_payment = parseFloat(this.due_payment) + parseFloat(this.invoice_items[index].totalamount);
                this.paymentclass='refund_class';
              }
              
              this.due_payment = this.due_payment.toFixed(2);
              if (this.due_payment < 0) {
                  this.over_paid = this.due_payment;
              }
              this.due_payment = this.due_payment < 0 ? 0 : this.due_payment;

              this.invoice_items = [
                  {
                      payment_date: Date.now(),
                      totalamount: "",
                      bank: "ICIC Bank Accounts",
                      method: "Bank Transfer",
                      comment: "",
                      action: ""
                  }
              ];

              if (this.paymentcount == 0) {
                  this.invoice_status = "UnPaid";
                  this.payment_check = "Yes";
              } else if (this.over_paid < 0) {
                  this.invoice_status = "Over Paid";
                  this.payment_check = "";
              } else if (this.due_payment == 0) {
                  this.invoice_status = "Paid";
                  this.payment_check = "";
              } else {
                  this.invoice_status = "Partially Paid";
                  this.payment_check = "Yes";
              }
                this.statusdata={};
                this.statusdata.sales_id = this.$route.params.id;
                this.statusdata.status = this.invoice_status;
                const response1 = axios.post("update_invoicestatus", this.statusdata);
          } else {
              let toast = Vue.toasted.show(
                  "Something went wrong, Please try again",
                  {
                      theme: "toasted-error",
                      position: "top-center",
                      duration: 5000
                  }
              );
          }
      },
      
      onFileChange(e, id){
       this.filesArr[id] = e.target.files;
       for(let key of e.target.files){
        if(id==1)
        {
            this.uploaddata.registration.push(key);
        }
        if(id==2)
        {
            this.uploaddata.vat.push(key);
        }
        if(id==3)
        {
            this.uploaddata.iddoc.push(key);
        }
        if(id==4)
        {
            this.uploaddata.credit.push(key);
        }
        
        if(key.type.includes("image")){
          this.urlArr[id].push(
            {
              fileType: 'image',
              url: URL.createObjectURL(key)
            }
          );
        }
        else{
          this.urlArr[id].push(
            {
              fileType: 'nonImage',
              url: ""
            }
          );
        }
      }
    },
    rmFile(index, id){
        const dt = new DataTransfer();
        let i = 0;
        for (let file of this.filesArr[id]) {
            if(id==1)
            {
                this.uploaddata.registration.splice(index, 1);
            }
            if(id==2)
            {
                this.uploaddata.vat.splice(index, 1);
            }
            if(id==3)
            {
                this.uploaddata.iddoc.splice(index, 1);
            }
            if(id==4)
            {
                this.uploaddata.credit.splice(index, 1);
            }
            if (index !== i){
            dt.items.add(file);
            }
            i++;
        } 
        this.filesArr[id] = dt.files;
        this.urlArr[id].splice(index, 1);
    },
    async uploadfile(index)
    {
        this.postFormData.sales_id= this.$route.params.id;
        if(index==1)
        {
            this.postFormData.kyc=this.uploaddata.registration;
            this.postFormData.category= 'registration';
        }
        if(index==2)
        {
            this.postFormData.kyc=this.uploaddata.vat;
            this.postFormData.category= 'vat';
        }
        if(index==3)
        {
            this.postFormData.kyc=this.uploaddata.iddoc;
            this.postFormData.category= 'iddoc';
        }
        if(index==4)
        {
            this.postFormData.kyc=this.uploaddata.credit;
            this.postFormData.category= 'credit';
            
        }
        const response = await axios.post("upload_kyc", objectToFormData(this.postFormData));
        
        if (response.data.id) {
              this.note = "";
              let toast = Vue.toasted.show("Document successfully uploaded", {
                  theme: "toasted-success",
                  position: "top-center",
                  duration: 5000
              });
          } else {
              let toast = Vue.toasted.show(
                  "Please choose file",
                  {
                      theme: "toasted-error",
                      position: "top-center",
                      duration: 5000
                  }
              );
          }
    },
      async save_note() {
          var notedata = { sales_id: this.$route.params.id, note: this.note };
          const response = await axios.post("create_note", notedata);
          if (response.data.id) {
              this.note = "";
              let toast = Vue.toasted.show("Note successfully added", {
                  theme: "toasted-success",
                  position: "top-center",
                  duration: 5000
              });
          } else {
              let toast = Vue.toasted.show(
                  "Something went wrong, Please try again",
                  {
                      theme: "toasted-error",
                      position: "top-center",
                      duration: 5000
                  }
              );
          }
      },
      async save_refund(index) {
          this.refund_items[index].sales_id = this.$route.params.id;
          var date = new Date(this.refund_items[index].refund_date);
          this.refund_items[index].payment_date = date;
          this.refund_items[index].action = 'Refund';
          const response = await axios.post(
              "create_payment",
              this.refund_items[index]
          );
          if (response.data.id) {
              var arr = {};
              arr.payment_date = response.data.payment_date;
              arr.method = this.refund_items[index].method;
              arr.totalamount = this.refund_items[index].totalamount;
              arr.id = response.data.id;
              this.formdata.salepayments.push(arr);
              this.addpayment = "";
              this.refundcount = this.refundcount + 1;
              //this.refund_items.splice(index,1);
              this.due_payment =
                  parseFloat(this.due_payment) +
                  parseFloat(this.refund_items[index].totalamount);
              this.due_payment = this.due_payment.toFixed(2);
              if (this.due_payment < 0) {
                  this.over_paid = this.due_payment;
              }
              this.due_payment = this.due_payment < 0 ? 0 : this.due_payment;

              this.refund_items = [
                  {
                      refund_date: Date.now(),
                      totalamount: "",
                      bank: "ICIC Bank Accounts",
                      method: "Bank Transfer",
                      comment: "",
                      action: "Refund"
                  }
              ];

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
          } else {
              let toast = Vue.toasted.show(
                  "Something went wrong, Please try again",
                  {
                      theme: "toasted-error",
                      position: "top-center",
                      duration: 5000
                  }
              );
          }
      },
      selectrecord(id) {
          this.paymentid = id;
      },
      selectrefund(id) {
          this.refundid = id;
      },
      selectfile(id) {
          this.fileid = id;
      },
      deleteFile(id) {
          axios
              .get("/delete-file/" + id)
              .then(resp => {
                  this.$router.go();
              })
              .catch(error => {
                  let message = "Something went wrong, Please try again";
                  let toast = Vue.toasted.show(message, {
                      theme: "toasted-error",
                      position: "top-center",
                      duration: 5000
                  });
                  console.log(error);
              });
      },
      deleteRefund(id) {
          axios
              .get("/delete-refund/" + id)
              .then(resp => {
                  this.$router.go();
              })
              .catch(error => {
                  let message = "Something went wrong, Please try again";
                  let toast = Vue.toasted.show(message, {
                      theme: "toasted-error",
                      position: "top-center",
                      duration: 5000
                  });
                  console.log(error);
              });
      },
      deleteRecord(id) {
          axios
              .get("/delete-payment/" + id)
              .then(resp => {
                  this.$router.go();
              })
              .catch(error => {
                  let message = "Something went wrong, Please try again";
                  let toast = Vue.toasted.show(message, {
                      theme: "toasted-error",
                      position: "top-center",
                      duration: 5000
                  });
                  console.log(error);
              });
      },
      download(image){
        axios.get("/download-kyc?image=" + image, {responseType: 'blob'})
            .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', image);
            document.body.appendChild(link);
            link.click();
            })
            .catch(e => {
            console.log(e);
        });
      },
      async apply_contra() {
          var exchangedata = { sales_id: this.$route.params.id, purchase_id: this.purchase_id, due_payment: this.due_payment, action: 'Exchange' };
          const response = await axios.post("apply_contra", exchangedata);
          if (response.data.id) {
                this.due_payment = this.due_payment - this.purchase_amount;
                
                this.due_payment = this.due_payment.toFixed(2);
                if (this.due_payment < 0) {
                    this.over_paid = this.due_payment;
                }
                this.due_payment = this.due_payment < 0 ? 0 : this.due_payment;

                if (this.over_paid < 0) {
                    this.invoice_status = "Over Paid";
                    this.payment_check = "";
                } else if (this.due_payment == 0) {
                    this.invoice_status = "Paid";
                    this.payment_check = "";
                } else {
                    this.invoice_status = "Partially Paid";
                    this.payment_check = "Yes";
                }
                this.statusdata={};
                this.statusdata.sales_id = this.$route.params.id;
                this.statusdata.status = this.invoice_status;
                const response1 = axios.post("update_invoicestatus", this.statusdata);
                this.$router.go();
          } else {
              let toast = Vue.toasted.show(
                  "Something went wrong, Please try again",
                  {
                      theme: "toasted-error",
                      position: "top-center",
                      duration: 5000
                  }
              );
          }
      },
  },
  mounted() {
    axios.get('/saved_companydetails/')
        .then((response) => {
            this.companydata = response.data;
        })
        .catch(function(error) {
            //app.$notify(error.response.data.error, "error");
        });
      axios
          .get("/sales_details/" + this.$route.params.id)
          .then(response => {
              this.formdata = response.data;
              this.paymentcount = this.formdata.salepayments.length;
              if (response.data.payment_due < 0) {
                  this.over_paid = response.data.payment_due.toFixed(2);
              }
              this.due_payment = response.data.payment_due < 0 ? 0 : response.data.payment_due;
              this.output_tax=0;
              for(var j=0; j<this.formdata.salesitem.length; j++)
              {
                if(empty(this.formdata.salesitem[j].vat) && this.formdata.salesitem[j].metal_type=='gold')
                {
                    this.output_tax += parseFloat(this.formdata.salesitem[j].invoice_amount)*20/100;
                }
              }
              this.due_payment = this.due_payment.toFixed(2);
              if (this.paymentcount == 0) {
                  this.invoice_status = "UnPaid";
                  this.payment_check = "Yes";
              } else if (this.over_paid < 0) {
                  this.invoice_status = "Over Paid";
                  this.payment_check = "";
              } else if (this.due_payment == 0) {
                  this.invoice_status = "Paid";
                  this.payment_check = "";
              } else {
                  this.invoice_status = "Partially Paid";
                  this.payment_check = "Yes";
              }
          })
          .catch(function(error) {
              //app.$notify(error.response.data.error, "error");
          });

      axios
          .get("/sales_history/" + this.$route.params.id)
          .then(response => {
              this.formdata.saleshistory = response.data;
          })
          .catch(function(error) {
           });

     axios.get('/sales_list/')
        .then((response) => {
            this.sales = response.data;
        })
        .catch(function(error) {
        });

        axios.get('/purchase_list/')
        .then((response) => {
            this.purchases = response.data;
            this.purchases = this.purchases.map(purchase => {
              return {
                value: purchase.id,
                text: `${moment(purchase.issue_date,'YYYY-MM-DD').format('DD MMM YYYY') || ''} |   ${purchase.invoiceno || ''}  | ${purchase.firstname || ""}  ${purchase.lastname || ""} | £${purchase.totalamount || ""} `,
              } 
            })
        })
        .catch(function(error) {
            //app.$notify(error.response.data.error, "error");
        });

     axios.get('/fetch_kyc/' + this.$route.params.id)
        .then((response) => {
            this.kycdocs = response.data;
            console.log(this.kycdocs);
        })
        .catch(function(error) {
        });
    
    axios.get('/invoicesales_signature/'+this.$route.params.id)
      .then((response) => {
          this.signaturedata = response.data;
          this.sign_flag = response.data.signature_filename;
          this.signaturedata.signature_filename = '/uploads/'+response.data.signature_filename;
      })
      .catch(function(error) {
          //app.$notify(error.response.data.error, "error");
      });
  }
};
</script>
<style scoped>
.pdf_section * {
        margin: 0;
        padding: 0;
        text-indent: 0;
      }
#dosign .modal-dialog
{
    max-width: 600px;
}
#createinvoice-datatable thead {
  background: #3376c2;
  color: #fff;
  font-size: 13px;
}
#createinvoice-datatable thead tr th {
  font-weight: 100 !important;
}
#createinvoice-datatable {
  font-size: 13px;
  color: #000;
}
.download-containter{
  margin-top: 200px;
  margin-left: 600px;
}
.choose-cont{
    display: flex;
    /* justify-content: center; */
}

.imagePreview {
  width: 70px;
}

.previewContainer {
  position: relative;
}

.closeIcon {
  position: absolute;
  top: -15px;
  left: 51px;
  font-size: 20px;
  cursor: pointer;
}
.closeIcon i
{
    font-size: 11px;
    background: #cccccc52;
    padding: 4px;
    border-radius: 50%;
    color: #000;
}
.downloadIcon {
  position: absolute;
  top: -15px;
  left: 30px;
  font-size: 20px;
  cursor: pointer;
}
.downloadIcon i
{
    font-size: 11px;
    background: #cccccc52;
    padding: 4px;
    border-radius: 50%;
    color: #000;
}
.salesdata {
  font-size: 13px;
  color: #000;
}
.btn-head {
  border-radius: 50%;
}
.btn-container {
  display: flex;
  justify-content: space-between !important;
  width: 100% !important;
}
.selectedclr {
  background-color: #245388 !important;
  color: #fff !important;
}
.cont {
  width: auto;
  font-size: 13px !important;
  color: #000;
  border: none;
  height: 40px;
  padding: 5px 20px;
  border-radius: 5px 5px 0px 0px;
}
.viewsales-div {
  background: #fff;
  padding: 34px 23px 0px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-invoice label {
  font-size: 12px;
}
.crt-invoice {
  padding: 0px 2%;
  color: #000;
}

.dark-theme-btn {
  background-color: #245388 !important;
  color: #fff;
  width: 100px;
  font-size: 12px !important;
}
.light-theme-btn {
  background-color: #edf2f6 !important;
  color: #000;
  width: 100px;
  font-size: 12px !important;
}
.btn:focus,
.btn.focus {
  box-shadow: 0 0;
}
.table-div {
  border-bottom: 1px solid #ccc;
}
.tab-selector {
  border: 1px solid #d6e3f2 !important;
  height: 40px;
  border-radius: 5px;
  width: 100%;
  font-size: 13px;
}
.btn-addwidth {
  width: 130px;
}
.sum-price ul {
  list-style-type: none;
}
.sum-price li {
  padding: 5px 0px;
  font-size: 11px;
}
.viewsales-div > p {
  color: #3376c2;
  font-size: 12px;
}
.viewsales-div span {
  color: #000;
  font-size: 13px;
}

.class_red
{
  color:rgb(255 0 0);
}
.class_green
{
  color:#7adaaa;
}
.bold_font
{
    font-weight: 600;
}
.invoicelist a 
{
    color: #000;
}
#saleshistory-datatable thead
{
    background-color: #3376c2;
    color: #fff;
}
#saleshistory-datatable thead th
{
    font-weight: 100;
}
#kyc-datatable
{
    font-size: 13px;
}
#applycontra .modal-dialog
{
    max-width: 700px;
}
.red-color
{
    color:red !important;
}
.container {
    padding: 0px 6%;
    margin-top: 0px;
}

.col-sm {
    padding: 0 10px;
}
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h2 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 12pt;
      }

    
.cont2 p{
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
        margin: 0pt;
      }

      .s1 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 22pt;
      }
      .s3 {
        color: black;
        font-family: Calibri;
        font-style: normal;
        font-weight: normal;
        text-decoration: underline;
        font-size: 9px;
      }
      .s4,.s5 {
        color: black;
        font-family: Calibri;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9px;
      }
      th, td{
        border-bottom:1px solid black;
      }
</style>
