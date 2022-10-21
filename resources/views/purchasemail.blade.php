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
.pdf_section h2 {
        color: black;
        font-family: "Calibri, sans-serif";
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 12px;
      }

    
.cont2 p{
        color: black;
        font-family: "Calibri, sans-serif";
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
      table {
        border-collapse: collapse;
    }
    /* tr {
  border-bottom: 1pt solid black;
} */
      .flex-parent {
            display: inline-block;
            /* justify-content: center;
            align-items: center; */
            width:100%;
        }

        .box {
            background-color: white;
            height: 80px;
            padding-bottom: 10px;
            /* width: 330px; */
            border: 0.5px solid;
            width: 50%;
            float: left;
        }

        .box_size {
            margin-top: 10px;
            font-size: 12px;
        }
</style>
<body>

<div class="pdf_section" id="pdf_section">
        <div style="padding: 0px 2%;">
            <div class="container1" style="padding: 30px 6%;">
            <div class="row">
            <div class="col-8"  style="padding-top:55px;">
            <img src="{{ public_path('images/logo.png') }}" width="230" height="40">
            
        </div>
        <div class="col-4 s3" style="font-size:9px; text-align:left; position: absolute; margin-top:-110px; padding-left: 445px;">
            <h2  style="padding-top: 45px; text-align: left; font-size:11px;">
            {{$companydata['company_name']}} <br>{{$companydata['address1']}}<br> {{$companydata['address2']}}</h2>
            <h2 style="padding:0; text-align: left; font-size:11px;">
            {{$companydata['postcode']}}
            </h2>
            <br>
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
                <div class="col-8 cont2" style="padding-left:8px; float:left; margin-top:50px">
                    <p style="padding-left: 8px; text-align: left; font-size:11px;">
                        {{ $salesdata['firstname'] }} {{ $salesdata['lastname'] }}
                    </p>
                    <p style="padding-left: 8px; text-align: left; font-size:11px;">
                        {{ $salesdata['billing_address'] }}
                    </p>
                </div>
                <div class="col-4" style="padding-right: 50px; float:right; margin-top:30px">
                        <p class="s1" style=" margin-right: 10px; text-align: left">PURCHASE INVOICE</p>
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
                            {{ $salesdata['company_code']  }}
                        </p><br><br>
                </div>
            </div>
            </div>
        </div><br><br>
        <!-- ----------------------------------------- -->
        <div class="container1" style="font-size:10px; margin-top:150px">
        <table style="width:100%">
            <thead>
            <tr style="border-bottom:1px solid #000;">
                <th style="width:300px;text-align:left;padding-bottom:5px;"><h2 style="font-size: 12px;">Description</h2></th>
                <th style="width: 100px;text-align:left;padding-bottom:5px;"><h2 style="font-size: 12px;">Unit Price</h2></th>
                <th style="width: 100px;text-align:left;padding-bottom:5px;"><h2 style="font-size: 12px;">VAT(%)</h2></th>
                <th><h2 style="font-size: 12px;text-align:right;padding-bottom:5px;">Amount GBP</h2></th>
            </tr>
            </thead>
            <tbody style="width:100%;text-align: center;">
                @foreach ($salesdata['salesitem'] as $sale)
                <tr>
                    <td style="padding-bottom:6px;padding-top:5px;font-size: 12px;text-align:left;">{{ $sale['quantity'] }} x {{ $sale['typename'] }} {{ $sale['productname'] }} ({{ $sale['weight'] }}g) </td>
                    <td style="padding-bottom:6px;padding-top:5px;font-size: 12px;text-align:left;">{{ $sale['unitprice'] }}</td>
                    <td style="padding-bottom:6px;padding-top:5px;font-size: 12px;text-align:left;">{{ $sale['vat'] }}</td>
                    <td style="padding-bottom:6px;padding-top:5px;font-size: 12px;text-align:right;">{{ $sale['invoice_amount'] }}</td>
                </tr>
                @endforeach
                <tr style="border-top:1px solid #ccc;">
                    <td style="border:none"></td>
                    <td ></td>
                    <td style="font-size: 12px;border-bottom: 1px solid black;padding-top:10px;padding-bottom:10px;"><h2 style="font-size: 12px;font-weight: 500;text-align:left">Total No VAT</h2></td>
                    <td style="font-size: 12px;text-align: right;border-bottom: 1px solid black;padding-top:10px;padding-bottom:10px;">{{ $salesdata['vattotal'] }}</td>
                </tr>
                <tr style="">
                    <td style="border:none"></td>
                    <td style="border:none"></td>
                    <td style="border-top:1px solid #000;font-weight: bold;font-size: 12px;padding-top:10px;padding-bottom:10px;"><strong><h2 style="font-size: 11px;">Amount Due GBP</h2></strong></td>
                    <td style="border-top:1px solid #000;font-weight: bold;font-size: 12px;text-align: right;padding-top:10px;padding-bottom:10px;">{{ $salesdata['totalamount'] }}</td>
                </tr><br>
            </tbody>
        </table>
    </div>
        <!-- ------------------------ -->
        <div class="container1 s3">
            <p style="text-align: justify;font-size: 12px;">Payment Terms:</p>
            <p style=" text-align: justify; font-size: 12px;">
            I confirm that i am atleast 18 years of age<br>
              The goods i am selling are owned by me and i have the right to sell them<br>
              The goods i am selling are not subject to any court proceedings and are police safe.<br>
              The goods i am selling if indicated as 'scrap' cannot later be returned or refunded<br>
              I am happy with and accept the offer being provided to me by Gold Warehouse Limited.
            </p><br><br><br><br>
            @if(!empty($signaturedata['id'])) 
            <p style=" text-align: left; font-size: 11px;">
            <img src="{{ public_path($signaturedata['signature_filename']) }}" style="height: 70px;">
            <br>
            <span class="ml-3">
            Signed By: <span style="font-weight:600;">{{$signaturedata['signed_by']}}</span>
            </span><br>
            </p>
            @endif
            <br>
        </div>
        <div class="container1 s3" style="font-size:11px">
            <p style="text-align: left;">
                Gold Bank is a trading name for Gold
                Warehouse Ltd<br />
                Please make BACS/CHAPS/FASTER
                payments to:<br />
            </p><br>
            @if($output_tax)
            <p style="padding-left: 6px; text-align: left">
            The Output Tax Of £ <span style="font-weight:600;"> {{$output_tax}} </span> On
            Supply Of This Gold Is To Be Accounted For By The Buyer To HMRC.
            </p>
            @endif
            <br>
        </div>
        <div class="flex-parent">
            <div class="box" style="padding-top:10px;padding-left:10px;">
                <p class="box_size" style="padding-bottom:12px;">
                    <span
                        style="font-weight:bold"
                        >Company Account</span
                    >
                </p>
                <p class="box_size">
                    {{$companydata['account_name']}}<br />
                    Sort code: <span
                        style="font-weight:bold"
                        >{{$companydata['sort_code']}}</span
                    ><br />
                    Account No: <span
                        style="font-weight:bold"
                        >{{$companydata['account_number']}}</span
                    >
                </p>
            </div>

            <div class="box" style="padding-top:10px;padding-left:10px;float:right">
                <p class="box_size" style="padding-bottom:12px;">
                    <span style="font-weight:bold">Customer Account</span>
                </p>
                <p class="box_size">
                      <span style="font-weight:bold">Account Name: </span>{{$salesdata['account_name']}}<br />
                      <span style="font-weight:bold">Account Number: </span>{{$salesdata['account_number']}}<br />
                      <span style="font-weight:bold">Sort Code: </span>{{$salesdata['sort_code']}}
                  </p>
            </div>
        </div>
    </div> 
    <div style="margin-top:200px;">
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