/**
 * Created by zhangsu on 15/7/20.
 */

var baseurl="http://localhost:8080/lanmo"
var versionId='1.0'
var TEST=true

if(TEST){
    baseurl="http://localhost:8080/lanmo"
}

//是否存在
function exist(s){
    if(s==undefined||s==null||s==''||s=='null'||s==' '||s=='undefined'){
        return false
    }
    return true
}
//验证手机号
function validateMobile(mobile)
{
    if(!exist(mobile)||mobile.length==0){
        return '请输入手机号码';
    }
    if(mobile.length!=11){
        return'请输入有效的手机号码';
    }

    var myreg = /^(((1[0-9]{2}))+\d{8})$/;
    if(!myreg.test(mobile))
    {
        return'请输入有效的手机号码';
    }
    return '1'
}
/**
 * showShortTop(message)
 showShortCenter(message)
 showShortBottom(message)
 showLongTop(message)
 showLongCenter(message)
 showLongBottom(message)
 * @param message
 */
function toast(message){
//    new Toast({context:$('body'),message:message}).show();
    if(TEST){
        alert(message)
    }else{
        window.plugins.toast.showShortTop(message)
    }
}