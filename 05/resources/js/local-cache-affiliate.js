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


