<template>
  <div>
    <form class="crt-purchase" @submit.prevent="create_purchase">
    <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">New Purchase Order</h1>
        <div>
          <button type="button" @click="create_purchase()" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
          <router-link to="/purchase"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
        </div>
        
      </div>

      <div class="row">
        <div class="col-md-12 createpurchase-div">
          
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Supplier</label>
                <div class="input-group mb-3 d-flex">
                  <model-select class="modal-selection" :options="suppliers" @input="fetchAddress()" v-model="formdata.customer_id" 
                  placeholder="Select supplier"></model-select>
                  <div class="select-group-append">
                      <div class="input-icons">
                        <button type="button" class="btn-modal" data-toggle="modal" data-target="#addcreatepurchase">
                      <span class="fas fa-plus"></span></button>
                      <!-- Modal -->
                        <div
                        class="modal fade"
                        id="addcreatepurchase"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="addcreatepurchase"
                        aria-hidden="true"
                        >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h6 class="modal-title" id="addcreatepurchase">Add Supplier</h6>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true" style="color: #fff">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body">
                                <div class="row mb-4">
                                  <div class="col-md-4">
                                      <div class="form-group customer-input">
                                      <label>Customer Type</label><br />
                                      <div class="button-container">
                                      <button
                                          type="button"
                                          v-on:click="changetype('business')"
                                          class="btn admin-btn mobile-mb"
                                          :class="customerType=='business' ? 'dark-theme-btn' : 'light-theme-btn'"
                                          style="margin: 0">Business</button>
                                      <button
                                          type="button"
                                          v-on:click="changetype('individual')"
                                          class="btn admin-btn mobile-mb"
                                          :class="customerType=='individual' ? 'dark-theme-btn' : 'light-theme-btn'"
                                          style="margin: 0">Individual</button></div>
                                      </div>
                                  </div>
                                  <div class="col-md-8"></div>
                                </div>
                                <div class="row" v-if="customerType=='business'">
                                  <div class="col-md-6 detail-div">
                                      <div class="form-group customer-input">
                                        <label class="required-field">Registered Address</label>
                                        <input type="text" class="form-control form-control-user" placeholder="" v-model="customerdata.registered_address" />
                                        <span v-if="$v.customerdata.registered_address.$error" class="text-danger">Please enter address</span>
                                      </div>
                                      <div class="form-group customer-input">
                                        <label class="required-field">Email</label>
                                        <input type="text" class="form-control form-control-user" placeholder="" v-model="customerdata.email"
                                        />
                                        <span v-if="$v.customerdata.email.$error" class="text-danger">Email must be valid</span>
                                      </div>
                                  </div>
                                    
                                    <div class="col-md-6 primary-div">
                                        <div class="form-group customer-input">
                                          <label class="required-field">First Name</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="customerdata.first_name"/> 
                                          <span v-if="$v.customerdata.first_name.$error" class="text-danger">Please your first name</span>
                                        </div>

                                        <div class="form-group customer-input">
                                          <label class="required-field">Last Name</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="customerdata.last_name"/>
                                          <span v-if="$v.customerdata.last_name.$error" class="text-danger">Please your last name</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row" v-if="customerType=='individual'">
                                    <div class="col-md-6 detail-div">
                                      <div class="form-group customer-input">
                                          <label class="required-field">First Name</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="customerdata.first_name"/>
                                          <span v-if="$v.customerdata.first_name.$error" class="text-danger">Please your first name</span>
                                      </div>

                                      <div class="form-group customer-input">
                                          <label class="required-field">Last Name</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="customerdata.last_name"/>
                                          <span v-if="$v.customerdata.last_name.$error" class="text-danger">Please your last name</span>
                                      </div>
                                    
                                    
                                    </div>
                                    <div class="col-md-6 primary-div">
                                      <div class="form-group customer-input">
                                          <label class="required-field">Registered Address</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="customerdata.registered_address"/>
                                          <span v-if="$v.customerdata.registered_address.$error" class="text-danger">Please enter address</span>
                                      </div>
                                      <div class="form-group customer-input">
                                          <label class="required-field">Email</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="customerdata.email"/>
                                        <span v-if="$v.customerdata.email.$error" class="text-danger">Email must be valid</span>
                                      </div>
                                    </div>
                                    
                                    </div>
                                </div>
                            <div class="modal-footer">
                                <button type="button" @click="add_customer()" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7adaaa !important">Save</button>
                                <button type="button" data-dismiss="modal"
                                aria-label="Close" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                  </div>
                </div>
                <span v-if="$v.formdata.customer_id.$error" class="text-danger">Please Select Supplier</span>
              </div>
              
            </div>
            <div class="col-md-2">
              <div class="form-group form-text">
                <label>Purchase Order No.</label>
                <input
                  type="number"
                  title="yo"
                  class="form-control form-control-user setpadding"
                  id="invno"
                  aria-describedby="emailHelp"
                  placeholder=""
                  v-model="formdata.invoiceno"
                />
                <label for="invno" class="static-value">PO -</label>
                <span v-if="$v.formdata.invoiceno.$error" class="text-danger">Please Enter invoice no</span>
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Issue Date</label>
                <Datepicker v-model="formdata.issue_date" class="datapicker" id="mydatepicker"></Datepicker>
                <span v-if="$v.formdata.issue_date.$error" class="text-danger">Please Select Issue Date</span>
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Due Date</label>
                <Datepicker v-model="formdata.due_date"></Datepicker>
                <span v-if="$v.formdata.due_date.$error" class="text-danger">Please Select Due Date</span>
              </div>
            </div>
      
          </div>

          <div class="row mb-4">
            <div class="col-md-4">
              <div class="form-group" >
                <label>Delivery & Billing Address</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  placeholder=""
                  v-model="formdata.billing_address"
                :readonly="!editflag"/>
                <button type="button" class="edit-cont" @click="editButton"><i class="fas fa-pencil-alt"></i></button>
                <span v-if="$v.formdata.billing_address.$error" class="text-danger">Please Enter Delivery & Billing Address</span>
              </div>
            </div>
            
            <div class="col-md-2">
              <div class="form-group">
                <label>Supplier Reference</label>
                <input
                  type="text"
                  class="form-control form-control-user"
                  placeholder=""
                  v-model="formdata.reference"
                />
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Currency</label>
                <select class="form-control form-control-user"  v-model="formdata.currency_id">
               
                <option v-for="currency in currencies" :key="currency.id" :value="currency.id">{{currency.name}}</option>

                </select>
                <span v-if="$v.formdata.currency_id.$error" class="text-danger">Please Select Currency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 createpurchase-div pb-3" style="padding:0">
          <div class="">
            <div class="table-responsive table-div mb-2">
              <table class="table" id="createpurchase-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
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
                    <tr v-for="(invoice_item, key) in invoice_items" :key="key" class="table-row">
                        <td class="td-style">
                          <!-- <select class="form-control form-control-user select-cont" @change="fetchProducts(k)" v-model="invoice_item.invoice_type" required>
                            <option v-for="producttype in producttypes" :key="producttype.id" :value="producttype.id">{{producttype.name}}</option>
                          </select> -->
                          <input type="text" class="form-control form-control-user" placeholder="" v-model="invoice_item.invoice_type" readonly/>
                          <input type="hidden" class="form-control form-control-user" placeholder="" v-model="invoice_item.invoice_typeid"/>
                          <!-- <span v-if="$v.invoice_item.invoice_type.$error" class="text-danger">Please Select type</span> -->
                        </td>
                        <td><div class="modal-createpurchase">
                      <model-select  :options="products" @input="fetchProductDetails(key)" v-model="invoice_item.invoice_product" 
                       placeholder="Select Product"></model-select></div>
                          <!-- <select class="form-control form-control-user select-cont" @change="fetchProductDetails(key)" v-model="invoice_item.invoice_product" > -->
                            <!-- <option v-for="product in products" :key="product.id" :value="product.id">{{product.name}}</option> -->
                      
                          <!-- </select> -->
                        </td>
                        <td class="td-style">
                          <input type="text" class="form-control form-control-user" placeholder="" v-model="invoice_item.weight" readonly/>
                        </td>
                        <td class="td-style">
                          <input type="number" class="form-control form-control-user" @blur="calculateValue(key)" placeholder="" v-model="invoice_item.quantity"/>
                          <span v-if="$v.invoice_item.quantity.$error" class="text-danger">Please Enter weight</span>
                        </td>
                        <td class="td-style">
                          <input type="number" class="form-control form-control-user" @blur="calculateAmount(key)" placeholder="" v-model="invoice_item.unitprice"/>
                          <span v-if="$v.invoice_item.unitprice.$error" class="text-danger">Please Enter unit pice</span>                        
                        </td>
                        <td class="td-style">
                          <input type="number" class="form-control form-control-user" placeholder="" v-model="invoice_item.vat" readonly/>
                        </td>
                        <td class="td-style">
                          <input type="number" class="form-control form-control-user" @blur="calculatePrice(key)" placeholder="" v-model="invoice_item.invoice_amount"/>
                        </td>
                        <td><span class="material-symbols-outlined" style="margin-right: 5px;color: red;cursor: pointer;" @click="removeLine(key)">delete</span></td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-5">
                  <button type="button" class="btn admin-btn mobile-mb btn-addwidth" style="background-color: #7ADAAA !important;" @click="addLine"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Line Item</button>
                  <button type="button" @click="showcommentbox()" class="btn admin-btn mobile-mb btn-addwidth"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Comment</button>
                </div>
                <div class="col-md-6" v-if="commentshow">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    placeholder="Add comment here"
                    v-model="formdata.comment"
                  />
                </div>
              </div>
              
              
            </div>
            <div class="col-md-2 sum-price">
              <ul style="text-align: right;">
                <li style="color:#3376C2">Sub Total (<i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>)</li>
                <li style="color:#3376C2">VAT Total (<i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>)</li>
                <li style="color:#3376C2">Total (<i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>)</li>
              </ul>
            </div>
            <div class="col-md-2 sum-price">
              <ul>
                <li style="font-size:13px;">
                  <input type="hidden" v-model="formdata.subtotal"/>
                  {{subtotal}}
                </li>
                <li style="font-size:13px;">
                  <input type="hidden" v-model="formdata.vattotal"/>
                  {{vattotal}}
                </li>
                <li style="font-size:13px;">
                  <input type="hidden" v-model="formdata.totalamount"/>
                  {{totalamount}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required,email,helpers} from "vuelidate/lib/validators";

