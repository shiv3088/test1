function split(val) {
    return val.split(/,\s*/);
}
function extractLast(term) {
    return split(term).pop();
}

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

function monkeyPatchAutocomplete() {

    // Don't really need to save the old fn, 
    // but I could chain if I wanted to
    var oldFn = $.ui.autocomplete.prototype._renderItem;

    $.ui.autocomplete.prototype._renderItem = function( ul, item) {
        var re = new RegExp("^" + this.term, "i") ;
        //console.log("re:"+re);
        var t = item.label.replace(re,"<span>" + this.term + "</span>");
        return $( "<li></li>" )
            .data( "item.autocomplete", item )
            .append( "<a>" + t + "</a>" )
            .appendTo( ul );
    };
}

$(document).ready(function() {
	 monkeyPatchAutocomplete();
	 var selectFrom = true;
     var selectTo = true;
    $( "#froCity" ).autocomplete({
      source: function (request, response) {
    	  
         $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response);
        },
        search: function () {
            // custom minLength
            var term = extractLast(this.value);
           
            if (term.length < 1) {
                return false;
            }
        },
        focus: function () {
            // prevent value inserted on focus
            return false;
        },
        select: function (event, ui) {
            var terms = split(this.value);
            
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push(ui.item.value);
            //alert(terms);
            // add placeholder to get the comma-and-space at the end
           // terms.push("");
            this.value = terms;//.join(", ");
         //   $("#returnToCity").val(terms);
            selectFrom = false;
          
            return false;
        }
    }).blur(function () {
    	
    	 if(selectFrom){
            $("#froCity").val($('ul#ui-id-1 li:first a').text());
           // $("#returnToCity").val($('ul#ui-id-1 li:first a').text());
          
            
    	 }
    });
     
    $( "#toCity").autocomplete({
        source: function (request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response);
        },
        search: function () {
            // custom minLength
            var term = extractLast(this.value);
            if (term.length < 1) {
                return false;
            }
        },
        focus: function () {
            // prevent value inserted on focus
            return false;
        },
        select: function (event, ui) {
            var terms = split(this.value);
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push(ui.item.value);
        
            var cityImage=ui.item.value;
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
           cityImage=cityImage.substring(0,n);
            //alert(cityImage.text().replace(" ", ""));
           // $('#background').css({'background-image': 'url(/resources/images/banner/' + cityImage.replace(" ", "").toLowerCase() + '.jpg)'}).fadeOut(function(){$(this).fadeIn()});
         
           if(imgExists("/resources/images/banner/" + cityImage.replace(" ", "").toLowerCase() + ".jpg")){
          /*  var image = $('#background');
            image.fadeOut(1000, function () {
            	 image.css("background-image", "url('/resources/images/banner/" + cityImage.replace(" ", "").toLowerCase() + ".jpg')");
              
                image.fadeIn(1000);
            });*/
            
            
            
            $('#background').animate({
                opacity: 0
            }, 100, function() {
                // Callback
                $('#background').css("background-image", "url('/resources/images/banner/" + cityImage.replace(" ", "").toLowerCase() + ".jpg')").promise().done(function(){
                    // Callback of the callback :)
                    $('#background').animate({
                        opacity: 1
                    }, 600)
                });    
            });
            
            
           }
            // add placeholder to get the comma-and-space at the end
           // terms.push("");
           
            this.value = terms;//.join(", ");
          //  $("#returnFroCity").val(terms);
            selectTo = false;
            return false;
        }
    }).blur(function () {
    	   if(selectTo){
            $("#toCity").val($('ul#ui-id-2 li:first a').text());
           // $("#returnFroCity").val($('ul#ui-id-2 li:first a').text());
            
            var cityImage=$('ul#ui-id-2 li:first a').text();
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
           cityImage=cityImage.substring(n+1,l);
            
        }
    });
     
    
    
    
    
    var selectRtFrom = true;
    var selectRtTo = true;
   $( "#returnFroCity" ).autocomplete({
     source: function (request, response) {
        $.getJSON("/get_city_list", {
               term: extractLast(request.term),
               type: "flight"
           }, response);
       },
       search: function () {
           // custom minLength
           var term = extractLast(this.value);
          
           if (term.length < 1) {
               return false;
           }
       },
       focus: function () {
           // prevent value inserted on focus
           return false;
       },
       select: function (event, ui) {
           var terms = split(this.value);
           
           // remove the current input
           terms.pop();
           // add the selected item
           terms.push(ui.item.value);
           //alert(terms);
           // add placeholder to get the comma-and-space at the end
          // terms.push("");
           this.value = terms;//.join(", ");
           selectRtFrom = false;
         
           return false;
       }
   }).blur(function () {
   	
   	 if(selectRtFrom){
           $("#returnFroCity").val($('ul#ui-id-1 li:first a').text());
   	 }
   });
    
   $( "#returnToCity").autocomplete({
       source: function (request, response) {
           $.getJSON("/get_city_list", {
               term: extractLast(request.term),
               type: "flight"
           }, response);
       },
       search: function () {
           // custom minLength
           var term = extractLast(this.value);
           if (term.length < 1) {
               return false;
           }
       },
       focus: function () {
           // prevent value inserted on focus
           return false;
       },
       select: function (event, ui) {
           var terms = split(this.value);
           // remove the current input
           terms.pop();
           // add the selected item
           terms.push(ui.item.value);
       
           var cityImage=ui.item.value;
           var n = cityImage.indexOf("(");
           var l = cityImage.indexOf(")");
          cityImage=cityImage.substring(0,n);
           // add placeholder to get the comma-and-space at the end
          // terms.push("");
          selectRtTo = false;
           this.value = terms;//.join(", ");
           return false;
       }
   }).blur(function () {
   	   if(selectRtTo){
           $("#returnToCity").val($('ul#ui-id-2 li:first a').text());
          
           var cityImage=$('ul#ui-id-2 li:first a').text();
           var n = cityImage.indexOf("(");
           var l = cityImage.indexOf(")");
          cityImage=cityImage.substring(n+1,l);
           
       }
   });
   
   
   
    $( "#stayCity").autocomplete({
        source: function (request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "hotel"
            }, response);
        },
        search: function () {
            // custom minLength
            var term = extractLast(this.value);
            if (term.length < 3) {
                return false;
            }
        },
        focus: function () {
            // prevent value inserted on focus
            return false;
        },
        select: function (event, ui) {
            var terms = split(this.value);
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push(ui.item.value);
        
            var cityImage=ui.item.value;
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
           cityImage=cityImage.substring(0,n);
       
            selectTo = false;
            this.value = terms;
            return false;
        }
    }).blur(function () {
    	   if(selectTo){
            $("#stayCity").val($('ul#ui-id-2 li:first a').text());
           
            var cityImage=$('ul#ui-id-2 li:first a').text();
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
           cityImage=cityImage.substring(n+1,l);
            
        }
    });
    
    
});


function imgExists(imgPath) {
	  var http = jQuery.ajax({
	                type:"HEAD",
	        url: imgPath,
	        async: false
	          });
	  return http.status!=404;
	}


/*
navigator.geolocation.watchPosition(callback);
function callback(position){

var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

    $.getJSON(GEOCODING).done(function(location) {
        $('#country').html(location.results[0].address_components[5].long_name);
        $('#state').html(location.results[0].address_components[4].long_name);
        $('#city').html(location.results[0].address_components[2].long_name);
        $('#address').html(location.results[0].formatted_address);
        $('#latitude').html(position.coords.latitude);
        $('#longitude').html(position.coords.longitude);
    })
}
*/


