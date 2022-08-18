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
                <div class="input-group mb-3 d-flex">
                  <model-select class="modal-selection" :options="customers" :on-change="fetchAddress()" v-model="formdata.customer_id" 
                  placeholder="Select Customer"></model-select>
                  <div class="select-group-append">
                      <div class="input-icons">
                        <button class="btn-modal" data-toggle="modal" data-target="#addcreateinvoice">
                      <span class="fas fa-plus"></span></button>
                      <!-- Modal -->
                        <div
                        class="modal fade"
                        id="addcreateinvoice"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="addcreateinvoice"
                        aria-hidden="true"
                        >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h6 class="modal-title" id="addcreateinvoice">Add Customer</h6>
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
                                        <input type="text" class="form-control form-control-user" placeholder="" v-model="formdata.registered_address" />
                                        <span v-if="$v.formdata.registered_address.$error" class="text-danger">Please enter address</span>
                                      </div>
                                      <div class="form-group customer-input">
                                        <label class="required-field">Email</label>
                                        <input type="text" class="form-control form-control-user" placeholder="" v-model="formdata.email"
                                        />
                                        <span v-if="$v.formdata.email.$error" class="text-danger">Email must be valid</span>
                                      </div>
                                  </div>
                                    
                                    <div class="col-md-6 primary-div">
                                        <div class="form-group customer-input">
                                          <label class="required-field">First Name</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="formdata.first_name"/> 
                                          <span v-if="$v.formdata.first_name.$error" class="text-danger">Please your first name</span>
                                        </div>

                                        <div class="form-group customer-input">
                                          <label class="required-field">Last Name</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="formdata.last_name"/>
                                          <span v-if="$v.formdata.last_name.$error" class="text-danger">Please your last name</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row" v-if="customerType=='individual'">
                                    <div class="col-md-6 detail-div">
                                      <div class="form-group customer-input">
                                          <label class="required-field">First Name</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="formdata.first_name"/>
                                          <span v-if="$v.formdata.first_name.$error" class="text-danger">Please your first name</span>
                                      </div>

                                      <div class="form-group customer-input">
                                          <label class="required-field">Last Name</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="formdata.last_name"/>
                                          <span v-if="$v.formdata.last_name.$error" class="text-danger">Please your last name</span>
                                      </div>
                                    
                                    
                                    </div>
                                    <div class="col-md-6 primary-div">
                                      <div class="form-group customer-input">
                                          <label class="required-field">Registered Address</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="formdata.registered_address"/>
                                          <span v-if="$v.formdata.registered_address.$error" class="text-danger">Please enter address</span>
                                      </div>
                                      <div class="form-group customer-input">
                                          <label class="required-field">Email</label>
                                          <input type="text" class="form-control form-control-user" placeholder="" v-model="formdata.email"/>
                                        <span v-if="$v.formdata.email.$error" class="text-danger">Email must be valid</span>
                                      </div>
                                    </div>
                                    
                                    </div>
                                </div>
                            <div class="modal-footer">
                                <router-link to="/sales"><button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7adaaa !important">Save</button></router-link>
                                <button type="button" data-dismiss="modal"
                                aria-label="Close" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                  </div>
                </div>
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
                <Datepicker class="datapicker" id="mydatepicker"></Datepicker>
                
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Due Date</label>
                <Datepicker></Datepicker>
                
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
                  placeholder=""
                  v-model="formdata.billing_address"
                />
              </div>
              
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Reference</label>
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
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label>Recurring Invoice</label>
                <select class="form-control form-control-user" v-model="formdata.recurring_invoice">
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 createinvoice-div pb-3" style="padding:0">
          <div class="">
            <div class="table-responsive table-div mb-2">
              <table class="table" id="createinvoice-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
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
                    <tr v-for="(invoice_item, k) in invoice_items" :key="k">
                        <td>
                          <select class="form-control form-control-user" @change="fetchProducts(k)" v-model="invoice_item.invoice_type">
                            <option v-for="producttype in producttypes" :key="producttype.id" :value="producttype.id">{{producttype.name}}</option>
                          </select>
                        </td>
                        <td>
                          <select class="form-control form-control-user" @change="fetchProductDetails(k)" v-model="invoice_item.invoice_product">
                            <!-- <option value="Option 1" selected>Group</option>
                            <option value="Option 1" >Option 1</option> -->
                            <option v-for="product in invoice_items[k].products" :key="product.id" :value="product.id">{{product.name}}</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" class="form-control form-control-user" placeholder="" v-model="invoice_item.weight" readonly/>
                        </td>
                        <td>
                          <input type="number" class="form-control form-control-user" @blur="calculatePrice(k)" placeholder="" v-model="invoice_item.quantity"/>
                        </td>
                        <td>
                          <input type="number" class="form-control form-control-user" placeholder="" v-model="invoice_item.unitprice" readonly/>
                        </td>
                        <td>
                          <input type="number" class="form-control form-control-user" placeholder="" v-model="invoice_item.vat" readonly/>
                        </td>
                        <td>
                          <input type="number" class="form-control form-control-user" @blur="calculatePrice(k)" placeholder="" v-model="invoice_item.invoice_amount"/>
                        </td>
                        <td><span class="material-symbols-outlined" style="margin-right: 5px;color: red;cursor: pointer;" @click="removeLine(k)">delete</span></td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <button type="button" class="btn admin-btn mobile-mb btn-addwidth" style="background-color: #7ADAAA !important;" @click="addLine"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Line Item</button>
              <button type="button" class="btn admin-btn mobile-mb btn-addwidth"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Comment</button>
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
                <li style="font-size:13px;">{{subtotal}}</li>
                <li style="font-size:13px;">{{vattotal}}</li>
                <li style="font-size:13px;">{{totalamount}}</li>
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
      
    </form>
    
  </div>
