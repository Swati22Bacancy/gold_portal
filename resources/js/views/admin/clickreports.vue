<template>
    <div>
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-3">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-8 mobile-mb">
              <h1 class="h3 mb-0 text-gray-800">VAT Reports</h1>
            </div>
            
          </div>
          
        </div>
        <div class="col-md-6" style="text-align:right">
          <button type="button" class="btn admin-btn mobile-mb">Previous Return <i class="fa fa-caret-down" style="margin-left: 5px;"></i></button>
          <button type="button" class="btn admin-btn mobile-mb" >VAT Setting</button>
          <button type="button" class="btn admin-btn mobile-mb" >Export</button> 
        </div>
        
        
      </div>
  
      <div class="search-cstm">
        <div class="col-md-12 Container-date">
    
              <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important; margin-left: 1100px; margin-bottom: 15px;"><i class="fas fa-plus" style="margin-right: 5px;"></i>Create Return</button>
              
        </div>
            <div class="">
              <div>
          <!-- Page Heading -->
        <div class="mt-2 mb-4">
            <div class="">
                <div class="table-responsive">
                    <table class="table" id="clickreport-datatable" width="100%" cellspacing="0">

                <tbody>
                    <tr>
                          <td style="font-size:15px">VAT Mar 22 - May 22</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style="font-size:15px; color: #3377c2; font-weight: bold;">View</td>
                          <td style="color:red; font-size:15px; font-weight: bold;">Outstanding</td>
                    </tr>
                    <tr>
                        <td style="font-size:15px">VAT Dec 21 - Feb 22</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style="font-size:15px; color: #3377c2; font-weight: bold;">View</td>
                          <td style="color:#7ADAAA; font-size:15px; font-weight: bold;">Submitted</td>
                    </tr>
                    <tr>
                        <td style="font-size:15px">VAT Sep 21 - Nov 21</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style="font-size:15px; color: #3377c2; font-weight: bold;">View</td>
                          <td style="color:#7ADAAA; font-size:15px; font-weight: bold;">Submitted</td>
                    </tr>
                    <tr>
                        <td style="font-size:15px">VAT Jun 21 - Aug 21</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style="font-size:15px; color: #3377c2; font-weight: bold;">View</td>
                          <td style="color:#7ADAAA; font-size:15px; font-weight: bold;">Submitted</td>
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
  <<script>
    import Datepicker from 'vuejs-datepicker';
  export default {
    components: {
      Datepicker,
    },
    data() {
    return {
      issue_date:Date.now(),
      due_date:Date.now(),
    };
  },
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
  #clickreport-datatable thead
  {
    background: #3376C2;
    color: #fff;
    font-size: 13px;
  }
  .table-date::placeholder {
    color: #3377c2;
    font-size: 13px;
  }
  #clickreport-datatable
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
  #clickreport-datatable thead tr th 
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
  