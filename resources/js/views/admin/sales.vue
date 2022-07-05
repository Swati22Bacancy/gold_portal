<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-3 mobile-mb">
            <h1 class="h3 mb-0 text-gray-800">Sales</h1>
          </div>
          <div class="col-md-9 mobile-mb">
            <input type="text" class="form-control bg-light small input-readonly" placeholder="Total Sales in Current Year" aria-label="Search"
            aria-describedby="basic-addon2" style="background-color:#FFFFFF !important; height: auto;" readonly
          />
          </div>
        </div>
        
      </div>
      <div class="col-md-6" style="text-align:right">
        <button type="button" class="btn admin-btn mobile-mb"><i class="fas fa-plus" style="margin-right: 5px;"></i>Create Invoice</button>
        <button type="button" class="btn admin-btn mobile-mb">Sales Reconsile</button>
        <button type="button" class="btn admin-btn mobile-mb">Import</button>
        <button type="button" class="btn admin-btn mobile-mb">Export</button>
      </div>
      
      
    </div>

    

    

    
  </div>
</template>

<script>

export default {
  name: "Dashboard"
};
</script>