</template>

<script>
import { required,email,helpers} from "vuelidate/lib/validators";

const isName = helpers.regex("custom", /^[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}[_ ]{0,1}[a-zA-Z]{1,}$/);
 import { ModelSelect } from 'vue-search-select'
import Datepicker from 'vuejs-datepicker';
export default {
  name: "CreateInvoice",
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
        registered_address:"",
        first_name: "",
        last_name: "",
        billing_address:""
      },
      errors: {},
      groups:{},
      customers: [],
      products: [],
      rows: [],
      invoice_items: [{
          invoice_type: '',
          invoice_product: '',
          weight: '',
          quantity: '',
          unitprice: '',
          vat: '',
          invoice_amount:'',
          products:[]
      }],
      currencies:{},
      producttypes:{},
      subtotal:'',
      vattotal:'',
      totalamount:''
    };
  },
  methods:
  {
    addLine(){
      this.invoice_items.push({
          invoice_type: '',
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
    },
    changetype(type)
    {
      this.customerType = type;
    },
    async create_invoice() {
        this.$v.formdata.$touch();
      if (this.$v.formdata.$error) {
        return;
      }
      try {
        this.formdata.customertype= this.customerType;
        const response = await axios.post("create_invoice", {
          firstname: this.formdata.firstname,
          lastname: this.formdata.lastname,
          email: this.formdata.email,
          companyname: this.formdata.companyname,
          registeredaddress: this.formdata.registeredaddress,
        });

        
      } catch (error) {
        console.log(error);
      }
    },
    getCustomers() {
        return axios.get("customerlist/all").then(response => {
            this.customers = response.data;
            this.customers = this.customers.map(customer => {
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
        });
    },
    getProducttypes() {
        return axios.get("producttypelist").then(response => {
            this.producttypes = response.data;
        });
    },
    fetchProducts(index)
    {
      this.products[index];
      axios.get('/productdata/'+this.invoice_items[index].invoice_type)
        .then((response) => {
          this.invoice_items[index].products=response.data;
      })
      .catch(function(error) {
      });
    },
    fetchProductDetails(index)
    {
      console.log(this.invoice_items[index].invoice_product);
      
      axios.get('/productdetails/'+this.invoice_items[index].invoice_product)
        .then((response) => {
            console.log(response);
            this.invoice_items[index].weight=response.data.weight;
            this.invoice_items[index].vat=response.data.rate;
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
        })
      }
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
        console.log(this.invoice_items[j].unitprice);
        totalsub += this.invoice_items[j].unitprice;
      }
      // console.log(this.subtotal);
      // if(!this.subtotal)
      // {
      //   this.subtotal=0;
      // }
      // console.log(unitprice);
      this.subtotal = totalsub;
    }
  },
    validations: {
    formdata: {
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
    }
   },
  mounted()
  {
    this.getCustomers();
    this.getCurrencies();
    this.getProducttypes();
  }
};
</script>
<style scoped>
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
</style>
