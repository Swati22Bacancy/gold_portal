<template>
  <div>
    <div class="mt-2 mb-4">
      <div class="">
          <div class="table-responsive">
              <table class="table" id="deliverynotes-datatable" width="100%" cellspacing="0">
                  <thead>
                      <tr>
                          <th><input type="checkbox" class="custom-check-input"></th>
                          <th>Date</th>
                          <th>No</th>
                          <th>Customer</th>
                          <th>Item Type</th>
                          <th>Sub Total ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                          <th>Vat ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                          <th>Total ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-on:click="gotodeliverynotes(deliverynote.id)" style="cursor:pointer;" v-for="deliverynote in deliverynotes" :key="deliverynote.id">
                          <td><input type="checkbox" class="custom-check-input"></td>
                          <td>{{dateFormateChanger(deliverynote.issue_date)}}</td>
                          <td>{{deliverynote.invoiceno}}</td>
                          <td style="color:#3376C2">{{deliverynote.firstname}} {{deliverynote.lastname}}</td>
                          <td>{{deliverynote.typename}}</td>
                          <td>{{deliverynote.subtotal}}</td>
                          <td>{{deliverynote.vattotal}}</td>
                          <td><span :class="deliverynote.price_status=='mismatch' ? 'red-color' : 'grey-color'">{{deliverynote.totalamount}}</span></td>
                       </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
    
  </div>
</template>

<script>
import moment from 'moment';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default {
  name: "AllDeliveyNotes",
  components: {
    moment,
  },
  props: ['deliverynotes'],
  mounted(){
    this.getDeliverynotes();
    $.fn.textWidth = function(){
      var html_org = $(this).html();
      var html_calc = '<span>' + html_org + '</span>';
      $(this).html(html_calc);
      var width = $(this).find('span:first').width();
      $(this).html(html_org);
      return width;
    };
    $('#deliverynotes-datatable').on( 'draw.dt', function (e) {
      $('#deliverynotes-datatable thead tr th').each(function(idx, ele) {
        var xPos = parseInt((($(ele).textWidth()))+12);
        $(ele).css('background-position-x',  xPos + 'px')
      })
    });
    const unwatch = this.$watch('deliverynotes', (deliverynotes) => {
      // wait deliverynotes prop to be filled
      if (!Array.isArray(deliverynotes) || deliverynotes.length === 0) {
          return;
      }

      // stop watching for deliverynotes change
      unwatch();

      // wait for vue to populate DOM
      this.$nextTick(() => {

          // initialize DataTable on rendered table
          const table = $('#deliverynotes-datatable').DataTable({
            //"bFilter": false,
            "bLengthChange": false,
            // pageLength: 5,
            // lengthMenu: [ 5, 10, 20, 50, 100, 200, 500],
            "columnDefs": [
              { "targets": [0,9], "searchable": false, "orderable": false }
            ]
          });
          $(".searchbox").keyup(function() {
            table.search(this.value).draw();
          }); 
          // register hook so when this component is
          // unmounted/removed, DataTable is removed properly
          this.$once('hook:beforeDestroy', function () {
              table.destroy();
          });
          
      }, {immediate: true});
  });
    $('#deliverynotes-datatable').on( 'draw.dt', function (e) {
      $('#deliverynotes-datatable thead tr th').each(function(idx, ele) {
        var xPos = parseInt((($(ele).textWidth()))+12);
        $(ele).css('background-position-x',  xPos + 'px')
      })
    });
    
  },
  methods:{
    dateFormateChanger(d){
      return moment(d,'YYYY-MM-DD').format('DD MMM YYYY')
     },
    gotodeliverynotes(id)
    {
      this.$router.push("/view_deliverynote/"+id);
    },
    getDeliverynotes() {
        return axios.get("deliverynotes_list/").then(response => {
            this.deliverynotes = response.data;
        });
    },
  },
 
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
#deliverynotes-datatable thead
{
  background: #3376C2;
  color: #fff;
  font-size: 13px;
}
.table-date::placeholder {
  color: #3377c2;
  font-size: 13px;
}
#deliverynotes-datatable
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
#deliverynotes-datatable thead tr th 
{
  font-weight: 100 !important;
}
.red-color
{
 color:red !important  
}
</style>
