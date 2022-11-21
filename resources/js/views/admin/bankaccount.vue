<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Bank Accounts</h1>
            <button ref="Btn" @click="getAccountsgbp">Click</button>
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
                                    <td>
                                        <span v-if="transaction.remark=='inamount'">
                                            <i v-if="transaction.currency=='GBP'" class="fa fa-pound-sign" style="font-size:10px;"></i>
                                            <i v-if="transaction.currency=='USD'" class="fa fa-dollar-sign" style="font-size:10px;"></i>
                                        </span>
                                        <span v-if="transaction.remark=='outamount'" style="color:red">-
                                            <i v-if="transaction.currency=='GBP'" class="fa fa-pound-sign" style="font-size:10px;"></i>
                                            <i v-if="transaction.currency=='USD'" class="fa fa-dollar-sign" style="font-size:10px;"></i>
                                        </span>
                                        <span v-if="transaction.remark=='inamount'">{{transaction.transactionAmount}}</span>
                                        <span v-if="transaction.remark=='outamount'" style="color:red">{{transaction.transactionAmount}}</span>
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
                                    <td>
                                        <span v-if="transaction.remark=='inamount'">
                                            <i v-if="transaction.currency=='GBP'" class="fa fa-pound-sign" style="font-size:10px;"></i>
                                            <i v-if="transaction.currency=='USD'" class="fa fa-dollar-sign" style="font-size:10px;"></i>
                                        </span>
                                        <span v-if="transaction.remark=='outamount'" style="color:red">-
                                            <i v-if="transaction.currency=='GBP'" class="fa fa-pound-sign" style="font-size:10px;"></i>
                                            <i v-if="transaction.currency=='USD'" class="fa fa-dollar-sign" style="font-size:10px;"></i>
                                        </span>
                                        <span v-if="transaction.remark=='inamount'">{{transaction.transactionAmount}}</span>
                                        <span v-if="transaction.remark=='outamount'" style="color:red">{{transaction.transactionAmount}}</span>
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
export default {
    data(){
        return{
            accounts:[],
            accountsgbp:[],
            accountsusd:[],
            balanceusd:'',
            balancegbp:'',
        }
    },
    mounted()
    {
        // this.getAccounts();
        this.getAccountsgbp();
        this.getAccountsusd();
        this.getAccountsBalancegbp();
        this.getAccountsBalanceusd();
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

</style>
