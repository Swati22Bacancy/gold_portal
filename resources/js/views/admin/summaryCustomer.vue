<template>
    <div class="head-style">
        <div>
        <div>
          <p style="color:#3377c2">300 Invoieses(<i class="fa fa-pound-sign" style="font-size: 15px;"></i> 1,232,500.00)</p>
        </div>
        <div  class="heading-title">
          <P style="color:#C94C4C">30 Invoices Awaiting Payments</P>
          <h4 style="color:#C94C4C; margin-left: 800px; font-weight: bold;">- <i class="fa fa-pound-sign" style="font-size: 23px;"></i> 24,552.00</h4>
        </div>
        <div>
            <p style="font-size:12px;">They usually pay in 23 Days  <span style="color:#3377c2; margin-left: 15px;">(view Recent invoice)</span> </p>
        </div>
    </div>
      <div class="mt-2 mb-4">
        <div class="">
            <div class="table-responsive">
                <table class="table" id="paidsales-datatable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="custom-check-input"></th>
                            <th>Date</th>
                            <th>No</th>
                            <th>Customer</th>
                            <th>Item Type</th>
                            <th>Payment Method</th>
                            <th>Sub Total ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                            <th>Vat ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                            <th>Total ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="cursor:pointer;">
                            <td><input type="checkbox" class="custom-check-input"></td>
                            <td>16/5/2021</td>
                            <td>INV- 2001</td>
                            <td>Robert Malasakalwi</td>
                            <td>Jewellery(2),<br>Delivery(1)</td>
                            <td>Credit Card</td>
                            <td>8000</td>
                            <td>640</td>
                            <td>8640</td>
                            <td><button type="button" class="btn table-btn" style="margin-left: auto;width: 68px;">UnPaid</button></td>
                        </tr>
                        <tr style="cursor:pointer;">
                            <td><input type="checkbox" class="custom-check-input"></td>
                            <td>16/5/2021</td>
                            <td>INV- 1999</td>
                            <td>Robert Malasakalwi</td>
                            <td>Jewellery(2),<br> Delivery(1)</td>
                            <td>Credit Card</td>
                            <td>8000</td>
                            <td>640</td>
                            <td>8640</td>
                            <td><button type="button" class="btn table-btn" style="margin-left: auto;width: 68px;">UnPaid</button></td>
                        </tr>
                        <tr style="cursor:pointer;">
                            <td><input type="checkbox" class="custom-check-input"></td>
                            <td>16/5/2021</td>
                            <td>INV- 1998</td>
                            <td>Robert Malasakalwi</td>
                            <td>FB / Bullion(2)</td>
                            <td>Credit Card</td>
                            <td>8000</td>
                            <td>640</td>
                            <td>8640</td>
                            <td><button type="button" class="btn table-btn-green" style="margin-left: auto;width: 68px; background-color: green;">Paid</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
      
<div>
    <div>
          <p style="color:#3377c2">30 Purchases(<i class="fa fa-pound-sign" style="font-size: 15px;"></i> 1,232,500.00)</p>
        </div>
        <div  class="heading-title">
          <P style="color:#C94C4C">0 Awaiting Payments</P>
          <h4 style="color:#C94C4C; margin-left: 900px; font-weight: bold;">- <i class="fa fa-pound-sign" style="font-size: 23px;"></i> 0.00</h4>
        </div>
</div>


    <div class="mt-2 mb-4">
        <div class="">
            <div class="table-responsive">
                <table class="table" id="paidsales-datatable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="custom-check-input"></th>
                            <th>Date</th>
                            <th>No</th>
                            <th>Supplier Name</th>
                            <th>Item Type</th>
                            <th>Payment Method</th>
                            <th>Sub Total ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                            <th>Vat ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                            <th>Total ( <i class="fa fa-pound-sign" style="font-size: 9px;"></i> )</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="cursor:pointer;">
                            <td><input type="checkbox" class="custom-check-input"></td>
                            <td>16/5/2021</td>
                            <td>2001</td>
                            <td>Robert Malasakalwi</td>
                            <td>Jewellery(2),<br>Delivery(1)</td>
                            <td>Bank Transfer</td>
                            <td>8000</td>
                            <td>640</td>
                            <td>8640</td>
                            <td><button type="button" class="btn table-btn-green" style="margin-left: auto;width: 68px;">Paid</button></td>
                        </tr>
                        <tr style="cursor:pointer;">
                            <td><input type="checkbox" class="custom-check-input"></td>
                            <td>16/5/2021</td>
                            <td>1999</td>
                            <td>ABC Jewellery</td>
                            <td>Jewellery(2),<br> Delivery(1)</td>
                            <td>Bank Transfer</td>
                            <td>8000</td>
                            <td>640</td>
                            <td>8640</td>
                            <td><button type="button" class="btn table-btn-green" style="margin-left: auto;width: 68px;">Paid</button></td>
                        </tr>
                        <tr style="cursor:pointer;">
                            <td><input type="checkbox" class="custom-check-input"></td>
                            <td>16/5/2021</td>
                            <td>1998</td>
                            <td>Robert Malasakalwi</td>
                            <td>Jewellery(2),<br>Delivery(1)</td>
                            <td>Bank Transfer</td>
                            <td>8000</td>
                            <td>640</td>
                            <td>8640</td>
                            <td><button type="button" class="btn table-btn-green" style="margin-left: auto;width: 68px; background-color: green;">Paid</button></td>
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
    .head-style{
        margin-left: 30px;
    }
    .heading-title{
       
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