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
        <button type="button" class="btn admin-btn mobile-mb">Print</button>
        <button type="button" class="btn admin-btn mobile-mb">Export</button>
      </div>
      
      
    </div>

    <div class="tabs-cstm">
      <customer-tabs :tabList="tabList">
        <template v-slot:tabPanel-1> 
          <div class="col-md-12">
            <input type="text" class="form-control bg-light border-0 small table-search searchbox" placeholder="Search Customers" style="background-color:#FFFFFF !important;"/>
            <select class="tab-selector">
              <option value="Option 1" selected>Group</option>
              <!-- <option v-for="group in groups" :key="group.id" :value="group.id">{{group.name}}</option> -->
            </select>
            <select class="tab-selector">
              <option value="Option 1" selected>Type</option>
              <option value="business" >Business</option>
              <option value="individual" >Individual</option>
            </select>
            <select class="tab-selector">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
          </div>
          <allcustomers> </allcustomers> 
        </template>
        <template v-slot:tabPanel-2> 
          <div class="col-md-12">
            <input type="text" class="form-control bg-light border-0 small table-search searchbox" placeholder="Search Contacts" style="background-color:#FFFFFF !important;"/>
            <select class="tab-selector">
              <option value="Option 1" selected>Group</option>
              <option value="Option 1" >Option</option>
            </select>
            <select class="tab-selector">
              <option value="Option 1" selected>Type</option>
              <option value="business" >Business</option>
              <option value="individual" >Individual</option>
            </select> 
            <select class="tab-selector">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
          </div>
          <businesscustomers> </businesscustomers> 
        </template>
        <template v-slot:tabPanel-3> 
          <div class="col-md-12">
            <input type="text" class="form-control bg-light border-0 small table-search searchbox" placeholder="Search Customers" style="background-color:#FFFFFF !important;"/>
            <select class="tab-selector">
              <option value="Option 1" selected>Group</option>
              <option value="Option 1" >Option</option>
            </select>
            <select class="tab-selector">
              <option value="Option 1" selected>Type</option>
              <option value="business" >Business</option>
              <option value="individual" >Individual</option>
            </select> 
            <select class="tab-selector">
              <option value="Option 1" selected>Show Entries</option>
              <option value="Option 1">Option 1</option>
            </select> 
          </div>
          <individualcustomers> </individualcustomers> 
        </template>
      </customer-tabs>
    </div>
    
  </div>
</template>

<script>
import CustomerTabs from "./CustomerTabs";
import allcustomers from "./allcustomers";
import businesscustomers from "./businesscustomers";
import individualcustomers from "./individualcustomers";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default {
  name: "Customer",
  components: {
    CustomerTabs,
    allcustomers,
    businesscustomers,
    individualcustomers
  },
  data() {
    return {
      tabList: ["All", "Business", "Individual"],
      customers : {},
      customerid:'',
      groups:{}
    };
  },
  created() {
      //this.loadCustomers();
  },
  methods:
  {
    getGroups() {
        return axios.get("grouplist").then(response => {
            this.groups = response.data;
        });
    },
  },
  mounted(){
    this.getGroups();
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
.table-date::placeholder {
  color: #3377c2;
  font-size: 13px;
}
</style>
