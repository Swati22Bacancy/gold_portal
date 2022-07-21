<template>
  <div>
    <form class="crt-group" @submit.prevent="update_group">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">{{formdata.name}}</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/groups"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 creategroup-div">
        
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label>Group Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-groupname"
                    aria-describedby="emailHelp"
                    placeholder=""
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
  name: "CreateGroup",
  data() {
    return {
      rules : customerRules,
      formdata: {},
    };
  },
  methods:
  {
    async update_group() {
      try {
        const response = await axios.post("update_group", {
          id: this.$route.params.id,
          name: this.formdata.name,
        });
        let message =
            "Group has been successfully updated.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/groups");
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
    axios.get('/groupdetails/'+this.$route.params.id)
        .then((response) => {
            
            this.formdata = response.data;
            
        })
        .catch(function(error) {
            //app.$notify(error.response.data.error, "error");
        });
  }
};
</script>
<style scoped>

.creategroup-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-group label
{
  font-size: 12px;
}
.crt-group
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}

</style>
