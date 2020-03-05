setInterval(function() {
  
console.log("Start Popup");
var last_position = {};
$(document).on('mousemove', function (event) {
    if (typeof(last_position.x) != 'undefined') {
        var deltaX = last_position.x - event.offsetX,
            deltaY = last_position.y - event.offsetY;
        if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
			if(event.pageY <= 5){
				if(show === true){
				$('#exitpopup_bg').fadeIn();
				$('#exitpopup').fadeIn();
				}
			}
        }
    }
    last_position = {
        x : event.offsetX,
        y : event.offsetY
    };
    
    $('#exitpopup_bg').click(function(){
    	$(this).fadeOut();
    	$('#exitpopup').slideUp();
    	show = false;
    });
    
    $('.cross').click(function(){
    	$('#exitpopup_bg').fadeOut();
    	$('#exitpopup').slideUp();
    	show = false;
    });
    
    
});

}, 100000);



//$('#exitpopup_bg').click(function(){
//    $('#exitpopup_bg').fadeOut();
//    $('#exitpopup').slideUp();
//});



