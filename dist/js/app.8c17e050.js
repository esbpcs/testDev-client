(function(e){function s(s){for(var a,n,o=s[0],d=s[1],l=s[2],u=0,h=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&h.push(i[n][0]),i[n]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);p&&p(s);while(h.length)h.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,s=0;s<r.length;s++){for(var t=r[s],a=!0,o=1;o<t.length;o++){var d=t[o];0!==i[d]&&(a=!1)}a&&(r.splice(s--,1),e=n(n.s=t[0]))}return e}var a={},i={app:0},r=[];function n(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=a,n.d=function(e,s,t){n.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,s){if(1&s&&(e=n(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)n.d(t,a,function(s){return e[s]}.bind(null,a));return t},n.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var p=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"034f":function(e,s,t){"use strict";var a=t("85ec"),i=t.n(a);i.a},"0bbd":function(e,s,t){"use strict";var a=t("a0c4"),i=t.n(a);i.a},"56d7":function(e,s,t){"use strict";t.r(s);var a=t("2b0e"),i=t("1881"),r=t.n(i),n=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),e.$route.params.emailaddress?a("h4",[e._v("Logged in as "+e._s(e.$route.params.emailaddress)+". "),a("router-link",{attrs:{to:"/"}},[e._v("Logout?")])],1):e._e(),a("router-view")],1)},o=[],d={name:"app"},l=d,p=(t("034f"),t("2877")),u=Object(p["a"])(l,n,o,!1,null,null,null),h=u.exports,c=t("8c4f"),m=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"posts"},[t("h1",[e._v("Digital Asset Management")]),t("h3",[e._v("Login below:")]),t("form",{on:{submit:e.validateUser}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.loginData.emailAddress,expression:"loginData.emailAddress"}],attrs:{type:"text",placeholder:"Enter Email address"},domProps:{value:e.loginData.emailAddress},on:{input:function(s){s.target.composing||e.$set(e.loginData,"emailAddress",s.target.value)}}}),t("br"),t("br"),t("input",{attrs:{type:"submit",value:"Login"}}),t("br"),t("br"),e.loginReponse?t("span",[t("b",[e._v(e._s(e.loginReponse.data))])]):e._e(),t("br")]),t("br"),t("h3",[e._v("Otherwise, fill out the form below to register:")]),t("form",{on:{submit:e.registerUser}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.registerData.emailAddress,expression:"registerData.emailAddress"}],attrs:{type:"text",placeholder:"Enter Email address"},domProps:{value:e.registerData.emailAddress},on:{input:function(s){s.target.composing||e.$set(e.registerData,"emailAddress",s.target.value)}}}),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.registerData.firstName,expression:"registerData.firstName"}],attrs:{type:"text",placeholder:"Enter First name"},domProps:{value:e.registerData.firstName},on:{input:function(s){s.target.composing||e.$set(e.registerData,"firstName",s.target.value)}}}),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.registerData.lastName,expression:"registerData.lastName"}],attrs:{type:"text",placeholder:"Enter Last name"},domProps:{value:e.registerData.lastName},on:{input:function(s){s.target.composing||e.$set(e.registerData,"lastName",s.target.value)}}}),t("br"),t("br"),t("input",{attrs:{type:"submit",value:"Register"}})]),t("br"),t("br"),e.registerReponse?t("span",[t("b",[e._v(e._s(e.registerReponse.data))])]):e._e(),t("br"),t("vue-instant-loading-spinner",{ref:"Spinner",attrs:{id:"loader"}})],1)},g=[],f=t("bc3a"),A=t.n(f),v=()=>A.a.create({baseURL:"http://localhost:8081"}),_={registerUser(e,s,t){return v().post("registerUser",{emailAddress:e,firstName:s,lastName:t})},validateUser(e){return v().post("validateUser",{emailAddress:e})},queryAllDigitalAssets(e){return v().post("queryAllDigitalAssets",{emailAddress:e})},queryDigitalAssetsByUser(e){return v().post("queryDigitalAssetsByUser",{emailAddress:e})},readDigitalAsset(e,s){return v().post("readDigitalAsset",{assetId:s,emailAddress:e})},createDigitalAsset(e,s,t,a){return v().post("createDigitalAsset",{digitalAssetFileName:e,digitalAssetFileType:s,digitalAssetFileBuffer:t,emailAddress:a})},viewAssetModificationRequests(e){return v().post("viewAssetModificationRequests",{emailAddress:e})},updateDigitalAsset(e,s,t,a){return v().post("updateDigitalAsset",{digitalAssetFileName:e,digitalAssetFileType:s,digitalAssetFileBuffer:t,emailAddress:a})},changeOwnershipOfAsset(e,s,t){return v().post("changeOwnershipOfAsset",{assetId:e,assetModifier:s,newAssetOwner:t})},processAssetModRequest(e,s,t,a,i){return v().post("processAssetModRequest",{assetId:e,assetModId:s,emailAddress:t,approve:a,addApprovedUser:i})},deleteDigitalAsset(e,s){return v().post("deleteDigitalAsset",{assetId:e,emailAddress:s})},downloadDigitalAssetFile(e,s){return v().post("downloadDigitalAssetFile",{assetId:e,assetName:s})},getHistoryForDigitalAsset(e){return v().post("getHistoryForDigitalAsset",{assetId:e})}},w=t("9ff4"),y={name:"response",props:["emailaddress","apiresponse","tableheading","reroute"],data(){return{loginData:{},registerData:{},registerReponse:{data:""},loginReponse:{data:""}}},components:{VueInstantLoadingSpinner:w["a"]},methods:{async registerUser(){this.loginReponse=null,await this.runSpinner();const e=await _.registerUser(this.registerData.emailAddress,this.registerData.firstName,this.registerData.lastName);this.registerReponse=e,await this.hideSpinner()},async validateUser(){if(this.registerReponse=null,await this.runSpinner(),this.loginData.emailAddress){const e=await _.validateUser(this.loginData.emailAddress);if(e.data.err)this.loginReponse.data=e.data.err;else if(this.$route.params.reroute)this.$router.push({name:this.$route.params.reroute,params:{emailaddress:this.loginData.emailAddress}});else{const e=await _.queryAllDigitalAssets(this.loginData.emailAddress);this.$router.push({name:"ShowAllDigitalAssets",params:{emailaddress:this.loginData.emailAddress,apiresponse:e.data,tableheading:"Digital Assets"}})}await this.hideSpinner()}else{let e="Please enter an Email Address";this.loginReponse.data=e,await this.hideSpinner()}},async runSpinner(){this.$refs.Spinner.show()},async hideSpinner(){this.$refs.Spinner.hide()}}},D=y,b=Object(p["a"])(D,m,g,!1,null,null,null),$=b.exports,S=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"posts"},[t("button",{on:{click:function(s){return e.queryAllDigitalAssets()}}},[e._v("Query All Digital Assets")]),e._v(" "),t("button",{on:{click:function(s){return e.queryDigitalAssetsByUser()}}},[e._v("Query My Digital Assets")]),e._v(" "),t("button",{on:{click:function(s){return e.uploadDigitalAsset()}}},[e._v("Upload New Asset")]),e._v(" "),t("button",{on:{click:function(s){return e.viewAssetModificationRequests()}}},[e._v("View Asset Modification Requests")]),e._v(" "),t("h1",[e._v(e._s(e.$route.params.tableheading))]),t("div",{attrs:{id:"table"}},[e.$route.params.apiresponse?t("table",{attrs:{id:"assetTable"}},[e._m(0),t("tbody",e._l(e.$route.params.apiresponse,(function(s){return t("tr",{key:s.Key},[t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"assets",name:"picked"},domProps:{value:s.Key,checked:e._q(e.picked,s.Key)},on:{change:[function(t){e.picked=s.Key},e.clearError]}}),t("label",{attrs:{for:"assets"}})]),t("td",[e._v(e._s(s.Record.assetId))]),t("td",[e._v(e._s(s.Record.assetName))]),t("td",[e._v(e._s(s.Record.assetOwner))]),t("td",[e._v(e._s(e.prettyPrintDate(s.Record.createTimestamp)))]),t("td",[e._v(e._s(s.Record.lastModifiedBy))]),t("td",[e._v(e._s(e.prettyPrintDate(s.Record.modifiedTimestamp)))])])})),0)]):e._e(),t("br"),e.picked?t("span",[e._v("You have selected "),t("b",[e._v(e._s(e.picked))]),t("br"),t("br")]):e._e(),e.errorMsg?t("span",[e._v(e._s(e.errorMsg)),t("br"),t("br")]):e._e()]),t("button",{on:{click:function(s){return e.updateDigitalAsset()}}},[e._v("Update Digital Asset")]),e._v(" "),t("button",{on:{click:function(s){return e.changeOwnershipOfAsset()}}},[e._v("Change Ownership of Asset")]),e._v(" "),t("button",{on:{click:function(s){return e.deleteDigitalAsset()}}},[e._v("Delete Digital Asset")]),e._v(" "),t("button",{on:{click:function(s){return e.downloadFile(e.picked)}}},[e._v("Download Digital Asset")]),e._v(" "),t("v-dialog"),t("vue-instant-loading-spinner",{ref:"Spinner",attrs:{id:"loader"}})],1)},k=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("thead",[t("tr",[t("th"),t("th",[e._v("Asset ID")]),t("th",[e._v("Asset Name")]),t("th",[e._v("Asset Owner")]),t("th",[e._v("Added On")]),t("th",[e._v("Last Modified By")]),t("th",[e._v("Last Modified On")])])])}],M=t("b9b9"),R={name:"response",props:["emailaddress","selectedasset","assetrecord"],data(){return{input:{},picked:null,response:null,errorMsg:null}},components:{VueInstantLoadingSpinner:w["a"]},methods:{prettyPrintDate(e){return e?M(new Date(e),"mmm d, yyyy, h:MM:ss TT"):null},findElement(e,s){for(var t=0;t<e.length;t++)if(e[t].Key===s)return e[t]},clearError(){this.errorMsg=null},async queryAllDigitalAssets(){this.picked=null,this.errorMsg=null,this.response=null,this.runSpinner();const e=await _.queryAllDigitalAssets(this.$route.params.emailaddress);this.response=e.data,this.$route.params.apiresponse=e.data,this.$route.params.tableheading="Digital Assets",this.$forceUpdate(),this.hideSpinner()},async queryDigitalAssetsByUser(){this.picked=null,this.errorMsg=null,this.response=null,this.runSpinner();const e=await _.queryDigitalAssetsByUser(this.$route.params.emailaddress);this.response=e.data,this.$route.params.apiresponse=e.data,this.$route.params.tableheading="Digital Assets Owned by Me",this.$forceUpdate(),this.hideSpinner()},async downloadFile(e){if(this.errorMsg=null,this.response=null,this.runSpinner(),null===this.picked)console.error("Error - no asset was selected."),this.errorMsg="Please select an asset first!",this.$forceUpdate(),await this.hideSpinner();else{let s=this.findElement(this.$route.params.apiresponse,this.picked);await _.downloadDigitalAssetFile(e,s.Record.assetName);this.$modal.show("dialog",{title:"Success!",text:"The asset "+s.Record.assetName+" will be downloaded to the web-app/client/downloads folder.",buttons:[{title:"Close",default:!0}]}),this.picked=null,this.$forceUpdate(),this.hideSpinner()}},async uploadDigitalAsset(){await this.runSpinner(),this.$router.push({name:"UploadAsset",params:{emailaddress:this.$route.params.emailaddress}}),this.$forceUpdate(),await this.hideSpinner()},async viewAssetModificationRequests(){await this.runSpinner(),this.$router.push({name:"ViewAssetModificationRequests",params:{emailaddress:this.$route.params.emailaddress}}),this.$forceUpdate(),await this.hideSpinner()},async updateDigitalAsset(){if(await this.runSpinner(),this.response=null,null===this.picked)console.error("Error - no asset was selected."),this.errorMsg="Please select an asset first!",this.$forceUpdate(),await this.hideSpinner();else{let e=this.findElement(this.$route.params.apiresponse,this.picked);e.Record.assetId===this.picked&&this.$router.push({name:"UpdateAsset",params:{emailaddress:this.$route.params.emailaddress,selectedasset:this.picked,assetrecord:e.Record}}),this.$forceUpdate(),await this.hideSpinner()}},async changeOwnershipOfAsset(){if(await this.runSpinner(),this.response=null,null===this.picked)console.error("Error - no asset was selected."),this.errorMsg="Please select an asset first!",this.$forceUpdate(),await this.hideSpinner();else if(void 0===this.$route.params.emailaddress)this.errorMsg="Error - no emailAddress found. Please login first.",console.error(this.errorMsg),this.$router.push({name:"Home"}),this.$forceUpdate(),await this.hideSpinner();else if(this.findElement(this.$route.params.apiresponse,this.picked).Record.assetOwner!==this.$route.params.emailaddress)console.error("Error - user does not own this asset."),this.errorMsg="Cannot change ownership of this asset. It is not owned by the user!",this.$forceUpdate(),await this.hideSpinner();else{let e=0;for(e in this.$route.params.apiresponse)this.$route.params.apiresponse[e].Record.assetId===this.picked&&this.$router.push({name:"ChangeOwnershipOfAsset",params:{emailaddress:this.$route.params.emailaddress,selectedasset:this.picked,assetrecord:this.$route.params.apiresponse[e].Record}});this.$forceUpdate(),await this.hideSpinner()}},async deleteDigitalAsset(){if(await this.runSpinner(),this.response=null,null===this.picked)console.error("Error - no asset was selected."),this.errorMsg="Please select an asset first!",this.$forceUpdate(),await this.hideSpinner();else if(void 0===this.$route.params.emailaddress)this.errorMsg="Error - no emailAddress found.",console.error(this.errorMsg),this.$router.push({name:"Home"}),this.$forceUpdate(),await this.hideSpinner();else if(this.findElement(this.$route.params.apiresponse,this.picked).Record.assetOwner!==this.$route.params.emailaddress)console.error("Error - user does not own this asset."),this.errorMsg="Cannot delete this asset. It is not owned by the user!",this.$forceUpdate(),await this.hideSpinner();else{if(this.errorMsg=null,confirm(`Do you really want to delete ${this.picked}?`)){const e=await _.deleteDigitalAsset(this.picked,this.$route.params.emailaddress);this.response=e.data,this.$route.params.apiresponse=e.data,this.$modal.show("dialog",{title:"Success!",text:"The asset "+this.picked+" was deleted successfully.",buttons:[{title:"Close",default:!0}]}),"Digital Assets"===this.$route.params.tableheading?await this.queryAllDigitalAssets():await this.queryDigitalAssetsByUser(this.$route.params.emailaddress),this.$forceUpdate(),this.response="Successfully deleted asset from COS and blockchain",this.picked=null}await this.hideSpinner()}},async runSpinner(){this.$refs.Spinner.show()},async hideSpinner(){this.$refs.Spinner.hide()}},mounted:async function(){this.$route.params.emailaddress||this.$router.push({name:"Home"})}},O=R,F=(t("8996"),Object(p["a"])(O,S,k,!1,null,null,null)),U=F.exports,N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"posts"},[t("h1",[e._v("Upload An Asset")]),t("form",{on:{submit:e.uploadDigitalAsset}},[t("label",{attrs:{for:"digitalAsset"}},[e._v("Choose the file to upload:")]),t("input",{attrs:{type:"file"},on:{change:e.onFileChange}}),t("br"),t("br"),t("input",{attrs:{type:"submit",value:"Upload Digital Asset"}})]),t("br"),e.uploadAssetResponse?t("span",[t("b",[e._v(e._s(e.uploadAssetResponse.data))])]):e._e(),t("br"),t("button",{on:{click:function(s){return e.showAllDigitalAssets()}}},[e._v("Back")]),e._v(" "),t("br"),t("vue-instant-loading-spinner",{ref:"Spinner",attrs:{id:"loader"}})],1)},E=[],P=(t("3e8f"),{name:"response",props:["emailaddress"],data(){return{input:{},uploadAssetData:{digitalAssetFile:null,digitalAssetFileName:null,digitalAssetFileBuffer:null},uploadAssetResponse:{data:""},assetDataURL:null,response:null}},components:{VueInstantLoadingSpinner:w["a"]},methods:{onFileChange(e){var s=e.target.files||e.dataTransfer.files;s.length&&(this.uploadAssetData.digitalAssetFile=s[0])},readFileAsync(e){return new Promise((s,t)=>{let a=new FileReader;a.onload=()=>{s(a.result)},a.onerror=t,a.readAsDataURL(e)})},async uploadDigitalAsset(){if(this.runSpinner(),this.uploadAssetData.digitalAssetFile){this.uploadAssetData.digitalAssetFileName=this.uploadAssetData.digitalAssetFile.name,this.uploadAssetData.digitalAssetFileBuffer=await this.readFileAsync(this.uploadAssetData.digitalAssetFile);const e=await _.createDigitalAsset(this.uploadAssetData.digitalAssetFileName,this.uploadAssetData.digitalAssetFile.type,this.uploadAssetData.digitalAssetFileBuffer,this.$route.params.emailaddress);e.data.err?this.uploadAssetResponse.data=e.data.err+" See the asset with assetId = "+e.data.existingAsset.assetId:this.uploadAssetResponse.data=e.data.data}else this.uploadAssetResponse.data='Please choose a file and then click "Upload Digital Asset".';this.hideSpinner()},async showAllDigitalAssets(){this.runSpinner();const e=await _.queryAllDigitalAssets(this.$route.params.emailaddress);this.$route.params.apiresponse=e.data,this.$router.push({name:"ShowAllDigitalAssets",params:{emailaddress:this.$route.params.emailaddress,apiresponse:e.data,tableheading:"Digital Assets"}}),this.hideSpinner()},async runSpinner(){this.$refs.Spinner.show()},async hideSpinner(){this.$refs.Spinner.hide()}},mounted:async function(){this.$route.params.emailaddress||this.$router.push({name:"Home",params:{reroute:"UploadAsset"}})}}),q=P,I=(t("969d"),Object(p["a"])(q,N,E,!1,null,null,null)),T=I.exports,x=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"posts"},[t("h1",[e._v("View Asset Modification Requests")]),t("div",[t("button",{on:{click:function(s){return e.showAllDigitalAssets()}}},[e._v("Back")]),e._v(" "),t("br"),t("br"),t("button",{attrs:{disabled:null===this.pickedMod},on:{click:function(s){return e.processAssetModRequest(!0)}}},[e._v("Approve")]),e._v(" "),t("button",{attrs:{disabled:null===this.pickedMod},on:{click:function(s){return e.processAssetModRequest(!1)}}},[e._v("Deny")]),e._v(" "),t("br"),t("br")]),t("div",[e.$route.params.apiresponse?t("div",{attrs:{id:"table"}},[t("table",{attrs:{id:"mainTable"}},[e._m(0),e._l(e.$route.params.apiresponse,(function(s){return t("tbody",{key:s.Key},[t("tr",{class:{opened:e.opened===s.Key},attrs:{name:"picked",value:s.Key},on:{click:function(t){return e.setPicked(s.Key)},change:e.clearError}},[t("td",[e._v(e._s(s.Record.assetId))]),t("td",[e._v(e._s(s.Record.assetName))]),t("td",[e._v(e._s(s.Record.lastModifiedBy))]),t("td",[e._v(e._s(e.prettyPrintDate(s.Record.modifiedTimestamp)))])]),e.opened===s.Key?t("tr",[t("td",{attrs:{colspan:"5"}},[t("table",{attrs:{id:"subTable"}},[e._m(1,!0),t("tbody",e._l(e.getModificationsForPickedAsset(e.opened),(function(s){return t("tr",{key:s.modFileName},[t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedMod,expression:"pickedMod"}],attrs:{type:"radio",id:"assetMods",name:"pickedMod"},domProps:{value:s.modFileName,checked:e._q(e.pickedMod,s.modFileName)},on:{change:[function(t){e.pickedMod=s.modFileName},e.clearError]}}),t("label",{attrs:{for:"assetMods"}})]),t("td",[e._v(e._s(s.modFileName))]),t("td",[e._v(e._s(s.lastModifiedBy))]),t("td",[e._v(e._s(e.prettyPrintDate(s.modifiedTimestamp)))]),t("td",[t("a",{attrs:{href:"#",download:"modification.modFileName"},on:{click:function(t){return e.downloadFile(s.modFileName)}}},[e._v("Download")])])])})),0)])])]):e._e()])}))],2)]):e._e()]),e.response?t("span",[t("b",[e._v(e._s(e.response))])]):e._e(),t("v-dialog"),t("vue-instant-loading-spinner",{ref:"Spinner",attrs:{id:"loader"}})],1)},B=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("thead",[t("tr",[t("th",[e._v("Asset ID")]),t("th",[e._v("Asset Name")]),t("th",[e._v("Last Modified By")]),t("th",[e._v("Last Modified On")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("thead",[t("tr",[t("th"),t("th",[e._v("Asset Name")]),t("th",[e._v("Added By")]),t("th",[e._v("Added On")]),t("th",[e._v("Download")])])])}],C=(t("3e8f"),t("b9b9")),L={name:"response",props:["emailaddress"],data(){return{opened:null,input:{},uploadAssetData:{digitalAssetFile:null,digitalAssetFileName:null,digitalAssetFileBuffer:null},uploadAssetResponse:{data:""},assetDataURL:null,response:null,picked:null,errorMsg:null,pickedMod:null,addApprovedUser:null}},components:{VueInstantLoadingSpinner:w["a"]},methods:{clearError(){this.errorMsg=null},prettyPrintDate(e){return e?C(new Date(e),"mmm d, yyyy, h:MM:ss TT"):null},findElement(e,s){if(e.length>0&&e[0].Key){for(var t=0;t<e.length;t++)if(e[t].Key===s)return e[t]}else if(e.length>0&&e[0].modFileName)for(t=0;t<e.length;t++)if(e[t].modFileName===s)return e[t]},getModificationsForPickedAsset(e){let s=this.findElement(this.$route.params.apiresponse,e);return s.Record.modificationsPendingApproval},setPicked(e){this.opened!=e&&(this.opened=e,this.picked=e)},async downloadFile(e){this.errorMsg=null,this.response=null,this.runSpinner();let s=this.getModificationsForPickedAsset(this.picked),t=this.findElement(s,e);await _.downloadDigitalAssetFile(e,t.modFileName);this.$modal.show("dialog",{title:"Success!",text:"The asset "+t.modFileName+" will be downloaded to the web-app/client/downloads folder.",buttons:[{title:"Close",default:!0}]}),this.pickedMod=null,this.$forceUpdate(),this.hideSpinner()},async processAssetModRequest(e){if(this.response=null,this.runSpinner(),this.addApprovedUser=!1,confirm("Do you really want to "+(e?"approve":"deny")+` this modification to ${this.picked}?`)){e&&confirm("Would you also like to add this user as an approved modifier for this asset? \nNote: This would mean that all future modifications to this asset by this user would be directly applied.")&&(this.addApprovedUser=!0);await _.processAssetModRequest(this.picked,this.pickedMod,this.$route.params.emailaddress,e,this.addApprovedUser);await this.getDataForThisVue()}this.hideSpinner()},async showAllDigitalAssets(){console.log("Showing all digital assets"),this.response=null,this.runSpinner();const e=await _.queryAllDigitalAssets(this.$route.params.emailaddress);this.response=e.data,this.$route.params.apiresponse=e.data,this.$router.push({name:"ShowAllDigitalAssets",params:{emailaddress:this.$route.params.emailaddress,apiresponse:e.data,tableheading:"Digital Assets"}}),this.hideSpinner()},async getDataForThisVue(){const e=await _.queryDigitalAssetsByUser(this.$route.params.emailaddress);this.$route.params.apiresponse=[];for(var s=0;s<e.data.length;s++)e.data[s].Record.modificationsPendingApproval.length>0&&this.$route.params.apiresponse.push(e.data[s]);this.$forceUpdate()},async runSpinner(){this.$refs.Spinner.show()},async hideSpinner(){this.$refs.Spinner.hide()}},mounted:async function(){this.$route.params.emailaddress||this.$router.push({name:"Home",params:{reroute:"ViewAssetModificationRequests"}}),await this.getDataForThisVue()}},j=L,K=(t("6690"),Object(p["a"])(j,x,B,!1,null,null,null)),V=K.exports,H=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"posts"},[t("h1",[e._v("Update Asset")]),t("div",{attrs:{id:"table"}},[e.$route.params.assetrecord?t("table",{attrs:{id:"assetTable"}},[e._m(0),t("tbody",[t("tr",[t("td",[e._v(e._s(e.$route.params.assetrecord.assetId))]),t("td",[e._v(e._s(e.$route.params.assetrecord.assetName))]),t("td",[e._v(e._s(e.$route.params.assetrecord.assetOwner))]),t("td",[e._v(e._s(e.prettyPrintDate(e.$route.params.assetrecord.createTimestamp)))]),t("td",[e._v(e._s(e.$route.params.assetrecord.lastModifiedBy))]),t("td",[e._v(e._s(e.prettyPrintDate(e.$route.params.assetrecord.modifiedTimestamp)))])])])]):e._e()]),t("br"),t("form",{on:{submit:e.updateDigitalAsset}},[t("label",{attrs:{for:"digitalAsset"}},[e._v("Choose the file to upload (replace existing file):")]),t("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:e.onFileChange}}),t("br"),t("br"),t("input",{attrs:{type:"submit",value:"Update Digital Asset"}})]),t("br"),e.updateAssetResponse?t("span",[t("b",[e._v(e._s(e.updateAssetResponse.data))])]):e._e(),t("br"),t("button",{on:{click:function(s){return e.showAllDigitalAssets()}}},[e._v("Back")]),e._v(" "),t("br"),t("v-dialog"),t("vue-instant-loading-spinner",{ref:"Spinner",attrs:{id:"loader"}})],1)},J=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("thead",[t("tr",[t("th",[e._v("Asset ID")]),t("th",[e._v("Asset Name")]),t("th",[e._v("Asset Owner")]),t("th",[e._v("Added On")]),t("th",[e._v("Last Modified By")]),t("th",[e._v("Last Modified On")])])])}],Q=(t("3e8f"),t("bc3a"),t("b9b9")),G={name:"response",props:["emailaddress"],data(){return{input:{},file:"",updateAssetData:{digitalAssetFile:null,digitalAssetFileName:null,digitalAssetFileBuffer:null},updateAssetResponse:{data:""},response:null}},components:{VueInstantLoadingSpinner:w["a"]},methods:{prettyPrintDate(e){return e?Q(new Date(e),"mmm d, yyyy, h:MM:ss TT"):null},onFileChange(e){console.log("onFileChange");var s=e.target.files||e.dataTransfer.files;s.length&&(this.updateAssetData.digitalAssetFile=s[0])},readFileAsync(e){return new Promise((s,t)=>{let a=new FileReader;a.onload=()=>{s(a.result)},a.onerror=t,a.readAsDataURL(e)})},async updateDigitalAsset(){if(console.log("Updating asset"),this.response=null,this.runSpinner(),this.updateAssetData.digitalAssetFile){this.updateAssetData.digitalAssetId=this.$route.params.selectedasset,this.updateAssetData.digitalAssetFileBuffer=await this.readFileAsync(this.updateAssetData.digitalAssetFile);const e=await _.updateDigitalAsset(this.updateAssetData.digitalAssetId,this.updateAssetData.digitalAssetFile.type,this.updateAssetData.digitalAssetFileBuffer,this.$route.params.emailaddress);if("pendingApproval"in e.data)this.$modal.show("dialog",{title:"Asset update pending approval",text:e.data.data,buttons:[{title:"Close",default:!0}]}),"err"in e.data?this.updateAssetResponse.data=e.data.err:this.updateAssetResponse.data=e.data.data;else if("data"in e.data){const s=await _.readDigitalAsset(this.$route.params.emailaddress,this.$route.params.selectedasset);this.$route.params.assetrecord=s.data.data,this.$forceUpdate(),this.updateAssetResponse.data=e.data.data}else this.updateAssetResponse.data=e.data.err}else this.updateAssetResponse.data='Please choose a file and then click "Update Digital Asset".';this.hideSpinner()},async showAllDigitalAssets(){console.log("Showing all digital assets"),this.response=null,this.runSpinner();const e=await _.queryAllDigitalAssets(this.$route.params.emailaddress);this.response=e.data,this.$route.params.apiresponse=e.data,this.$router.push({name:"ShowAllDigitalAssets",params:{emailaddress:this.$route.params.emailaddress,apiresponse:e.data,tableheading:"Digital Assets"}}),this.hideSpinner()},async runSpinner(){this.$refs.Spinner.show()},async hideSpinner(){this.$refs.Spinner.hide()}},mounted:async function(){this.$route.params.emailaddress||this.$router.push({name:"Home"})}},W=G,Y=(t("0bbd"),Object(p["a"])(W,H,J,!1,null,null,null)),z=Y.exports,X=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"posts"},[t("h1",[e._v("Change Ownership of Asset")]),t("div",{attrs:{id:"table"}},[e.$route.params.assetrecord?t("table",{attrs:{id:"assetTable"}},[e._m(0),t("tbody",[t("tr",[t("td",[e._v(e._s(e.$route.params.assetrecord.assetId))]),t("td",[e._v(e._s(e.$route.params.assetrecord.assetName))]),t("td",[e._v(e._s(e.$route.params.assetrecord.assetOwner))]),t("td",[e._v(e._s(e.prettyPrintDate(e.$route.params.assetrecord.createTimestamp)))]),t("td",[e._v(e._s(e.$route.params.assetrecord.lastModifiedBy))]),t("td",[e._v(e._s(e.prettyPrintDate(e.$route.params.assetrecord.modifiedTimestamp)))])])])]):e._e()]),t("br"),t("form",{on:{submit:e.changeOwnershipOfAsset}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.changeOwnershipData.emailAddress,expression:"changeOwnershipData.emailAddress"}],attrs:{type:"text",placeholder:"Enter Email address of new owner"},domProps:{value:e.changeOwnershipData.emailAddress},on:{input:function(s){s.target.composing||e.$set(e.changeOwnershipData,"emailAddress",s.target.value)}}}),t("br"),t("br"),t("input",{attrs:{type:"submit",value:"Change Owner of Asset"}})]),t("br"),e.changeOwnershipResponse?t("span",[t("b",[e._v(e._s(e.changeOwnershipResponse.data))])]):e._e(),t("br"),t("button",{on:{click:function(s){return e.showAllDigitalAssets()}}},[e._v("Back")]),e._v(" "),t("br"),t("vue-instant-loading-spinner",{ref:"Spinner",attrs:{id:"loader"}})],1)},Z=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("thead",[t("tr",[t("th",[e._v("Asset ID")]),t("th",[e._v("Asset Name")]),t("th",[e._v("Asset Owner")]),t("th",[e._v("Added On")]),t("th",[e._v("Last Modified By")]),t("th",[e._v("Last Modified On")])])])}],ee=(t("3e8f"),t("b9b9")),se={name:"response",props:["emailaddress"],data(){return{input:{},changeOwnershipData:{emailAddress:null},changeOwnershipResponse:{data:""},response:null}},components:{VueInstantLoadingSpinner:w["a"]},methods:{prettyPrintDate(e){return e?ee(new Date(e),"mmm d, yyyy, h:MM:ss TT"):null},async changeOwnershipOfAsset(){if(console.log("Changing ownership of asset"),this.response=null,this.runSpinner(),null===this.changeOwnershipData.emailAddress||""===this.changeOwnershipData.emailAddress)this.changeOwnershipResponse.data="Please enter the email address for the new owner.";else{const e=await _.changeOwnershipOfAsset(this.$route.params.assetrecord.assetId,this.$route.params.emailaddress,this.changeOwnershipData.emailAddress),s=await _.readDigitalAsset(this.$route.params.emailaddress,this.$route.params.selectedasset);this.$route.params.assetrecord=s.data.data,this.$forceUpdate(),this.changeOwnershipResponse.data=e.data.data}this.hideSpinner()},async showAllDigitalAssets(){console.log("Showing all digital assets"),this.response=null,this.runSpinner();const e=await _.queryAllDigitalAssets(this.$route.params.emailaddress);this.response=e.data,this.$route.params.apiresponse=e.data,this.$router.push({name:"ShowAllDigitalAssets",params:{emailaddress:this.$route.params.emailaddress,apiresponse:e.data,tableheading:"Digital Assets"}}),this.hideSpinner()},async runSpinner(){this.$refs.Spinner.show()},async hideSpinner(){this.$refs.Spinner.hide()}},mounted:async function(){this.$route.params.emailaddress||this.$router.push({name:"Home"})}},te=se,ae=(t("d5c0"),Object(p["a"])(te,X,Z,!1,null,null,null)),ie=ae.exports,re=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"posts"},[this.$route.query.assetId&&e.response.length?t("div",{attrs:{id:"table"}},[t("table",{attrs:{id:"assetTable"}},[e._m(0),t("tbody",e._l(e.response,(function(s){return t("tr",{key:s.Key},[t("td",[e._v(e._s(s.Key))]),t("td",[e._v(e._s(s.Record))])])})),0)])]):this.$route.query.assetId?t("span",[e._v(" No history for the asset with assetId = "+e._s(this.$route.query.assetId)+" ")]):t("span",[e._v(" Please provide assetId as a query parameter in the URL: e.g. ../getHistoryForDigitalAsset?assetId=1234 ")])])},ne=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("thead",[t("tr",[t("th",[e._v("Key")]),t("th",[e._v("Record")])])])}],oe={name:"response",data(){return{response:null}},mounted:async function(){if(this.response=null,this.$route.query.assetId){const e=await _.getHistoryForDigitalAsset(this.$route.query.assetId);this.response=e.data}else this.response="Error - please provide assetId as a query parameter";console.log(this.response),this.$forceUpdate()}},de=oe,le=Object(p["a"])(de,re,ne,!1,null,null,null),pe=le.exports;a["a"].use(c["a"]);var ue=new c["a"]({routes:[{path:"/",name:"Home",component:$},{path:"/showAllDigitalAssets",name:"ShowAllDigitalAssets",component:U,props:!0},{path:"/uploadAsset",name:"UploadAsset",component:T,props:!0},{path:"/viewAssetModificationRequests",name:"ViewAssetModificationRequests",component:V,props:!0},{path:"/updateAsset",name:"UpdateAsset",component:z,props:!0},{path:"/changeOwnershipOfAsset",name:"ChangeOwnershipOfAsset",component:ie,props:!0},{path:"/getHistoryForDigitalAsset",name:"GetHistoryForDigitalAsset",component:pe,props:!0}]});a["a"].use(r.a,{dialog:!0,dynamic:!0}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(h)},router:ue}).$mount("#app")},6690:function(e,s,t){"use strict";var a=t("69e1"),i=t.n(a);i.a},"69e1":function(e,s,t){},"85ec":function(e,s,t){},8996:function(e,s,t){"use strict";var a=t("8f7c"),i=t.n(a);i.a},"8f7c":function(e,s,t){},"969d":function(e,s,t){"use strict";var a=t("fe16"),i=t.n(a);i.a},a0c4:function(e,s,t){},a895:function(e,s,t){},cf05:function(e,s,t){e.exports=t.p+"img/logo.42c93daa.png"},d5c0:function(e,s,t){"use strict";var a=t("a895"),i=t.n(a);i.a},fe16:function(e,s,t){}});
//# sourceMappingURL=app.8c17e050.js.map