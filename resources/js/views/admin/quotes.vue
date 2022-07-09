<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8 mobile-mb">
            <h1 class="h3 mb-0 text-gray-800">Sales Quotes</h1>
          </div>
          
        </div>
        
      </div>
      <div class="col-md-6" style="text-align:right">
        <router-link to="/createinvoice"><button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;"><i class="fas fa-plus" style="margin-right: 5px;"></i>Create Sales Quotes</button></router-link>
        <button type="button" class="btn admin-btn mobile-mb">Export</button>
      </div>
      
      
    </div>

    <div class="search-cstm">
      <div class="col-md-12">
            <input type="text" class="form-control bg-light border-0 small table-search" placeholder="Search by # or Sales Quote Reference" style="background-color:#FFFFFF !important;"/>
            
            <select class="tab-selector">
              <option value="Option 1" selected>All Customers</option>
              <option value="Option 1" >Option 1</option>
            </select> 
            <input type="text" class="form-control bg-light border-0 small table-date" placeholder="Date Range" style="background-color:#FFFFFF !important;"/>
            <select class="tab-selector">
              <option value="Option 1" selected>All Category</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;margin-left: auto;width: 100px;">Search</button>
          </div>
          <div class="">
            <div>
        <!-- Page Heading -->
                    <div class="mt-2 mb-4">
                        <div class="">
                            <div class="table-responsive">
                                <table class="table" id="salesquotes-datatable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" class="custom-check-input"></th>
                                            <th>No</th>
                                            <th>Sales Quote Reference</th>
                                            <th>Customer</th>
                                            <th>Issue Date</th>
                                            <th>Sub Total</th>
                                            <th>Total</th>
                                            <th>Category</th>
                                         </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" class="custom-check-input"></td>
                                            <td>2001</td>
                                            <td>Direct Contact</td>
                                            <td>Robert Malasakalwi</td>
                                            <td>1/12/2021</td>
                                            <td>2000</td>
                                            <td>2400</td>
                                            <td>Draft</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" class="custom-check-input"></td>
                                            <td>2000</td>
                                            <td>Direct Contact</td>
                                            <td>Robert Malasakalwi</td>
                                            <td>1/12/2021</td>
                                            <td>2021</td>
                                            <td>2400</td>
                                            <td>Draft</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" class="custom-check-input"></td>
                                            <td>1999</td>
                                            <td>Direct Contact</td>
                                            <td>Robert Malasakalwi</td>
                                            <td>1/12/2021</td>
                                            <td>2000</td>
                                            <td>2400</td>
                                            <td>Draft</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
        
    </div>

    

    
  </div>
</template>

<script>
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default {
  name: "Dashboard",
  data() {
    
  },
  mounted(){
      var table = $('#salesquotes-datatable').DataTable({
        "bFilter": false,
        "bLengthChange": false,
        "columnDefs": [
          { "targets": [0], "searchable": false, "orderable": false, "visible": true }
        ]
      });
      table.columns().iterator( 'column', function (ctx, idx) {
    $( table.column(idx).header() ).append('<span class="sort-icon"/>');
  } );
  }
};
</script>
<style scoped>
.table-search
{
  width: 25%;
  border: 1px solid #D6E3F2 !important;
  display: inline-block;
  height: 40px;
}
.table-date
{
  width: 33%;
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
#salesquotes-datatable thead
{
  background: #3376C2;
  color: #fff;
  font-size: 13px;
}
.table-date::placeholder {
  color: #3377c2;
  font-size: 13px;
}
#salesquotes-datatable
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
#salesquotes-datatable thead tr th 
{
  font-weight: 100 !important;
}
table.dataTable thead th
{
  padding: 10px 10px !important;
}
table.dataTable thead span.sort-icon {
  display: inline-block;
  padding-left: 5px;
  width: 16px;
  height: 16px;
}
table.dataTable thead .sorting span { background: url('http://cdn.datatables.net/plug-ins/3cfcc339e89/integration/bootstrap/images/sort_both.png') no-repeat center right !important; }
table.dataTable thead .sorting_asc span { background: url('http://cdn.datatables.net/plug-ins/3cfcc339e89/integration/bootstrap/images/sort_asc.png') no-repeat center right !important; }
table.dataTable thead .sorting_desc span { background: url('http://cdn.datatables.net/plug-ins/3cfcc339e89/integration/bootstrap/images/sort_desc.png') no-repeat center right !important; }

table.dataTable thead .sorting_asc_disabled span { background: url('http://cdn.datatables.net/plug-ins/3cfcc339e89/integration/bootstrap/images/sort_asc_disabled.png') no-repeat center right !important; }
table.dataTable thead .sorting_desc_disabled span { background: url('http://cdn.datatables.net/plug-ins/3cfcc339e89/integration/bootstrap/images/sort_desc_disabled.png') no-repeat center right; }
.search-cstm
{
  background-color: #fff;
  padding-top: 10px;
}
@media (min-width: 768px) {
  .tab-selector {
    margin-left: 30px;
    margin-right: 30px;
  }
}
</style>
