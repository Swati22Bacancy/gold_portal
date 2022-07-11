<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      
    </div>

    <!-- Content Row -->
    <div class="row">
      <div class="col-md-4">
        <div class="col-md-12 bg-darkblue" style="border-radius: 5px 5px 0px 0px;">
          <div class="col-md-8 dash-divs">
            <p>Sales this month</p>
            <h4 style="margin-bottom:0"><b><i class="fa fa-pound-sign" style="font-size:20px;margin-right:6px;"></i>28,500.50</b></h4>
            <span>(256 Invoices)</span><br>
            <div class="green-div-info">40% up from last month</div>
          </div>
          <div class="">

          </div>
          <div class="col-md-4">

          </div>
        </div>
        <div class="col-md-12 bg-lightblue dash-row">
          <div class="mid-div1"><span>Recent Sales</span></div>
          <div class="mid-div2"><button type="button" class="btn dash-btn" style="background-color: rgb(122, 218, 170) !important;margin-left: auto;">View Sales</button></div>
        </div>
        <div class="dash-table">
          <div class="table-responsive">
            <table class="table" id="dash-datatable" width="100%" cellspacing="0">
                <tbody>
                  <tr>
                      <td>INV-10232</td>
                      <td style="color:#3376C2">Robert Malasawaliki</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>5,203.50</td>
                   </tr>
                  <tr>
                      <td>INV-10231</td>
                      <td style="color:#3376C2">ABC Jewellers LTD.</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,953.00</td>
                 </tr>
                 <tr>
                      <td>INV-10230</td>
                      <td style="color:#3376C2">Haji Jewellers LTD.</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,634.50</td>
                   </tr>
                  <tr>
                      <td>INV-10232</td>
                      <td style="color:#3376C2">Robert Malasawaliki</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>5,203.50</td>
                   </tr>
                  <tr>
                      <td>INV-10231</td>
                      <td style="color:#3376C2">ABC Jewellers LTD.</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,953.00</td>
                 </tr>
                 <tr>
                      <td>INV-10230</td>
                      <td style="color:#3376C2">Haji Jewellers LTD.</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,634.50</td>
                   </tr>
                 <tr>
                      <td>INV-10230</td>
                      <td style="color:#3376C2">Haji Jewellers LTD.</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,634.50</td>
                   </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-12 bg-darkgrey" style="border-radius: 0px 0px 5px 5px;">
          <div class="col-md-8 dash-divs">
            <p>Total Turnover</p>
            <h4 style="margin-bottom:0"><b><i class="fa fa-pound-sign" style="font-size:20px;margin-right:6px;"></i>28,500.50</b></h4>
            <span>(12 Orders)</span>
          </div>
          <div class="">

          </div>
          <div class="col-md-4">

          </div>
        </div>
      </div>
        
      <div class="col-md-4">
        <div class="col-md-12 bg-darkblue" style="border-radius: 5px 5px 0px 0px;">
          <div class="col-md-8 dash-divs">
            <p>Purchase this month</p>
            <h4 style="margin-bottom:0"><b><i class="fa fa-pound-sign" style="font-size:20px;margin-right:6px;"></i>12,200.50</b></h4>
            <span>(12 Orders)</span>
            <div class="red-div-info">5% down from last month</div>
          </div>
          <div class="">

          </div>
          <div class="col-md-4">

          </div>
        </div>
        <div class="col-md-12 bg-lightblue dash-row">
          <div class="mid-div1"><span>Recent Sales</span></div>
          <div class="mid-div2"><button type="button" class="btn dash-btn" style="background-color: rgb(122, 218, 170) !important;margin-left: auto;">View Sales</button></div>
        </div>
        <div class="dash-table">
          <div class="table-responsive">
            <table class="table" id="dash-datatable" width="100%" cellspacing="0">
                <tbody>
                  <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>5,203.50</td>
                   </tr>
                  <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,953.00</td>
                 </tr>
                 <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,634.50</td>
                   </tr>
                  <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>5,203.50</td>
                   </tr>
                  <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,953.00</td>
                 </tr>
                 <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,634.50</td>
                   </tr>
                 <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,634.50</td>
                   </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-12 bg-darkgrey" style="border-radius: 0px 0px 5px 5px;">
          <div class="col-md-8 dash-divs">
            <p>Total Turnover</p>
            <h4 style="margin-bottom:0"><b><i class="fa fa-pound-sign" style="font-size:20px;margin-right:6px;"></i>28,500.50</b></h4>
            <span>(12 Orders)</span>
          </div>
          <div class="">

          </div>
          <div class="col-md-4">

          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="col-md-12 bg-darkblue" style="border-radius: 5px 5px 0px 0px;">
          <div class="col-md-8 dash-divs">
            <p>Invoices Unpaid</p>
            <h4 style="margin-bottom:0"><b><i class="fa fa-pound-sign" style="font-size:20px;margin-right:6px;"></i>28,500.50</b></h4>
            <span>(12 Orders)</span>
            <div class="green-div-info">40% up from last month</div>
          </div>
          <div class="">

          </div>
          <div class="col-md-4">

          </div>
        </div>
        <div class="col-md-12 bg-lightblue dash-row">
          <div class="mid-div1"><span>Recent Sales</span></div>
          <div class="mid-div2"><button type="button" class="btn dash-btn" style="background-color: rgb(122, 218, 170) !important;margin-left: auto;">View Sales</button></div>
        </div>
        <div class="dash-table">
          <div class="table-responsive">
            <table class="table" id="dash-datatable" width="100%" cellspacing="0">
                <tbody>
                  <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>5,203.50</td>
                   </tr>
                  <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,953.00</td>
                 </tr>
                 <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,634.50</td>
                   </tr>
                  <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>5,203.50</td>
                   </tr>
                  <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,953.00</td>
                 </tr>
                 <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,634.50</td>
                   </tr>
                 <tr>
                      <td style="color:#3376C2">GB78602023(Jermaine Charlo)</td>
                      <td><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>4,634.50</td>
                   </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-12 bg-darkgrey" style="border-radius: 0px 0px 5px 5px;">
          <div class="col-md-8 dash-divs">
            <p>Total Turnover</p>
            <h4 style="margin-bottom:0"><b><i class="fa fa-pound-sign" style="font-size:20px;margin-right:6px;"></i>28,500.50</b></h4>
            <span>(12 Orders)</span>
          </div>
          <div class="">

          </div>
          <div class="col-md-4">

          </div>
        </div>
      </div>
    </div>

    

    
  </div>
</template>

<script>

export default {
  name: "Dashboard"
};
</script>
<style scoped>
.dash-divs
{
  padding: 19px;
  color: #fff;
}
.dash-divs p {
  font-size: 13px;
  margin-bottom: 0;
}
.dash-row
{
  padding: 10px 14px;
  color: #fff;
}
.dash-btn
{
  width: auto;
  font-size: 13px  !important;
  color: #000;
  border-radius: 5px;
  height: 35px;
  margin-left: 10px;
}
#dash-datatable
{
  font-size: 13px;
  color: #000;
}
.dash-table
{
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.dash-divs span
{
  font-size: 13px;
}
.mid-div1
{
  width: 70%;
  display: inline-block;
  font-size: 13px;
}
.mid-div2
{
  width: 29%;
  display: inline-block;
}
</style>
