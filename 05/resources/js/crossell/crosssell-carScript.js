'use strict';

(function(){

    $('.advanceOptLink').click(function(){
        $('#advanceOpt').slideToggle();
    })

    $('.pickUpDate').click(function(){
        if ($('input.dropOff').prop('checked'   )) {
            $('#dropOffLocation').show();
            $('#pickUpLocation').removeClass('col-sm-4').addClass('col-sm-2');
        }else{
            $('#dropOffLocation').hide();
            $('#pickUpLocation').removeClass('col-sm-2').addClass('col-sm-4');
        }
    });
})();

function split(t) {
    return t.split(/,\s*/);
}

function extractLast(t) {
    return split(t).pop();
}

function monkeyPatchAutocomplete() {
    var oldFn = $.ui.autocomplete.prototype._renderItem;
    $.ui.autocomplete.prototype._renderItem = function(ul, item) {
        var re = new RegExp("^" + this.term, "i");
        var t = item.label.replace(re, "<span>" + this.term + "</span>");
        return $("<li></li>").data("item.autocomplete", item).append("<a>" + t + "</a>").appendTo(ul)
    }
}

$(document).ready(function(){
	monkeyPatchAutocomplete();
    var nOm;
    $(window).resize(function() {
        //clearTimeout(nOm);
        if ($(window).width() < 768) {
          nOm = 1;
          $("#departDate").datepicker("option", "numberOfMonths", nOm);
        } else {
          nOm = 2;
          $("#departDate").datepicker("option", "numberOfMonths", nOm);
        }
    }).trigger("resize");  
    var checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() + 2);  
    var maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 11);
    
    var d = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
    
    $("#pickDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "mm-dd-yy",
        showButtonPanel: false,
        minDate: checkInDate,
        maxDate: maxDate,
        numberOfMonths: nOm,
        onClose: function() {
            var a = $("#pickDate").datepicker("getDate");
            day = a.getDate(), year = a.getFullYear();
            var b = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            month = b[a.getMonth()];
            var c = new Array(7);
            c[0] = "MON", c[1] = "TUE", c[2] = "WED", c[3] = "THU", c[4] = "FRI", c[5] = "SAT", c[6] = "SUN";
            var f = $("#dropDate").datepicker("getDate");
            if (null != a && "" != a) {
            	
            	var date_diff = Math.ceil((a.getTime() - Date.parse(today)) / 86400000);
                var maxDatedrop=date_diff+26+'d';
                
                $("#dropDate").datepicker("change", {
                    minDate: new Date(a),
                    maxDate: maxDatedrop
                });
                var g = new Date(a.getFullYear(), a.getMonth(), a.getDate());
                if (null != f) {
                    var h = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                    g > h && ($("#dropDate").val($.datepicker.formatDate("mm-dd-yy", new Date(g))), $("#dropDate").datepicker("show"))
                } else $("#dropDate").val($.datepicker.formatDate("mm-dd-yy", new Date(g))), $("#dropDate").datepicker("show")
            }
        }
    });
    
    var hotelSelectDate1 = $("#pickDate").datepicker("getDate");
    var hotelDateMin = new Date(hotelSelectDate1.getFullYear(), hotelSelectDate1.getMonth(), hotelSelectDate1.getDate());
    var hotelDateMax = new Date(hotelSelectDate1.getFullYear(), hotelSelectDate1.getMonth(), hotelSelectDate1.getDate());
   // hotelDateMax.setMonth(hotelDateMin.getMonth()+1);
    hotelDateMax.setDate(hotelDateMin.getDate()+26);
    
    $("#dropDate").datepicker({
        changeMonth: false,
        changeYear: false,
        dateFormat: "mm-dd-yy",
        showButtonPanel: false,
        minDate: hotelDateMin,
        maxDate: hotelDateMax,
        numberOfMonths: nOm,
        onClose: function() {
            var a = $("#pickDate").datepicker("getDate"),
                b = $("#dropDate").datepicker("getDate");
            day = b.getDate(), year = b.getFullYear();
            var c = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            month = c[b.getMonth()];
            var d = new Array(7);
            d[0] = "MON", d[1] = "TUE", d[2] = "WED", d[3] = "THU", d[4] = "FRI", d[5] = "SAT", d[6] = "SUN";
           
           
        }
    });
   /* var t = !0, e = !0;
    $("#pickLocation").autocomplete({
        source:function(t, e) {
            $.getJSON("/get_city_list", {
                term:extractLast(t.term),
                type:"flight"
            }, e);
        },
        search:function() {
            var t = extractLast(this.value);
            return t.length < 3 ? !1 :void 0;
        },
        focus:function() {
           // return !1;
        },
        select:function(t, i) {
            var r = split(this.value);
            r.pop(), r.push(i.item.value);
            var u = i.item.value, n = u.indexOf("(");
            return u.indexOf(")"), u = u.substring(0, n), e = !1, this.value = r, !1;
        }
    }).blur(function() {
        if (e) {
            $("#pickLocation").val($("ul#ui-id-6 li:first a").text());
           
        }
    });*/
    
    
    var pSelectTo = null;
    
    $("#pickLocation").autocomplete({
       source:function(t, e) {
       	$.getJSON("/get_city_list", {
               term:extractLast(t.term),
               type:"car"
           }, e);
       },
       change: function(event, ui) {
       	
           if (!ui.item) {
           	$("#pickLocation").val("");
           }
       },
       search:function() {
           var t = extractLast(this.value);
           return t.length < 3 ? !1 :void 0;
       },
       focus:function(event, ui) {
           var terms = split(this.value);
           
           terms.pop();
           terms.push(ui.item.value);
           var cityImage = ui.item.value;
           
           var hl = cityImage.split('</i>')[0]+'</i>';
           var h = cityImage.split('</i>')[1];
           var hdn = h.split("<span style='display: none;'>")[0];
           var hid = (h.split("<span style='display: none;'>")[1]).split("--")[0];
           var hCode = (cityImage.split('--')[1]).split("</span>")[0];
         
           
           $('#pickUpLocationID').val(hid);
           $('#pickUpLocationCode').val(hCode);
           
           var n = cityImage.indexOf("(");
           var l = cityImage.indexOf(")");
           cityImage = cityImage.substring(0, n);
         
           pSelectTo = !1;
           this.value = hdn;            
           
           return !1
       },
       select:function(event, ui) {
           /*var r = split(this.value);
           r.pop(), r.push(i.item.value);
           var u = i.item.value, n = u.indexOf("(");
           return u.indexOf(")"), u = u.substring(0, n), e = !1, this.value = r, !1;*/

           var terms = split(this.value);
           terms.pop();
           terms.push(ui.item.value);
           var cityImage = ui.item.value;
           
           
           var hl=cityImage.split('</i>')[0]+'</i>';
           var h=cityImage.split('</i>')[1];
           var hdn=h.split("<span style='display: none;'>")[0];
           var hid=(h.split("<span style='display: none;'>")[1]).split("--")[0];
           var hCode = (cityImage.split('--')[1]).split("</span>")[0];
           
           $('#pickUpLocationID').val(hid);
           $('#pickUpLocationCode').val(hCode);
           
           console.log("select hid "+hid);
           
           var n = cityImage.indexOf("(");
           var l = cityImage.indexOf(")");
           cityImage = cityImage.substring(0, n);
           pSelectTo = !1;
           this.value = hdn;            
           
           return !1
       
       }
   }).blur(function() {
       if (pSelectTo) {
           $("#pickLocation").val($("ul#ui-id-6 li:first a").text());           
       }
   });
    
});


function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
} 


if(isMobile.phone || isMobile.tablet){
    
    $("#cxlPaymentClick").click(function(){
        $("#cxlPaymentSummary").removeClass('hidden-xs hidden-sm');
        $('html, body').animate({scrollTop:$("#cxlPaymentSummary").position().top}, 'slow');
    })

    $("#gotoTop").click(function(){
        $("#cxlPaymentSummary").addClass('hidden-xs hidden-sm');
        $('html, body').animate({scrollTop:0}, 'slow');
    })
}

(function () {
    $(window).scroll(function () {
        var bottomSticky = $('.mobile-link-tab'),   
            scroll = $(window).scrollTop();
        if (scroll > 150) {
            
            $('.mobile-link-tab').css('bottom', '10px');
        } else {
            $('.mobile-link-tab').css('bottom', '-100');
        }
    });
})();
