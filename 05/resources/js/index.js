function split(val) {
    return val.split(/,\s*/);
}
function extractLast(term) {
    return split(term).pop();
}
 
$(document).ready(function() {
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
            //alert(terms);
            // add placeholder to get the comma-and-space at the end
           // terms.push("");
            this.value = terms;//.join(", ");
            selectFrom = false;
          
            return false;
        }
    }).blur(function () {
    	
    	 if(selectFrom){
            $("#froCity").val($('ul#ui-id-1 li:first a').text());
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
            //alert(cityImage.text().replace(" ", ""));
           // $('#background').css({'background-image': 'url(/resources/images/banner/' + cityImage.replace(" ", "").toLowerCase() + '.jpg)'}).fadeOut(function(){$(this).fadeIn()});
         
          /* if(imgExists("/resources/images/banner/" + cityImage.replace(" ", "").toLowerCase() + ".jpg")){
            var image = $('#background');
            image.fadeOut(1000, function () {
            	 image.css("background-image", "url('/resources/images/banner/" + cityImage.replace(" ", "").toLowerCase() + ".jpg')");
              
                image.fadeIn(1000);
            });
           }*/
            // add placeholder to get the comma-and-space at the end
           // terms.push("");
            selectTo = false;
            this.value = terms;//.join(", ");
            return false;
        }
    }).blur(function () {
    	   if(selectTo){
            $("#toCity").val($('ul#ui-id-2 li:first a').text());
           
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
            //alert(cityImage.text().replace(" ", ""));
           // $('#background').css({'background-image': 'url(/resources/images/banner/' + cityImage.replace(" ", "").toLowerCase() + '.jpg)'}).fadeOut(function(){$(this).fadeIn()});
         
          /* if(imgExists("/resources/images/banner/" + cityImage.replace(" ", "").toLowerCase() + ".jpg")){
            var image = $('#background');
            image.fadeOut(1000, function () {
            	 image.css("background-image", "url('/resources/images/banner/" + cityImage.replace(" ", "").toLowerCase() + ".jpg')");
              
                image.fadeIn(1000);
            });
           }*/
            // add placeholder to get the comma-and-space at the end
           // terms.push("");
            selectTo = false;
            this.value = terms;//.join(", ");
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


