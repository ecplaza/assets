webpackJsonp([33],{323:function(t,e,o){t.exports=o(324)},324:function(t,e,o){"use strict";(function(t){function e(t){swal({title:"Are you sure?",text:"Changing the formatting of this message from HTML to plain text requires removing all the current formatting.\n Are you sure you want to do this?",type:"warning",showCancelButton:!0,confirmButtonColor:"#ec6c62",confirmButtonText:"Yes, change!",closeOnConfirm:!0},t)}function n(){var t;t=a(".js-list-left ul li.active").length,a(".js-list-arrows button.move-right").prop("disabled",0===t),t=a(".js-list-right ul li.active").length,a(".js-list-arrows button.move-left").prop("disabled",0===t)}function i(t,e,o){var n=new Option;n.value=e,n.text=o,document.forms["frm-compose"].product_list.options[t]=n}var a=o(0);o(8);var r=(o(56),"text");t.afterDOMLoaded=function(t){},t.initForm=function(){var t;if(t=ECP.module.formValidator.init(ECP.Context.form),t.data("bootstrapValidator").options.misc.onSuccess=function(t,e){var o=t.find("input[name=cmd]").val();"preview"===o?(e.preventDefault(),a.ajax({url:t.attr("action"),type:"POST",data:t.serialize()}).done(function(e){t.ekkoLightbox({title:"Preview",message:'<iframe name="frame_preview" style="border:0;" height="600" width="100%"></iframe>',width:800,onShown:function(){document.frame_preview.document.body.innerHTML=e}})}).always(function(){a.ladda("stopAll")})):"copy_draft"===o&&(e.preventDefault(),t.data("bootstrapValidator").defaultSubmit())},a("button.ladda-button[type=submit]").ladda("bind"),"html"===t.find("input[name=mode]").val()){r="html",a(".js-editor-toggle").text("Plain Text");ECP.module.editor.init("#content",{height:"300px"}).editor.on("change",function(){t.data("bootstrapValidator").revalidateField("description")})}t.on("click","button[type=submit]",function(){t.find("input[name=cmd]").val(a(this).val()),t.attr("action",a(this).data("url"))}).on("click",".js-select-products",function(){a(this).ekkoLightbox({title:"Select Products",message:a("#frm-products"),onShown:function(){a("#frm-products").show()},onHide:function(){a("#frm-products").hide().appendTo("body")}})}).on("click",".js-select-drafts",function(){a(this).ekkoLightbox({title:"Select Draft",message:a("#frm-drafts"),onShown:function(){a("#frm-drafts").show()},onHide:function(){a("#frm-drafts").hide().appendTo("body")}})})},function(){var t=a("#frm-products");t.submit(function(){var t="";return document.forms["frm-compose"].product_list.options.length=1,a(".js-list-right .list-group-item").each(function(e,o){var n=a(o),r=n.data("id"),l=n.data("name");n.data("thumb");t+=r+",",i(e+1,r,l)}),document.forms["frm-compose"].products.value=t,a("#frm-compose").data("bootstrapValidator").revalidateField("products"),a.ladda("stopAll"),parent.$(".ekko-lightbox").modal("hide"),!1}),t.on("click",".list-group-item",function(){a(this).toggleClass("active"),n()}).on("click",".js-list-arrows button",function(t){var e,o=a(this);t.preventDefault(),o.hasClass("move-left")?(e=a(".js-list-right ul li.active"),e.clone().appendTo(".js-list-left ul"),e.remove()):o.hasClass("move-right")&&(e=a(".js-list-left ul li.active"),e.clone().appendTo(".js-list-right ul"),e.remove()),n()})}(),a(".js-select-draft-action").click(function(){ECP.module.Ladda.create(this).start();var t=a("#frm-compose");t.attr("action",a("#frm-drafts").attr("action")+"?id="+a(this).data("id")),t.find("input[name=cmd]").val("copy_draft"),t.bootstrapValidator("enableFieldValidators","subject",!1),t.bootstrapValidator("enableFieldValidators","products",!1),t.bootstrapValidator("enableFieldValidators","content",!1),t.submit()}),a(".js-editor-toggle").click(function(){var t,o,n=function(){a("#frm-compose").data("bootstrapValidator").revalidateField("content")},i=a(this);"text"===r?(t=a("#content").val(),t=t.replace(/\r?\n/g,"<br>"),a("#content").val(t),o=ECP.module.editor.init("#content",{height:"300px"}),o.editor.on("change",n),r="html",i.text("Plain Text"),a("#frm-compose input[name=mode]").val(r)):e(function(){var t,e,o;t=a("#content").ckeditor().editor,t.removeListener("change",n),t.destroy(),e=a("#content").val(),o=document.createElement("DIV"),o.innerHTML=e,e=o.textContent||o.innerText||"",a("#content").val(e),r="text",i.text("HTML Format"),a("#frm-compose input[name=mode]").val(r)})})}).call(e,o(1))}},[323]);