<template>
    <div>
        <!-- <div class="head-title">
            <p style="margin-left:30px; color:#444400; font-size: 20px; font-weight: bold;">Balance Due:</p>
            <h3 style="color:#C94C4C; margin-left: 15px; font-weight: bold;"> -<i class="fa fa-pound-sign" style="font-size: 23px;"></i> 7,000.00</h3>
        </div> -->
    <div class="mt-2 mb-4">
      <div class="">
          <div class="table-responsive">
              <table class="table" id="transaction-datatable" width="100%" cellspacing="0">
                  <thead>
                      <tr>
                          <th><input type="checkbox" class="custom-check-input"></th>
                          <th>Date</th>
                          <th>Activity</th>
                          <th>Invoice / purchase Amount( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                          <th>Payment( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                          <th>Balance ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr style="cursor:pointer;" v-for="transaction in transactions" :key="transaction.id">
                          <td><input type="checkbox" class="custom-check-input"></td>
                          <td>{{dateFormateChanger(transaction.created_at)}}</td>
                          <td>{{transaction.activity}}</td>
                          <td>{{transaction.amount}}</td>
                          <td>{{transaction.payment}}</td>
                          <td style="color:red;">{{transaction.amount_due}}</td>
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
  name: "CustomerTransactions",
  components: {
    moment,
  },
  props: ['transactions'],
  mounted(){
    this.getTransactions();
    $.fn.textWidth = function(){
      var html_org = $(this).html();
      var html_calc = '<span>' + html_org + '</span>';
      $(this).html(html_calc);
      var width = $(this).find('span:first').width();
      $(this).html(html_org);
      return width;
    };
    
    const unwatch = this.$watch('transactions', (transactions) => {
      // wait transactions prop to be filled
      if (!Array.isArray(transactions) || transactions.length === 0) {
          return;
      }

      // stop watching for transactions change
      unwatch();

      // wait for vue to populate DOM
      this.$nextTick(() => {

          // initialize DataTable on rendered table
          const table = $('#transaction-datatable').DataTable({
            //"bFilter": false,
            "bLengthChange": false,
            // pageLength: 5,
            // lengthMenu: [ 5, 10, 20, 50, 100, 200, 500],
            "columnDefs": [
              { "targets": [0], "searchable": false, "orderable": false }
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
    $('#transaction-datatable').on( 'draw.dt', function (e) {
      $('#transaction-datatable thead tr th').each(function(idx, ele) {
        var xPos = parseInt((($(ele).textWidth()))+12);
        $(ele).css('background-position-x',  xPos + 'px')
      })
    });
  },
  methods:{
    getTransactions() {
        return axios.get("get_customer_transactions/"+this.$route.params.id).then(response => {
            this.transactions = response.data;
            console.log(this.transactions);
        });
    },
    dateFormateChanger(d){
      return moment(d,'YYYY-MM-DD').format('DD MMM YYYY')
     },
  }
}
</script>


<style scoped>
 .head-title{
    margin-top: 20px;
    display: flex;
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
    #transaction-datatable thead
    {
      background: #3376C2;
      color: #fff;
      font-size: 13px;
    }
    .table-date::placeholder {
      color: #3377c2;
      font-size: 13px;
    }
    #transaction-datatable
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
    #transaction-datatable thead tr th 
    {
      font-weight: 100 !important;
    }
    </style>