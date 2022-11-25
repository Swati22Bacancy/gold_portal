<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-8 mobile-mb">
                        <h1 class="h3 mb-0 text-gray-800">Bank Accounts</h1>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-6" style="text-align:right">
                <router-link to="/defaultbankrule">
                    <button type="button" class="btn admin-btn mobile-mb">Default Bank Rule</button>
                </router-link>
                <button type="button" class="btn admin-btn mobile-mb btn-modal" data-toggle="modal" data-target="#addbankrule"><i class="fas fa-plus" style="margin-right: 5px;"></i>Create Bank Rule</button>
                <button type="button" class="btn admin-btn mobile-mb" style="background-color: #7ADAAA !important;">Bank Rules</button>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="addbankrule" tabindex="-1" role="dialog" aria-labelledby="addbankrule" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title" id="addbankrule">Create Bank Rule</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" style="color: #fff">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <label class="required-field">Rule Name</label>
                            </div>
                            <div class="col-md-8">
                                <div class="form-group customer-input">
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control form-control-user" placeholder="" v-model="formdata.rule_name"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <label class="required-field">Apply this to transactions that are</label>
                            </div>
                            <div class="col-md-8">
                                <div class="row form-group customer-input pr-3 pl-3">
                                    <div class="form-group col-md-5">
                                        <select class="form-control form-control-user" v-model="formdata.money_type">
                                            <option value="money_out">Money Out</option>
                                            <option value="money_in">Money In</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2" style="text-align:center">
                                        In
                                    </div>
                                    <div class="col-md-5">
                                        <select class="form-control form-control-user" v-model="formdata.account_type">
                                            <option value="all_accounts">All Bank Accounts</option>
                                            <option value="wisebank_usd">Wise Bank (USD)</option>
                                            <option value="wisebank_gbp">Wise Bank (GBP)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <label class="required-field">And Include the following:</label>
                            </div>
                            <div class="col-md-8">
                                <div class="row form-group customer-input pr-3 pl-3">
                                    <div class="form-group col-md-12">
                                        <select class="form-control form-control-user" v-model="formdata.include_condition">
                                            <option value="all">All</option>
                                            <option value="1">1 of them</option>
                                            <option value="2">2 of them</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;width: 8%;float: right;" @click="addLine()">
                                <i class="fas fa-plus"  style="margin-right: 5px;"></i>
                            </button>
                        </div>
                        <div>
                            <label>Conditions:</label>
                        </div>
                        
                        <div class="row mb-4 mt-4" v-for="(condition_item, k) in condition_items" :key="k">
                            <div class="col-md-4">
                                <select class="form-control form-control-user" v-model="condition_item.condition_field">
                                    <option value="description">Description</option>
                                    <option value="banktext">Bank Text</option>
                                    <option value="amount">Amount</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <select class="form-control form-control-user" v-model="condition_item.condition_criteria">
                                    <option value="contains">Contains</option>
                                    <option value="notcontains">Doesn't contain</option>
                                    <option value="exactly">Is Exactly</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control form-control-user" placeholder="Enter Text" v-model="condition_item.condition_keyword"/>
                            </div>
                            <div class="col-md-1">
                                <i class="fas fa-trash"  style="margin-right: 5px;color: red;" @click="removeLine(k)"></i>
                                
                            </div>
                        </div>
                        
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <label class="required-field">Category</label>
                            </div>
                            <div class="col-md-8">
                                <div class="form-group customer-input">
                                    <div class="form-group col-md-12">
                                        <model-select class="modal-selection" :options="categories" v-model="formdata.category_id" placeholder="Select Category"></model-select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-4">
                            <div class="col-md-4">
                                <label class="required-field">Customer</label>
                            </div>
                            <div class="col-md-8">
                                <div class="form-group customer-input">
                                    <div class="form-group col-md-12">
                                        <model-select class="modal-selection" :options="customers" v-model="formdata.customer_id" placeholder="Select Customer"></model-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mb-4">
                            <div class="col-md-4">
                                <label class="required-field">Enable Rule</label>
                            </div>
                            <div class="col-md-8">
                                <div class="form-group customer-input">
                                    <div class="form-group col-md-12">
                                        <div class="custom-checkbox small check-position vat_checkbox mb-2">
                                            <label></label>
                                            <input type="checkbox" class="custom-control-input" id="enable_rule" v-model="formdata.enable_rule"/>
                                            <label class="custom-control-label" for="enable_rule" style="color:#000;font-weight:700;"
                                            ></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="add_bankrule()" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7adaaa !important">Save</button>
                        <button type="button" data-dismiss="modal"
                        aria-label="Close" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div style="border-radius: 5px 5px 0px 0px; border: 1px solid #B0E0E6; background-color: white;">
                  <div class="col-md-12">
                    <div class="col-md-8 dash-divs" style="cursor:pointer;" @click="clickAccount(1,'USD')">
                        <h4 class="h3" style="margin-bottom:0; color:#3376C2;font-weight: 700;font-family: Titillium-Web-Bold;font-size: 23px;">
                            Wise Bank (USD)
                        </h4>
                        <span style="color:black">9600009111331869</span><br>
                        <div class="dash-label" style="color:black">Recent Transactions</div>
                    </div>
                    <div class=""></div>
                    <div class="col-md-4"></div>
                </div>
                <div class="">
                    <div>
                    
                    </div>
                </div>
                <div class="dash-table">
                    <div class="table-responsive">
                        <table
                            class="table"
                            id="dash-datatable"
                            width="100%"
                            cellspacing="0"
                        >
                            <tbody>
                                <tr v-for="transaction in accountsusd" :key="transaction.transactionId">
                                    <td>{{transaction.payee_name}}</td>
                                    <td v-if="transaction.remark=='inamount'">
                                        <i class="fa fa-dollar-sign" style="font-size:10px;"></i>{{transaction.transactionAmount.replace(/\s/g, "")}}
                                    </td>
                                    <td v-if="transaction.remark=='outamount'" style="color:red">-
                                        <i class="fa fa-dollar-sign" style="font-size:10px;"></i>{{transaction.transactionAmount.replace(/\s/g, "")}}
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-12" style="border-radius: 0px 0px 5px 5px;">
                    <div class="col-md-8 dash-divs">
                        <h4 style="margin-bottom:0; color: black;">
                            <b><i class="fa fa-dollar-sign" style="font-size:20px; color: black;"></i>{{balanceusd}}</b>
                        </h4>
                    </div>
                    <div class=""></div>
                    <div class="col-md-4"></div>
                </div>
                </div>
                
            </div>

            <div class="col-md-4">
                <div style="border-radius: 5px 5px 0px 0px; border: 1px solid #B0E0E6; background-color: white;">
                  <div class="col-md-12">
                    <div class="col-md-8 dash-divs" style="cursor:pointer;" @click="clickAccount(2,'GBP')">
                        <h4 class="h3" style="margin-bottom:0; color:#3376C2;font-weight: 700;font-family: Titillium-Web-Bold;font-size: 23px;">
                            Wise Bank (GBP)
                        </h4>
                        <span style="color:black">23147024730434</span><br>
                        <div class="dash-label" style="color:black">Recent Transactions</div>
                    </div>
                    <div class=""></div>
                    <div class="col-md-4"></div>
                </div>
                <div class="">
                    <div>
                    
                    </div>
                </div>
                <div class="dash-table">
                    <div class="table-responsive">
                        <table
                            class="table"
                            id="dash-datatable"
                            width="100%"
                            cellspacing="0"
                        >
                            <tbody>
                                <tr v-for="transaction in accountsgbp" :key="transaction.transactionId">
                                    <td>{{transaction.payee_name}}</td>
                                    <td v-if="transaction.remark=='inamount'">
                                        <i class="fa fa-pound-sign" style="font-size:10px;"></i>{{transaction.transactionAmount.replace(/\s/g, "")}}
                                    </td>
                                    <td v-if="transaction.remark=='outamount'" style="color:red">-
                                        <i class="fa fa-pound-sign" style="font-size:10px;"></i>{{transaction.transactionAmount.replace(/\s/g, "")}}
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-12" style="border-radius: 0px 0px 5px 5px;">
                    <div class="col-md-8 dash-divs">
                        <h4 style="margin-bottom:0; color: black;">
                            <b><i class="fa fa-pound-sign" style="font-size:20px;color: black;"></i>{{balancegbp}}</b>
                        </h4>
                    </div>
                    <div class=""></div>
                    <div class="col-md-4"></div>
                </div>
                </div>
                
            </div>
           
        </div>
        
    </div>
