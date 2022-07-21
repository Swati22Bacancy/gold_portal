<template>
<div class="">
    <div>
<!-- Page Heading -->
            <div class="mt-2 mb-4">
                <div class="">
                    <div class="table-responsive">
                        <table class="table" id="icustomer-datatable" width="100%" cellspacing="0">
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
                                    <td><router-link :to="{name : 'viewcustomer', params: {id : customer.id}}"><span class="material-symbols-outlined" style="margin-right: 10px;color: #3376C2;">visibility</span></router-link>
                                    <span class="material-symbols-outlined" style="margin-right: 5px;color: red;" data-toggle="modal" data-target="#deleteConfirmation" @click="selectrecord(customer.id)">delete</span>
                                    <span class="material-symbols-outlined" style="margin-right: 5px;color: #ccc;font-weight: 700;">more_vert</span></td>
                                </tr>
                                
                            </tbody>
                        </table>
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
  name: "IndividualCustomer",
  components: {
    
  },
  props: ['products'],
  data() {
    return {
      customers : {},
      customerid:'',
      dtRef: null,
      typecustomer:'individual'
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
          let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
            console.log(error);
        })
    },
    getProjects() {
        return axios.get("customerlist/"+this.typecustomer).then(response => {
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
      $('#icustomer-datatable').on( 'draw.dt', function (e) {
        $('#icustomer-datatable thead tr th').each(function(idx, ele) {
          var xPos = parseInt((($(ele).textWidth()))+12);
          $(ele).css('background-position-x',  xPos + 'px')
        })
      });
      // this.dtRef = $('#icustomer-datatable').DataTable({
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
                const table = $('#icustomer-datatable').DataTable({
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
#icustomer-datatable thead
{
  background: #3376C2;
  color: #fff;
  font-size: 13px;
}
.table-date::placeholder {
  color: #3377c2;
  font-size: 13px;
}
#icustomer-datatable
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
#icustomer-datatable thead tr th 
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
