<template>
  <div class="setting-div">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8 mobile-mb">
            <h1 class="h3 mb-0 text-gray-800">Settings</h1>
          </div>
          
        </div>
        
      </div>
    </div>

    <div class="row content-div">
      <div class="col-md-4" v-if="is_super_admin() || checkPermission('user-list')">
        <div class="row" v-on:click="goto_users()" style="cursor:pointer;">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">person_add</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Users</h6>
            <span style="font-size: 12px;">Manage users and their access to your account</span>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-on:click="goto_companydetails()" style="cursor:pointer;">
        <div class="row">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">location_city</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Company Details</h6>
            <span style="font-size: 12px;">Update your company address, telephone number, etc.</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">mark_email_unread</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Email Options</h6>
            <span style="font-size: 12px;">From here you can decide when KashFlow should send your emails.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row content-div">
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">move_to_inbox</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Data Import</h6>
            <span style="font-size: 12px;">Import data into your KashFlow Account.</span>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-if="is_super_admin()" v-on:click="goto_invoiceoptions()" style="cursor:pointer;">
        <div class="row">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">difference</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Invoice Options</h6>
            <span style="font-size: 12px;">Configure invoices, discounts and packing slips.</span>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-if="is_super_admin()" v-on:click="goto_roles()" style="cursor:pointer;">
        <div class="row">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">lock_person</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Roles & Permissions</h6>
            <span style="font-size: 12px;">Set User permissions of what users have access to.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row content-div">
      <div class="col-md-4" v-on:click="goto_customersettings()" style="cursor:pointer;">
        <div class="row">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">manage_accounts</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Customer & Supplier Settings</h6>
            <span style="font-size: 12px;">Set various options for your Customer and Supplier pages.</span>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-if="is_super_admin() || checkPermission('currency-list')" v-on:click="goto_currencies()" style="cursor:pointer;">
        <div class="row">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:70px;color: #595959;">currency_exchange</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Currencies</h6>
            <span style="font-size: 12px;">Set up foreign currencies for use with invoices and quotes.</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row" v-on:click="goto_chartaccounts()" style="cursor:pointer;">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">description</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Chart of Accounts</h6>
            <span style="font-size: 12px;">Edit your Sales codes, Purchase Codes and Bank Transaction Types all from this one page.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row content-div">
      <div class="col-md-4" v-on:click="goto_vatsettings()" style="cursor:pointer;">
        <div class="row">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">article</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">VAT Settings</h6>
            <span style="font-size: 12px;">Set various VAT settings, such as  which scheme you are on, online filling options, etc.</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row" v-on:click="goto_producttypes()" style="cursor:pointer;">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">inbox</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Product Type</h6>
            <span style="font-size: 12px;">Create & Manage Product Categories here</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row" v-on:click="goto_products()" style="cursor:pointer;">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">inbox</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Products</h6>
            <span style="font-size: 12px;">Create & Manage Products here</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row content-div">
      <div class="col-md-4" v-if="is_super_admin()" v-on:click="goto_sectors()" style="cursor:pointer;">
        <div class="row">
          <div class="col-md-3">
            <span class="material-symbols-outlined" style="font-size:80px;color: #595959;">article</span>
          </div>
          <div class="col-md-9">
            <h6 class="setting-subheading">Industry Sectors</h6>
            <span style="font-size: 12px;">Manage your industry sectors here.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Settings",
  computed: {
    ...mapGetters(["user","permissions"]),
  },
  components: {
  },
  methods:
  {
    goto_currencies()
    {
      this.$router.push({ name: 'currencies' });
    },
    goto_chartaccounts()
    {
      this.$router.push({ name: 'chartaccounts' });
    },
    goto_producttypes()
    {
      this.$router.push({ name: 'producttypes' });
    },
    goto_products()
    {
      this.$router.push({ name: 'products' });
    },
    goto_users()
    {
      this.$router.push({ name: 'users' });
    },
    goto_invoiceoptions()
    {
      this.$router.push({ name: 'invoiceoptions' });
    },
    goto_roles()
    {
      this.$router.push({ name: 'roles' });
    },
    goto_sectors()
    {
      this.$router.push({ name: 'industrysector' });
    },
    goto_companydetails()
    {
      this.$router.push({ name: 'companydetails' });
    },
    goto_customersettings()
    {
      this.$router.push({ name: 'customersettings' });
    },
    goto_vatsettings()
    {
      this.$router.push({ name: 'vatsettings' });
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
  }
};
</script>
<style scoped>
.content-div
{
  margin: 0 15px;
  background-color: #fff;
}
.content-div .col-md-4
{
  border: 1px solid #eee;
  padding: 20px;
}
.setting-subheading
{
  color: #245388;
  font-weight: 700;
  margin-top: 10px;
  font-size: 17px;
  font-family: Titillium-Web-Bold;
}
</style>
