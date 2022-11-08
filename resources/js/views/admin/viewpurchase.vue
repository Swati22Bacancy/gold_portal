<template>
  <div class="row">
    
    <div class="col-1" v-if="sidebarflag" style="font-size: 12px;">
      <div v-for="purchase in purchases" :key="purchase.id"  v-bind:class = "(purchase.invoiceno==formdata.invoiceno)?'bold_font':''" style="color:#000">
      
      <div @click="sideClick(purchase.id)"><b>{{purchase.invoiceno}}</b></div></div>
    </div>
    <!-- Page Heading -->
    <div class="col-11">

      <div class="d-sm-flex align-items-center justify-content-between mb-4" style="margin-right:120px">
        <div class="d-sm-flex align-items-center justify-content-between">
          <button @click="sidebarToggle" class="btn-head"><i class="fas fa-arrow-left"></i></button>
          <h1 class="h3 mb-0 text-gray-800"  style="margin-left:20px; margin-right: 20px;">{{formdata.invoiceno}}</h1>
          <button @click="sidebarToggle" class="btn-head"><i class="fas fa-arrow-right"></i></button>
        </div>
        <div class="d-sm-flex align-items-center justify-content-between">
            <VueHtml2pdf
         :show-layout="false"
         :float-layout="true"
         :enable-download="true"
         :preview-modal="false"
         :paginate-elements-by-height="1400"
         :filename="formdata.invoiceno"
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
                  <div class="col-7"  style="padding-top: 55px;">
                    <img :src="'/images/logo.png'" style="width:230px;"/>
                  </div>
          <div class="col-5 s3" style="font-size:9px; text-align:left; float:left">
            <h2  style="padding-top: 45px; padding-left: 13pt;text-indent: -1pt;text-align: left; font-size:13px;font-weight: bold;">
            {{companydata.company_name}} <br>{{companydata.address1}}<br> {{companydata.address2}}</h2>
            <h2 style="padding:0;padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:13px; font-weight: bold;">
            {{companydata.postcode}}
            </h2>
            <br>
            <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:13px; font-weight: bold;">
            Vat No: {{companydata.vat_number}}
            </h2>
            <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:13px; font-weight: bold;">
            t: {{companydata.contact_mobile}}
            </h2>
            <h2  style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:13px;" >
            e: {{ companydata.contact_email }} 
            </h2>
          </div>    
      </div>
          </div>
          <!-- ---------------------------------------- -->
          <div class="container">
            <div class="row">
              <div class="col-7 cont2">
                  <h2 style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:13px;font-weight: 500;">
                  {{ formdata.firstname }} {{ formdata.lastname }}
                  </h2>
                  <h2 style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:13px;font-weight: 500;">
                      {{ formdata.billing_address }}
                  </h2>
              </div>
              <div class="col-5">
                  <p class="s1" style="padding-left: 11pt; text-indent: 0pt; margin-right: 10px; text-align: left">PURCHASE INVOICE</p>
                  <br>
                  <div style="font-size:10px;  text-align: left;">
                    <h2
                    style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:12px; font-weight: bold;">
                    Invoice Date
                    </h2>
                    <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:12px;">
                    <span style="text-align: left; font-size:12px;font-weight: 500;">{{ dateFormateChanger(formdata.issue_date) }}</span></h2>
                    
                    <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:12px; font-weight: bold;">
                    Invoice Number
                    </h2>
                    <h2 style="padding-left: 13pt;  text-indent: 0pt; text-align: left; font-size:12px; ">
                        <span style="text-align: left; font-size:12px;font-weight: 500;">{{ formdata.invoiceno  }}</span>
                    </h2>
                    <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:12px; font-weight: bold;">Account
                    </h2>
                    <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:12px;font-weight: 500;">
                    Online OrderVAT Number140187339
                    </h2><br><br>
                  </div>
              </div>
            </div>
          </div><br><br>
          <!-- ----------------------------------------- -->
          <div class="container" style="font-size:10px">
          <table class="pdf_cont" style="width:100%">
              <thead>
                <tr>
                    <th style="width:350px;font-size: 12px;padding-bottom:8px;">
                        <h2 style="font-size: 14px;">Description</h2>
                    </th>
                    <th style="width: 120px;font-size: 12px;padding-bottom:8px;">
                        <h2 style="font-size: 14px;">Unit Price</h2>
                    </th>
                    <th style="width: 120px;font-size: 12px;padding-bottom:8px;">
                        <h2 style="font-size: 14px;">VAT(%)</h2>
                    </th>
                    <th style="font-size: 12px;padding-bottom:8px;text-align: right;"><h2 style="font-size: 14px;">Amount GBP</h2></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="purchaseitem in formdata.purchaseitem" :key="purchaseitem.id" style="border-bottom:1px solid #ccc !important;">
                    <td style="padding-bottom:4px;padding-top:3px;font-size: 12px;">{{ purchaseitem.quantity }} x {{ purchaseitem.typename }} {{ purchaseitem.productname }} ({{ purchaseitem.weight }}g) </td>
                    <td style="padding-bottom:4px;padding-top:3px;font-size: 12px;">{{ purchaseitem.unitprice }}</td>
                    <td style="padding-bottom:4px;padding-top:3px;font-size: 12px;">{{ purchaseitem.vat }}</td>
                    <td style="padding-bottom:4px;padding-top:3px;font-size: 12px;text-align: right;">{{ purchaseitem.invoice_amount }}</td>
                </tr><br><br>
                <tr>
                    <td
                        style="border:none"
                    ></td>
                    <td style="border-bottom: 1px solid black;"></td>
                    <td style="font-size: 12px;border-bottom: 1px solid black;"><h2 style="font-size: 12px;font-weight: 500;">Total No VAT</h2></td>
                    <td style="font-size: 12px;text-align: right;border-bottom: 1px solid black;">
                        {{ formdata.vattotal }}
                    </td>
                </tr>
                <br><br>
                <tr>
                    <td style="border:none"></td>
                    <td style="border:none"></td>
                    <td style="border:none;font-weight: bold;font-size: 12px;">
                        <h2 style="font-size: 13px;">Amount Due GBP</h2>
                    </td>
                    <td style="border:none;font-weight: bold;font-size: 12px;text-align: right;">
                        {{ formdata.totalamount }}
                    </td>
                </tr>
                <br>
              </tbody>
          </table>
      </div>
          <!-- ------------------------ -->
          <div class="container s3">
            <p style="text-indent: 0pt;text-align: justify;font-size: 12px;">Payment Terms:</p>
            <p style=" text-indent: 0pt; text-align: justify; font-size: 12px;">
              I confirm that i am atleast 18 years of age<br>
              The goods i am selling are owned by me and i have the right to sell them<br>
              The goods i am selling are not subject to any court proceedings and are police safe.<br>
              The goods i am selling if indicated as 'scrap' cannot later be returned or refunded<br>
              I am happy with and accept the offer being provided to me by Gold Warehouse Limited.
            </p><br><br>
            <p style=" text-indent: 0pt; text-align: left; font-size: 12px;">
            <img :src="signaturedata.signature_filename" style="height:100px;"/>
            <br>
            <span class="ml-3">Signed By: <span style="font-weight:600;">{{signaturedata.signed_by}}</span></span>
            </p><br>
          </div>
          <div class="container s3" style="font-size:11px">
            <div class="flex-parent">
              <div class="box" style="width:100%">
                  <p class="box_size">
                      <span
                          style="font-weight:bold"
                          >Company Account</span
                      >
                  </p>
                  <p class="box_size">
                      {{companydata.account_name}}<br />
                      Sort code: <span
                          style="font-weight:bold"
                          >{{companydata.sort_code}}</span
                      ><br />
                      Account No: <span
                          style="font-weight:bold"
                          >{{companydata.account_number}}</span
                      >
                  </p>
              </div>

              <div class="box" style="width:100%">
                  <p class="box_size">
                      <span style="font-weight:bold">Customer Account</span>
                  </p>
                  <p class="box_size">
                      <span style="font-weight:bold">Account Name: </span>{{formdata.account_name}}<br />
                      <span style="font-weight:bold">Account Number: </span>{{formdata.account_number}}<br />
                      <span style="font-weight:bold">Sort Code: </span>{{formdata.sort_code}}
                  </p>
              </div>
          </div>
            <p style="padding-left: 6pt; text-indent: 0pt; text-align: left"  v-if="output_tax">
            The Output Tax Of £ <span style="font-weight:600;">{{output_tax}}</span> On
            Supply Of This Gold Is To Be Accounted For By The Buyer To HMRC.
            </p><br><br><br><br>
          </div>
      </div> 
      <div>
          <p class="s4" style="padding-left: 49pt; text-indent: 0pt; text-align: center;font-size: 10px;">
            Company Registration No: 08101794. Registered Office: 215 the broadway, southall, Southall, middlesex, ub1 1nb, United Kingdom</p>
      
      </div>
      </section>
     </VueHtml2pdf>
  
                  <!-- <i class="fab fa-whatsapp" title="Add Signature" style="color:#00AA5B; background-color: #EDF2F6; margin:3% 0% 3% 0%; border-radius:50%; padding: 15%; margin-left: 30%; font-size: 18px;" data-toggle="modal" data-target="#dosign"></i> -->
                  <span class="material-symbols-outlined" v-if="!sign_flag" title="Add Signature" style="color:#00AA5B; background-color: #EDF2F6; margin:3% 0% 3% 0%; border-radius:50%; padding: 11%; font-size: 23px;cursor:pointer;" data-toggle="modal" data-target="#dosign">draw</span>
                  <!-- <i class="fa fa-download" style="background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%;"></i> -->
                  <span style="color:#48c6f6;background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 10%;font-size: 25px; margin-left: 30%;cursor: pointer;" class="material-symbols-outlined" @click="generateReport">download</span>
                  <i class="fab fa-whatsapp" style="color:#00AA5B; background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%; font-size: 18px;"></i>
                  <!-- <i class="fas fa-envelope" style="background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 30%;"></i> -->
                  <span style="color:blue;background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 16%;font-size: 19px;margin-right: 20%;cursor: pointer;" class="material-symbols-outlined" @click="sendemail">mail</span>
                  
                  <!-- <span class="" v-if="loading">Please Wait...</span> -->
                  <the-loader v-if="loading"></the-loader>
                  <!-- <i class="fas fa-print" @click="ondownload()" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 30%;"></i> -->
                  <span class="material-symbols-outlined" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 0%;cursor: pointer;" @click="printDiv('pdf_section')">print</span>
                  
              </div>
              <div
                  class="d-sm-flex align-items-center justify-content-between" style="margin-left: -20%;"
              >
                  <i
                      class="fas fa-link"
                      style="color:#48c6f6; background-color: #EDF2F6; border-radius:50%;padding: 22%;margin-right: 35%;font-size: 15px;"
                  ></i>
                  <!-- <i
                      class="fas fa-pencil-alt"
                      style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-right:35%"
                  ></i> -->
                  <span style="background-color: #EDF2F6; border-radius:50%; padding: 18%; margin-right:35%;color:red;cursor: pointer;" class="material-symbols-outlined" data-toggle="modal" data-target="#deletePurchaseConfirmation">delete</span>
                  <!-- <i
                      class="fas fa-trash-alt"
                      style="background-color: #EDF2F6; border-radius:50%; padding: 15%; "
                  ></i> -->
                  <span style="background-color: #EDF2F6; border-radius:50%; padding: 18%;cursor: pointer;" @click="edit_invoice()" class="material-symbols-outlined">edit</span>
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
                        <td>
                          <span :class="purchaseitem.price_status=='mismatch' ? 'red-color' : 'grey-color'"><i class="fa fa-pound-sign" style="font-size:10px;"></i>{{ purchaseitem.unitprice }}</span></td>
                        <td>{{purchaseitem.vat}}</td>
                        <td><i class="fa fa-pound-sign" style="font-size:10px;"></i>{{purchaseitem.invoice_amount}}</td>
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
                    <td>{{purchasepayment.bank}}</td>
                    <td>{{purchasepayment.method}}</td>
                    <td></td>
                    <td style="color:#3376c2;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i> {{purchasepayment.totalamount}} </td>
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

      <!-- Modal -->
      <div class="modal fade" id="deletePurchaseConfirmation" tabindex="-1" role="dialog" aria-labelledby="deletePurchaseConfirmationLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title" id="deletePurchaseConfirmationLabel">Confirmation</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" style="color:#fff">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <p style="color:#000;font-size:14px;">Are you sure you want to delete this Purchase Order?</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deletePurchaseOrder()">Delete</button>
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
  import { thisTypeAnnotation } from '@babel/types';
