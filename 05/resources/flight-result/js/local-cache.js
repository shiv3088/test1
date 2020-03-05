function setExpiration(key,expireDate){var expirations=localStorage.getItem("localStorageExpirations");if(expirations){var arr=expirations.split("|");for(var i=0;i<arr.length;i++){var expiration=arr[i];if(expiration.split('^')[0]==key){arr.splice(i,1);break}}
arr.push(key+"^"+expireDate.toString());localStorage.setItem("localStorageExpirations",arr.join("|"))}else{localStorage.setItem("localStorageExpirations",key+"^"+expireDate.toString())}}
function getExpiration(key){var expirations=localStorage.getItem("localStorageExpirations");if(expirations){var arr=expirations.split("|");for(var i=0;i<arr.length;i++){var expiration=arr[i];var k=expiration.split('^')[0];var e=expiration.split('^')[1];if(k==key){var now=new Date();var eDate=new Date(e);if(now>eDate){arr.splice(i,1);if(arr.length>0){localStorage.setItem("localStorageExpirations",arr.join("|"))}else{localStorage.removeItem("localStorageExpirations")}}
return new Date(e)}}}
return null}
Storage.prototype.setCacheItem=function(key,value,exp){var val=null;if(typeof value=='object'){value.isJson=!0;val=JSON.stringify(value)}else{val=value}
localStorage.setItem(key,val);var now=new Date();var expireDate=new Date();if(typeof expireDate=='undefined'){expireDate.setDate(now.getDate()+1)}else{if(exp.minutes){expireDate.setMinutes(now.getMinutes()+exp.minutes)}
if(exp.hours){expireDate.setHours(now.getHours()+exp.hours)}
if(exp.days){expireDate.setDate(now.getDate()+exp.days)}
if(exp.months){expireDate.setMonth(now.getMonth()+exp.months)}
if(exp.years){expireDate.setYear(now.getYear()+exp.years)}}
setExpiration(key,expireDate)};Storage.prototype.getCacheItem=function(key){if(!localStorage.getItem(key)){return null}
var now=new Date();var expireDate=getExpiration(key);if(expireDate&&now<=expireDate){var value=localStorage.getItem(key);try{var parsed=JSON.parse(value);if(parsed.isJson){delete parsed.isJson;return parsed}else{return value}}catch(e){return value}}
localStorage.removeItem(key);return null}




function popup(divProgressBar, width, height) {
    try {
        var height1 = $(window).height();
        var width1 = $(window).width();
        $('#' + divProgressBar).height(height + "%");
        $('#' + divProgressBar).width(width + "%");
        $('#' + divProgressBar).css({
            top: ((height1 - ((height1 * parseInt(height)) / 100)) / 2).toFixed(0) + "px",
            left: ((width1 - ((width1 * parseInt(width)) / 100)) / 2).toFixed(0) + "px"
        });

        $('#fadebackground').height(height1 + "px");
        $('#fadebackground').width(width1 + "px");
        $('#fadebackground').toggle();
        $('#' + divProgressBar).toggle();
        return false;
    } catch (e) {
        return false;
    }
}
/*
var sessionTimeout = 18;
var secound = 0;
window.onload = DisplaySessionTimeout;
var xLoad = true;
function DisplaySessionTimeout() {
    // sessionTimeout = sessionTimeout - 1;
  //  document.getElementById("xxxxx").innerHTML = sessionTimeout + " : " + secound;
  console.log("Call:"+sessionTimeout + " : " + secound);
    if (sessionTimeout < 2) {
        if(xLoad){
        $("#sessionTimeClose").on('click', function(){
            xLoad = false;
            console.log('Close the dic');
            $("#sessionTimeOutDiv").fadeOut();
        });
        $("#sessionTimeOutDiv").fadeIn();
        
        if (secound > 9) {
            document.getElementById("sessionTime").innerHTML = sessionTimeout + " : " + secound;
            //document.getElementById("&lt;%= lblSessionTime.ClientID %&gt;").innerText = sessionTimeout " : " secound;
        } else {
            document.getElementById("sessionTime").innerHTML = sessionTimeout + " : 0" + secound;
            //document.getElementById("&lt;%= lblSessionTime.ClientID %&gt;").innerText = sessionTimeout " : 0" secound;
        }
    }
    }
    if (secound == 0) {
        sessionTimeout = sessionTimeout - 1;
        secound = 59;
    } else {
        secound = secound - 1;
    }
    if (sessionTimeout >= 0) {

        window.setTimeout("DisplaySessionTimeout()", 1000);
    } else {
        callSessionTimeOut();
    }
}
function callSessionTimeOut() {
    popup('divSessionOut', 30, 30);
    $("#sessionTimeOutDiv").fadeOut();
    return true;
};*/
