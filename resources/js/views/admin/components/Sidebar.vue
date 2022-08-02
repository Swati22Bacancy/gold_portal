<template>
    <ul
      class="navbar-nav sidebar sidebar-dark accordion nottoggled"
      id="accordionSidebar" style="background-color: #3377C2;"
    >
      <!-- Sidebar - Brand -->
      <router-link
        class="sidebar-brand d-flex align-items-center justify-content-center"
        to="/" style="background-color:#245387;"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <!-- <i class="fas fa-laugh-wink"></i> -->
        </div>
        <div class="sidebar-brand-text mx-3">Admin Panel</div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <router-link class="nav-link" to="/admin">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">speed</span>
          <span>Dashboard</span></router-link
        >
      </li>

      <li class="nav-item" v-if="is_super_admin()">
        <router-link class="nav-link" to="/sales">
          <!-- <i class="fas fa-fw fa-shopping-cart"></i> -->
          <span class="material-symbols-outlined" style="font-size: 19px;margin-right:10%;">shopping_cart</span>
          <!-- <span class="material-symbols-outlined">
            shopping_cart
          </span> -->
          <span>Sales</span></router-link
        >
      </li>

      <li class="nav-item" v-if="is_super_admin()">
        <router-link class="nav-link" to="/admin">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">inventory_2</span>
          <span>Purchases</span></router-link
        >
      </li>

      <li class="nav-item" v-if="is_super_admin()">
        <router-link class="nav-link" to="/admin">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">local_shipping</span>
          <span>Delivery Notes</span></router-link
        >
      </li>
      <li class="nav-item" v-if="is_super_admin()">
        <router-link class="nav-link" to="/quotes">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">description</span>
          <span>Quotes</span></router-link
        >
      </li>
      <li class="nav-item" v-if="is_super_admin() || checkPermission('customer-list')">
        <router-link class="nav-link" to="/customers">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">group</span>
          <span>Customers</span></router-link
        >
      </li>
      <li class="nav-item" v-if="is_super_admin() || checkPermission('group-list')">
        <router-link class="nav-link" to="/groups">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">group</span>
          <span>Groups</span></router-link
        >
      </li>
      <li class="nav-item" v-if="is_super_admin()">
        <router-link class="nav-link" to="/admin">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">account_balance</span>
          <span>Bank Accounts</span></router-link
        >
      </li>
      <li class="nav-item" v-if="is_super_admin()">
        <router-link class="nav-link" to="/settings">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">settings</span>
          <span>Settings</span></router-link
        >
      </li>
      <li class="nav-item" v-if="is_super_admin()">
        <router-link class="nav-link" to="/admin">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">analytics</span>
          <span>Reports</span></router-link
        >
      </li>
      <li class="nav-item" v-if="is_super_admin()">
        <router-link class="nav-link" to="/admin">
          <span class="material-symbols-outlined" style="font-size:19px;margin-right:10%;">speed</span>
          <span>Whatsapp</span></router-link
        >
      </li>


      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
    <!-- End of Sidebar -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'Sidebar',
    computed: {
      ...mapGetters(["user","permissions"]),
    },
    methods:
    {
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
}
</script>
