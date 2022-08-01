<template>
  <div>
    <form class="crt-role" @submit.prevent="assignPermission()">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Assign Permission to {{formdata.name}}</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/roles"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>
    <div class="contentgrp">
      <div class="pb-2 mb-4">
        <div class="">
            <div class="table-responsive">
                <table class="table" id="permission-datatable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Add</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Customer</td>
                        <td class="content-left" v-for="(permission) in customer_permissions" :key="permission.id">
                          <input
                            type="checkbox"
                            v-model="checkedpermission"
                            :value="permission.value"
                            :id="permission.id"
                          />
                        </td>
                      </tr>  
                      <tr>
                        <td>User</td>
                        <td class="content-left" v-for="(permission) in user_permissions" :key="permission.id">
                          <input
                            type="checkbox"
                            v-model="checkedpermission"
                            :value="permission.value"
                            id="permission.id"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Group</td>
                        <td class="content-left" v-for="(permission) in group_permissions" :key="permission.id">
                          <input
                            type="checkbox"
                            v-model="checkedpermission"
                            :value="permission.value"
                            id="permission.id"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Currency</td>
                        <td class="content-left" v-for="(permission) in currency_permissions" :key="permission.id">
                          <input
                            type="checkbox"
                            v-model="checkedpermission"
                            :value="permission.value"
                            id="permission.id"
                          />
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
    </form>
    
  </div>
</template>

<script>
import { customerRules } from './rules/customerRules'
export default {
  name: "AssignPermission",
  data() {
    return {
      rules : customerRules,
      formdata: {},
      customer_permissions: [
        { id: 1, value: "customer-create" },
        { id: 2, value: "customer-edit" },
        { id: 3, value: "customer-delete" },
        { id: 4, value: "customer-list" }
      ],
      user_permissions: [
        { id: 5, value: "user-create" },
        { id: 6, value: "user-edit" },
        { id: 7, value: "user-delete" },
        { id: 8, value: "user-list" }
      ],
      group_permissions: [
        { id: 5, value: "group-create" },
        { id: 6, value: "group-edit" },
        { id: 7, value: "group-delete" },
        { id: 8, value: "group-list" }
      ],
      currency_permissions: [
        { id: 5, value: "currency-create" },
        { id: 6, value: "currency-edit" },
        { id: 7, value: "currency-delete" },
        { id: 8, value: "currency-list" }
      ],
      checkedpermission: [],
    };
  },
  methods:
  {
    async assignPermission() {
      try {
        const response = await axios.post("assign_permission", {
          role_id: this.$route.params.id,
          allpermissions: this.checkedpermission,
        });
        let message =
            "Permission has been successfully assigned.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/roles");
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
        console.log(error);
      }
    },
  },
  mounted()
  {
    axios.get('/roledetails/'+this.$route.params.id)
      .then((response) => {
          this.formdata = response.data;
      })
      .catch(function(error) {
          //app.$notify(error.response.data.error, "error");
      });
    
    axios.get('/show_permission/'+this.$route.params.id)
      .then((response) => {
        var newArr = response.data.permissions;
        var finalarray = [];
        $.each( newArr, function( key, value ) {
          finalarray.push(value.name)
        });
        this.checkedpermission = finalarray;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
};
</script>
<style scoped>

.createrole-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-role label
{
  font-size: 12px;
}
.crt-role
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}

.contentgrp
{
  background-color: #fff;
  border-radius: 0px 5px 5px 5px;
}
#permission-datatable thead
{
  background: #3376C2;
  color: #fff;
  font-size: 13px;
}

#permission-datatable
{
  color: #000;
  font-size: 13px;
}
#permission-datatable thead tr th 
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
