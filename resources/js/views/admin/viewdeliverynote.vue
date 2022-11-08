<template>
    <div class="row">
        <div class="col-1" v-if="sidebarflag" style="font-size: 12px;">
            <p
                v-for="sale in sales"
                class="invoicelist"
                :key="sale.id"
                v-bind:class="
                    sale.invoiceno == formdata.invoiceno ? 'bold_font' : ''
                "
                style="color:#000"
            >
                <router-link
                    :to="{ name: 'viewsales', params: { id: sale.id } }"
                    ><b>{{ sale.invoiceno }}</b></router-link
                >
            </p>
        </div>
        <!-- Page Heading -->
        <div class="col-11">
            <div
                class="d-sm-flex align-items-center justify-content-between mb-4"
                style="margin-right:120px"
            >
                <div
                    class="d-sm-flex align-items-center justify-content-between"
                >
                    <button @click="sidebarToggle" class="btn-head">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    <h1
                        class="h3 mb-0 text-gray-800"
                        style="margin-left:20px; margin-right: 20px;"
                    >
                        {{ formdata.invoiceno }}
                    </h1>
                    <button @click="sidebarToggle" class="btn-head">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div
                    class="d-sm-flex align-items-center justify-content-between"
                >
                    <div>
                        <VueHtml2pdf
                            :show-layout="false"
                            :float-layout="true"
                            :enable-download="true"
                            :preview-modal="false"
                            :paginate-elements-by-height="1400"
                            :filename="formdata.invoiceno"
                            :pdf-quality="2"
                            :manual-pagination="false"
                            pdf-format="a4"
                            pdf-orientation="portrait"
                            pdf-content-width="800px"
                            ref="html2Pdf"
                        >
                            <section
                                slot="pdf-content"
                                class="pdf_section"
                                id="pdf_section"
                            >
                                <div style=" padding: 0px 2%;">
                                    <div
                                        class="container"
                                        style=" padding: 30px 6%;"
                                    >
                                        <div class="row">
                                            <div
                                                class="col-8"
                                                style="padding-top: 55px;"
                                            >
                                                <!-- <img
                                                    width="200"
                                                    height="46"
                                                    src="data:image/jpg;base64,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"
                                                /> -->
                                                <img :src="'/images/logo.png'" style="width:230px;"/>
                                            </div>
                                            <div
                                                class="col-4 s3"
                                                style="font-size:9px; text-align:left; float:left"
                                            >
                                                <h2
                                                    style="padding-top: 45px; padding-left: 13pt;text-indent: -1pt;text-align: left; font-size:13px;"
                                                >
                                                    {{
                                                        companydata.company_name
                                                    }}
                                                    <br />{{
                                                        companydata.address1
                                                    }}<br />
                                                    {{ companydata.address2 }}
                                                </h2>
                                                <h2
                                                    style="padding:0;padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:13px;"
                                                >
                                                    {{ companydata.postcode }}
                                                </h2>
                                                <br>
                                                <h2
                                                    style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:13px;"
                                                >
                                                    Vat No:
                                                    {{ companydata.vat_number }}
                                                </h2>
                                                <h2
                                                    style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:13px;"
                                                >
                                                    t:
                                                    {{
                                                        companydata.contact_mobile
                                                    }}
                                                </h2>
                                                <h2
                                                    style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:13px;"
                                                >
                                                e:
                                                    {{
                                                        companydata.contact_email
                                                    }}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ---------------------------------------- -->
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-8 cont2">
                                                <h2
                                                    style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:13px;font-weight: 500;"
                                                >
                                                    {{ formdata.firstname }}
                                                    {{ formdata.lastname }}
                                            </h2>
                                                <h2
                                                    style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:13px;font-weight: 500;"
                                                >
                                                    {{
                                                        formdata.billing_address
                                                    }}
                                                </h2>
                                                <h2
                                                    style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:13px;font-weight: 500;"
                                                >
                                                    VAT: {{ formdata.vat }}
                                            </h2>
                                            </div>
                                            <div class="col-4">
                                                <p
                                                    class="s1"
                                                    style="padding-left: 11pt; text-indent: 0pt; margin-right: 10px; text-align: left"
                                                >
                                                    SALES INVOICE
                                                </p>
                                                <br>
                                                <div
                                                    style="font-size:10px;  text-align: left;"
                                                >
                                                    <h2
                                                        style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:12px;"
                                                    >
                                                        Invoice Date
                                                    </h2>
                                                    <h2
                                                            style="text-align: left; font-size:12px;padding-left: 13pt; text-indent: 0pt;font-weight: 500;"
                                                            >{{
                                                                dateFormateChanger(
                                                                    formdata.issue_date
                                                                )
                                                            }}</h2
                                                        >
                                                   

                                                    <h2
                                                        style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:12px;"
                                                    >
                                                        Invoice Number
                                                    </h2>
                                                    <h2
                                                        style="text-align: left; font-size:12px;padding-left: 13pt; text-indent: 0pt;font-weight: 500;"
                                                            >{{
                                                                formdata.invoiceno
                                                            }}</h2
                                                        >
                                                    <h2
                                                        style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:12px;"
                                                    >
                                                        Account
                                                    </h2>
                                                    <h2
                                                    style="text-align: left; font-size:12px;padding-left: 13pt; text-indent: 0pt;font-weight: 500;"
                                                    >
                                                        {{formdata.company_code}}
                                                    </h2>
                                                    <br /><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <!-- ----------------------------------------- -->
                                    <div
                                        class="container"
                                        style="font-size:10px"
                                    >
                                        <table style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th style="width:350px;font-size: 12px;padding-bottom:8px;">
                                                        <h2 style="font-size: 14px;">Description</h2>
                                                    </th>
                                                    <th style="width: 120px;font-size: 12px;padding-bottom:8px;">
                                                        <h2 style="font-size: 14px;">Unit Price</h2>
                                                    </th>
                                                    <th style="width: 120px;font-size: 12px;padding-bottom:8px;">
                                                        <h2 style="font-size: 14px;">VAT(%)</h2>
                                                    </th>
                                                    <th style="font-size: 12px;padding-bottom:8px;text-align: right;"><h2 style="font-size: 14px;">Amount GBP</h2></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="saleitem in formdata.deliverynotesitem"
                                                    :key="saleitem.id" style="border-bottom:1px solid #ccc !important;"
                                                >
                                                    <td style="padding-bottom:4px;padding-top:3px;font-size: 12px;">
                                                        {{
                                                            saleitem.quantity
                                                        }}
                                                        x
                                                        {{ saleitem.typename }}
                                                        {{
                                                            saleitem.productname
                                                        }}
                                                        ({{ saleitem.weight }}g)
                                                    </td>
                                                    <td style="padding-bottom:4px;padding-top:3px;font-size: 12px;">
                                                        {{ saleitem.unitprice }}
                                                    </td>
                                                    <td style="padding-bottom:4px;padding-top:3px;font-size: 12px;">{{ saleitem.vat }}</td>
                                                    <td style="padding-bottom:4px;padding-top:3px;font-size: 12px;text-align: right;">
                                                        {{
                                                            saleitem.invoice_amount
                                                        }}
                                                    </td>
                                                </tr>
                                                <br /><br />
                                                <tr>
                                                    <td
                                                        style="border:none"
                                                    ></td>
                                                    <td style="border-bottom: 1px solid black;"></td>
                                                    <td style="font-size: 12px;border-bottom: 1px solid black;"><h2 style="font-size: 12px;font-weight: 500;">Total No VAT</h2></td>
                                                    <td style="font-size: 12px;text-align: right;border-bottom: 1px solid black;">
                                                        {{ formdata.vattotal }}
                                                    </td>
                                                </tr>
                                                <br /><br />
                                                <tr>
                                                    <td
                                                        style="border:none"
                                                    ></td>
                                                    <td
                                                        style="border:none"
                                                    ></td>
                                                    <td style="border:none;font-weight: bold;font-size: 12px;">
                                                        <h2 style="font-size: 13px;">Amount Due GBP</h2>
                                                    </td>
                                                    <td style="border:none;font-weight: bold;font-size: 12px;text-align: right;">
                                                        {{
                                                            formdata.totalamount
                                                        }}
                                                    </td>
                                                </tr>
                                                <br />
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- ------------------------ -->
                                    <div class="container s3">
                                        <p
                                            style="text-indent: 0pt;text-align: justify;font-size: 12px;"
                                        >
                                            Payment Terms:
                                        </p>
                                        <p style=" text-indent: 0pt; text-align: justify; font-size: 13px;line-height:1.1">
                                            Goods supplied by us remain the
                                            property of Gold Warehouse Limited
                                            until paid for in full. Interest
                                            will be charged at 4% per month.
                                            The person signing for the goods is
                                            personally responsible for the
                                            payment of this invoice and for any
                                            loss or damage however caused.
                                        </p>
                                        <br /><br />
                                        <p
                                            style=" text-indent: 0pt; text-align: left; font-size: 12px;"
                                        >
                                            <img
                                                :src="
                                                    signaturedata.signature_filename
                                                "
                                                style="height:100px;"
                                            />
                                            <br>
                                            <span>Signed By: <span style="font-weight:600;">{{signaturedata.signed_by}}</span></span>
                                            <br />
                                        </p>
                                    </div>
                                    <br />
                                    <div
                                        class="container s3"
                                        style="font-size:13px;width:100%"
                                    >
                                        <p
                                            style="text-indent: 0pt; text-align: left;line-height:1.1"
                                        >
                                            Gold Bank is a trading name for Gold
                                            Warehouse Ltd<br />
                                            Please make BACS/CHAPS/FASTER
                                            payments to:<br />
                                        </p>
                                        <br />

                                        <div class="flex-parent">
                                            <div class="box" style="width:100%">
                                                <p class="box_size">
                                                    <span
                                                        style="font-weight:bold"
                                                        >GBP Account</span
                                                    >
                                                </p>
                                                <p class="box_size">
                                                    {{companydata.account_name}}<br />
                                                    Sort code: <span
                                                        style="font-weight:bold"
                                                        >{{companydata.sort_code}}</span
                                                    ><br />
                                                    Account No: <span
                                                        style="font-weight:bold"
                                                        >{{companydata.account_number}}</span
                                                    >
                                                </p>
                                            </div>

                                            <div class="box" style="width:100%">
                                                <p class="box_size">
                                                    <span style="font-weight:bold">USD Account</span>
                                                </p>
                                                <p class="box_size">
                                                    <span style="font-weight:bold">Account number: </span>{{companydata.usd_account_number}}<br />
                                                    <span style="font-weight:bold">Bank code
                                                        (SWIFT/BIC): </span>{{companydata.bank_code}}<br />
                                                    <span style="font-weight:bold">ABA Routing No: </span>{{companydata.routing_number}}
                                                </p>
                                            </div>
                                        </div>
                                        <br /><br />

                                        <p style="padding-left: 6pt; text-indent: 0pt; text-align: left" v-if="output_tax">
                                            The Output Tax Of £
                                            <span style="font-weight:600;">{{
                                                output_tax
                                            }}</span>
                                            On Supply Of This Gold Is To Be
                                            Accounted For By The Buyer To HMRC.
                                        </p>
                                        <br /><br /><br />
                                    </div>
                                </div>
                                <div>
                                    <p
                                        class="s4"
                                        style="padding-left: 49pt; text-indent: 0pt; text-align: center;font-size: 10px;"
                                    >
                                        Goldbank T/AS Gold Warehouse Limited,
                                        215 The Broadway, Southall, Middlesex,
                                        UB1 1NB. Registered in England Number
                                        08101794.<br />
                                        <a
                                            href="mailto:accounts@gold-bank.co.uk"
                                            class="s5"
                                            target="_blank" style="font-size: 10px;"
                                        >
                                            VAT Registration Number 140187339
                                            Telephone:0203 500 1111 Email:
                                            accounts@gold-bank.co.uk</a
                                        >
                                    </p>
                                </div>
                            </section>
                        </VueHtml2pdf>

                        <span
                            style="color:#48c6f6;background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 10%;font-size: 25px; margin-left: 30%;cursor: pointer;"
                            class="material-symbols-outlined"
                            @click="generateReport"
                            >download</span
                        >
                    </div>
                    <i
                        class="fab fa-whatsapp"
                        style="color:#00AA5B; background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%; font-size: 18px;"
                    ></i>
                    <!-- <i class="fas fa-envelope" style="background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 30%;"></i> -->
                    <span
                        style="color:blue;background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 30%;font-size: 19px;cursor: pointer;"
                        class="material-symbols-outlined"
                        @click="sendemail"
                        >mail</span
                    >
                    <the-loader v-if="loading"></the-loader>
                    <!-- <i class="fas fa-print" @click="ondownload()" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 30%;"></i> -->
                    <span
                        class="material-symbols-outlined"
                        style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 30%;cursor: pointer;"
                        @click="printDiv('pdf_section')"
                        >print</span
                    >
                </div>
                <div
                    class="d-sm-flex align-items-center justify-content-between"
                    style="margin-left: -20%;"
                >
                    <span
                        style="background-color: #EDF2F6; border-radius:50%; padding: 18%; margin-right:35%;color:red;cursor: pointer;"
                        class="material-symbols-outlined"
                        data-toggle="modal"
                        data-target="#deleteInvoiceConfirmation"
                        >delete</span
                    >
                    <!-- <i
                      class="fas fa-trash-alt"
                      style="background-color: #EDF2F6; border-radius:50%; padding: 15%; "
                  ></i> -->
                    <span
                        style="background-color: #EDF2F6; border-radius:50%; padding: 18%;cursor: pointer;"
                        @click="edit_deliverynote()"
                        class="material-symbols-outlined"
                        >edit</span
                    >
                </div>
            </div>
            <div class="">
                <div class="col-md-12 viewsales-div">
                    <div class="row" style="padding-bottom:40px">
                        <div
                            class="col-md-4"
                            style="border-right:  0.5px solid #4682B4;"
                        >
                            <p style="color:#4682B4; font-size: 15px;">
                                Customer
                            </p>
                            <span
                                >{{ formdata.firstname }}
                                {{ formdata.lastname }}, <br />{{
                                    formdata.billing_address
                                }}</span
                            >
                        </div>
                        <div
                            class="col-md-4"
                            style="border-right:  1px solid #4682B4;"
                        >
                            <p style="color:#4682B4; font-size: 15px;">
                                VAT No.
                            </p>
                            <span>{{ formdata.vat }}</span>
                        </div>
                        <div
                            class="col-md-4"
                        >
                            <p style="color:#4682B4; font-size: 15px;">
                                Issue Date
                            </p>
                            <span>{{
                                dateFormateChanger(formdata.issue_date)
                            }}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <div class="viewsales-div pb-3" style="padding:0">
                    <div class="">
                        <div
                            class="table-responsive table-div mb-2"
                            style="border-radius: 8px;"
                        >
                            <table
                                class="table"
                                id="createinvoice-datatable"
                                width="100%"
                                cellspacing="0"
                                style="margin-bottom:0"
                            >
                                <thead>
                                    <tr>
                                        <th>Product Type</th>
                                        <th>Product</th>
                                        <th>Weight(gms)</th>
                                        <th>Quantity</th>
                                        <th>Unit Price</th>
                                        <th>Vat(%)</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="saleitem in formdata.deliverynotesitem"
                                        :key="saleitem.id"
                                    >
                                        <td>{{ saleitem.typename }}</td>
                                        <td>{{ saleitem.productname }}</td>
                                        <td>{{ saleitem.weight }}</td>
                                        <td>{{ saleitem.quantity }}</td>
                                        <td>
                                            <span
                                                :class="
                                                    saleitem.price_status ==
                                                    'mismatch'
                                                        ? 'red-color'
                                                        : 'grey-color'
                                                "
                                                ><i
                                                    class="fa fa-pound-sign"
                                                    style="font-size:10px;"
                                                ></i
                                                >{{ saleitem.unitprice }}</span
                                            >
                                        </td>
                                        <td>{{ saleitem.vat }}</td>
                                        <td>
                                            <i
                                                class="fa fa-pound-sign"
                                                style="font-size:10px;"
                                            ></i
                                            >{{ saleitem.invoice_amount }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div v-if="sign_flag">
                                <img
                                    :src="signaturedata.signature_filename"
                                    style="height:100px;"
                                /><br />
                                <span class="ml-3"
                                    >Signed By:
                                    <span style="font-weight:600;">{{
                                        signaturedata.signed_by
                                    }}</span></span
                                >
                            </div>
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-2 sum-price">
                            <ul style="text-align: left;">
                                <li style="color:#3376C2">Sub Total</li>
                                <li style="color:#3376C2">VAT Total</li>
                                <li style="color:#3376C2">Total</li>
                            </ul>
                        </div>
                        <div class="col-md-2 sum-price">
                            <ul>
                                <li style="font-size:13px;">
                                    <i
                                        class="fa fa-pound-sign"
                                        style="font-size:10px;margin-right:3px;"
                                    ></i
                                    >{{ formdata.subtotal }}
                                </li>
                                <li style="font-size:13px;">
                                    <i
                                        class="fa fa-pound-sign"
                                        style="font-size:10px;margin-right:3px;"
                                    ></i
                                    >{{ formdata.vattotal }}
                                </li>
                                <li style="font-size:13px;">
                                    <i
                                        class="fa fa-pound-sign"
                                        style="font-size:10px;margin-right:3px;"
                                    ></i
                                    ><b>{{ formdata.totalamount }}</b>
                                </li>
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
           <!-- Modal -->
            <div
                class="modal fade"
                id="deleteInvoiceConfirmation"
                tabindex="-1"
                role="dialog"
                aria-labelledby="deleteInvoiceConfirmationLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6
                                class="modal-title"
                                id="deleteInvoiceConfirmationLabel"
                            >
                                Confirmation
                            </h6>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true" style="color:#fff"
                                    >&times;</span
                                >
                            </button>
                        </div>
                        <div class="modal-body">
                            <p style="color:#000;font-size:14px;">
                                Are you sure you want to delete this Delivery Note?
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn admin-btn mobile-mb"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                class="btn admin-btn mobile-mb"
                                style="background-color: #ff0000 !important;color: #fff;"
                                @click="deleteDeliveryNote()"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import moment from "moment";
import { ModelSelect } from "vue-search-select";
import Datepicker from "vuejs-datepicker";
import { objectToFormData } from "../../object-to-formdata";
import VueHtml2pdf from "vue-html2pdf";
import VueSignaturePad from "vue-signature-pad";
import TheLoader from "../../components/TheLoader";

export default {
    name: "ViewDeliveryNote",
    components: {
        Datepicker,
        moment,
        ModelSelect,
        VueHtml2pdf,
        VueSignaturePad,
        TheLoader
    },
    data() {
        return {
            customerType: "business",
            addpayment: "",
            addrefund: "",
            theme: "cust-type",
            formdata: {},
            companydata: {},
            rows: [],
            urlArr: { 1: [], 2: [], 3: [], 4: [] },
            filesArr: { 1: null, 2: null, 3: null, 4: null },
            invoice_items: [
                {
                    payment_date: Date.now(),
                    totalamount: "",
                    bank: "ICIC Bank Accounts",
                    method: "Bank Transfer",
                    comment: "",
                    action: ""
                }
            ],
            refund_items: [
                {
                    refund_date: Date.now(),
                    totalamount: "",
                    bank: "ICIC Bank Accounts",
                    method: "Bank Transfer",
                    comment: "",
                    action: "Refund"
                }
            ],
            tabflag: false,
            sidebarflag: false,
            paymentid: "",
            refundid: "",
            fileid: "",
            paymentcount: 0,
            due_payment: "",
            invoice_status: "",
            payment_check: "",
            paymenttab: false,
            notestab: false,
            kyctab: false,
            selectedtab: "payment",
            note: "",
            over_paid: 0,
            refundcount: 0,
            payaction: "",
            paymentclass: "",
            sales: [],
            postFormData: {},
            uploaddata: {
                registration: [],
                vat: [],
                iddoc: [],
                credit: []
            },
            kycdocs: [],
            cashSelected: false,
            purchases: [],
            purchase_id: "",
            purchase_amount: "",
            signed_by: "",
            no_sign: false,
            signaturedata: {
                signature_filename: "",
                signed_by: ""
            },
            sign_flag: "",
            output_tax: "",
            loading:false,
        };
    },
    methods: {
        deleteDeliveryNote() {
            axios
                .get("/delete_deliverynote/" + this.$route.params.id)
                .then(resp => {
                    this.$router.push("/deliverynotes");
                    this.$router.go();
                })
                .catch(error => {
                    let message = "Something went wrong, Please try again";
                    let toast = Vue.toasted.show(message, {
                        theme: "toasted-error",
                        position: "top-center",
                        duration: 5000
                    });
                    console.log(error);
                });
        },
        edit_deliverynote() {
            this.$router.push("/edit_deliverynote/" + this.$route.params.id);
        },
        generateReport() {
            this.$refs.html2Pdf.generatePdf();
        },
        async sendemail() {
            this.loading = true
            var maildata = {};
            maildata.salesdata = this.formdata;
            maildata.customeremail = this.formdata.customer_email;
            maildata.companydata = this.companydata;
            maildata.signaturedata = this.signaturedata;
            maildata.output_tax = this.output_tax;
            const response = await axios.post("send-email", maildata).then(resp => {
                    if (resp.data.status == "success") {
                        this.loading = false;
                        let toast = Vue.toasted.show(
                            "Email has been sent successfully",
                            {
                                theme: "toasted-success",
                                position: "top-center",
                                duration: 5000
                            }
                        );
                    } else {
                        this.loading = false;
                        let toast = Vue.toasted.show(
                            "Something went wrong, Please try again",
                            {
                                theme: "toasted-error",
                                position: "top-center",
                                duration: 5000
                            }
                        );
                    }
                })
                .catch(error => {
                
                    this.loading = false;
                        let toast = Vue.toasted.show(
                            "Internal error, please try again later",
                            {
                                theme: "toasted-error",
                                position: "top-center",
                                duration: 5000
                            }
                        );
                //app.$notify(error.response.data.error, "error");
            });
            // console.log('in');
            // axios.post('/send-email')
            // .then((response) => {

            // });
        },
        printDiv(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;
        },
        ondownload() {
            axios({
                url: "downloadPdf",
                method: "GET",
                responseType: "arraybuffer"
            }).then(response => {
                let blob = new Blob([response.data], {
                    type: "application/pdf"
                });
                let link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "test.pdf";
                link.click();
            });
        },
        fetchPo() {
            axios
                .get("/purchase_details/" + this.purchase_id)
                .then(response => {
                    this.purchase_amount = response.data.totalamount;
                });
        },
        dateFormateChanger(d) {
            return moment(d, "YYYY-MM-DD").format("DD MMM YYYY");
        },
        gotosales(id) {
            this.$router.push("/viewsales/" + id);
        },
        sidebarToggle() {
            this.sidebarflag = !this.sidebarflag;
        },
        changetype(type) {
            this.customerType = type;
        },
        
    },
    mounted() {
        axios
            .get("/saved_companydetails/")
            .then(response => {
                this.companydata = response.data;
            })
            .catch(function(error) {
                //app.$notify(error.response.data.error, "error");
            });
        axios
            .get("/deliverynotes_details/" + this.$route.params.id)
            .then(response => {
                this.formdata = response.data;
                this.paymentcount = this.formdata.salepayments.length;
                if (response.data.payment_due < 0) {
                    this.over_paid = response.data.payment_due.toFixed(2);
                }
                this.due_payment =
                    response.data.payment_due < 0
                        ? 0
                        : response.data.payment_due;

                this.due_payment = this.due_payment.toFixed(2);
                if (this.paymentcount == 0) {
                    this.invoice_status = "UnPaid";
                    this.payment_check = "Yes";
                } else if (this.over_paid < 0) {
                    this.invoice_status = "Over Paid";
                    this.payment_check = "";
                } else if (this.due_payment == 0) {
                    this.invoice_status = "Paid";
                    this.payment_check = "";
                } else {
                    this.invoice_status = "Partially Paid";
                    this.payment_check = "Yes";
                }
                this.output_tax = 0;
                for (var j = 0; j < this.formdata.deliverynotesitem.length; j++) {
                    if ( empty(this.formdata.deliverynotesitem[j].vat) && this.formdata.deliverynotesitem[j].metal_type == "gold" && this.formdata.customer_type=='customer_type') 
                    {
                        this.output_tax += (parseFloat( this.formdata.deliverynotesitem[j].invoice_amount ) *20) /100;
                    }
                }
                console.log(this.invoice_status);
            })
            .catch(function(error) {
                //app.$notify(error.response.data.error, "error");
            });

        axios
            .get("/sales_history/" + this.$route.params.id)
            .then(response => {
                this.formdata.saleshistory = response.data;
            })
            .catch(function(error) {});

        axios
            .get("/sales_list/")
            .then(response => {
                this.sales = response.data;
            })
            .catch(function(error) {});

        axios
            .get("/purchase_list/")
            .then(response => {
                this.purchases = response.data;
                this.purchases = this.purchases.map(purchase => {
                    return {
                        value: purchase.id,
                        text: `${moment(
                            purchase.issue_date,
                            "YYYY-MM-DD"
                        ).format("DD MMM YYYY") ||
                            ""} |   ${purchase.invoiceno ||
                            ""}  | ${purchase.firstname ||
                            ""}  ${purchase.lastname ||
                            ""} | £${purchase.totalamount || ""} `
                    };
                });
            })
            .catch(function(error) {
                //app.$notify(error.response.data.error, "error");
            });

        axios
            .get("/fetch_kyc/" + this.$route.params.id)
            .then(response => {
                this.kycdocs = response.data;
                console.log(this.kycdocs);
            })
            .catch(function(error) {});

        axios
            .get("/invoicesales_signature/" + this.$route.params.id)
            .then(response => {
                this.signaturedata = response.data;
                this.sign_flag = response.data.signature_filename;
                this.signaturedata.signature_filename =
                    "/uploads/" + response.data.signature_filename;
            })
            .catch(function(error) {
                //app.$notify(error.response.data.error, "error");
            });
    }
};
</script>
<style scoped>
.pdf_section * {
    margin: 0;
    padding: 0;
    text-indent: 0;
}
#dosign .modal-dialog {
    max-width: 600px;
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
.download-containter {
    margin-top: 200px;
    margin-left: 600px;
}
.choose-cont {
    display: flex;
    /* justify-content: center; */
}

.imagePreview {
    width: 70px;
}

.previewContainer {
    position: relative;
}

.closeIcon {
    position: absolute;
    top: -15px;
    left: 51px;
    font-size: 20px;
    cursor: pointer;
}
.closeIcon i {
    font-size: 11px;
    background: #cccccc52;
    padding: 4px;
    border-radius: 50%;
    color: #000;
}
.downloadIcon {
    position: absolute;
    top: -15px;
    left: 30px;
    font-size: 20px;
    cursor: pointer;
}
.downloadIcon i {
    font-size: 11px;
    background: #cccccc52;
    padding: 4px;
    border-radius: 50%;
    color: #000;
}
.salesdata {
    font-size: 13px;
    color: #000;
}
.btn-head {
    border-radius: 50%;
}
.btn-container {
    display: flex;
    justify-content: space-between !important;
    width: 100% !important;
}
.selectedclr {
    background-color: #245388 !important;
    color: #fff !important;
}
.cont {
    width: auto;
    font-size: 13px !important;
    color: #000;
    border: none;
    height: 40px;
    padding: 5px 20px;
    border-radius: 5px 5px 0px 0px;
}
.viewsales-div {
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
.viewsales-div > p {
    color: #3376c2;
    font-size: 12px;
}
.viewsales-div span {
    color: #000;
    font-size: 13px;
}

.class_red {
    color: rgb(255 0 0);
}
.class_green {
    color: #7adaaa;
}
.bold_font {
    font-weight: 600;
}
.invoicelist a {
    color: #000;
}
#saleshistory-datatable thead {
    background-color: #3376c2;
    color: #fff;
}
#saleshistory-datatable thead th {
    font-weight: 100;
}
#kyc-datatable {
    font-size: 13px;
}
#applycontra .modal-dialog {
    max-width: 700px;
}
.red-color {
    color: red !important;
}
#pdf_section .container {
    padding: 0px 6%;
    margin-top: 0px;
}

#pdf_section .col-sm {
    padding: 0 10px;
}
#pdf_section .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#pdf_section h2 {
    color: black;
    font-family: Calibri, sans-serif;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    font-size: 12pt;
}

.cont2 p {
    color: black;
    font-family: Calibri, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 12pt;
    margin: 0pt;
}

.s1 {
    color: black;
    font-family: Calibri, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 22pt;
}
.s3 {
    color: black;
    font-family: Calibri;
    font-style: normal;
    font-weight: normal;
    /* text-decoration: underline; */
    font-size: 9px;
}
.s4,
.s5 {
    color: black;
    font-family: Calibri;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 9px;
}
th{
    border-bottom: 1px solid black;
}

.flex-parent {
    display: flex;
    /* justify-content: center;
    align-items: center; */
}

.box {
    background-color: white;
    height: 110px;
    padding: 5px;
    width: 330px;
    border: 0.5px solid;
}

.box_size {
    margin-top: 10px;
    font-size: 12px;
}
</style>
