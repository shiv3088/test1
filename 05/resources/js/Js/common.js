function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exInMinutes) {
    var d = new Date();
    d.setTime(d.getTime() + (exInMinutes * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookieLastLooking(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}
function isEmail(e) {
    var temp = false;
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    temp = regex.test(e.value);
    return temp
}
function allowCharacter(txb) {
    txb.value = txb.value.replace(/([^\a-zA-Z\s])+$/, "").toUpperCase();
    txb.value = txb.value.replace(/ +/g, " ");
}
function allowNumberWithSpace(txb) {
    txb.value = txb.value.replace(/[^\0-9\s]/ig, "");
    txb.value = txb.value.replace(/ +/g, " ");
}
function allowNumber(txb) {
    txb.value = txb.value.replace(/[^\0-9]/ig, "").trim();
}
function isLuhnCheckPassed(cardnumber) {
    var cardNumber = cardnumber;
    var sum = 0;
    var currentDigit;
    var cardNumberLengthIsEvenMode = (cardNumber.length % 2);
    var ArrCardNumber = cardNumber.split("");
    for (var temp = 0; temp < cardNumber.length; temp++) {
        currentDigit = parseInt(ArrCardNumber[temp], 10);
        if ((temp % 2) == cardNumberLengthIsEvenMode) {
            currentDigit *= 2;
            if (currentDigit > 9)
                currentDigit -= 9;
        }
        sum += currentDigit;
    }

    return (sum % 10 == 0);
}
function getMonthName(m) {
    var month;
    switch (m) {
        case 0: month = "Jan"; break;
        case 1: month = "Feb"; break;
        case 2: month = "Mar"; break;
        case 3: month = "Apr"; break;
        case 4: month = "May"; break;
        case 5: month = "Jun"; break;
        case 6: month = "Jul"; break;
        case 7: month = "Aug"; break;
        case 8: month = "Sep"; break;
        case 9: month = "Oct"; break;
        case 10: month = "Nov"; break;
        case 11: month = "Dec"; break;
    }
    return month;
}
function getDay(d) {
    var day;
    switch (d) {
        case 0: day = "Sun"; break;
        case 1: day = "Mon"; break;
        case 2: day = "Tue"; break;
        case 3: day = "Wed"; break;
        case 4: day = "Thu"; break;
        case 5: day = "Fri"; break;
        case 6: day = "Sat"; break;
    }
    return day;
}
function parseJsonDate(jsonDate) {
    try {
        var offset = new Date().getTimezoneOffset() * 60000;
        var parts = /\/Date\((-?\d+)([+-]\d{2})?(\d{2})?.*/.exec(jsonDate);

        if (parts[2] == undefined)
            parts[2] = 0;

        if (parts[3] == undefined)
            parts[3] = 0;

        var date = new Date(+parts[1] + offset + parts[2] * 3600000 + parts[3] * 60000);
        return date;
    } catch (err) { alert("parseJsonDate:" + err); }
}
$(function(){
var inputWidth = $('#txtFrom').width();
$('#txtFrom,#txtTo').keyup(function(e){
$('.ui-autocomplete').css('width',inputWidth+'px');
})
});
