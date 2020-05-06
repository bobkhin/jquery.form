/*! NiceForm v1.1.1 | Copyright (c) 2014-present Duc Doan <ducdhm@gmail.com> */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("jquery")):"function"==typeof define&&define.amd?define("NiceForm",["jquery"],r):"object"==typeof exports?exports.NiceForm=r(require("jquery")):e.NiceForm=r(e.$)}("undefined"!=typeof self?self:this,function(e){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(r,t){r.exports=e},function(e,r){!function(e){function r(){this.fake=!0,this.boundary="--------FormData"+Math.random(),this._fields=[]}e.FormData||(r.prototype.append=function(e,r){this._fields.push([e,r])},r.prototype.toString=function(){var e=this.boundary,r="";return this._fields.forEach(function(t){if(r+="--"+e+"\r\n",t[1].name){var n=t[1];r+="Content-Disposition: form-data; name='"+t[0]+"'; filename='"+n.name+"'\r\n",r+="Content-Type: "+n.type+"\r\n\r\n",r+=n.getAsBinary()+"\r\n"}else r+="Content-Disposition: form-data; name='"+t[0]+"';\r\n\r\n",r+=t[1]+"\r\n"}),r+="--"+e+"--"},e.FormData=r)}(window)},function(e,r){var t;(t=jQuery).fn.serializeWithFiles=function(){var e=t(this),r=new FormData;e.find("input[type=file]").each(function(e,n){t.each(n.files,function(e,t){r.append(n.name,t)})});var n=e.serializeArray();return t.each(n,function(e,t){r.append(t.name,t.value)}),r}},function(e,r,t){"use strict";t.r(r);var n,a=t(0),o=t.n(a),i=(t(1),t(2),function(e,r,t){var n=r.closest(".form-group"),a=r.closest(".input-group"),o=n.find(".form-control-feedback");r.addClass("is-invalid"),n.addClass("has-error");var i=n.find(".nf-error-message");0===i.length&&(i=$('<div class="nf-error-message text-danger small" style="display: none;"></div>'),a.length>0?a.after(i):o.length>0?o.after(i):r.after(i)),i.html(t),e.niceform("showElement",i)});window.__NICEFORM_DEBUG__=!0;var s={postFormEnabled:!0,postUrl:null,ajax:{type:"POST",dataType:"JSON"},password:{min:6,max:32,specialLength:1,uppercaseLength:1,numberLength:1},regex:{email:/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,url:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,simple:/^[a-zA-Z0-9]+(?:[-_\s][a-zA-Z0-9]+)*$/,reallySimple:/^[a-zA-Z0-9]+$/},animationDuration:200,locale:"en",validate:null,showError:function(e,r,t){e.niceform("showErrorMessage",t.locale.invalidErrorMessage),r.forEach(function(r){i(e,r,r.attr("data-error-message"))})},hideError:function(e,r){e.find(".has-error").removeClass("has-error"),e.find(".is-invalid").removeClass("is-invalid").attr("data-error-message",""),e.niceform("hideElement",e.find(".nf-error-message")),e.niceform("hideMessage")},processAjaxResponse:function(e,r,t){return e&&e.status},onValid:null,onInvalid:null,onBeforeSerializeForm:null,onBeforePostForm:null,onAjaxSuccess:function(e,r,t){r.niceform("showSuccessMessage",e.message||t.locale.successMessage),clearTimeout(n),n=setTimeout(function(){return r.niceform("hideMessage")},5e3)},onAjaxError:function(e,r,t){e.responseJSON?(r.niceform("showErrorMessage",e.responseJSON.message||t.locale.unknownErrorMessage),e.responseJSON.errorFields&&e.responseJSON.errorFields.forEach(function(e){i(r,r.find('[name="'.concat(e.name,'"]')),e.message)})):r.niceform("showErrorMessage",t.locale.unknownErrorMessage)}},l={date:"DD/MM/YYYY",time:"HH:mm",datetime:"DD/MM/YYYY HH:mm",successTitle:"Success!",successMessage:"The form has been successfully submitted",errorTitle:"Error!",invalidErrorMessage:"Please correct your invalid fields!",requiredErrorMessage:"This field is required",dateErrorMessage:"Please check the format of your date, it should be like 14/02/2000",timeErrorMessage:"Please check the format of your time, it should be like 14:02",datetimeErrorMessage:"Please check the format of your date time, it should be like 14/02/2000 14:02",emailErrorMessage:"Please check the format of your email address, it should read like someone@somewhere.com",numberErrorMessage:"Please enter only numbers",urlErrorMessage:"Please enter valid website address",passwordErrorMessage:"Your password must be at least 6 characters and it must contain numbers, letters (lowercase and uppercase) and at least 1 special character",repasswordErrorMessage:"Please confirm your password",simpleErrorMessage:"Please enter only letters, numbers and only 1 underscore or dash or space between letters and numbers",reallySimpleErrorMessage:"Please enter only letters and numbers, no punctuation, dots, etc",unknownErrorMessage:"Sorry, an error occurred attempting to submit the form. Please contact the site administrator to resolve!"},c=function(e){return!e.is('[data-ignore="validate"]')&&(!e.attr("data-error-message")&&(!!e.hasClass("required")||(e.val()||"").length>0))},u=function(e,r){return e.test(r)},f=function(e,r){var t=[];return e.find(".number").each(function(){var e,n=$(this);c(n)&&(e=this.value,isNaN(e)||"boolean"==typeof e)&&(n.attr("data-error-message",n.attr("data-number-message")||r),t.push(n))}),t};var d=function(e,r){var t={lower:0,upper:0,alpha:0,numeric:0,special:0,length:[0,1/0],custom:[],badWords:[],badSequenceLength:0,noQwertySequences:!1,noSequential:!1};for(var n in r)t[n]=r[n];var a,o,i={lower:/[a-z]/g,upper:/[A-Z]/g,alpha:/[A-Z]/gi,numeric:/[0-9]/g,special:/[\W_]/g};if(e.length<t.length[0]||e.length>t.length[1])return!1;for(a in i)if((e.match(i[a])||[]).length<t[a])return!1;for(o=0;o<t.badWords.length;o++)if(e.toLowerCase().indexOf(t.badWords[o].toLowerCase())>-1)return!1;if(t.noSequential&&/([\S\s])\1/.test(e))return!1;if(t.badSequenceLength){var s="abcdefghijklmnopqrstuvwxyz",l=s.toUpperCase(),c=t.badSequenceLength-1,u="_"+e.slice(0,c);for(o=c;o<e.length;o++)if(u=u.slice(1)+e.charAt(o),s.indexOf(u)>-1||l.indexOf(u)>-1||"0123456789".indexOf(u)>-1||t.noQwertySequences&&"qwertyuiopasdfghjklzxcvbnm".indexOf(u)>-1)return!1}for(o=0;o<t.custom.length;o++)if((a=t.custom[o])instanceof RegExp){if(!a.test(e))return!1}else if(a instanceof Function&&!a(e))return!1;return!0},h=function(e,r,t){var n=[];return e.find(".password").each(function(){var e,a=$(this);c(a)&&(e=this.value,!d(e,{lower:1,upper:r.uppercaseLength,alpha:0,numeric:r.numberLength,special:r.specialLength,length:[r.min,r.max],badWords:[],badSequenceLength:0,noQwertySequences:!1,noSequential:!1}))&&(a.attr("data-error-message",a.attr("data-password-message")||t),n.push(a))}),n},m=function(e,r){var t=[],n=function(e,r){var t=[],n={};return e.find(".required:radio, .required:checkbox").not('[data-ignore="validate"]').each(function(){if(!this.name in n){var a=e.find('input[name="'.concat(this.name,'"]'));0===a.filter(":checked").length&&(t.attr("data-error-message",a.attr("data-required-message")||r),t.push(a)),n[this.name]=!0}}),e.find(".required").filter("input, select, textarea").not('.tt-hint, :radio, :checkbox, [data-ignore="validate"]').each(function(){var e=$(this),n=e.val()||"",a=e.attr("placeholder");0!==n.length&&n!==a||(e.attr("data-error-message",e.attr("data-required-message")||r),t.push(e))}),t}(e,r.locale.requiredErrorMessage);if(n.length>0&&(t=t.concat(n)),void 0===window.moment)!function(){if(window.__NICEFORM_DEBUG__&&console&&"function"==typeof console.log){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];console.log.apply(console,["[ NiceForm ] "].concat(r))}}('WARN :: Can not find "moment", ignore ".date", ".datetime", ".time" fields');else{var a=function(e,r,t){var n=[];return e.find(".datetime").each(function(){var e=$(this);c(e)&&!moment(this.value,r,!0).isValid()&&(e.attr("data-error-message",e.attr("data-datetime-message")||t),n.push(e))}),n}(e,r.locale.datetime,r.locale.datetimeErrorMessage);a.length>0&&(t=t.concat(a));var o=function(e,r,t){var n=[];return e.find(".date").each(function(){var e=$(this);c(e)&&!moment(this.value,r,!0).isValid()&&(e.attr("data-error-message",e.attr("data-date-message")||t),n.push(e))}),n}(e,r.locale.date,r.locale.dateErrorMessage);o.length>0&&(t=t.concat(o));var i=function(e,r,t){var n=[];return e.find(".time").each(function(){var e=$(this);c(e)&&!moment(this.value,r,!0).isValid()&&(e.attr("data-error-message",e.attr("data-time-message")||t),n.push(e))}),n}(e,r.locale.time,r.locale.timeErrorMessage);i.length>0&&(t=t.concat(i))}var s=function(e,r,t){var n=[];return e.find(".email").each(function(){var e=$(this);c(e)&&!u(r,this.value)&&(e.attr("data-error-message",e.attr("data-email-message")||t),n.push(e))}),n}(e,r.regex.email,r.locale.emailErrorMessage);s.length>0&&(t=t.concat(s));var l=f(e,r.locale.numberErrorMessage);l.length>0&&(t=t.concat(l));var d=function(e,r,t){var n=[];return e.find(".url").each(function(){var e=$(this);c(e)&&!u(r,this.value)&&(e.attr("data-error-message",e.attr("data-url-message")||t),n.push(e))}),n}(e,r.regex.url,r.locale.urlErrorMessage);d.length>0&&(t=t.concat(d));var m=h(e,r.password,r.locale.passwordErrorMessage);m.length>0&&(t=t.concat(m));var g=function(e,r){var t=[],n=e.find(".password");return e.find(".repassword").each(function(){var e=$(this);e.val()!==n.val()&&(e.attr("data-error-message",e.attr("data-repassword-message")||r),t.push(e))}),t}(e,r.locale.repasswordErrorMessage);g.length>0&&(t=t.concat(g));var p=function(e,r,t){var n=[];return e.find(".simple").each(function(){var e=$(this);c(e)&&!u(r,this.value)&&(e.attr("data-error-message",e.attr("data-simple-message")||t),n.push(e))}),n}(e,r.regex.simple,r.locale.simpleErrorMessage);p.length>0&&(t=t.concat(p));var v=function(e,r,t){var n=[];return e.find(".really-simple").each(function(){var e=$(this);c(e)&&!u(r,this.value)&&(e.attr("data-error-message",e.attr("data-really-simple-message")||t),n.push(e))}),n}(e,r.regex.reallySimple,r.locale.reallySimpleErrorMessage);v.length>0&&(t=t.concat(v));var y=function(e){var r=[];return e.find(".regex").each(function(){var e=$(this),t=e.attr("data-regex");c(e)&&!u(new RegExp(t),this.value)&&(e.attr("data-error-message",e.attr("data-message")||e.attr("data-regex-message")),r.push(e))}),r}(e);if(y.length>0&&(t=t.concat(y)),"function"==typeof r.validate){var b=r.validate(e,r);b&&b.length>0&&(t=t.concat(b))}return!(t.length>0)||("function"==typeof r.showError&&r.showError(e,t,r),!1)},g=function(e){e.find("select, input, textarea").each(function(){this.readOnly&&this.setAttribute("data-origin-readonly",!0),this.readOnly=!0}),e.find("button").each(function(){this.disabled&&this.setAttribute("data-origin-disabled",!0),this.disabled=!0})},p=function(e){e.find("select, input, textarea").each(function(){this.getAttribute("data-origin-readonly")||(this.readOnly=!1)}),e.find("button").each(function(){this.getAttribute("data-origin-disabled")||(this.disabled=!1)})};function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var y=function(e,r){var t="multipart/form-data"===e.attr("enctype"),n=r.postUrl||e.attr("action")||window.location.pathname;"function"==typeof r.onBeforeSerializeForm&&(r.onBeforeSerializeForm.call(void 0,e,r),e.trigger("nf:onBeforeSerializeForm",e,r));var a=t?e.serializeWithFiles():e.serialize();"function"==typeof r.onBeforePostForm&&(r.onBeforePostForm.call(void 0,e,r,a),e.trigger("nf:onBeforePostForm",e,r,a));try{g(e);var o=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){v(e,r,t[r])})}return e}({},r.ajax,{url:n,data:a,success:function(t,n,a){p(e);var o=!1;"function"==typeof r.processAjaxResponse&&(o=r.processAjaxResponse(t,e,r)),o?"function"==typeof r.onAjaxSuccess&&(r.onAjaxSuccess.call(this,t,e,r),e.trigger("nf:onAjaxSuccess",t,e,r)):"function"==typeof r.onAjaxError&&(r.onAjaxError.call(this,a,e,r),e.trigger("nf:onAjaxError",a,e,r))},error:function(t){p(e),"function"==typeof r.onAjaxError&&(r.onAjaxError.call(this,t,e,r),e.trigger("nf:onAjaxError",t,e,r))}});t&&(o.processData=!1,o.contentType=!1),o.beforeSend=function(e,r){r.data=a,a.fake&&(e.setRequestHeader("Content-Type","multipart/form-data; boundary="+a.boundary),e.send=function(r){e.sendAsBinary(r.toString())})},$.ajax(o)}catch(t){"function"==typeof r.onAjaxError?(r.onAjaxError.call(void 0,null,e,r),e.trigger("nf:onAjaxError",null,e,r)):alert(r.unknownErrorMessage)}},b=function(e,r){e.stop().css("height","").animate({opacity:1,height:"show",marginTop:"show",marginBottom:"show",paddingTop:"show",paddingBottom:"show"},r,function(){e.css("height","")})},x=function(e,r,t,n,a){var i=e.find(".nf-form-message");0===i.length&&(i=o()('<div class="nf-form-message alert" style="display: none;"></div>'),e.prepend(i)),i.removeClass("alert-danger alert-info alert-success alert-warning");var s='\n<a class="close" data-dismiss="message">&times;</a>\n<b>'.concat(t,"</b><br />\n").concat(n,"\n");i.addClass("error"===r?"alert-danger":"alert-".concat(r)),i.html(s),b(i,a)},w=function(e,r){e.stop().animate({opacity:0,height:"hide",marginTop:"hide",marginBottom:"hide",paddingTop:"hide",paddingBottom:"hide"},r)},E=function(e,r){var t=e.find(".nf-form-message");0!==t.length&&w(t,r)};function M(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var S=function(){function e(r,t){if(function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r.jquery&&0!==r.length){var n=this.options=o.a.extend({},e.DEFAULTS,t);if("string"==typeof n.locale)n.locale=e.locales[n.locale];else{var a=n.locale;n.locale=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){j(e,r,t[r])})}return e}({},l,a)}this.form=r,r.off("submit").on("submit",function(e){e.preventDefault(),"function"==typeof n.hideError&&n.hideError(r,n),m(r,n)?("function"==typeof n.onValid&&(n.onValid(r,n),r.trigger("nf:onValid",r,n)),!0===n.postFormEnabled&&y(r,n)):"function"==typeof n.onInvalid&&(n.onInvalid(r,n),r.trigger("nf:onInvalid",r,n))}),r.on("click","[data-dismiss=message]",function(e){e.preventDefault(),E(r,n.animationDuration)})}}var r,t,n;return r=e,(t=[{key:"clearValue",value:function(e){!function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input, textarea, select";e.find(r).not('[data-ignore="clear"]').each(function(){var e=$(this),r=e.is("select"),t=e.is(":checkbox"),n=e.is(":radio");r?this.selectedIndex=-1:t||n?e.prop("checked",!1):e.val("")})}(this.form,e)}},{key:"enableForm",value:function(){p(this.form)}},{key:"disableForm",value:function(){g(this.form)}},{key:"showMessage",value:function(e,r,t){x(this.form,e,r,t,this.options.animationDuration)}},{key:"showSuccessMessage",value:function(e){x(this.form,"success",this.options.locale.successTitle,e,this.options.animationDuration)}},{key:"showErrorMessage",value:function(e){x(this.form,"danger",this.options.locale.errorTitle,e,this.options.animationDuration)}},{key:"hideMessage",value:function(){E(this.form,this.options.animationDuration)}},{key:"getOptions",value:function(){return o.a.extend({},this.options)}},{key:"showElement",value:function(e){b(e,this.options.animationDuration)}},{key:"hideElement",value:function(e){w(e,this.options.animationDuration)}}])&&M(r.prototype,t),n&&M(r,n),e}();j(S,"DEFAULTS",s),j(S,"version","1.1.1"),j(S,"locales",{en:l,vi:{date:"DD/MM/YYYY",time:"HH:mm",datetime:"DD/MM/YYYY HH:mm",successTitle:"Thành công!",successMessage:"Gửi lên máy chủ thành công",errorTitle:"Lỗi!",invalidErrorMessage:"Xin vui lòng sửa các trường lỗi",requiredErrorMessage:"Trường này là bắt buộc",dateErrorMessage:"Xin vui lòng nhập ngày tháng hợp lệ. Ví dụ: 14/02/2000",timeErrorMessage:"Xin vui lòng nhập thời gian hợp lệ. Ví dụ: 14:02",datetimeErrorMessage:"Xin vui lòng nhập ngày tháng và thời gian hợp lệ. Ví dụ 14/02/2000 14:02",emailErrorMessage:"Xin vui lòng nhập địa chỉ email hợp lệ của bạn. Định dạng email nên là  someone@somewhere.com",numberErrorMessage:"Xin vui lòng chỉ nhập chữ số",urlErrorMessage:"Xin vui lòng nhập địa chỉ website hợp lệ",passwordErrorMessage:"Mật khẩu của bạn tối thiểu phải có 6 ký tự bảo gồm chữ cái (hoa và thường), chữ số và tối thiểu 1 kí tự đặc biệt",repasswordErrorMessage:"Xin vui lòng nhập lại mật khẩu",simpleErrorMessage:"Xin vui lòng chỉ nhập chữ cái, chữ số và chỉ duy nhất 1 gạch ngang hoặc gạch chân hoặc dấu cách giữa chữ cái và chữ số",reallySimpleErrorMessage:"Xin vui lòng chỉ nhập chữ cái và chữ số",unknownErrorMessage:"Rất tiếc, có lỗi xảy ra khi kết với máy chủ. Xin vui lòng liên hệ với quản trị để xử lý!"}}),o.a.fn.niceform=function(e){var r=o()(this),t=r.data("niceform");if("string"!=typeof e)return t||r.data("niceform",t=new S(r,e)),t;if(t&&e in S.prototype){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return t[e].apply(t,a)}};r.default=S}]).default});
//# sourceMappingURL=jquery.niceform.js.map