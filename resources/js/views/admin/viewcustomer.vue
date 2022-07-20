<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8 mobile-mb">
            <h1 class="h3 mb-0 text-gray-800">Customers</h1>
          </div>
          
        </div>
        
      </div>
      <div class="col-md-6" style="text-align:right">
        <router-link to="/createcustomer"><button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Customer</button></router-link>
        <button type="button" class="btn admin-btn mobile-mb">Send Statement</button>
        <button type="button" class="btn admin-btn mobile-mb">Print</button>
        <button type="button" class="btn admin-btn mobile-mb">Export</button>
      </div>
      
      
    </div>

    <div class="tabs-cstm">
      <view-customer-tabs :tabList="tabList">
        <template v-slot:tabPanel-1> 
          
          <div class="">
            <div>
                <form class="crt-customer" @submit.prevent="update_customer">
                  <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <div>
                      <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Update</button>
                      <button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
                    </div>
                    
                  </div>

                  <div class="row">
                    <div class="col-md-12 createcust-div">
                      
                          <div class="row mb-4">
                            <div class="col-md-3">
                              <div class="form-group customer-input">
                                <label>Customer Type</label><br>
                                <button type="button" v-on:click="changetype('business')" class="btn admin-btn mobile-mb" :class="customerType=='business' ? 'dark-theme-btn' : 'light-theme-btn'" style="margin:0">Business</button>
                                <button type="button" v-on:click="changetype('individual')" class="btn admin-btn mobile-mb" :class="customerType=='individual' ? 'dark-theme-btn' : 'light-theme-btn'" style="margin:0">Individual</button>
                              </div>
                              
                            </div>
                            <div class="col-md-3">
                              <div class="form-group customer-input">
                                <label>Company Code</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.companycode"
                                />
                              </div>
                            </div>
                            <div class="col-md-6"></div>
                          </div>
                          <div class="row" v-if="customerType=='business'">
                            <div class="col-md-6 detail-div">
                              <h6>Company Details</h6>
                              <div class="form-group customer-input">
                                <label>Company Name</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.companyname"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>Registered Address</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.registeredaddress"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>VAT No.</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.vat"
                                />
                              </div>
                              <h6>Company Details</h6>
                              <div class="form-group customer-input">
                                <label>Email</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.email"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>Telephone</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.telephone"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>Whatsapp Number</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.whatsapp"
                                />
                              </div>
                            </div>
                            <div class="col-md-6 primary-div">
                              <h6>Primary Contact</h6>
                              <div class="form-group customer-input">
                                <label>Title</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.title"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.firstname"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.lastname"
                                />
                              </div>
                              <h6>Settings</h6>
                              <div class="form-group customer-input">
                                <label>Credit Limit (<i class="fa fa-pound-sign" style="font-size:10px;"></i>)</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.creditlimit"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row" v-if="customerType=='individual'">
                            <div class="col-md-6 detail-div">
                              <div class="form-group customer-input">
                                <label>Title</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.title"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.firstname"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.lastname"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>Email</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.email"
                                />
                              </div>
                            </div>
                            <div class="col-md-6 primary-div">
                              <div class="form-group customer-input">
                                <label>Registered Address</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.registeredaddress"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>Telephone</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.telephone"
                                />
                              </div>
                              <div class="form-group customer-input">
                                <label>Whatsapp Number</label>
                                <input
                                  type="text"
                                  class="form-control form-control-user"
                                  id="crt-customer"
                                  aria-describedby="emailHelp"
                                  placeholder=""
                                  v-model="formdata.whatsapp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </form>
                    
              </div>
          </div>
        </template>
        <template v-slot:tabPanel-2> <p>Content 2</p> </template>
        <template v-slot:tabPanel-3> <p>Content 3</p> </template>
      </view-customer-tabs>
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
                <p style="color:#000;font-size:14px;">Are you sure you want to delete this customer?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deleteRecord(customerid)">Delete</button>
            </div>
        </div>
    </div>
</div>
    

    
  </div>
</template>

