webpackJsonp([24],{356:function(e,a,n){e.exports=n(357)},357:function(e,a,n){"use strict";(function(e){var a=n(0),l=n(18),t=(n(3),n(358));e.initForm=function(){var e,n;if(e=ECP.module.formValidator.init(ECP.Context.form),e.data("bootstrapValidator").options.misc.onSuccess=function(e){ECP.module.Ladda.create(e.find(".ladda-button")[0]).start()},a("#fileupload").length){n=ECP.Context.getData("videoQuotaRemains",102400),n=n>102400?102400:n;new l("#frm-video","#fileupload",{uploadUrl:"/mto/videos/upload",acceptFileTypes:/(\.|\/)(avi|wmv|mp4|flv|mov|mpg|mpeg|asf)$/i,maxFileSize:n,preserveFilename:!1,uploadTemplateId:"",downloadTemplateId:"",start:function(e,n){a("#loader").addClass("loading")},uploaded:function(e,n){a("#upload-container").hide();var l=t(n.result);a("#preview-video-content").html(l),a("#preview-video").show()},failed:function(e,a){var n;a.jqXHR?n=a.jqXHR.responseText:a.files.error&&(n=a.files[0].error),n&&swal({title:n,type:"error"})},progressall:function(e,n){var l=parseInt(n.loaded/n.total*100,10);a("#progress .progress-bar").css("width",l+"%")},processalways:function(e,a){var n=a.index,l=a.files[n];l.error&&swal({title:l.error,type:"error"})},always:function(e,a){var n;a.jqXHR&&200!==a.jqXHR.status?n=422===a.jqXHR.status?"File is too large":a.jqXHR.responseText:a.errorThrown?n=a.errorThrown:a.files[0].error&&(n=a.files[0].error),n&&swal({title:n,type:"error"})}})}e.on("click",".thumbnail-wrap",function(){a(".thumbnail-select").removeClass("selected"),a(this).parents(".thumbnail-select").addClass("selected"),a("input[name=thumbnail_idx]").val(a(this).attr("rel")),e.data("bootstrapValidator").revalidateField("thumbnail_idx")})}}).call(a,n(1))},358:function(e,a,n){var l=n(3);e.exports=(l.default||l).template({1:function(e,a,n,l,t){var i,s,o=null!=a?a:{},r=n.helperMissing,d=e.escapeExpression;return'            <div id="item'+d((s=null!=(s=n.index||t&&t.index)?s:r,"function"==typeof s?s.call(o,{name:"index",hash:{},data:t}):s))+'" class="thumbnail-select '+(null!=(i=n.unless.call(o,t&&t.index,{name:"unless",hash:{},fn:e.program(2,t,0),inverse:e.noop,data:t}))?i:"")+'">\n                <div class="thumbnail-wrap" rel="'+d((s=null!=(s=n.index||t&&t.index)?s:r,"function"==typeof s?s.call(o,{name:"index",hash:{},data:t}):s))+'">\n                    <img src="'+d((s=null!=(s=n.url||(null!=a?a.url:a))?s:r,"function"==typeof s?s.call(o,{name:"url",hash:{},data:t}):s))+'" class="img-responsive">\n                    <span class="thumbnail-overlay">\n                        Set as thumbnail\n                    </span>\n                </div>\n            </div>\n'},2:function(e,a,n,l,t){return"selected"},compiler:[7,">= 4.0.0"],main:function(e,a,n,l,t){var i,s,o=null!=a?a:{},r=n.helperMissing,d=e.escapeExpression;return'<div class="form-group">\n    <label class="col-sm-3 control-label">\n        VIDEO THUMBNAILS <i class="fa fa-lg fa-question-circle" data-toggle="tooltip" data-placement="bottom" title="Choose the thumbnail that best represents your video"></i>\n    </label>\n    <div class="col-sm-8">\n        <div class="thumbnaillist clearfix">\n'+(null!=(i=n.each.call(o,null!=a?a.thumbnails:a,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?i:"")+'\n        <input type="hidden" name="video" value="'+d((s=null!=(s=n.video||(null!=a?a.video:a))?s:r,"function"==typeof s?s.call(o,{name:"video",hash:{},data:t}):s))+'">\n        <input type="hidden" name="basename" value="'+d((s=null!=(s=n.basename||(null!=a?a.basename:a))?s:r,"function"==typeof s?s.call(o,{name:"basename",hash:{},data:t}):s))+'">\n        <input type="hidden" name="size" value="'+d((s=null!=(s=n.size||(null!=a?a.size:a))?s:r,"function"==typeof s?s.call(o,{name:"size",hash:{},data:t}):s))+'">\n        <input type="hidden" name="thumbnail_idx" value="0">\n        </div>\n    </div>\n</div>'},useData:!0})}},[356]);