import { ModelSelect } from 'vue-search-select'
import Datepicker from 'vuejs-datepicker';
export default {
  name: "CreatePurchase",
  components: {
    Datepicker,
    ModelSelect
  },
  data() {
    return {
      options: [],
        item: {
          value: '',
          text: ''
        },
      customerType: 'business',
      theme: 'cust-type',
      formdata: {
        currency_id:"",
        issue_date:Date.now(),
        due_date:Date.now(),
        registered_address:"",
        first_name: "",
        last_name: "",
        billing_address:"",
        invoiceno:""
      },
      postdata:{},
      errors: {},
      groups:{},
      suppliers: [],
      rows: [],
      invoice_items: [{
          invoice_type: '',
          invoice_typeid: '',
          invoice_product: '',
          weight: '',
          quantity: '',
          unitprice: '',
          vat: '',
          invoice_amount:'',
          products:[]
      }],
      currencies:[],
      producttypes:{},
      products:[],
      subtotal:'',
      vattotal:'',
      totalamount:'',
      customerdata:{},
      commentshow: '',
      editflag:false,
      credit_period:0
    };
  },
  methods:
  {

    editButton(){
      this.editflag = !this.editflag;
    },
    addLine(){
     
      this.invoice_items.push({
          invoice_type: '',
          invoice_typeid: '',
          invoice_product: '',
          weight: '',
          quantity: '',
          unitprice: '',
          vat: '',
          invoice_amount:'',
          products:[]
      });
    },
    removeLine(index)
    {
      this.invoice_items.splice(index,1);
      var totalsub=0;
      for(var j=0; j<this.invoice_items.length;j++)
      {
        if(!isNaN(this.invoice_items[j].unitprice))  
        {
          totalsub += this.invoice_items[j].unitprice*this.invoice_items[j].quantity;
        }
      }
      
      var totalvat=0;
      for(var k=0; k<this.invoice_items.length;k++)
      {
        if(!isNaN(this.invoice_items[k].unitprice))  
        {
          if(this.invoice_items[k].vat)
          {
            totalvat += (this.invoice_items[k].unitprice*this.invoice_items[k].quantity)*(this.invoice_items[k].vat/100);
          }
          else
          {
            totalvat += 0;
          }
        }
      }
      
      this.subtotal = totalsub.toFixed(2);
      this.vattotal = totalvat.toFixed(2);
      var invoicetotal = totalsub + totalvat;
      this.totalamount = invoicetotal.toFixed(2);
      this.formdata.subtotal = Number(this.subtotal);
      this.formdata.vattotal = Number(this.vattotal);
      this.formdata.totalamount = Number(this.totalamount);
    },
    changetype(type)
    {
      this.customerType = type;
    },
    async create_purchase() {
    if(this.invoice_items.length < 1){
          let toast = Vue.toasted.show('Please enter one addline item', {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
          return;
    }
       this.$v.formdata.$touch();
      if (this.$v.formdata.$error) {
        return;
      }
      
      try {
        this.formdata.customertype= this.customerType;
        var date = new Date(this.formdata.issue_date);
        this.formdata.issue_date=date;
        var due_date = new Date(this.formdata.due_date);
        this.formdata.due_date=due_date;
        this.postdata.formfields = this.formdata;
        this.postdata.itemfields = this.invoice_items;
        
        const response = await axios.post("create_purchase", this.postdata);
        let message =
            "Purchase Order has been successfully created.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/purchase");
        
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    getCustomers() {
        return axios.get("customerlist/all").then(response => {
            this.suppliers = response.data;
            this.suppliers = this.suppliers.map(customer => {
              return {
                value: customer.id,
                text: `${customer.first_name || ""} ${customer.last_name || ""} `,
                
              } 
            })
        });
    },
    getCurrencies() {
        return axios.get("currencylist").then(response => {
            this.currencies = response.data;
            this.formdata.currency_id = this.currencies[0].id;
        });
    },
    getProducttypes() {
        return axios.get("producttypelist").then(response => {
            this.producttypes = response.data;
        });
    },
    getProducts() {
        return axios.get("productlist").then(response => {
            this.products = response.data;
              this.products = this.products.map(product => {
              return {
                value: product.id,
                text: product.name
              } 
            })
        });
        
    },
    getInvoicekey() {
        return axios.get("get_purchasekey").then(response => {
          this.formdata.invoiceno = response.data;
        });
    },
    fetchProducts(index)
    {
      this.invoice_items[index].weight='';
      this.invoice_items[index].vat='';
      this.invoice_items[index].quantity='';
      this.invoice_items[index].unitprice='';
      this.invoice_items[index].invoice_amount='';
      var totalsub=0;
      for(var j=0; j<this.invoice_items.length;j++)
      {
        if(!isNaN(this.invoice_items[j].unitprice))  
        {
          totalsub += this.invoice_items[j].unitprice*this.invoice_items[j].quantity;
        }
      }

      var totalvat=0;
      for(var k=0; k<this.invoice_items.length;k++)
      {
        if(!isNaN(this.invoice_items[k].unitprice))  
        {
          if(this.invoice_items[k].vat)
          {
            totalvat += (this.invoice_items[k].unitprice*this.invoice_items[k].quantity)*(this.invoice_items[k].vat/100);
          }
          else
          {
            totalvat += 0;
          }
        }
      }
      
      this.subtotal = totalsub.toFixed(2);
      this.vattotal = totalvat.toFixed(2);
      var invoicetotal = totalsub + totalvat;
      this.totalamount = invoicetotal.toFixed(2);
      this.formdata.subtotal = Number(this.subtotal);
      this.formdata.vattotal = Number(this.vattotal);
      this.formdata.totalamount = Number(this.totalamount);

      axios.get('/productdata/'+this.invoice_items[index].invoice_type)
        .then((response) => {
          this.invoice_items[index].products=response.data;
      })
      .catch(function(error) {
      });
    },
    fetchProductDetails(index)
    {
      this.invoice_items[index].weight='';
      this.invoice_items[index].vat='';
      this.invoice_items[index].quantity='';
      this.invoice_items[index].unitprice='';
      this.invoice_items[index].invoice_amount='';
      var totalsub=0;
      for(var j=0; j<this.invoice_items.length;j++)
      {
        if(!isNaN(this.invoice_items[j].unitprice))  
        {
          totalsub += this.invoice_items[j].unitprice*this.invoice_items[j].quantity;
        }
      }

      var totalvat=0;
      for(var k=0; k<this.invoice_items.length;k++)
      {
        if(!isNaN(this.invoice_items[k].unitprice))  
        {
          if(this.invoice_items[k].vat)
          {
            totalvat += (this.invoice_items[k].unitprice*this.invoice_items[k].quantity)*(this.invoice_items[k].vat/100);
          }
          else
          {
            totalvat += 0;
          }
        }
      }
      
      this.subtotal = totalsub.toFixed(2);
      this.vattotal = totalvat.toFixed(2);
      var invoicetotal = totalsub + totalvat;
      this.totalamount = invoicetotal.toFixed(2);
      this.formdata.subtotal = Number(this.subtotal);
      this.formdata.vattotal = Number(this.vattotal);
      this.formdata.totalamount = Number(this.totalamount);

      //this.invoice_items[index].vat='';
      axios.get('/productdetails/'+this.invoice_items[index].invoice_product)
        .then((response) => {
            this.invoice_items[index].weight=response.data.weight;
            this.invoice_items[index].vat=(response.data.purchase_rate)?response.data.purchase_rate:0;
            this.invoice_items[index].invoice_type=response.data.type;
            this.invoice_items[index].invoice_typeid=response.data.type_id;
        })
        .catch(function(error) {
        });
    },
    fetchAddress()
    {
      if(this.formdata.customer_id)
      {
        axios.get('/customerdetails/'+this.formdata.customer_id)
        .then((response) => {
          this.formdata.billing_address = response.data.registered_address;
          this.credit_period = (response.data.credit_period)?response.data.credit_period:0;
         
          const date = new Date();
          date.setDate(date.getDate() + this.credit_period);
          this.formdata.due_date = date.getTime() 
        
        })
      }
    },
    calculateValue(index)
    {
      var invunitprice = parseFloat(this.invoice_items[index].unitprice);
      if(invunitprice)
      {
        var quantity = this.invoice_items[index].quantity;
        var vat = this.invoice_items[index].vat;
        if(vat)
        {
          var vatdeduct = vat/100;
          var vatquantity = quantity*(1+vatdeduct);
          var v = invunitprice*vatquantity;
          var rounded = Math.round(v * 10) / 10
          var lineamount= Math.floor(rounded + 0.1) === rounded + 0.1? rounded + 0.1: rounded;
        }
        else
        {
          var lineamount =invunitprice*vatquantity;
        }
        this.invoice_items[index].invoice_amount = lineamount;
      }
      else
      {
        var invtotalamount = parseFloat(this.invoice_items[index].invoice_amount);
        var quantity = this.invoice_items[index].quantity;
        var vat = this.invoice_items[index].vat;
        if(vat)
        {
          var vatdeduct = vat/100;
          var vatquantity = quantity*(1+vatdeduct);
          var v = invtotalamount/vatquantity;
          var rounded = Math.round(v * 10) / 10
          var unitprice= Math.floor(rounded + 0.1) === rounded + 0.1? rounded + 0.1: rounded;
        }
        else
        {
          var unitprice = invtotalamount/quantity;
        }
        this.invoice_items[index].unitprice = unitprice;
      }


      var totalsub=0;
      for(var j=0; j<this.invoice_items.length;j++)
      {
        if(!isNaN(this.invoice_items[j].unitprice))  
        {
          totalsub += this.invoice_items[j].unitprice*this.invoice_items[j].quantity;
        }
      }

      var totalvat=0;
      for(var k=0; k<this.invoice_items.length;k++)
      {
        if(!isNaN(this.invoice_items[k].unitprice))  
        {
          if(this.invoice_items[k].vat)
          {
            totalvat += (this.invoice_items[k].unitprice*this.invoice_items[k].quantity)*(this.invoice_items[k].vat/100);
          }
          else
          {
            totalvat += 0;
          }
        }
      }
      
      this.subtotal = totalsub.toFixed(2);
      this.vattotal = totalvat.toFixed(2);
      var invoicetotal = totalsub + totalvat;
      this.totalamount = invoicetotal.toFixed(2);
      this.formdata.subtotal = Number(this.subtotal);
      this.formdata.vattotal = Number(this.vattotal);
      this.formdata.totalamount = Number(this.totalamount);
    },
    calculateAmount(index)
    {
      var invunitprice = parseFloat(this.invoice_items[index].unitprice);
      var quantity = this.invoice_items[index].quantity;
      var vat = this.invoice_items[index].vat;
      if(vat)
      {
        var vatdeduct = vat/100;
        var vatquantity = quantity*(1+vatdeduct);
        var v = invunitprice*vatquantity;
        var rounded = Math.round(v * 10) / 10
        var lineamount= Math.floor(rounded + 0.1) === rounded + 0.1? rounded + 0.1: rounded;
      }
      else
      {
        var lineamount =invunitprice*vatquantity;
      }
      this.invoice_items[index].invoice_amount = lineamount;


      var totalsub=0;
      for(var j=0; j<this.invoice_items.length;j++)
      {
        if(!isNaN(this.invoice_items[j].unitprice))  
        {
          totalsub += this.invoice_items[j].unitprice*this.invoice_items[j].quantity;
        }
      }

      var totalvat=0;
      for(var k=0; k<this.invoice_items.length;k++)
      {
        if(!isNaN(this.invoice_items[k].unitprice))  
        {
          if(this.invoice_items[k].vat)
          {
            totalvat += (this.invoice_items[k].unitprice*this.invoice_items[k].quantity)*(this.invoice_items[k].vat/100);
          }
          else
          {
            totalvat += 0;
          }
        }
      }
      
      this.subtotal = totalsub.toFixed(2);
      this.vattotal = totalvat.toFixed(2);
      var invoicetotal = totalsub + totalvat;
      this.totalamount = invoicetotal.toFixed(2);
      this.formdata.subtotal = Number(this.subtotal);
      this.formdata.vattotal = Number(this.vattotal);
      this.formdata.totalamount = Number(this.totalamount);
    },
    calculatePrice(index)
    {
      var invtotalamount = parseFloat(this.invoice_items[index].invoice_amount);
      var quantity = this.invoice_items[index].quantity;
      var vat = this.invoice_items[index].vat;
      if(vat)
      {
        var vatdeduct = vat/100;
        var vatquantity = quantity*(1+vatdeduct);
        var v = invtotalamount/vatquantity;
        var rounded = Math.round(v * 10) / 10
        var unitprice= Math.floor(rounded + 0.1) === rounded + 0.1? rounded + 0.1: rounded;
      }
      else
      {
        var unitprice = invtotalamount/quantity;
      }
      this.invoice_items[index].unitprice = unitprice;
      var totalsub=0;
      for(var j=0; j<this.invoice_items.length;j++)
      {
        if(!isNaN(this.invoice_items[j].unitprice))  
        {
          totalsub += this.invoice_items[j].unitprice*this.invoice_items[j].quantity;
        }
      }

      var totalvat=0;
      for(var k=0; k<this.invoice_items.length;k++)
      {
        if(!isNaN(this.invoice_items[k].unitprice))  
        {
          if(this.invoice_items[k].vat)
          {
            totalvat += (this.invoice_items[k].unitprice*this.invoice_items[k].quantity)*(this.invoice_items[k].vat/100);
          }
          else
          {
            totalvat += 0;
          }
        }
      }
      
      this.subtotal = totalsub.toFixed(2);
      this.vattotal = totalvat.toFixed(2);
      var invoicetotal = totalsub + totalvat;
      this.totalamount = invoicetotal.toFixed(2);
      this.formdata.subtotal = Number(this.subtotal);
      this.formdata.vattotal = Number(this.vattotal);
      this.formdata.totalamount = Number(this.totalamount);
    },
    async add_customer()
    {
      this.$v.customerdata.$touch();
      if (this.$v.customerdata.$error) {
        return;
      }
      const response = await axios.post("create_customer", {
          first_name: this.customerdata.first_name,
          last_name: this.customerdata.last_name,
          email: this.customerdata.email,
          registered_address: this.customerdata.registered_address,
          customertype: this.customerType
        });
      
      this.formdata.billing_address = this.customerdata.registered_address;
      var newdata = {value: response.data.id,text: `${response.data.first_name || ""} ${response.data.last_name || ""} `};
      this.suppliers.push(newdata);
      this.formdata.customer_id=response.data.id;
      $('#addcreatepurchase').modal('hide');
    },
    showcommentbox()
    {
      this.commentshow='show';
    }
  },
    validations: {
    customerdata: {
       email: {
        required,
        email
      },
      registered_address: {
        required,
      },
      first_name: {
        required,
      },
      last_name: {
        required,
      }
    },
    formdata: {
       customer_id: {
        required,
      },
      invoiceno:{
        required,
      },
      billing_address: {
        required,
      },
      issue_date: {
        required,
      },
      due_date: {
        required,
      },
      currency_id: {
        required,
      }
    },
    invoice_item: {
      invoice_product:{
        required,
      },
      invoice_type:{
        required,
      },
      weight:{
        required,
      },
      quantity:{
        required,
      },
      unitprice:{
        required,
      },
    },
   },
  mounted()
  {
    this.getCustomers();
    this.getCurrencies();
    this.getProducttypes();
    this.getProducts();
    this.getInvoicekey();
  }
};
</script>
<style scoped>
.modal-createpurchase{
  width:280px;
}
.table-row{
  height: 100px;
}

.inputdata{
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30"><text x="5" y="19" style="font:16px Arial;">INV -</text></svg>') no-repeat;
  font: 16px "Arial";
  padding-left: 45px;
  
}
.edit-cont{
  position: absolute;
  top: 35px;
   left: 350px;
   border: none;
}
.select-cont{
  width: 200px;
}
.required-field::after {
  content: "*";
  color: red;
}
.text-danger{
  font-size: 12px;
}
.button-container{
    display: flex;
    justify-content: space-between;
}
.btn-modal{
  color: black;
  border: 0;
  background:#7ADAAA ;
}
.modal-selection{
  flex: 1 !important;
}
#createpurchase-datatable thead {
    background: #3376C2;
    color: #fff;
    font-size: 13px;
}
#createpurchase-datatable thead tr th {
    font-weight: 100 !important;
}
#createpurchase-datatable
{
  font-size: 13px;
  color: #000;
}
.createpurchase-div
{
  background: #fff;
  padding: 34px 23px 0px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-purchase label
{
  font-size: 12px;
}
.crt-purchase
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
.check-position
{
  margin-left: 15%;
}
.static-value{
  position:absolute;
  left: 10px;
  font-weight: bold;
  color: #6e707e;
  font-size: 13px !important;
  top: 40px;
}
.setpadding
{
  padding-left: 40px;
}
.form-text{
	position:relative;
}
@media (min-width: 768px) {
  .detail-div
  {
    border-right: 2px solid #eee;
    padding-right: 8%;
  }
  .primary-div
  {
    padding-left: 8%;
  }
}
#mydatepicker{
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #6e707e;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #d1d3e2;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.td-style{
  width:150px;
}
</style>
