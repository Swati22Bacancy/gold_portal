<template>
    <div>
        <form class="crt-invoice" @submit.prevent="create_invoice">
            <!-- Page Heading -->
            <div
                class="d-sm-flex align-items-center justify-content-between mb-4"
            >
                <h1 class="h3 mb-0 text-gray-800">New Sales Invoice</h1>
                <div>
                    <button
                        type="submit"
                        class="btn admin-btn mobile-mb btn-nwidth"
                        style="background-color: #7ADAAA !important;"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        class="btn admin-btn mobile-mb btn-nwidth"
                    >
                        Cancel
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 createinvoice-div">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Customer</label>
                                <div class="input-group mb-3 d-flex">
                                    <model-select
                                        class="modal-selection"
                                        :options="customers"
                                        v-model="formdata.customer_id"
                                        placeholder="select item"
                                    ></model-select>

                                    <div class="select-group-append">
                                        <div class="input-icons">
                                            <button
                                                class="btn-modal"
                                                data-toggle="modal"
                                                data-target="#addcreateinvoice"
                                            >
                                                <span
                                                    class="fas fa-plus"
                                                ></span>
                                            </button>
                                            <!-- Modal -->
                                            <div
                                                class="modal fade"
                                                id="addcreateinvoice"
                                                tabindex="-1"
                                                role="dialog"
                                                aria-labelledby="addcreateinvoice"
                                                aria-hidden="true"
                                            >
                                                <div
                                                    class="modal-dialog"
                                                    role="document"
                                                >
                                                    <div class="modal-content">
                                                        <div
                                                            class="modal-header"
                                                        >
                                                            <h6
                                                                class="modal-title"
                                                                id="addcreateinvoice"
                                                            >
                                                                Add Invoice
                                                            </h6>
                                                            <button
                                                                type="button"
                                                                class="close"
                                                                data-dismiss="modal"
                                                                aria-label="Close"
                                                            >
                                                                <span
                                                                    aria-hidden="true"
                                                                    style="color: #fff"
                                                                    >&times;</span
                                                                >
                                                            </button>
                                                        </div>

                                                        <div class="modal-body">
                                                            <div
                                                                class="row mb-4"
                                                            >
                                                                <div
                                                                    class="col-md-3"
                                                                >
                                                                    <div
                                                                        class="form-group customer-input"
                                                                    >
                                                                        <label
                                                                            >Customer
                                                                            Type</label
                                                                        ><br />
                                                                        <button
                                                                            type="button"
                                                                            v-on:click="
                                                                                changetype(
                                                                                    'business'
                                                                                )
                                                                            "
                                                                            class="btn admin-btn mobile-mb"
                                                                            :class="
                                                                                customerType ==
                                                                                'business'
                                                                                    ? 'dark-theme-btn'
                                                                                    : 'light-theme-btn'
                                                                            "
                                                                            style="margin: 0"
                                                                        >
                                                                            Business
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="col-md-6"
                                                                ></div>
                                                            </div>
                                                            <div
                                                                class="row"
                                                                v-if="
                                                                    customerType ==
                                                                        'business'
                                                                "
                                                            >
                                                                <div
                                                                    class="col-md-6 detail-div"
                                                                >
                                                                    <h6>
                                                                        Company
                                                                        Details
                                                                    </h6>
                                                                    <div
                                                                        class="form-group customer-input"
                                                                    >
                                                                        <label
                                                                            class="required-field"
                                                                            >Company
                                                                            Name</label
                                                                        >
                                                                        <input
                                                                            type="text"
                                                                            class="form-control form-control-user"
                                                                            id="crt-customer"
                                                                            aria-describedby="emailHelp"
                                                                            placeholder=""
                                                                            v-model="
                                                                                formdata.company_name
                                                                            "
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        class="form-group customer-input"
                                                                    >
                                                                        <label
                                                                            class="required-field"
                                                                            >Registered
                                                                            Address</label
                                                                        >
                                                                        <input
                                                                            type="text"
                                                                            class="form-control form-control-user"
                                                                            id="crt-customer"
                                                                            aria-describedby="emailHelp"
                                                                            placeholder=""
                                                                            v-model="
                                                                                formdata.registered_address
                                                                            "
                                                                        />
                                                                    </div>
                                                                    <h6>
                                                                        Contact
                                                                        Details
                                                                    </h6>
                                                                    <div
                                                                        class="form-group customer-input"
                                                                    >
                                                                        <label
                                                                            class="required-field"
                                                                            >Email</label
                                                                        >
                                                                        <input
                                                                            type="text"
                                                                            class="form-control form-control-user"
                                                                            id="crt-customer"
                                                                            aria-describedby="emailHelp"
                                                                            placeholder=""
                                                                            v-model="
                                                                                formdata.email
                                                                            "
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            class="modal-footer"
                                                        >
                                                            <button
                                                                type="submit"
                                                                class="btn admin-btn mobile-mb btn-nwidth"
                                                                style="background-color: #7adaaa !important"
                                                            >
                                                                Save
                                                            </button>
                                                            <router-link
                                                                to="/customers"
                                                                ><button
                                                                    type="button"
                                                                    class="btn admin-btn mobile-mb btn-nwidth"
                                                                >
                                                                    Cancel
                                                                </button></router-link
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Invoice No.</label>
                                <input
                                    type="text"
                                    class="form-control form-control-user"
                                    id="crt-invoice"
                                    aria-describedby="emailHelp"
                                    placeholder=""
                                    v-model="formdata.companycode"
                                />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Issue Date</label>
                                <Datepicker></Datepicker>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Due Date</label>
                                <Datepicker></Datepicker>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Delivery & Billing Address</label>
                                <input
                                    type="text"
                                    class="form-control form-control-user"
                                    id="crt-invoice"
                                    aria-describedby="emailHelp"
                                    placeholder=""
                                    v-model="formdata.companycode"
                                />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Reference</label>
                                <input
                                    type="text"
                                    class="form-control form-control-user"
                                    id="crt-invoice"
                                    aria-describedby="emailHelp"
                                    placeholder=""
                                    v-model="formdata.companycode"
                                />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Currency</label>
                                <select class="tab-selector">
                                    <option value="Option 1" selected
                                        >Group</option
                                    >
                                    <option value="Option 1">Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Amounts are</label>
                                <select class="tab-selector">
                                    <option value="Option 1" selected
                                        >Group</option
                                    >
                                    <option value="Option 1">Option 1</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-2">
                            <div class="form-group">
                                <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck"
                                />
                                <label
                                    class="custom-control-label"
                                    for="customCheck"
                                    >Recurring Invoice</label
                                >
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Frequency</label>
                                <input
                                    type="text"
                                    class="form-control form-control-user"
                                    id="crt-invoice"
                                    aria-describedby="emailHelp"
                                    placeholder=""
                                    v-model="formdata.companycode"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 createinvoice-div pb-3" style="padding:0">
                    <div class="">
                        <div class="table-responsive table-div mb-2">
                            <table
                                class="table"
                                id="createinvoice-datatable"
                                width="100%"
                                cellspacing="0"
                                style="margin-bottom:0"
                            >
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Product</th>
                                        <th>Weight(gm)</th>
                                        <th>Quantity</th>
                                        <th>Unit Price</th>
                                        <th>Vat</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(invoice_item,
                                        k) in invoice_items"
                                        :key="k"
                                    >
                                        <td>
                                            <select
                                                class="tab-selector"
                                                v-model="
                                                    invoice_item.invoice_type
                                                "
                                            >
                                                <option
                                                    value="Option 1"
                                                    selected
                                                    >Group</option
                                                >
                                                <option value="Option 1"
                                                    >Option 1</option
                                                >
                                            </select>
                                        </td>
                                        <td>
                                            <select
                                                class="tab-selector"
                                                v-model="
                                                    invoice_item.invoice_product
                                                "
                                            >
                                                <option
                                                    value="Option 1"
                                                    selected
                                                    >Group</option
                                                >
                                                <option value="Option 1"
                                                    >Option 1</option
                                                >
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="form-control form-control-user"
                                                id="crt-invoice"
                                                aria-describedby="emailHelp"
                                                placeholder=""
                                                v-model="invoice_item.weight"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="form-control form-control-user"
                                                id="crt-invoice"
                                                aria-describedby="emailHelp"
                                                placeholder=""
                                                v-model="invoice_item.quantity"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                class="form-control form-control-user"
                                                id="crt-invoice"
                                                aria-describedby="emailHelp"
                                                placeholder=""
                                                v-model="invoice_item.unitprice"
                                            />
                                        </td>
                                        <td>
                                            <select
                                                class="tab-selector"
                                                v-model="invoice_item.vat"
                                            >
                                                <option
                                                    value="Option 1"
                                                    selected
                                                    >Group</option
                                                >
                                                <option value="Option 1"
                                                    >Option 1</option
                                                >
                                            </select>
                                        </td>
                                        <td>4320</td>
                                        <td>GB78602023</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <button
                                type="button"
                                class="btn admin-btn mobile-mb btn-addwidth"
                                style="background-color: #7ADAAA !important;"
                                @click="addLine"
                            >
                                <i
                                    class="fas fa-plus"
                                    style="margin-right: 5px;"
                                ></i
                                >Add Line Item
                            </button>
                            <button
                                type="button"
                                class="btn admin-btn mobile-mb btn-addwidth"
                            >
                                <i
                                    class="fas fa-plus"
                                    style="margin-right: 5px;"
                                ></i
                                >Add Comment
                            </button>
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-2 sum-price">
                            <ul style="text-align: right;">
                                <li style="color:#3376C2">
                                    Sub Total (<i
                                        class="fa fa-pound-sign"
                                        style="font-size:10px;margin-right:3px;"
                                    ></i
                                    >)
                                </li>
                                <li style="color:#3376C2">
                                    VAT Total (<i
                                        class="fa fa-pound-sign"
                                        style="font-size:10px;margin-right:3px;"
                                    ></i
                                    >)
                                </li>
                                <li style="color:#3376C2">
                                    Total (<i
                                        class="fa fa-pound-sign"
                                        style="font-size:10px;margin-right:3px;"
                                    ></i
                                    >)
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-2 sum-price">
                            <ul>
                                <li style="font-size:13px;">8000</li>
                                <li style="font-size:13px;">640</li>
                                <li style="font-size:13px;">8640</li>
                            </ul>
                        </div>
                    </div>
                    <!-- <div class="row">
            <div class="col-md-6">
              
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2">Sub Total</div>
            <div class="col-md-2">8000</div>
          </div>
          <div class="row">
            <div class="col-md-6">
              
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2">Sub Total</div>
            <div class="col-md-2">8000</div>
          </div> -->
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 mt-4">
                    <button
                        type="submit"
                        class="btn admin-btn mobile-mb btn-nwidth"
                        style="background-color: #7ADAAA !important;float: right;"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { ModelSelect } from "vue-search-select";
