<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Bank Accounts</h1>
        </div>
        <div class="row">
            <div class="col-md-4" @click="clickAccount" v-for="account in accounts"  :key="account.id">
                <div style="border-radius: 5px 5px 0px 0px; border: 1px solid #B0E0E6; background-color: white;">
                  <div class="col-md-12">
                    <div class="col-md-8 dash-divs">
                        <h4 class="h3" style="margin-bottom:0; color:#3376C2;font-weight: 700;font-family: Titillium-Web-Bold;font-size: 23px;">
                            {{account.title}}
                        </h4>
                        <span style="color:black">{{account.account_no}}</span><br>
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
                                <tr v-for="transaction in account.transactions" :key="transaction.transactionId">
                                    <td>{{transaction.creditorName}}{{transaction.debtorName}}</td>
                                    <td>
                                        <i v-if="transaction.transactionAmount.currency=='GBP'" class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>
                                        <i v-if="transaction.transactionAmount.currency=='USD'" class="fa fa-dollar-sign" style="font-size:10px;margin-right:3px;"></i>
                                        {{transaction.transactionAmount.amount}}
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-12" style="border-radius: 0px 0px 5px 5px;">
                    <div class="col-md-8 dash-divs">
                        <h4 style="margin-bottom:0; color: black;">
                            <b><i v-if="account.currency=='GBP'" class="fa fa-pound-sign" style="font-size:20px;margin-right:6px; color: black;"></i><i v-if="account.currency=='USD'" class="fa fa-dollar-sign" style="font-size:20px;margin-right:6px; color: black;"></i>{{account.balance}}</b>
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
        }

    },
    mounted()
    {
        this.getAccounts();
    },
    methods:{
        clickAccount(){
            this.$router.push('/clickbankaccount')
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
