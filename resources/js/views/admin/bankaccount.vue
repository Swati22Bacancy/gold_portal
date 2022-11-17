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
                    <div class="col-md-8 dash-divs" style="cursor:pointer;" @click="clickAccount('4dae8287-51f7-4277-b556-f6409f8c4982','USD')">
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
                                <tr v-for="transaction in accountsusd.transactions" :key="transaction.transactionId">
                                    <td>{{transaction.creditorName}}{{transaction.debtorName}}{{transaction.payee}}</td>
                                    <td>
                                        <span v-if="transaction.inamount">
                                            <i v-if="transaction.transactionAmount.currency=='GBP'" class="fa fa-pound-sign" style="font-size:10px;"></i>
                                            <i v-if="transaction.transactionAmount.currency=='USD'" class="fa fa-dollar-sign" style="font-size:10px;"></i>
                                        </span>
                                        <span v-if="transaction.outamount" style="color:red">-
                                            <i v-if="transaction.transactionAmount.currency=='GBP'" class="fa fa-pound-sign" style="font-size:10px;"></i>
                                            <i v-if="transaction.transactionAmount.currency=='USD'" class="fa fa-dollar-sign" style="font-size:10px;"></i>
                                        </span>
                                        <span v-if="transaction.inamount">{{transaction.inamount}}</span>
                                        <span v-if="transaction.outamount" style="color:red">{{transaction.outamount}}</span>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-12" style="border-radius: 0px 0px 5px 5px;">
                    <div class="col-md-8 dash-divs">
                        <h4 style="margin-bottom:0; color: black;">
                            <b><i v-if="accountsusd.currency=='GBP'" class="fa fa-pound-sign" style="font-size:20px;color: black;"></i><i v-if="accountsusd.currency=='USD'" class="fa fa-dollar-sign" style="font-size:20px; color: black;"></i>{{accountsusd.balance}}</b>
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
                    <div class="col-md-8 dash-divs" style="cursor:pointer;" @click="clickAccount('ba3216c3-007d-44c4-963c-5e46a4ed70f5','GBP')">
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
                                <tr v-for="transaction in accountsgbp.transactions" :key="transaction.transactionId">
                                    <td>{{transaction.creditorName}}{{transaction.debtorName}}{{transaction.payee}}</td>
                                    <td>
                                        <span v-if="transaction.inamount">
                                            <i v-if="transaction.transactionAmount.currency=='GBP'" class="fa fa-pound-sign" style="font-size:10px;"></i>
                                            <i v-if="transaction.transactionAmount.currency=='USD'" class="fa fa-dollar-sign" style="font-size:10px;"></i>
                                        </span>
                                        <span v-if="transaction.outamount" style="color:red">-
                                            <i v-if="transaction.transactionAmount.currency=='GBP'" class="fa fa-pound-sign" style="font-size:10px;"></i>
                                            <i v-if="transaction.transactionAmount.currency=='USD'" class="fa fa-dollar-sign" style="font-size:10px;"></i>
                                        </span>
                                        <span v-if="transaction.inamount">{{transaction.inamount}}</span>
                                        <span v-if="transaction.outamount" style="color:red">{{transaction.outamount}}</span>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-12" style="border-radius: 0px 0px 5px 5px;">
                    <div class="col-md-8 dash-divs">
                        <h4 style="margin-bottom:0; color: black;">
                            <b><i v-if="accountsgbp.currency=='GBP'" class="fa fa-pound-sign" style="font-size:20px;color: black;"></i><i v-if="accountsgbp.currency=='USD'" class="fa fa-dollar-sign" style="font-size:20px; color: black;"></i>{{accountsgbp.balance}}</b>
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
        }
    },
    mounted()
    {
        
        // this.getAccounts();
        this.getAccountsgbp();
        this.getAccountsusd();
    },
    methods:{
        clickAccount(accountid,currency){
            var currencyid= (currency=='USD')?'1':'2';
            this.$router.push('/accountdetails/'+accountid+'/'+currencyid)
        },
        async getAccountsgbp() {
            console.log('in');
            return await axios.get("fetchaccountfeedswithid/ba3216c3-007d-44c4-963c-5e46a4ed70f5").then(response => {
                this.accountsgbp = response.data;
                console.log(response);
            });
        },
        getAccountsusd() {
            console.log('in1');
            return axios.get("fetchaccountfeedswithid/4dae8287-51f7-4277-b556-f6409f8c4982").then(response => {
                this.accountsusd = response.data;
                console.log(response);
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
