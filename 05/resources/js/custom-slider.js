jQuery(document).ready(function ($) {
    function renimg($url) {
        var img = new Image();
        jQuery(img).load(function () {
            jQuery(img).hide();
        }).attr({ "src": $url });
        $('#mnpage').empty();

        var _html = "<a href='" + $url + "' data-lightbox='example-set' data-title=''>";
        _html += "<img src='" + $url + "' class='example-image' id='limgm' width='100%' alt='' height='100%' /></a>";

        $('#mnpage').append(_html);
        var handler = $('#limgm');
        //if (handler.height() > 300 || handler.height() == 0) {
         //   $("#limgm").css("height", "265px"); $("#limgm").css("width", "340px");
        //}

    }
    $('.zoom_image').mouseover(function () {
        var handler = $(this).find('#limg');
        var _n = handler.attr('src');
        //if (handler.height() > 300 || handler.height() == 0) { $("#mnpage").css("max-height", "300px"); }
       // else { $("#mnpage").css("max-height", "300px"); }
        renimg(_n)
    });
	
	
});
//
function imageErrorFun(count) {
	$(".cst"+count).remove();
}



