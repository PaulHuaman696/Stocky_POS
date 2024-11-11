"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1818],{76718:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});var i=s(95353),r=s(5947),a=s.n(r);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return(e=function(t){var e=function(t,e){if("object"!=n(t)||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==n(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const u={metaInfo:{title:"Customer Without Ecommerce"},data:function(){return{clients_without_ecommerce:"",email_exist:"",isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},showDropdown:!1,totalRows:"",search:"",limit:"10",clients:[],client:{id:"",email:"",password:""}}},mounted:function(){var t=this;this.$root.$on("bv::dropdown::show",(function(e){t.showDropdown=!0})),this.$root.$on("bv::dropdown::hide",(function(e){t.showDropdown=!1}))},computed:l(l({},(0,i.L8)(["currentUserPermissions","currentUser"])),{},{columns:function(){return[{label:this.$t("Code"),field:"code",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Name"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Phone"),field:"phone",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Email"),field:"email",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}}),methods:{Submit_Customer:function(){var t=this;this.$refs.Create_Customer.validate().then((function(e){e?t.Create_Client():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Clients(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Clients(1))},onSortChange:function(t){this.updateParams({sort:{type:t[0].type,field:t[0].field}}),this.Get_Clients(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Clients(this.serverParams.page)},getValidationState:function(t){var e=t.dirty,s=t.validated,i=t.valid;return e||s?void 0===i?null:i:null},makeToast:function(t,e,s){this.$root.$bvToast.toast(e,{title:s,variant:t,solid:!0})},Get_Clients:function(t){var e=this;a().start(),a().set(.1),axios.get("clients_without_ecommerce?page="+t+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.clients=t.data.clients,e.totalRows=t.data.totalRows,e.clients_without_ecommerce=t.data.clients_without_ecommerce,a().done(),e.isLoading=!1})).catch((function(t){a().done(),setTimeout((function(){e.isLoading=!1}),500)}))},Edit_Client:function(t){this.Get_Clients(this.serverParams.page),this.reset_Form(),this.client=t,this.$bvModal.show("New_Customer")},Create_Client:function(){var t=this;this.SubmitProcessing=!0,axios.post("clients_without_ecommerce",{client_id:this.client.id,email:this.client.email,password:this.client.password}).then((function(e){Fire.$emit("Event_Customer"),t.makeToast("success","Account Registred Successfully",t.$t("Success")),t.SubmitProcessing=!1})).catch((function(e){e.errors.email.length>0&&(t.email_exist=e.errors.email[0]),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))},reset_Form:function(){this.client={id:"",email:"",password:""},this.email_exist=""}},created:function(){var t=this;this.Get_Clients(1),Fire.$on("Event_Customer",(function(){setTimeout((function(){t.Get_Clients(t.serverParams.page),t.$bvModal.hide("New_Customer")}),500)}))}};const m=(0,s(14486).A)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Customers Unregistered in Online Store",folder:t.$t("Customers")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):e("div",[e("div",{staticClass:"mb-5"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.clients_without_ecommerce>0,expression:"clients_without_ecommerce > 0"}],staticClass:"alert alert-danger"},[t._v("\n        There are "),e("strong",[t._v(t._s(t.clients_without_ecommerce))]),t._v(" \n        customers not having an account in the online store.\n      ")])]),t._v(" "),e("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.clients,"search-options":{enabled:!0,placeholder:t.$t("Search_this_table")},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:t.showDropdown?"tableOne table-hover vgt-table full-height":"tableOne table-hover vgt-table non-height"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch},scopedSlots:t._u([{key:"table-row",fn:function(s){return["actions"==s.column.field?e("span",[e("a",{staticClass:"btn btn-primary",on:{click:function(e){return t.Edit_Client(s.row)}}},[e("span",{staticClass:"text-white"},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" Register Account")])])]):t._e()]}}])})],1),t._v(" "),e("validation-observer",{ref:"Create_Customer"},[e("b-modal",{attrs:{"hide-footer":"",size:"md",id:"New_Customer",title:"Register Account"}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Customer.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{md:"12",sm:"12"}},[e("validation-provider",{attrs:{name:"email Customer",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("Email")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"email-feedback",label:"email",placeholder:t.$t("Email")},model:{value:t.client.email,callback:function(e){t.$set(t.client,"email",e)},expression:"client.email"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"email-feedback"}},[t._v(t._s(s.errors[0]))]),t._v(" "),""!=t.email_exist?e("b-alert",{staticClass:"error mt-1",attrs:{show:"",variant:"danger"}},[t._v(t._s(t.email_exist))]):t._e()],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{md:"12",sm:"12"}},[e("validation-provider",{attrs:{name:"password",rules:{required:!0,min:6,max:14}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("password")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"password-feedback",label:"password",type:"password",placeholder:t.$t("password")},model:{value:t.client.password,callback:function(e){t.$set(t.client,"password",e)},expression:"client.password"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"password-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[e("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.SubmitProcessing}},[t._v(t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);