<script>
import ViewCustomerTabs from "./ViewCustomerTabs";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default {
  name: "ViewCustomer",
  components: {
    ViewCustomerTabs,
  },
  props: ['products'],
  data() {
    return {
      tabList: ["Profile", "Transactions", "Summary"],
      customers : {},
      customerid:'',
      dtRef: null,
      formdata: {},
      customerType: 'business',
      theme: 'cust-type',
    };
  },
  created() {
      //this.loadCustomers();
  },
  methods:
  {
    loadCustomers(){
      //axios.get("customerlist").then(({ data }) => (this.customers = data));
    },
    selectrecord(id)
    {
      this.customerid=id;
    },
    deleteCustomer(id) {
      

      if(confirm("Do you really want to delete?")){

                    axios.get('/deletecustomer/'+id)
                    .then(resp => {
                        //this.artists.data.splice(index, 1);
                    })
                    .catch(error => {
                        console.log(error);
                    })
      }
    },
    deleteRecord(id) {
      axios.get('/deletecustomer/'+id)
        .then(resp => {
            this.$router.go();
        })
        .catch(error => {
            console.log(error);
        })
    },
    getProjects() {
        return axios.get("customerlist").then(response => {
            this.products = response.data;
        });
    },
    async update_customer() {
      try {
        this.formdata.customertype= this.customerType;
        const response = await axios.post("create_customer", {
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

        this.$router.push("/customers");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted(){
    this.getProjects();
    // axios.get("customerlist")
    //     .then((response) => {
          
    //         this.customers = response.data;
    //         this.dtRef.rows.add(response.data);
    //         //console.log(this.customers);
    //     })
      //axios.get("customerlist").then(({ data }) => (this.customers = data));
      
      $.fn.textWidth = function(){
        var html_org = $(this).html();
        var html_calc = '<span>' + html_org + '</span>';
        $(this).html(html_calc);
        var width = $(this).find('span:first').width();
        $(this).html(html_org);
        return width;
      };
      $(this.$el.querySelector('table')).on( 'draw.dt', function (e) {
        $('#customer-datatable thead tr th').each(function(idx, ele) {
          var xPos = parseInt((($(ele).textWidth()))+12);
          $(ele).css('background-position-x',  xPos + 'px')
        })
      });
      // this.dtRef = $('#customer-datatable').DataTable({
      //   "bFilter": false,
      //   "bLengthChange": false,
      //   "columnDefs": [
      //     { "targets": [0,8], "searchable": false, "orderable": false }
      //   ]
      // });
      const unwatch = this.$watch('products', (products) => {
            // wait products prop to be filled
            if (!Array.isArray(products) || products.length === 0) {
                return;
            }

            // stop watching for products change
            unwatch();

            // wait for vue to populate DOM
            this.$nextTick(() => {

                // initialize DataTable on rendered table
                const table = $(this.$el.querySelector('table')).DataTable({
                  "bFilter": false,
                  "bLengthChange": false,
                  "columnDefs": [
                    { "targets": [0,8], "searchable": false, "orderable": false }
                  ]
                });

                // register hook so when this component is
                // unmounted/removed, DataTable is removed properly
                this.$once('hook:beforeDestroy', function () {
                    table.destroy();
                });
            }, {immediate: true});
        });
  }
};
</script>
<style scoped>
.table-search
{
  width: 65%;
  border: 1px solid #D6E3F2 !important;
  display: inline-block;
  height: 40px;
}
.table-date
{
  width: 27%;
  border: 1px solid #D6E3F2 !important;
  display: inline-block;
  height: 40px;
}
.tab-selector
{
  border: 1px solid #D6E3F2 !important;
  height: 40px;
  border-radius: 5px;
  width: 11%;
  color: #3377c2;
  font-size: 13px;
}
.table-search::placeholder {
  color: #3377c2;
  opacity: 0.4;
  font-size: 11px;
}
#customer-datatable thead
{
  background: #3376C2;
  color: #fff;
  font-size: 13px;
}
.table-date::placeholder {
  color: #3377c2;
  font-size: 13px;
}
#customer-datatable
{
  color: #000;
  font-size: 13px;
}
table.dataTable.no-footer
{
  border-bottom: 1px solid #e3e6f0;
}
.dataTables_wrapper .dataTables_paginate .paginate_button.current
{
    color: #fff !important;
    border: 1px solid #3376c2 !important;
    background-color: #3376c2 !important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button
{
  padding: 0.3em 0.8em;
}
#customer-datatable thead tr th 
{
  font-weight: 100 !important;
}
table.dataTable thead th
{
  padding: 10px 10px !important;
}
table.dataTable thead .sorting, table.dataTable thead .sorting_asc, table.dataTable thead .sorting_desc, table.dataTable thead .sorting_asc_disabled, table.dataTable thead .sorting_desc_disabled
{
  background-size: 13px 13px;
  background-position: 0px 19px;
}
.createcust-div
{
  background: #fff;
  padding: 34px 23px;
}
.crt-customer label
{
  font-size: 12px;
}
.crt-customer
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
@media (min-width: 768px) {
  .detail-div
  {
    border-right: 1.5px solid rgb(204, 204, 204);
    padding-right: 8%;
  }
  .primary-div
  {
    padding-left: 8%;
  }
}
</style>
