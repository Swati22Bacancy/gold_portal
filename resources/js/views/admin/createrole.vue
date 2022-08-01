<template>
  <div>
    <form class="crt-type" @submit.prevent="create_role">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Create New Role</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/roles"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 createtype-div">
        
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control form-control-role"
                    id="crt-typename"
                    aria-describedby="emailHelp"
                    placeholder="Enter name here"
                    v-model="formdata.name"
                  />
                </div>
                
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
  name: "CreateRole",
  data() {
    return {
      rules : customerRules,
      formdata: {},
    };
  },
  methods:
  {
    async create_role() {
      try {
        const response = await axios.post("create_role", {
          name: this.formdata.name,
        });
        let message =
            "Role has been successfully added.";
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
  }
};
</script>
<style scoped>

.createtype-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-type label
{
  font-size: 12px;
}
.crt-type
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}

</style>
