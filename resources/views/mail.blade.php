<!DOCTYPE html>
<html>
<head>
    <title>Laravel 8 Generate PDF And Attach To Email Example - NiceSnippets.com</title>
</head>
<style>
.pdf_section * {
    margin: 0;
    padding: 0;
}
.container1 {
    padding: 0px 6%;
    margin-top: 0px;
}

.col-sm {
    padding: 0 10px;
}
    .col-sm {
    padding: 0 10px;
}
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h2 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 12px;
      }

    
.cont2 p{
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12px;
        margin: 0px;
      }

      .s1 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 22px;
      }
      .s3 {
        color: black;
        font-family: Calibri;
        font-style: normal;
        font-weight: normal;
        font-size: 9px;
      }
      .s4,.s5 {
        color: black;
        font-family: Calibri;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9px;
      }
      th, td{
        border-bottom:1px solid black;
      }
</style>
<body>

<div class="pdf_section" id="pdf_section">
        <div style="padding: 0px 2%;">
            <div class="container1" style="padding: 30px 6%;">
            <div class="row">
            <div class="col-8"  style="padding-top:55px;">
            <img width="200" height="46"
            src="data:image/jpg;base64,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"/>
        </div>
        <div class="col-4 s3" style="font-size:9px; text-align:left; position: absolute; margin-top:-110px; padding-left: 470px;">
        <h2  style="padding-top: 45px; text-align: left; font-size:11px;">
        {{$companydata['company_name']}} <br>{{$companydata['address1']}}<br> {{$companydata['address2']}}</h2>
        <h2 style="padding:0; text-align: left; font-size:11px;">
        {{$companydata['postcode']}}
        </h2>
        <h2 style=" text-align: left; font-size:11px;">
        Vat No: {{$companydata['vat_number']}}
        </h2>
        <h2 style=" text-align: left; font-size:11px;">
        t: {{$companydata['contact_mobile']}}
        </h2>
        <p style="text-align: left; font-size:11px;">
        <a class="a" target="_blank">e: </a>
        <a class="a" target="_blank">{{$companydata['contact_email']}}</a>
        </p>
        </div>    
    </div>
        </div>
        <!-- ---------------------------------------- -->
        <div class="container1">
        <div class="row">
        <div class="col-8 cont2" style="padding-left:30px; float:left; margin-top:50px">
        <p style="padding-left: 12px; text-align: left; font-size:11px;">
            {{ $salesdata['firstname'] }} {{ $salesdata['lastname'] }}
        </p>
        <p style="padding-left: 12px; text-align: left; font-size:11px;">
            {{ $salesdata['billing_address'] }}
        </p>
     </div>
  <div class="col-4" style="padding-left: 400px; float:right; margin-top:50px">
        <p class="s1" style=" margin-right: 10px; text-align: left">{{ $invoicetitle }}</p>
        <br>
        <div style="font-size:10px;  text-align: left;">
        <h2
        style=" text-align: left; font-size:11px;">
        Invoice Date
        </h2>
        <p style=" text-align: left; font-size:11px;">
        <span style="text-align: left; font-size:11px;">{{ $salesdata['issue_date'] }}</span></p>
        
        <h2 style=" text-align: left; font-size:11px;">
        Invoice Number
        </h2>
        <p style=" text-align: left; font-size:11px; ">
            <span style="text-align: left; font-size:11px;">{{ $salesdata['invoiceno']  }}</span>
        </p>
        <h2 style=" text-align: left; font-size:11px;">Account
        </h2>
        <p style=" text-align: left; font-size:11px;">
        Online OrderVAT Number140187339
        </p><br><br>
 </div>
                </div>
            </div>
        </div><br><br>
        <!-- ----------------------------------------- -->
        <div class="container1" style="font-size:10px; margin-top:150px">
        <table style="width:100%">
            <thead>
            <tr>
                <th style="width:350px">Description</th>
                <th style="width: 100px;">Unit Price</th>
                <th style="width: 100px;">VAT(%)</th>
                <th>Amount GBP</th>
            </tr>
            </thead>
            <tbody style="width:100%;text-align: center;">
                @foreach ($salesdata['salesitem'] as $sale)
                <tr>
                    <td>{{ $sale['quantity'] }} x {{ $sale['typename'] }} {{ $sale['productname'] }} ({{ $sale['weight'] }}g) </td>
                    <td>{{ $sale['unitprice'] }}</td>
                    <td>{{ $sale['vat'] }}</td>
                    <td>{{ $sale['invoice_amount'] }}</td>
                </tr>
                @endforeach
                <br><br>
                <tr>
                    <td style="border:none"></td>
                    <td ></td>
                    <td>Total No VAT</td>
                    <td>{{ $salesdata['vattotal'] }}</td>
                </tr><br><br>
                <tr>
                    <td style="border:none"></td>
                    <td style="border:none"></td>
                    <td style="border:none"><strong>Amount Due GBP</strong></td>
                    <td style="border:none">{{ $salesdata['totalamount'] }}</td>
                </tr><br>
            </tbody>
        </table>
    </div>
        <!-- ------------------------ -->
        <div class="container1 s3">
        <p style="text-align: justify;font-size: 12px;">Payment Terms:</p>
        <p style=" text-align: justify; font-size: 12px;">
        Goods supplied by us remain the property of Gold Warehouse Limited until
        paid for in full. Interest will be charged at 4% per month. The person
        signing for the goods is personally responsible for the payment of this
        invoice and for any loss or damage however caused.
        </p><br><br><br><br>
        @if(!empty($signaturedata['id'])) 
        <p style=" text-align: left; font-size: 11px;">
        <img src="' . url({{$signaturedata['signature_filename']}}) . '" style="height:100px;"/>
        <br>
        <span class="ml-3">
        Signed By: <span style="font-weight:600;">{{$signaturedata['signed_by']}}</span>
        </span><br>
        </p>
        @endif
        </div>
        <div class="container1 s3" style="font-size:11px">
        <p style="text-align: left;">
        Gold Bank is a trading name for Gold Warehouse Ltd<br> Cheques can be made
        payable to Gold Warehouse Limited.<br> Please make BACS/CHAPS/FASTER payments
        to:<br>Wise Bank<br> Sort code: <b>23-14-70</b><br>Account No: <b>24730434</b>
        </p><br>
        <p style="padding-left: 6px; text-align: left">
        The Output Tax Of £ <span style="font-weight:600;"> </span> On
        Supply Of This Gold Is To Be Accounted For By The Buyer To HMRC.
        </p><br><br><br><br><br><br><br><br>
        </div>
    </div> 
    <div>
        <p class="s4" style="padding-left: 49px; text-align: center">
        Goldbank T/AS Gold Warehouse Limited, 215 The Broadway, Southall,
        Middlesex, UB1 1NB. Registered in England Number 08101794.<br>
        <a href="mailto:accounts@gold-bank.co.uk" class="s5" target="_blank">
            VAT Registration Number 140187339 Telephone:0203 500 1111 Email:
            accounts@gold-bank.co.uk</a></p>
    
    </div>
  </div>
</body>
</html>