import Datepicker from "vuejs-datepicker";
export default {
    name: "CreateInvoice",
    components: {
        Datepicker,
        ModelSelect
    },
    data() {
        return {
            options: [],
            item: {
                value: "",
                text: ""
            },
            customerType: "business",
            theme: "cust-type",
            formdata: {},
            customers: [],
            rows: [],
            invoice_items: [
                {
                    invoice_type: "",
                    invoice_product: "",
                    weight: "",
                    quantity: "",
                    unitprice: "",
                    vat: "",
                    invoice_amount: ""
                }
            ]
        };
    },
    methods: {
        changetype(type) {
            this.customerType = type;
        },
        addLine() {
            this.invoice_items.push({
                invoice_type: "",
                invoice_product: "",
                weight: "",
                quantity: "",
                unitprice: "",
                vat: "",
                invoice_amount: ""
            });
        },
        async create_invoice() {
            try {
                this.formdata.customertype = this.customerType;
                const response = await axios.post("create_invoice", {
                    firstname: this.formdata.firstname,
                    lastname: this.formdata.lastname,
                    email: this.formdata.email,
                    companyname: this.formdata.companyname,
                    registeredaddress: this.formdata.registeredaddress,
                    vat: this.formdata.vat,
                    telephone: this.formdata.telephone,
                    whatsapp: this.formdata.whatsapp,
                    title: this.formdata.title,
                    creditlimit: this.formdata.creditlimit,
                    companycode: this.formdata.companycode,
                    customertype: this.formdata.customertype
                });
            } catch (error) {
                console.log(error);
            }
        },
        getCustomers() {
            return axios.get("customerlist/all").then(response => {
                this.customers = response.data;
                console.log(this.customers);
                this.customers = this.customers.map(customer => {
                    return {
                        value: customer.id,
                        text: `${customer.first_name ||
                            ""} ${customer.last_name || ""} `
                    };
                });
                console.log(this.customers);
            });
        }
    },
    mounted() {
        this.getCustomers();
    }
};
</script>
<style scoped>
.btn-modal {
    color: black;
    border: 0;
    background: #7adaaa;
}
.modal-selection {
    flex: 1 !important;
}
#createinvoice-datatable thead {
    background: #3376c2;
    color: #fff;
    font-size: 13px;
}
#createinvoice-datatable thead tr th {
    font-weight: 100 !important;
}
#createinvoice-datatable {
    font-size: 13px;
    color: #000;
}
.createinvoice-div {
    background: #fff;
    padding: 34px 23px 0px 23px;
    border-radius: 8px;
    box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-invoice label {
    font-size: 12px;
}
.crt-invoice {
    padding: 0px 2%;
    color: #000;
}

.dark-theme-btn {
    background-color: #245388 !important;
    color: #fff;
    width: 100px;
    font-size: 12px !important;
}
.light-theme-btn {
    background-color: #edf2f6 !important;
    color: #000;
    width: 100px;
    font-size: 12px !important;
}
.btn:focus,
.btn.focus {
    box-shadow: 0 0;
}
.table-div {
    border-bottom: 1px solid #ccc;
}
.tab-selector {
    border: 1px solid #d6e3f2 !important;
    height: 40px;
    border-radius: 5px;
    width: 100%;
    font-size: 13px;
}
.btn-addwidth {
    width: 130px;
}
.sum-price ul {
    list-style-type: none;
}
.sum-price li {
    padding: 5px 0px;
    font-size: 11px;
}
</style>
