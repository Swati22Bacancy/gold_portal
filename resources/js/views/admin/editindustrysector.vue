<template>
  <div>
    <form class="crt-industrysector" @submit.prevent="update_industrysector">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">{{formdata.title}}</h1>
      <div>
        <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
        <router-link to="/industry-sectors"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
      </div>
      
    </div>

    <div class="row">
      <div class="col-md-12 createindustrysector-div">
        
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group customer-input">
                  <label class="required-field">Title</label>
                  <input
                    type="text"
                    class="form-control form-control-role"
                    id="crt-typename"
                    aria-describedby="emailHelp"
                    placeholder="Enter title here"
                    v-model="formdata.title"
                  />
                  <span v-if="$v.formdata.title.$error" class="text-danger">Please enter title</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </form>
    
  </div>
</template>

<script>
import { required} from "vuelidate/lib/validators";
import { customerRules } from './rules/customerRules'
export default {
  name: "UpdateRole",
  data() {
    return {
      rules : customerRules,
      formdata: {
        title:"",
      },
      errors: {},
    };
  },
  methods:
  {
    async update_industrysector() {
       this.$v.formdata.$touch();
      if (this.$v.formdata.$error) {
        return;
      }
      try {
        const response = await axios.post("update_industrysector", {
          id: this.$route.params.id,
          title: this.formdata.title,
        });
        let message =
            "Industry Sector has been successfully updated.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        this.$router.push("/industry-sectors");
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
  validations: {
    formdata: {
      title: {
        required,
       
      },
    }
   },
  mounted()
  {
    axios.get('/industrysector_details/'+this.$route.params.id)
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
.required-field::after {
  content: "*";
  color: red;
}
.text-danger{
  font-size: 12px;
}
.createindustrysector-div
{
  background: #fff;
  padding: 34px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-industrysector label
{
  font-size: 12px;
}
.crt-industrysector
{
  padding: 0px 2%;
  color: #000;
}

.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}

</style>
