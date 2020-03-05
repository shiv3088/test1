function split(val) {
    return val.split(/,\s*/)
}

function extractLast(term) {
    return split(term).pop()
}
String.prototype.replaceAll = function(find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace)
};

function monkeyPatchAutocomplete() {
    var oldFn = $.ui.autocomplete.prototype._renderItem;
    $.ui.autocomplete.prototype._renderItem = function(ul, item) {
        var re = new RegExp("^" + this.term, "i");
        var t = item.label.replace(re, "<span>" + this.term + "</span>");
        return $("<li></li>").data("item.autocomplete", item).append("<a>" + t + "</a>").appendTo(ul)
    }
}
$(document).ready(function() {
    monkeyPatchAutocomplete();
    var selectFrom = !0;
    var selectTo = !0;
    $("#froCity,#froCityFare").autocomplete({
        source: function(request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 1) {
                return !1
            }
        },
        focus: function(event,ui) {
			//event.preventDefault();
			//$(this).addClass('active');
			$(this).val(ui.item.question);
            return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            this.value = terms;
            selectFrom = !1;
            $("#toCity").focus();
            return !1
        }
    }).blur(function() {
        if (selectFrom) {
            if ($("#froCity").val().indexOf(",") == -1) {
                $("#froCity,#froCityFare").val($('ul#ui-id-1 li:first a').text())
            }
        }
    });
    $("#toCity,#toCityFare").autocomplete({
        source: function(request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 1) {
                return !1
            }
        },
        focus: function() {
            return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            if (imgExists("/resources/images/banner/" + cityImage.replace(" ", "").toLowerCase() + ".jpg")) {
                $('#background').animate({
                    opacity: 0
                }, 100, function() {
                    $('#background').css("background-image", "url('/resources/images/banner/" + cityImage.replace(" ", "").toLowerCase() + ".jpg')").promise().done(function() {
                        $('#background').animate({
                            opacity: 1
                        }, 600)
                    })
                })
            }
            this.value = terms;
            selectTo = !1;
            $('#departDate').datepicker('show');
            return !1
        }
    }).blur(function() {
        if (selectTo) {
            if ($("#toCity").val().indexOf(",") == -1) {
                $("#toCity,#toCityFare").val($('ul#ui-id-2 li:first a').text());
            }
            var cityImage = $('ul#ui-id-2 li:first a').text();
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(n + 1, l)
        }
    });
    var selectRtFrom = !0;
    var selectRtTo = !0;
    $("#returnFroCity").autocomplete({
        source: function(request, response) {

            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 1) {
                return !1
            }
        },
        focus: function() {
            return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            this.value = terms;
            selectRtFrom = !1;
            return !1
        }
    }).blur(function() {
        if (selectRtFrom) {
            $("#returnFroCity").val($('ul#ui-id-1 li:first a').text())
        }
    });
    $("#returnToCity").autocomplete({
        source: function(request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "flight"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 1) {
                return !1
            }
        },
        focus: function() {
            return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            selectRtTo = !1;
            this.value = terms;
            return !1
        }
    }).blur(function() {
        if (selectRtTo) {
            $("#returnToCity").val($('ul#ui-id-2 li:first a').text());
            var cityImage = $('ul#ui-id-2 li:first a').text();
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(n + 1, l)
        }
    });
    $("#stayCity").autocomplete({
        source: function(request, response) {
            $.getJSON("/get_city_list", {
                term: extractLast(request.term),
                type: "hotel"
            }, response)
        },
        search: function() {
            var term = extractLast(this.value);
            if (term.length < 3) {
                return !1
            }
        },
        focus: function() {
            return !1
        },
        select: function(event, ui) {
            var terms = split(this.value);
            terms.pop();
            terms.push(ui.item.value);
            var cityImage = ui.item.value;
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(0, n);
            selectTo = !1;
            this.value = terms;
            return !1
        }
    }).blur(function() {
        if (selectTo) {
            $("#stayCity").val($('ul#ui-id-2 li:first a').text());
            var cityImage = $('ul#ui-id-2 li:first a').text();
            var n = cityImage.indexOf("(");
            var l = cityImage.indexOf(")");
            cityImage = cityImage.substring(n + 1, l)
        }
    })
});

function imgExists(imgPath) {
    var http = jQuery.ajax({
        type: "HEAD",
        url: imgPath,
        async: !1
    });
    return http.status != 404
}
