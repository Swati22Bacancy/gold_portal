<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-2 mobile-mb">
            <h1 class="h3 mb-0 text-gray-800">Purchase</h1>
          </div>
          <div class="col-md-8 mobile-mb">
            <input type="text" class="form-control bg-light small input-readonly" placeholder="Total Purchase in Current Year" aria-label="Search"
            aria-describedby="basic-addon2" style="background-color:#FFFFFF !important; height: 40px;font-size: 13px;" readonly
          />
          </div>
        </div>
        
      </div>
      <div class="col-md-6" style="text-align:right">
        <router-link to="/createpurchase"><button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;"><i class="fas fa-plus" style="margin-right: 5px;"></i>Create Purchase</button></router-link>
        <button type="button" class="btn admin-btn mobile-mb">Purchase Reconsile</button>
        <button type="button" class="btn admin-btn mobile-mb">Import</button>
        <button type="button" class="btn admin-btn mobile-mb">Export</button>
      </div>
      
      
    </div>

    <div class="tabs-cstm">
      <app-tabs :tabList="tabList">
        <template v-slot:tabPanel-1> 
          <div class="col-md-12 Container-date">
            <input type="text" class="form-control bg-light border-0 small table-search searchbox" placeholder="Search by invoice,Purchase Order" style="background-color:#FFFFFF !important;margin-right:5px;"/>
            <div class="Container-date">
           <p>Date Range</p> <Datepicker v-model="issue_date1" class="date-cont"></Datepicker>
            <Datepicker v-model="due_date1" class="date-cont"></Datepicker></div>
            <select class="tab-selector" style="width:100px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Total Value</option>
              <option value="Option 1" >Option 1</option>
            </select> 
            <select class="tab-selector" style="width:100px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <select class="tab-selector" style="width:110px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Mass Operation</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;margin-left: auto;">Advance Search</button>
          </div>
          <div class="">
            <div>
              <allpurchases> </allpurchases> 
            </div>
          </div>
        </template>
        <template v-slot:tabPanel-2>
          <div class="col-md-12 Container-date">
            <input type="text" class="form-control bg-light border-0 small table-search searchbox" placeholder="Search by invoice,Purchase Order" style="background-color:#FFFFFF !important;margin-right:5px;"/>
            <div class="Container-date">
           <p>Date Range</p> <Datepicker v-model="issue_date" class="date-cont"></Datepicker>
            <Datepicker v-model="due_date" class="date-cont"></Datepicker></div>
            <select class="tab-selector" style="width:100px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Total Value</option>
              <option value="Option 1" >Option 1</option>
            </select> 
            <select class="tab-selector" style="width:100px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <select class="tab-selector" style="width:110px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Mass Operation</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;margin-left: auto;">Advance Search</button>
          </div>
          <div class="">
            <div>
              <pendingpurchases> </pendingpurchases> 
            </div>
          </div>
        </template>
        <template v-slot:tabPanel-3> 
          <div class="col-md-12 Container-date">
            <input type="text" class="form-control bg-light border-0 small table-search searchbox" placeholder="Search by invoice,Purchase Order" style="background-color:#FFFFFF !important;margin-right:5px;"/>
            <div class="Container-date">
           <p>Date Range</p> <Datepicker v-model="issue_date" class="date-cont"></Datepicker>
            <Datepicker v-model="due_date" class="date-cont"></Datepicker></div>
            <select class="tab-selector" style="width:100px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Total Value</option>
              <option value="Option 1" >Option 1</option>
            </select> 
            <select class="tab-selector" style="width:100px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <select class="tab-selector" style="width:110px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Mass Operation</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;margin-left: auto;">Advance Search</button>
          </div>
          <div class="">
            <div>
              <partiallypurchases> </partiallypurchases> 
            </div>
          </div>  
        </template>
        <template v-slot:tabPanel-4>
          <div class="col-md-12 Container-date">
            <input type="text" class="form-control bg-light border-0 small table-search searchbox" placeholder="Search by invoice,Purchase Order" style="background-color:#FFFFFF !important;margin-right:5px;"/>
            <div class="Container-date">
           <p>Date Range</p> <Datepicker v-model="issue_date" class="date-cont"></Datepicker>
            <Datepicker v-model="due_date" class="date-cont"></Datepicker></div>
            <select class="tab-selector" style="width:100px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Total Value</option>
              <option value="Option 1" >Option 1</option>
            </select> 
            <select class="tab-selector" style="width:100px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <select class="tab-selector" style="width:110px; margin-right:5px; margin-left:5px">
              <option value="Option 1" selected>Mass Operation</option>
              <option value="Option 1">Option 1</option>
            </select> 
            <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;margin-left: auto;">Advance Search</button>
          </div>
          <div class="">
            <div>
              <paidpurchases> </paidpurchases> 
            </div>
          </div>
        </template>
      </app-tabs>
    </div>

    

    
  </div>
</template>

<script>
import AppTabs from "./AppTabs";
import allpurchases from "./allpurchases";
import pendingpurchases from "./pendingpurchases";
import partiallypurchases from "./partiallypurchases";
import paidpurchases from "./paidpurchases";
import Datepicker from 'vuejs-datepicker';
export default {
  name: "Purchases",
  components: {
    AppTabs,
    allpurchases,
    pendingpurchases,
    partiallypurchases,
    paidpurchases,
    Datepicker
  },
  data() {
    return {
      issue_date:Date.now(),
      due_date:Date.now(),
      issue_date1:Date.now(),
      due_date1:Date.now(),
      tabList: ["All", "UnPaid", "Partial Payments", "Paid"],
    };
  },
  mounted(){
    
  },
  methods:{
    
  }
  
};
</script>
<style scoped>
  .Container-date{
    display: flex;
  
  }
  .date-cont{
    margin: 0px;
    width:200;
    
  }
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
.table-date::placeholder {
  color: #3377c2;
  font-size: 13px;
}
#sales-datatable
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
table.dataTable thead .sorting, table.dataTable thead .sorting_asc, table.dataTable thead .sorting_desc, table.dataTable thead .sorting_asc_disabled, table.dataTable thead .sorting_desc_disabled
{
  background-size: 13px 13px;
  background-position: 0px 19px;
}
.dataTables_wrapper .dataTables_paginate .paginate_button
{
  padding: 0.3em 0.8em;
}

table.dataTable thead th
{
  padding: 10px 10px !important;
}
#sales-datatable thead tr th 
{
  font-weight: 100 !important;
}
</style>
