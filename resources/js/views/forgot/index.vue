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
                      <h6 style="text-align:center;color:#fff;padding-bottom: 20px;">Login to Start</h6>
                    </div>
                    <form class="user" @submit.prevent="forgot">
                      <div class="form-outline">
                        <div class="input-group mb-3">
                          <div class="input-group-append">
                              <div class="input-icons">
                              <span class="fas fa-envelope"></span>
                              </div>
                          </div>
                          <input
                            type="email"
                            class="form-control custom-input"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            v-model="email"
                          />
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
                    
                    <div class="text-center">
                      <router-link to="/login" class="nav-item nav-link center-white">Already have an account? Login!</router-link>
                    </div>
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
import * as notify from "../../utils/notify.js";
import Nav from "../../components/Nav";
import LoadingButton from "../../components/LoadingButton";

export default {
  name: "Forgot",
  components: {
    Nav,
    LoadingButton,
  },
  data() {
    return {
      email: this.email,
      isLoading: false,
      emailSent: false,
    };
  },
  methods: {
    async forgot() {
      this.isLoading = true;
      try {
        await axios.post("forgot", {
          email: this.email,
        });
        this.isLoading = false;
        this.emailSent = true;
      } catch (error) {
        notify.authError(error);
        this.isLoading = false;
      }
    },
  },
};
</script>