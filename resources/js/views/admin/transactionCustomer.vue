<template>
    <div>
        <div class="head-title">
            <p style="margin-left:30px; color:#444400; font-size: 20px; font-weight: bold;">Balance Due:</p>
            <h3 style="color:#C94C4C; margin-left: 15px; font-weight: bold;"> -<i class="fa fa-pound-sign" style="font-size: 23px;"></i> 7,000.00</h3>
        </div>
    <div class="mt-2 mb-4">
      <div class="">
          <div class="table-responsive">
              <table class="table" id="paidsales-datatable" width="100%" cellspacing="0">
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
                      <tr style="cursor:pointer;">
                          <td><input type="checkbox" class="custom-check-input"></td>
                          <td>16/5/2021</td>
                          <td>Invoice INV-2001(2)  <button type="button" class="btn table-btn" style="margin-left: auto;width: 68px;">UnPaid</button></td>
                          <td>8,023.5</td>
                          <td>1023</td>
                          <td style="color:red;">7000</td>
                        
                      </tr>
                      <tr style="cursor:pointer;">
                          <td><input type="checkbox" class="custom-check-input"></td>
                          <td>16/5/2021</td>
                          <td>Invoice INV-200(2)  <button type="button" class="btn table-btn" style="margin-left: auto;width: 68px;">UnPaid</button></td>
                          <td>8,023.5</td>
                        <td></td>
                          <td style="color:red;">8000</td>
                        
                      </tr>
                      <tr style="cursor:pointer;">
                          <td><input type="checkbox" class="custom-check-input"></td>
                          <td>16/5/2021</td>
                          <td>Payment Received by Bank Transfer Ref inv- 1999</td>
                          <td></td>
                          <td>1023</td>
                          <td style="color:red;">7000</td>
                        
                      </tr>
                      <tr style="cursor:pointer;">
                          <td><input type="checkbox" class="custom-check-input"></td>
                          <td>16/5/2021</td>
                          <td>Purchase Order PO- 2323(2)  <button type="button" class="btn table-btn" style="margin-left: auto;width: 68px;">UnPaid</button></td>
                          <td>8,023.5</td>
                         <td></td>
                          <td style="color:brown;">8023</td>
                        
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
    
  </div>
</template>

<script>

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
    #paidsales-datatable thead
    {
      background: #3376C2;
      color: #fff;
      font-size: 13px;
    }
    .table-date::placeholder {
      color: #3377c2;
      font-size: 13px;
    }
    #paidsales-datatable
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
    #paidsales-datatable thead tr th 
    {
      font-weight: 100 !important;
    }
    </style>