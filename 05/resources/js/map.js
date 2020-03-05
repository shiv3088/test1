var map;
function initMap(latt, long, hotelName, address) {
    map = new google.maps.Map(document.getElementById('htlMap'), {
        center: { lat: latt, lng: long },
        zoom: 12,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        }
    });

    var request = {
        location: map.getCenter(),
        radius: '500',
        query: address
    };

    var serviceNew = new google.maps.places.PlacesService(map);
    serviceNew.textSearch(request, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
                position: map.center,
                icon: '/resources/images/icon/googlemap.png',
                map: map
            });

            var contentString = '<div id="content">'+
                '<strong id="firstHeading" class="firstHeading">'+ hotelName + '</strong>'+
                '<div id="bodyContent">'+
                '<p><b>Address : </b>' + address + '</p>' +
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            
            infowindow.open(map, marker);
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        }
    }
}


$('document').ready(function(){

	$('.mapClose').click(function(){
	    $(this).parent().parent().parent().hide();
		$('.page_overlay').hide();
	})

	$(document).on("click", ".mapLink", function () {
	$(".mapApp").show();
	$(".page_overlay").show();
	
	var lat = $(this).data("lattitude");
	var long = $(this).data("longitude");
	var hotelName = $(this).data("hotel-name");
	var address = $(this).data("address");
	         initMap(lat, long, hotelName, address);
	});
});