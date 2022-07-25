<template>
  <div class="">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8 mobile-mb">
            <h1 class="h3 mb-0 text-gray-800">Chart of Accounts</h1>
          </div>
          
        </div>
        
      </div>
      <div class="col-md-6" style="text-align:right">
        <router-link to="/create-account-type"><button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add New Account Code</button></router-link>
      </div>
      
      
    </div>

  </div>
</template>

<script>
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default {
  name: "ChartOfAccounts",
  components: {
  },
  //props: ['groups'],
  // data() {
    
  // },
  created() {
      
  },
  methods:
  {
    // selectrecord(id)
    // {
    //   this.groupid=id;
    // },
    // deleteRecord(id) {
    //   axios.get('/deletegroup/'+id)
    //     .then(resp => {
    //         this.$router.go();
    //     })
    //     .catch(error => {
    //       let message = 'Something went wrong, Please try again';
    //       let toast = Vue.toasted.show(message, {
    //         theme: "toasted-error",
    //         position: "top-center",
    //         duration: 5000,
    //       });
    //         console.log(error);
    //     })
    // },
    // getGroups() {
    //     return axios.get("grouplist").then(response => {
    //         this.groups = response.data;
    //     });
    // },
  },
  mounted(){
    // this.getGroups();
    // $.fn.textWidth = function(){
    //     var html_org = $(this).html();
    //     var html_calc = '<span>' + html_org + '</span>';
    //     $(this).html(html_calc);
    //     var width = $(this).find('span:first').width();
    //     $(this).html(html_org);
    //     return width;
    //   };
    //   $('#group-datatable').on( 'draw.dt', function (e) {
    //     $('#group-datatable thead tr th').each(function(idx, ele) {
    //       var xPos = parseInt((($(ele).textWidth()))+12);
    //       $(ele).css('background-position-x',  xPos + 'px')
    //     })
    //   });
    //   const unwatch = this.$watch('groups', (groups) => {
    //     if (!Array.isArray(groups) || groups.length === 0) {
    //         return;
    //     }
    //     unwatch();
    //     this.$nextTick(() => {
    //     const table = $('#group-datatable').DataTable({
    //           "bFilter": false,
    //           "bLengthChange": false,
    //           "columnDefs": [
    //             { "targets": [0,2], "searchable": false, "orderable": false }
    //           ]
    //         });

    //         this.$once('hook:beforeDestroy', function () {
    //             table.destroy();
    //         });
    //     }, {immediate: true});
    // });
  }
};
</script>
<style scoped>
.contentgrp
{
  background-color: #fff;
  border-radius: 0px 5px 5px 5px;
}
#group-datatable thead
{
  background: #3376C2;
  color: #fff;
  font-size: 13px;
}

#group-datatable
{
  color: #000;
  font-size: 13px;
}
#group-datatable thead tr th 
{
  font-weight: 100 !important;
}
table.dataTable thead th
{
  padding: 10px 10px !important;
}
table.dataTable.no-footer
{
  border-bottom: 1px solid #e3e6f0;
}
</style>
