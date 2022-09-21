<template>
  <div class="row">
      <div class="col-1" v-if="sidebarflag" style="font-size: 12px;">
        <p v-for="sale in sales" class="invoicelist" :key="sale.id" v-bind:class = "(sale.invoiceno==formdata.invoiceno)?'bold_font':''" style="color:#000"><router-link :to="{name : 'viewsales', params: {id : sale.id}}"><b>{{sale.invoiceno}}</b></router-link></p>
      </div>
      <!-- Page Heading -->
      <div class="col-11">
          <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
              style="margin-right:120px"
          >
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
                  <!-- <i class="fa fa-download" style="background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%;"></i> -->
                  <span style="color:#48c6f6;background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 10%;font-size: 25px; margin-left: 30%;" class="material-symbols-outlined">download</span>
                  <i class="fab fa-whatsapp" style="color:#00AA5B; background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%; font-size: 18px;"></i>
                  <!-- <i class="fas fa-envelope" style="background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 30%;"></i> -->
                  <span style="color:blue;background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 30%;font-size: 19px;" class="material-symbols-outlined">mail</span>
                  <!-- <i class="fas fa-print" @click="ondownload()" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 30%;"></i> -->
                  <span class="material-symbols-outlined" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 30%;">print</span>
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
                  <span style="background-color: #EDF2F6; border-radius:50%; padding: 18%; margin-right:35%" class="material-symbols-outlined">edit</span>
                  <!-- <i
                      class="fas fa-trash-alt"
                      style="background-color: #EDF2F6; border-radius:50%; padding: 15%; "
                  ></i> -->
                  <span style="background-color: #EDF2F6; border-radius:50%; padding: 18%;color:red" class="material-symbols-outlined">delete</span>
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
                          style="border-radius: 8px;"
                      >
                          <table
                              class="table"
                              id="createinvoice-datatable"
                              width="100%"
                              cellspacing="0"
                              style="margin-bottom:0"
                          >
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
                                          <i
                                              class="fa fa-pound-sign"
                                              style="font-size:10px;"
                                          ></i
                                          >{{ saleitem.unitprice }}
                                      </td>
                                      <td>{{ saleitem.vat }}</td>
                                      <td>
                                          <i
                                              class="fa fa-pound-sign"
                                              style="font-size:10px;"
                                          ></i
                                          >{{ saleitem.invoice_amount }}
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6"></div>
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

      </div>
  </div>
</template>

<script>
import moment from 'moment';
import { ModelSelect } from 'vue-search-select'
import Datepicker from "vuejs-datepicker";
import {objectToFormData} from '../../object-to-formdata';
export default {
  name: "ViewSales",
  components: {
      Datepicker,
      moment,
      ModelSelect
  },
  data() {
      return {
          customerType: "business",
          addpayment: "",
          addrefund: "",
          theme: "cust-type",
          formdata: {},
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
          purchase_amount:""
      };
  },
  methods: {
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
      axios
          .get("/sales_details/" + this.$route.params.id)
          .then(response => {
              this.formdata = response.data;
              this.paymentcount = this.formdata.salepayments.length;
              if (response.data.payment_due < 0) {
                  this.over_paid = response.data.payment_due.toFixed(2);
              }
              this.due_payment =
                  response.data.payment_due < 0
                      ? 0
                      : response.data.payment_due;
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
  }
};
</script>
<style scoped>
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
</style>
