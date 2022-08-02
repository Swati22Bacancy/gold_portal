<template>
  <div>
    <!-- <Nav /> -->
    <div class="login-container">
      <!---- Navbar -->
      <!-- Outer Row -->
      <div
        class="row justify-content-center"
        v-if="verificationStatus"
      >
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div
            class="alert alert-dismissible fade show mt-5"
            v-bind:class="verificationAlertClasses"
            role="alert"
          >
            <div>{{ verificationMessage }}</div>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center login-div">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5 login-form">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-12">
                  <div class="p-5">
                    <div class="text-center">
                      <h6 style="text-align:center;color:#fff;padding-bottom: 20px;">Reset your password</h6>
                    </div>
                     <form class="user" @submit.prevent="reset">
                    <div class="form-group">
                       <div class="input-group mb-3">
                        <div class="input-group-append">
                              <div class="input-icons">
                              <span class="fas fa-lock"></span>
                              </div>
                          </div>
                        <input
                        type="password"
                            class="form-control custom-input"
                            id="exampleInputPassword"
                            placeholder="Password"
                        v-model="password" required
                      />
                    </div>
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <div class="input-group-append">
                              <div class="input-icons">
                              <span class="fas fa-lock"></span>
                              </div>
                          </div>
                      <input
                        type="password"
                            class="form-control custom-input"
                            id="exampleInputPassword"
                            placeholder="Repeat Password"
                        v-model="password_confirm" required/>
                      </div>
                    </div>
                    </div>
                    <div class="form-outline py-3" style="text-align: center;">  
                    <button
                     type="submit"
                    class="btn submit-btn"
                    >
                      Reset Password
                    </button>
                    </div>
                  </form>
                    
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import * as notify from "../../utils/notify.js"
import Nav from '../../components/Nav'

export default {
  name: "Reset",
  components: {
    Nav
  },
  data() {
    return {
      password: "",
      password_confirm: "",
      iserror: false,
    };
  },
  methods: {
    async reset() {
      
      try {
        if(this.password == this.password_confirm){
        const response = await axios.post("reset", {
          password: this.password,
          password_confirm: this.password_confirm,
          token: this.$route.params.token,
        });

        let toast = this.$toasted.show("Password updated successfully", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 5000, 
        });

        this.$router.push("/login");
        }
        else{
           let toast = this.$toasted.show("Password Must be Same", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 5000, 
        });
        }
      } catch (error) {
        notify.authError(error);
      }
    },
  },
  
};
</script>