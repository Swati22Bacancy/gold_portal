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
                                        <tr v-for="customer in customers" :key="customer.id">
                                            <td><input type="checkbox" class="custom-check-input"></td>
                                            <td>{{customer.first_name}} {{customer.last_name}}</td>
                                            <td>--</td>
                                            <td>{{customer.customer_type}}</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>-</td>
                                            <td>--</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" class="custom-check-input"></td>
                                            <td>ABC Jewellers Ltd.</td>
                                            <td>Southhall</td>
                                            <td>Business</td>
                                            <td>665,395.00</td>
                                            <td>232,500.00</td>
                                            <td>-</td>
                                            <td>45,500.00</td>
                                            <td>8640</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" class="custom-check-input"></td>
                                            <td>ABC Jewellers Ltd.</td>
                                            <td>Wembly</td>
                                            <td>Business</td>
                                            <td>665,395.00</td>
                                            <td>232,500.00</td>
                                            <td>-</td>
                                            <td>50,500.00</td>
                                            <td>8640</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" class="custom-check-input"></td>
                                            <td>AMJUK LTD T/AS Jewellers Ltd.</td>
                                            <td>Southhhall</td>
                                            <td>Business</td>
                                            <td>665,395.00</td>
                                            <td>232,500.00</td>
                                            <td>-</td>
                                            <td>50,500.00</td>
                                            <td>8640</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
        </template>
        <template v-slot:tabPanel-2> <p>Content 2</p> </template>
        <template v-slot:tabPanel-3> <p>Content 3</p> </template>
      </customer-tabs>
    </div>

    

    
  </div>
</template>

<script>
import CustomerTabs from "./CustomerTabs";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default {
  name: "Dashboard",
  components: {
    CustomerTabs,
  },
  data() {
    return {
      tabList: ["All", "Business", "Individual"],
      customers : {},
    };
  },
  created() {
      //this.loadCustomers();
  },
  methods:
  {
    loadCustomers(){
      //axios.get("customerlist").then(({ data }) => (this.customers = data));
    }
  },
  mounted(){
    axios.get("customerlist")
        .then((response) => {
          
            this.customers = response.data;
            console.log(this.customers);
        })
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
      var table = $('#customer-datatable').DataTable({
        "bFilter": false,
        "bLengthChange": false,
        "columnDefs": [
          { "targets": [0,8], "searchable": false, "orderable": false }
        ]
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
