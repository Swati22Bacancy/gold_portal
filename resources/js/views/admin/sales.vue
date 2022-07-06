<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-3 mobile-mb">
            <h1 class="h3 mb-0 text-gray-800">Sales</h1>
          </div>
          <div class="col-md-9 mobile-mb">
            <input type="text" class="form-control bg-light small input-readonly" placeholder="Total Sales in Current Year" aria-label="Search"
            aria-describedby="basic-addon2" style="background-color:#FFFFFF !important; height: auto;" readonly
          />
          </div>
        </div>
        
      </div>
      <div class="col-md-6" style="text-align:right">
        <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;"><i class="fas fa-plus" style="margin-right: 5px;"></i>Create Invoice</button>
        <button type="button" class="btn admin-btn mobile-mb">Sales Reconsile</button>
        <button type="button" class="btn admin-btn mobile-mb">Import</button>
        <button type="button" class="btn admin-btn mobile-mb">Export</button>
      </div>
      
      
    </div>

    <div class="tabs-cstm">
      <app-tabs :tabList="tabList">
        <template v-slot:tabPanel-1> 
          <div class="col-md-12">
            <input type="text" class="form-control bg-light border-0 small table-search" placeholder="Search by invoice,Purchase Order" style="background-color:#FFFFFF !important;"/>
            <input type="text" class="form-control bg-light border-0 small table-date" placeholder="Date Range" style="background-color:#FFFFFF !important;"/>
            <select class="tab-selector">
              <option value="Option 1" selected>Total Value</option>
              <option value="Option 1" >Option 1</option>
            </select> 
            <select class="tab-selector">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <select class="tab-selector">
              <option value="Option 1" selected>Mass Operation</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;margin-left: auto;">Advance Search</button>
          </div>
          <div class="">
            <div>
        <!-- Page Heading -->
                    <div class="mt-2 mb-4">
                        <div class="">
                            <div class="table-responsive">
                                <table class="table" id="sales-datatable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td>$170,750</td>
                                        </tr>
                                        <tr>
                                            <td>Ashton Cox</td>
                                            <td>Junior Technical Author</td>
                                            <td>San Francisco</td>
                                            <td>66</td>
                                            <td>2009/01/12</td>
                                            <td>$86,000</td>
                                        </tr>
                                        <tr>
                                            <td>Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2012/03/29</td>
                                            <td>$433,060</td>
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
        <template v-slot:tabPanel-4> <p>Content 4</p> </template>
        <template v-slot:tabPanel-5> <p>Content 5</p> </template>
      </app-tabs>
    </div>

    

    
  </div>
</template>

<script>
import AppTabs from "./AppTabs";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default {
  name: "Dashboard",
  components: {
    AppTabs,
  },
  data() {
    return {
      tabList: ["All", "Paid", "Partial Payments", "Awaiting Payment", "Credit Notes"],
    };
  },
  mounted(){
      $('#sales-datatable').DataTable();
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
#sales-datatable thead
{
  background: #3376C2;
  color: #fff;
  font-size: 13px;
}
#sales-datatable
{
  color: #000;
  font-size: 14px;
}
table.dataTable.no-footer
{
  border-bottom: 1px solid #e3e6f0;
}
</style>
