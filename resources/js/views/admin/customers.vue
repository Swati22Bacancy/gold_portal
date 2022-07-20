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
      <customer-tabs :tabList="tabList">
        <template v-slot:tabPanel-1> 
          <div class="col-md-12">
            <input type="text" class="form-control bg-light border-0 small table-search" placeholder="Search Contacts" style="background-color:#FFFFFF !important;"/>
            <select class="tab-selector">
              <option value="Option 1" selected>Group</option>
              <option value="Option 1" >Option 1</option>
            </select>
            <select class="tab-selector">
              <option value="Option 1" selected>Type</option>
              <option value="Option 1" >Option 1</option>
            </select> 
            <select class="tab-selector">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
          </div>
          <div class="">
            <div>
        <!-- Page Heading -->
                    <div class="mt-2 mb-4">
                        <div class="">
                            <div class="table-responsive">
                                <table class="table" id="customer-datatable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" class="custom-check-input"></th>
                                            <th>Customer Name</th>
                                            <th>Group</th>
                                            <th>Type</th>
                                            <th>Total Sales</th>
                                            <th>Total Purchases</th>
                                            <th>You Owe Them</th>
                                            <th>They Owe You</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="customer in products" :key="customer.id">
                                            <td><input type="checkbox" class="custom-check-input"></td>
                                            <td style="color:#3376C2">{{customer.first_name}} {{customer.last_name}}</td>
                                            <td>--</td>
                                            <td>{{customer.customer_type}}</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>-</td>
                                            <td>--</td>
                                            <td><router-link :to="{name : 'viewcustomer', params: {id : customer.id}}"><i class="fas fa-eye" style="margin-right: 10px;color: #3376C2;"></i></router-link>
                                            <i class="fas fa-trash" style="margin-right: 10px;color: red;" data-toggle="modal" data-target="#deleteConfirmation" @click="selectrecord(customer.id)"></i>
                                            <i class="fa fa-ellipsis-v" aria-hidden="true" style="margin-right: 10px;color: #ccc;"></i></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
        </template>
        <template v-slot:tabPanel-2> 
          <div class="col-md-12">
            <input type="text" class="form-control bg-light border-0 small table-search" placeholder="Search Contacts" style="background-color:#FFFFFF !important;"/>
            <select class="tab-selector">
              <option value="Option 1" selected>Group</option>
              <option value="Option 1" >Option 1</option>
            </select>
            <select class="tab-selector">
              <option value="Option 1" selected>Type</option>
              <option value="Option 1" >Option 1</option>
            </select> 
            <select class="tab-selector">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
          </div>
          <businesscustomers> </businesscustomers> 
        </template>
        <template v-slot:tabPanel-3> 
          <individualcustomers> </individualcustomers> 
        </template>
      </customer-tabs>
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
import CustomerTabs from "./CustomerTabs";
import businesscustomers from "./businesscustomers";
import individualcustomers from "./individualcustomers";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default {
  name: "Customer",
  components: {
    CustomerTabs,
    businesscustomers,
    individualcustomers
  },
  props: ['products'],
  data() {
    return {
      tabList: ["All", "Business", "Individual"],
      customers : {},
      customerid:'',
      dtRef: null
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
        return axios.get("customerlist/all").then(response => {
            this.products = response.data;
        });
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
      $('#customer-datatable').on( 'draw.dt', function (e) {
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
                const table = $('#customer-datatable').DataTable({
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

</style>
