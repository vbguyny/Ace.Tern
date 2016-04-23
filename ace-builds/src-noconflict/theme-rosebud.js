ace.define("ace/theme/rosebud",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-rosebud";
exports.cssText = "\
@font-face {\
    font-family: 'Inconsolata';\
    font-style: normal;\
    font-weight: 400;\
    src: local('Inconsolata'), url(ace-builds/src-noconflict/fonts/inconsolata-ext.woff2) format('woff2');\
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\
}\
@font-face {\
    font-family: 'Inconsolata';\
    font-style: normal;\
    font-weight: 400;\
    src: local('Inconsolata'), url(ace-builds/src-noconflict/fonts/inconsolata.woff2) format('woff2');\
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;\
}\
.ace-rosebud .ace_gutter {\
background: #ebebeb;\
color: #333;\
overflow : hidden;\
}\
.ace-rosebud .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-rosebud {\
background-color: #FFFFFF;\
color: black;\
font-family: 'Courier New';\
font-size: 10pt;\
}\
.ace-rosebud .ace_cursor {\
color: black;\
}\
.ace-rosebud .ace_invisible {\
color: rgb(191, 191, 191);\
}\
.ace-rosebud .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-rosebud .ace_constant.ace_language {\
color: #0000FF;\
}\
.ace-rosebud .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-rosebud .ace_invalid {\
background-color: rgb(153, 0, 0);\
color: white;\
}\
.ace-rosebud .ace_fold {\
}\
.ace-rosebud .ace_support.ace_function {\
color: #0000FF;\
}\
.ace-rosebud .ace_support.ace_constant {\
color: #000000;\
}\
.ace-rosebud .ace_support.ace_type,\
.ace-rosebud .ace_support.ace_class\
.ace-rosebud .ace_support.ace_other {\
color: rgb(109, 121, 222);\
}\
.ace-rosebud .ace_variable.ace_parameter {\
color:#000000;\
}\
.ace-rosebud .ace_keyword.ace_operator {\
color: #000000;\
}\
.ace-rosebud .ace_comment {\
color: #008000;\
}\
.ace-rosebud .ace_comment.ace_doc {\
color: #008000;\
}\
.ace-rosebud .ace_comment.ace_doc.ace_tag {\
color: #008000;\
}\
.ace-rosebud .ace_constant.ace_numeric {\
color: #000000;\
}\
.ace-rosebud .ace_variable {\
color: #000000;\
}\
.ace-rosebud .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-rosebud .ace_entity.ace_name.ace_function {\
color: #000000;\
}\
.ace-rosebud .ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-rosebud .ace_list {\
color:rgb(185, 6, 144);\
}\
.ace-rosebud .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-rosebud .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-rosebud .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-rosebud .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-rosebud .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.07);\
}\
.ace-rosebud .ace_gutter-active-line {\
background-color : #dcdcdc;\
}\
.ace-rosebud .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-rosebud .ace_storage,\
.ace-rosebud .ace_keyword,\
.ace-rosebud .ace_meta.ace_tag {\
color: #0000FF;\
}\
.ace-rosebud .ace_string.ace_regex {\
color: rgb(255, 0, 0)\
}\
.ace-rosebud .ace_string {\
color: rgb(163, 21, 21);\
}\
.ace-rosebud .ace_entity.ace_other.ace_attribute-name {\
color: #994409;\
}\
.ace-rosebud .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