</template>
<script>
import { ModelSelect } from 'vue-search-select'

export default {
    name: "BankAccount",
    components: {
        ModelSelect
    },
    data(){
        return{
            accounts:[],
            accountsgbp:[],
            accountsusd:[],
            balanceusd:'',
            balancegbp:'',
            formdata:{
                money_type:"money_out",
                account_type:"all_accounts",
                include_condition:"all"
            },
            customers: [],
            categories: [],
            condition_items: [
                {
                    condition_field: "description",
                    condition_criteria: "contains",
                    condition_keyword: ""
                }
            ],
        }
    },
    mounted()
    {
        // this.getAccounts();
        this.getAccountsgbp();
        this.getAccountsusd();
        this.getAccountsBalancegbp();
        this.getAccountsBalanceusd();
        this.getCustomers();
        this.getCategories();
    },
    methods:{
        clickAccount(accountid,currency){
            var currencyid= (currency=='USD')?'1':'2';
            this.$router.push('/accountdetails/'+accountid+'/'+currencyid)
        },
        getAccountsgbp() {
            return axios.get("fetchaccountfeedswithid/2").then(response => {
                this.accountsgbp = response.data;
            });
        },
        getAccountsusd() {
            return axios.get("fetchaccountfeedswithid/1").then(response => {
                this.accountsusd = response.data;
            });
        },
        getAccountsBalancegbp() {
            return axios.get("fetchaccountbalancewithid/2").then(response => {
                this.balancegbp = response.data.balance;
            });
        },
        getAccountsBalanceusd() {
            return axios.get("fetchaccountbalancewithid/1").then(response => {
                this.balanceusd = response.data.balance;
            });
        },
        getAccounts() {
            return axios.get("fetchaccountfeeds").then(response => {
                this.accounts = response.data;
                console.log(response);
            });
        },
        getCustomers() {
            return axios.get("customerlist/all").then(response => {
                this.customers = response.data;
                this.customers = this.customers.map(customer => {
                return {
                    value: customer.id,
                    text: `${customer.first_name || ""} ${customer.last_name || ""} `,
                  } 
                })
            });
        },
        getCategories() {
            return axios.get("paymentcategory_list").then(response => {
                this.categories = response.data;
                this.categories = this.categories.map(category => {
                return {
                    value: category.id,
                    text: `${category.name}`,
                  } 
                })
            });
        },
        addLine() {
            this.condition_items.push({
                condition_field: "description",
                condition_criteria: "contains",
                condition_keyword: ""
            });
        },
        removeLine(index) {
            this.condition_items.splice(index,1);
        },
        async add_bankrule()
        {
            this.$v.formdata.$touch();
            if (this.$v.formdata.$error) {
                return;
            }
            const response = await axios.post("create_bankrule", {
                first_name: this.customerdata.first_name,
                last_name: this.customerdata.last_name,
                email: this.customerdata.email,
                registered_address: this.customerdata.registered_address,
                customertype: this.customerType
                });
        },
    }
}
</script>
<style scoped>
.dash-divs {
    padding: 19px 0;
    color: #fff;
    
}
.dash-label{
  font-size: 10px;
}
.dash-divs p {
    font-size: 13px;
    margin-bottom: 0;
}
.dash-row {
    padding: 10px 14px;
    color: #fff;
}
.dash-btn {
    width: auto;
    font-size: 13px !important;
    color: #000;
    border-radius: 5px;
    height: 35px;
    margin-left: 10px;
}
#dash-datatable {
    font-size: 13px;
    color: #000;
}
#addbankrule .modal-dialog
{
    max-width: 700px;
}
.check-position
{
  margin-left: 5%;
}
</style>
