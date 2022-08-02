<template>
  <div class="">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8 mobile-mb">
            <h1 class="h3 mb-0 text-gray-800">Users</h1>
          </div>
          
        </div>
        
      </div>
      <div class="col-md-6" style="text-align:right">
        <router-link v-if="is_super_admin() || checkPermission('user-create')" to="/create-user"><button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;"><i class="fas fa-plus" style="margin-right: 5px;"></i>Create User</button></router-link>
        <router-link v-if="is_super_admin()" to="/create-role"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Create Role</button></router-link>
      </div>
      
      
    </div>
    <div class="contentgrp">

        <div class="col-md-6">
            <input type="text" class="form-control bg-light border-0 small table-search searchbox" placeholder="Search by Name" style="background-color:#FFFFFF !important;"/>
             
          </div>
            <div class="pb-2 mb-4">
                <div class="">
                    <div class="table-responsive">
                        <table class="table" id="user-datatable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" class="custom-check-input"></th>
                                    <th>User</th>
                                    <th>User Level</th>
                                    <th>Branch</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td><input type="checkbox" class="custom-check-input"></td>
                                    <td>{{user.first_name}} {{user.last_name}}</td>
                                    <td>{{user.userlevel}}</td>
                                    <td>{{user.branch}}</td>
                                    <td><router-link v-if="is_super_admin() || checkPermission('user-edit')" :to="{name : 'edituser', params: {id : user.id}}"><span class="material-symbols-outlined" style="margin-right: 10px;color: #3376C2;">edit</span></router-link>
                                    <span v-if="is_super_admin() || checkPermission('user-delete')" class="material-symbols-outlined" style="margin-right: 5px;color: red;    cursor: pointer;" data-toggle="modal" data-target="#deleteConfirmation" @click="selectrecord(user.id)">delete</span>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </div>
     <!-- Modal -->
      <div class="modal fade" id="deleteConfirmation" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title" id="deleteConfirmationLabel">Confirmation</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" style="color:#fff">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <p style="color:#000;font-size:14px;">Are you sure you want to delete this user?</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deleteRecord(userid)">Delete</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default {
  name: "Users",
  computed: {
    ...mapGetters(["user","permissions"]),
  },
  components: {
  },
  props: ['users'],
  data() {
    return {
      userid:'',
    };
  },
  created() {
      
  },
  methods:
  {
    selectrecord(id)
    {
      this.userid=id;
    },
    deleteRecord(id) {
      axios.get('/deleteuser/'+id)
        .then(resp => {
            this.$router.go();
        })
        .catch(error => {
          let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
            console.log(error);
        })
    },
    getUser() {
        return axios.get("userlist").then(response => {
            this.users = response.data;
        });
    },
    is_super_admin(){
      if(this.user)
      {
        if(this.user.role_id==1){
          return true;
        }
        else{
          return false;
        }
      }
    },
    checkPermission(permission) {
      if(this.permissions.length>0)
      {
        for (var i = 0; i <= this.permissions.length; i++) {
          if (this.permissions[i] === permission) {
            return true;
          } else false;
        }
      }
    },
  },
  mounted(){
    this.getUser();
    $.fn.textWidth = function(){
        var html_org = $(this).html();
        var html_calc = '<span>' + html_org + '</span>';
        $(this).html(html_calc);
        var width = $(this).find('span:first').width();
        $(this).html(html_org);
        return width;
      };
      $('#user-datatable').on( 'draw.dt', function (e) {
        $('#user-datatable thead tr th').each(function(idx, ele) {
          var xPos = parseInt((($(ele).textWidth()))+12);
          $(ele).css('background-position-x',  xPos + 'px')
        })
      });
      const unwatch = this.$watch('users', (users) => {
        if (!Array.isArray(users) || users.length === 0) {
            return;
        }
        unwatch();
        this.$nextTick(() => {
        const table = $('#user-datatable').DataTable({
              //"bFilter": false,
              "bLengthChange": false,
              "columnDefs": [
                { "targets": [0,4], "searchable": false, "orderable": false }
              ]
            });
            $(".searchbox").keyup(function() {
                  table.search(this.value).draw();
                });
            this.$once('hook:beforeDestroy', function () {
                table.destroy();
            });
        }, {immediate: true});
    });
  }
};
</script>
<style scoped>
.contentgrp
{
  background-color: #fff;
  border-radius: 0px 5px 5px 5px;
}
#user-datatable thead
{
  background: #3376C2;
  color: #fff;
  font-size: 13px;
}

#user-datatable
{
  color: #000;
  font-size: 13px;
}
#user-datatable thead tr th 
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
.table-search
{
  border: 1px solid #D6E3F2 !important;
  display: inline-block;
  height: 40px;
  margin: 8px 0px;
}
.table-search::placeholder {
  color: #3377c2;
  opacity: 0.4;
  font-size: 11px;
}
</style>
