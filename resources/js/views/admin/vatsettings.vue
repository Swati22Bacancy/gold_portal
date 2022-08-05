<template>
  <div>
    <form class="vat_setting" @submit.prevent="formdata.id ? updateVatSettings() : storeVatSettings()">
    <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">VAT Settings</h1>
        <div>
          <button type="submit" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;">Save</button>
          <router-link to="/settings"><button type="button" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button></router-link>
        </div>
      </div>
      <div class="company-cstm">
        <div class="row">
          <div class="col-md-12">
            <div class="box-content box-align box-padding">
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
                  <label>Tax Name</label>
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="crt-customer"
                    aria-describedby="emailHelp"
                    placeholder=""
                    v-model="formdata.tax_name"
                  />
                  <label>VAT Number</label>
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
              <h6 class="pb-0 mb-0">My annual turnover is above 85,000</h6>
              <span style="font-size:12px;">(Select No if you are exempt from MTD for VAT)</span>
              <div class="row pt-2 pb-4">
                <div class="form-group col-md-4">
                  <input type="radio" id="turnover_above" name="turnover" v-model="formdata.turnove" value="turnover_above">
                  <label class="radio-label pr-5" for="turnover_above">Yes</label>
                  <input type="radio" id="turnover_below" name="turnover" v-model="formdata.turnover" value="turnover_below">
                  <label class="radio-label" for="turnover_below">No</label><br>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <input type="radio" id="vat_quarter" name="vat_period" v-model="formdata.vat_period" value="vat_quarter">
                  <label class="radio-label pr-5" for="vat_quarter" style="font-weight:700;">I report my VAT quarterly</label>
                  <input type="radio" id="vat_monthly" name="vat_period" v-model="formdata.vat_period" value="vat_monthly">
                  <label class="radio-label" for="vat_monthly" style="font-weight:700;">I report my VAT monthly</label><br>
                  <span style="font-size:12px;">Select the option that corresponds with the first months of your VAT periods</span><br>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <select v-if="formdata.vat_period=='vat_quarter' || !formdata.vat_period" class="form-control form-control-user" v-model="formdata.report_quarter">
                    <option value="first_quarter">Jan, Apr, Jul, Oct</option>
                  </select>

                  <select v-if="formdata.vat_period=='vat_monthly'" class="form-control form-control-user" v-model="formdata.report_monthly">
                    <option value="january">January</option>
                  </select>
                </div>
              </div>
              <div class="row pt-5 pb-4">
                <div class="form-group col-md-6">
                  <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="owe_vat" v-model="formdata.owe_vat"/>
                    <label class="custom-control-label" for="owe_vat" style="color:#000;font-weight:700;"
                      >On my overview page, show me how much I owe for the current VAT period</label>
                  </div>
                  <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="remind_vat" v-model="formdata.remind_vat"/>
                    <label class="custom-control-label" for="remind_vat" style="color:#000;font-weight:700;"
                      >Remind me regrading my VAT return</label>
                  </div>
                  <div class="custom-checkbox small check-position vat_checkbox mb-2">
                    <label></label>
                    <input type="checkbox" class="custom-control-input" id="lock_transaction" v-model="formdata.lock_transaction"/>
                    <label class="custom-control-label" for="lock_transaction" style="color:#000;font-weight:700;"
                      >Automatically lock transactions after I submit a VAT return</label>
                  </div>
                </div>
              </div>
              <h6>Calculation Method:</h6>
              <div class="row">
                <div class="form-group col-md-8">
                  <span style="font-size:12px;">There are two ways to calculate the tax on your sales invoices:<br>
                  You can work out the tax due on the total value of the line amount (qty x rate) or you can calculate the tax due on a single item<br>
                  and then multiply it by quantity. The second option is often used by companies that sell products to the public at a tax inclusive price.</span><br>
                  <input type="radio" id="tax_total" name="calculation_method" v-model="formdata.calculation_method" value="tax_total">
                  <label class="radio-label pt-3 pr-5" for="tax_total" style="">A - Calculate tax on line total</label>
                  <input type="radio" id="tax_individual" name="calculation_method" v-model="formdata.calculation_method" value="tax_individual">
                  <label class="radio-label" for="tax_individual" style="">B - Calculate tax on individual unit price</label><br>
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
  name: "VatSettings",
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
    async storeVatSettings() {
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
    async updateVatSettings() {
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
  margin-left: 0;
}
.vat_checkbox label{
  font-size: 14px !important;
  letter-spacing: 0.7px;
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
.vat_setting label {
    font-size: 14px;
}
.invoice_basic span
{
  color: #807e7e;
  font-size: 11px;
}
.vat_setting label {
    font-size: 12px;
}
.check-position
{
  margin-left: 4%;
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
