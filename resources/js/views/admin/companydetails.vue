<template>
  <div>
    <form class="company_setting" @submit.prevent="formdata.id ? updateCompanyDetails() : storeCompanyDetails()">
    <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Company Details</h1>
        <div>
          <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
          <router-link to="/settings"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
        </div>
      </div>
      <div class="company-cstm">
        <div class="row">
          <div class="col-md-12">
            <div class="box-content box-align box-padding">
              <h6 >Business Type</h6>
              <div class="row">
                <div class="form-group col-md-12">
                  <input type="radio" id="limited" name="business_type" v-model="formdata.business_type" value="limited">
                  <label class="radio-label" for="limited">Limited Company</label><br>
                  <input type="radio" id="sole" name="business_type" v-model="formdata.business_type" value="sole">
                  <label class="radio-label" for="sole">Sole Trader</label><br>
                  <input type="radio" id="liability" name="business_type" v-model="formdata.business_type" value="liability">
                  <label class="radio-label" for="liability">Limited Liability Partnership</label><br>
                  <input type="radio" id="plc" name="business_type" v-model="formdata.business_type" value="plc">
                  <label class="radio-label" for="plc">PLC</label>
                </div>
              </div>
              <h6 >Company Details</h6>
              <div class="row">
                <div class="form-group col-md-3">
                  <label>Company Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.company_name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-3">
                    <label>Address Line 1</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.address1"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Address Line 2</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.address2"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Post Code</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.postcode"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Country</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.country"
                    />
                  </div>
                
              </div>
              <h6 >Contact Details</h6>
              <div class="row">
                <div class="form-group col-md-3">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.contact_name"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Email</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.contact_email"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Telephone</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.contact_telephone"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label>Mobile</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.contact_mobile"
                    />
                  </div>
                
              </div>
              <h6 >GBP Account</h6>
              <div class="row">
                <div class="form-group col-md-4">
                    <label>Account Name</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.account_name"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label>Sort Code</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.sort_code"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label>Account Number</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.account_number"
                    />
                  </div>
                
              </div>
              <h6 >USD Account</h6>
              <div class="row">
                <div class="form-group col-md-4">
                    <label>Account Number</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.usd_account_number"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label>Bank Code</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.bank_code"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label>ABA Routing No</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="crt-customer"
                      aria-describedby="emailHelp"
                      placeholder=""
                      v-model="formdata.routing_number"
                    />
                  </div>
                
              </div>
              <h6 >Default Payment Terms</h6>
              <div class="row">
                <div class="form-group col-md-1">
                  <label>Days</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.payment_days"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label>Condition</label>
                  <select class="form-control form-control-user" v-model="formdata.payment_condition">
                    <option value="after_invoice">Days after sales invoice date</option>
                    <option value="after_delivery">Days after delivery date</option>
                  </select>
                </div>
              </div>
              <h6 >Home Currency</h6>
              <div class="row">
                <div class="form-group col-md-3">
                  <label>Currency Name</label>
                  <select class="form-control form-control-user" @change="fetchCurrency()" v-model="formdata.currency_id">
                    <option v-for="currency in currencies" :key="currency.id" :value="currency.id">{{currency.name}}</option>
                  </select>
                </div>
                <div class="form-group col-md-1">
                  <label>Symbol</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.currency_symbol" readonly
                  />
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label></label>
                    <div class="custom-checkbox small check-position">
                      <input type="checkbox" class="custom-control-input" id="customCheck" v-model="formdata.output_tax"
                      />
                      <label class="custom-control-label" for="customCheck" style="color:#000"
                        >Position to the right of the value</label>
                    </div>
                  </div>
                </div>
              </div>
              <h6 >VAT Registration Status</h6>
              <div class="row">
                <div class="form-group col-md-12">
                  <input type="radio" id="vat_uk" name="vat_status" v-model="formdata.vat_status" value="vat_uk">
                  <label class="radio-label" for="vat_uk">VAT registered in the UK (includes Northern Ireland)</label><br>
                  <input type="radio" id="vat_eu" name="vat_status" v-model="formdata.vat_status" value="vat_eu">
                  <label class="radio-label" for="vat_eu">VAT registered in an EU member state</label><br>
                  <input type="radio" id="vat_not" name="vat_status" v-model="formdata.vat_status" value="vat_not">
                  <label class="radio-label" for="vat_not">Not VAT registered</label>
                </div>
                <div class="form-group col-md-3" v-if="formdata.vat_status=='vat_uk' || formdata.vat_status=='vat_eu'">
                  <label>VAT Reg. Number</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.vat_number"
                  />
                </div>
              </div>
              <h6 >Industry Sector</h6>
              <div class="row">
                <div class="form-group col-md-3">
                  <select class="form-control form-control-user" v-model="formdata.sector_id">
                    <option v-for="industrysector in industrysectors" :key="industrysector.id" :value="industrysector.id">{{industrysector.title}}</option>
                  </select>
                </div>
              </div>
              <h6>Documents</h6>
              <div class="row">
                <div class="col-md-2">
                  <p class="document_title">Identification:</p>
                </div>
                <div class="form-group col-md-3">
                  <input type="file" name="filename" class="custom-file-input" id="inputFileUpload"
                  v-on:change="onFileChange">
                  <label class="custom-file-label" for="inputFileUpload">Choose file</label>
                </div>
                <p class="upload_text">{{filename}}</p>
                <p class="upload_text"><a class="download_link" v-if="filename1" @click="download(filename1)">Download</a></p>
              </div>
              <div class="row">
                <div class="col-md-2">
                  <p class="document_title">Credit Report:</p>
                </div>
                <div class="form-group col-md-3">
                  <input type="file" name="credit_filename" class="custom-file-input" id="inputCreditFileUpload"
                  v-on:change="onCreditFileChange">
                  <label class="custom-file-label" for="inputCreditFileUpload">Choose file</label>
                </div>
                <p class="upload_text">{{credit_filename}}</p>
                <p class="upload_text"><a class="download_link" v-if="credit_filename1" @click="download(credit_filename1)">Download</a></p>
              </div>
              <div class="row">
                <div class="col-md-2">
                  <p class="document_title">VAT Certificate:</p>
                </div>
                <div class="form-group col-md-3">
                  <input type="file" name="vat_filename" class="custom-file-input" id="inputVatFileUpload"
                  v-on:change="onVatFileChange">
                  <label class="custom-file-label" for="inputVatFileUpload">Choose file</label>
                </div>
                <p class="upload_text">{{vat_filename}}</p>
                <p class="upload_text"><a class="download_link" v-if="vat_filename1" @click="download(vat_filename1)">Download</a></p>
              </div>
              <div class="row">
                <div class="col-md-2">
                  <p class="document_title">Incorporation Certificate:</p>
                </div>
                <div class="form-group col-md-3">
                  <input type="file" name="incorporation_filename" class="custom-file-input" id="inputIncorporationFileUpload"
                  v-on:change="onIncorporationFileChange">
                  <label class="custom-file-label" for="inputIncorporationFileUpload">Choose file</label>
                </div>
                <p class="upload_text">{{incorporation_filename}}</p>
                <p class="upload_text"><a class="download_link" v-if="incorporation_filename1" @click="download(incorporation_filename1)">Download</a></p>
              </div>
              <div class="row">
                <div class="col-md-2">
                  <p class="document_title">Accounting Form:</p>
                </div>
                <div class="form-group col-md-3">
                  <input type="file" name="accounting_filename" class="custom-file-input" id="inputAccountingFileUpload"
                  v-on:change="onAccountingFileChange">
                  <label class="custom-file-label" for="inputAccountingFileUpload">Choose file</label>
                </div>
                <p class="upload_text">{{accounting_filename}}</p>
                <p class="upload_text"><a class="download_link" v-if="accounting_filename1" @click="download(accounting_filename1)">Download</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {objectToFormData} from '../../object-to-formdata';
