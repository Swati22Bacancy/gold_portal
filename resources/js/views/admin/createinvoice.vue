<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">New Sales Invoice</h1>
      
    </div>

    <div class="row">
      <div class="col-md-12 createinv-div">
        <form class="crt-invoice" @submit.prevent="create_invoice">
            <div class="form-group">
              <label>Customer</label>
              <input
                type="text"
                class="form-control form-control-user"
                id="crt-customer"
                aria-describedby="emailHelp"
                placeholder=""
                
              />
            </div>
            <div class="form-group">
              <label>Invoice No.</label>
              <input
                type="text"
                class="form-control form-control-user"
                id=""
                placeholder="Invoice No."
                
              />
            </div>
            
            <button
              type="submit"
              class="btn btn-primary btn-user btn-block"
            >
              Submit
            </button>
          </form>
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

#dash-datatable
{
  font-size: 13px;
  color: #000;
}
.createinv-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-invoice label
{
  font-size: 12px;
}
</style>