import moment from 'moment';
import VueSignaturePad from "vue-signature-pad";
import Datepicker from 'vuejs-datepicker';
import VueHtml2pdf from 'vue-html2pdf';
import TheLoader from "../../components/TheLoader";
export default {
  name: "Dashboard",
  components: {
    Datepicker,
    VueSignaturePad,
    VueHtml2pdf,
    TheLoader
  },
  data() {
    return {
      customerType: 'business',
      addpayment:'',
      theme: 'cust-type',
      formdata: {},
      companydata: {},
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
      purchases:[],
      signed_by:'',
      no_sign:false,
      signaturedata: {
        signature_filename:'',
        signed_by:'',
      },
      sign_flag:'',
      output_tax:"",
      loading: false
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
    deletePurchaseOrder() {
      axios.get('/delete_purchaseorder/'+this.$route.params.id)
        .then(resp => {
          this.$router.push("/purchase");
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
    edit_invoice()
    {
      if(this.paymentcount>0)
      {
        alert('Please delete all the payments first!');
      }
      else
      {
        this.$router.push("/edit_purchase/"+this.$route.params.id);
      }
    },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    async save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
      if(isEmpty)
      {
        this.no_sign=true;
      }
      else
      { 
        const response = await axios.post("add_signature", {'signature':data,'signedby':this.signed_by,'purchase_id':this.$route.params.id});
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
    async sendemail()
    {
        this.loading = true
        var maildata={};
        maildata.salesdata=this.formdata;
        maildata.salesdata.salesitem=this.formdata.purchaseitem;
        maildata.companydata = this.companydata;
        maildata.signaturedata = this.signaturedata;
        maildata.customeremail=this.formdata.customer_email;
        maildata.output_tax = this.output_tax;
        maildata.title = 'Purchase Order';
        const response = await axios.post(
            "send-purchaseemail",
            maildata
        ).then(resp => {
                    if (resp.data.status == "success") {
                        this.loading = false;
                        let toast = Vue.toasted.show(
                            "Email has been sent successfully",
                            {
                                theme: "toasted-success",
                                position: "top-center",
                                duration: 5000
                            }
                        );
                    } else {
                        this.loading = false;
                        let toast = Vue.toasted.show(
                            "Something went wrong, Please try again",
                            {
                                theme: "toasted-error",
                                position: "top-center",
                                duration: 5000
                            }
                        );
                    }
                })
                .catch(error => {
                
                    this.loading = false;
                        let toast = Vue.toasted.show(
                            "Internal error, please try again later",
                            {
                                theme: "toasted-error",
                                position: "top-center",
                                duration: 5000
                            }
                        );
            });
        
        
    },
    printDiv(divName) { 
          var printContents = document.getElementById(divName).innerHTML;
          var originalContents = document.body.innerHTML;
  
          document.body.innerHTML = printContents;
  
          window.print();
  
          document.body.innerHTML = originalContents;
      },
  },
  mounted()
  {
    axios.get('/saved_companydetails/')
        .then((response) => {
            this.companydata = response.data;
        })
        .catch(function(error) {
            //app.$notify(error.response.data.error, "error");
        });
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
          this.output_tax=0;
          for(var j=0; j<this.formdata.purchaseitem.length; j++)
          {
            if(empty(this.formdata.purchaseitem[j].vat) && this.formdata.purchaseitem[j].metal_type=='gold' && this.formdata.customer_type=='customer_type')
            {
                this.output_tax += parseFloat(this.formdata.purchaseitem[j].invoice_amount)*20/100;
            }
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

    axios.get('/invoice_signature/'+this.$route.params.id)
      .then((response) => {
          this.signaturedata = response.data;
          this.sign_flag = response.data.signature_filename;
          this.signaturedata.signature_filename = '/uploads/'+response.data.signature_filename;
          console.log(this.signaturedata.signature_filename);
      })
      .catch(function(error) {
          //app.$notify(error.response.data.error, "error");
      });
  },
};
</script>
<style scoped>
 .pdf_section * {
          margin: 0;
          padding: 0;
          text-indent: 0;
        }
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
.red-color
{
    color:red !important;
}
#dosign .modal-dialog
{
    max-width: 600px;
}
.pdf_section .container {
      padding: 0px 6%;
      margin-top: 0px;
  }
  
  .pdf_section  .col-sm {
      padding: 0 10px;
  }
  .pdf_section .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  #pdf_section h2 {
    color: black;
    font-family: Calibri, sans-serif;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    font-size: 12pt;
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
          /* text-decoration: underline; */
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
      .pdf_cont  th{
          border-bottom:1px solid black;
          
        }
.flex-parent {
    display: flex;
    /* justify-content: center;
    align-items: center; */
}

.box {
    background-color: white;
    height: 110px;
    padding: 5px;
    width: 330px;
    border: 0.5px solid;
}

.box_size {
    margin-top: 10px;
    font-size: 12px;
}
</style>