export default {
  name: "CompanyDetails",
  computed: {
    ...mapGetters(["user","permissions"]),
  },
  data() {
    return {
      tabList: ["Basic Settings", "Field Names"],
      formdata: {},
      industrysectors:{},
      currencies:{},
      filename: '',
      file: '',
      credit_filename: '',
      creditfile: '',
      vat_filename: '',
      vatfile: '',
      incorporation_filename: '',
      incorporationfile: '',
      accounting_filename: '',
      accountingfile: '',
      filename1: '',
      credit_filename1: '',
      vat_filename1: '',
      incorporation_filename1: '',
      accounting_filename1: '',
    };
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
    fetchCurrency()
    {
      axios.get('/currencydetails/'+this.formdata.currency_id)
        .then((response) => {
            this.formdata.currency_symbol = response.data.symbol;
        })
        .catch(function(error) {
        });
    },
    async storeCompanyDetails() {
      try {
        this.formdata.file=this.file;
        this.formdata.creditfile=this.creditfile;
        this.formdata.vatfile=this.vatfile;
        this.formdata.incorporationfile=this.incorporationfile;
        this.formdata.accountingfile=this.accountingfile;
        const response = await axios.post("store_details", objectToFormData(this.formdata));
        this.file='';
        this.creditfile='';
        this.vatfile='';
        this.incorporationfile='';
        this.accountingfile='';
        let message =
            "Company Details has been successfully saved.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    async updateCompanyDetails() {
      try {
        this.formdata.file=this.file;
        this.formdata.creditfile=this.creditfile;
        this.formdata.vatfile=this.vatfile;
        this.formdata.incorporationfile=this.incorporationfile;
        this.formdata.accountingfile=this.accountingfile;
        const response = await axios.post("update_details", objectToFormData(this.formdata));

        this.file='';
        this.creditfile='';
        this.vatfile='';
        this.incorporationfile='';
        this.accountingfile='';
        let message =
            "Company Details has been successfully saved.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
      } catch (error) {
        let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    getIndustrySectors() {
      return axios.get("industrysector_list").then(response => {
          this.industrysectors = response.data;
      });
    },
    getCurrencies() {
      return axios.get("currencylist").then(response => {
          this.currencies = response.data;
      });
    },
    onFileChange(e) {
      this.filename = "Selected File: " + e.target.files[0].name;
      this.file = e.target.files[0];
    },
    onCreditFileChange(e) {
      this.credit_filename = "Selected File: " + e.target.files[0].name;
      this.creditfile = e.target.files[0];
    },
    onVatFileChange(e) {
      this.vat_filename = "Selected File: " + e.target.files[0].name;
      this.vatfile = e.target.files[0];
    },
    onIncorporationFileChange(e) {
      this.incorporation_filename = "Selected File: " + e.target.files[0].name;
      this.incorporationfile = e.target.files[0];
    },
    onAccountingFileChange(e) {
      this.accounting_filename = "Selected File: " + e.target.files[0].name;
      this.accountingfile = e.target.files[0];
    },
    download(image){
      axios.get("/download?image=" + image, {responseType: 'blob'})
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', image);
          document.body.appendChild(link);
          link.click();
        })
        .catch(e => {
        console.log(e);
      });
    },
  },
  mounted()
  {
    this.getIndustrySectors();
    this.getCurrencies();
    axios.get('/saved_companydetails/')
        .then((response) => {
            this.formdata = response.data;
            this.filename1 = response.data.identification_file;
            this.credit_filename1 = response.data.credit_file;
            this.vat_filename1 = response.data.vat_file;
            this.incorporation_filename1 = response.data.incorporation_file;
            this.accounting_filename1 = response.data.accounting_file;
        })
        .catch(function(error) {
            //app.$notify(error.response.data.error, "error");
        });
  }
};
</script>
<style scoped>
.tab-selector
{
  border: 1px solid #D6E3F2 !important;
  height: 40px;
  border-radius: 5px;
  width: 11%;
  color: #3377c2;
  font-size: 13px;
}
.check-position
{
  margin-left: 2%;
}
.inv_setting_input
{
  width: 20%;
}
.invoice_basic
{
  max-width:80%;
}
.radio-label
{
  font-size: 15px !important;
  margin-left: 5px;
}
.company_setting label {
    font-size: 14px;
}
.invoice_basic span
{
  color: #807e7e;
  font-size: 11px;
}
.company_setting label {
    font-size: 12px;
}
.check-position
{
  margin-left: 10%;
}
.box-content h6
{
 padding: 2% 0 1% 0;
 font-family: 'Titillium-Web-Bold';
}
.upload_text
{
  font-size: 14px;
  margin-left: 1%;
}
.document_title
{
  font-size: 15px;
}
.download_link
{
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background-color: #7ADAAA;
  font-size: 13px !important;
  color: #000;
  border-radius: 5px;
  height: auto;
  margin-left: 10px;
}
</style>
