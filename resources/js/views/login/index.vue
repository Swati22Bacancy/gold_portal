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
                    <form class="user" @submit.prevent="login">
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
                      <div class="form-outline">
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
                            v-model="password"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small center-white">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                      <div class="form-outline py-3" style="text-align: center;">
                        <button
                          type="submit"
                          class="btn submit-btn"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    
                    <div class="text-center">
                      <router-link to="/forgot-password" class="nav-item nav-link center-white">Forgot Password ?</router-link>
                      <!-- <router-link class="small" to="/forgot-password"
                        >Forgot Password?</router-link
                      > -->
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
import axios from "axios";
import Nav from "../../components/Nav";
import * as notify from "../../utils/notify.js";

export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      email: "",
      password: "",
      verificationStatus: this.$route.query.verification_status ? true : false,
      verificationMessage: '',
      verificationAlertClasses: {
        'alert-success': false,
        'alert-danger': false
      }
    };
  },
  created: function () {
    if (this.$route.query.verification_status === "success") {
      this.verificationMessage = "Your account has been verified. Please log in.";
      this.verificationAlertClasses['alert-success'] = true;
    } else if (this.$route.query.verification_status === "error") {
      this.verificationMessage = "Your account could not be verified.";
      this.verificationAlertClasses['alert-danger'] = true;
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("token", response.data.token);
        this.$store.dispatch("user", response.data.user);
        this.$router.push("/admin");
      } catch (error) {
        notify.authError(error);
      }
    },
  },
};
</script>

<style>
</style>