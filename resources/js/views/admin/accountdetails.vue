<template>
    <div>
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-3">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-8 mobile-mb">
              <h1 class="h3 mb-0 text-gray-800">{{accdetails['title']}}</h1>
            </div>
            
          </div>
          
        </div>
        <div class="col-md-6" style="text-align:right">
          <button type="button" class="btn admin-btn mobile-mb"><i class="fas fa-plus" style="margin-right: 5px;"></i>Create Bank Rule</button>
          <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;">Reconsile Statement</button>
          <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;">Synchronise</button>
          
        </div>
        
        
      </div>
  
      <div class="search-cstm">
        <div class="col-md-12 Container-date">
              <input type="text" class="form-control bg-light border-0 small table-search searchbox" placeholder="Search" style="background-color:#FFFFFF !important;margin-right:5px;"/>
              
              <div class="Container-date">
           <p>Date Range</p> <Datepicker v-model="issue_date" class="date-cont"></Datepicker>
            <Datepicker v-model="due_date" class="date-cont"></Datepicker></div>
              <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;margin-left: 60;width: 100px;">Search</button>
              <button type="button" class="btn admin-btn mobile-mb" style="margin-left:60;">Advance Search</button>
            </div>
            <div class="">
              <div>
          <!-- Page Heading -->
        <div class="mt-2 mb-4">
            <div class="">
                <div class="table-responsive">
                    <table class="table" id="accountdetails-datatable" width="100%" cellspacing="0">
                       <thead>
                        <tr>
                            <th><input type="checkbox" class="custom-check-input"></th>
                            <th>Date</th>
                            <th>payer/payee</th>
                            <th>Ref</th>
                            <th>Type</th>
                            <th>In( <i v-if="accdetails['currency']=='GBP'" class="fa fa-pound-sign" style="font-size: 9px;"></i> <i v-if="accdetails['currency']=='USD'" class="fa fa-dollar-sign" style="font-size: 9px;"></i> )</th>
                            <th>Out( <i v-if="accdetails['currency']=='GBP'" class="fa fa-pound-sign" style="font-size: 9px;"></i> <i v-if="accdetails['currency']=='USD'" class="fa fa-dollar-sign" style="font-size: 9px;"></i> )</th>
                            <th>Balance</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr v-for="detail in details" :key="detail.id">
                          <td><input type="checkbox" class="custom-check-input"></td>
                          <td>{{dateFormateChanger(detail.bookingDate)}}</td>
                          <td>{{detail.payee_name}}</td>
                          <td></td>
                          <td>{{detail.proprietaryBankTransactionCode}}</td>
                          <td><span v-if="detail.remark=='inamount'">{{detail.transactionAmount}}</span></td>
                          <td style="color:red;"><span v-if="detail.remark=='outamount'">{{detail.transactionAmount}}</span></td>
                          <td>{{accdetails['balance']}}</td>
                          <td><button type="button" class="btn-container" style="background-color: #7ADAAA !important;margin-left: auto;width: 150px;">Assigned INV-22323</button>
                            <i class="fas fa-pencil-alt" style="margin-left:15px; font-size: 15px; color:green"></i></td>
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
    import Datepicker from 'vuejs-datepicker';
    import moment from 'moment';
    import "datatables.net-dt/js/dataTables.dataTables"
    import "datatables.net-dt/css/jquery.dataTables.min.css"
    export default {
      name: "AccountDetails",
      components: {
        Datepicker,
        moment
      },
      props: ['details'],
      data() {
        return {
          issue_date:Date.now(),
          due_date:Date.now(),
          accdetails:[]
        };
      },
      mounted()
      {
          this.getAccountDetails();
          this.getAccountTransactions();
          $.fn.textWidth = function(){
          var html_org = $(this).html();
          var html_calc = '<span>' + html_org + '</span>';
          $(this).html(html_calc);
          var width = $(this).find('span:first').width();
          $(this).html(html_org);
          return width;
        };
        $('#accountdetails-datatable').on( 'draw.dt', function (e) {
          $('#accountdetails-datatable thead tr th').each(function(idx, ele) {
            var xPos = parseInt((($(ele).textWidth()))+12);
            $(ele).css('background-position-x',  xPos + 'px')
          })
        });
        const unwatch = this.$watch('details', (details) => {
          if (!Array.isArray(details) || details.length === 0) {
              return;
          }
          unwatch();
          this.$nextTick(() => {
                const table = $('#accountdetails-datatable').DataTable({
                "bLengthChange": false,
                "columnDefs": [
                  { "targets": [0], "searchable": false, "orderable": false }
                ]
              });
              $(".searchbox").keyup(function() {
                table.search(this.value).draw();
              }); 
              this.$once('hook:beforeDestroy', function () {
                  table.destroy();
              });
              
          }, {immediate: true});
        });
      },
      methods:{
        getAccountDetails() {
            return axios.get("/account_details/" + this.$route.params.id+"/"+this.$route.params.currencyid).then(response => {
                this.accdetails = response.data;
                //this.transactiondetails = response.data.transactions;
                
            });
        },
        getAccountTransactions() {
            return axios.get("/account_transactions/" + this.$route.params.id+"/"+this.$route.params.currencyid).then(response => {
                this.details = response.data;
                //this.transactiondetails = response.data.transactions;
                
            });
        },
        dateFormateChanger(d){
          return moment(d,'YYYY-MM-DD').format('DD MMM YYYY')
        },
      }
    }
  </script>
 
    
  <style scoped>
     .Container-date{
    display: flex;
  
  }
  .date-cont{
    margin: 0px;
    width:200;
    
  }
    .btn-container{
     background-color: #EDF2F6 !important;
    width: auto;
    font-size: 13px  !important;
    color: #000;
    border-radius: 5px;
    height: 30px;
    border: 1px solid #d1d3e2;
    margin-left: 10px;
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
  #accountdetails-datatable thead
  {
    background: #3376C2;
    color: #fff;
    font-size: 13px;
  }
  .table-date::placeholder {
    color: #3377c2;
    font-size: 13px;
  }
  #accountdetails-datatable
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
  #accountdetails-datatable thead tr th 
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
  