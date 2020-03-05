

function GetBasehomeUrl() {
    var rtnbaseurl = '';
    var host = window.location.host;
    var baseurl = window.location.href.trim().toLowerCase();
    if (baseurl.indexOf('/home/') == -1)
        rtnbaseurl = 'home';
    return rtnbaseurl;
}

function CallAjax(objData, Url, Posttype) {
    var rtnData;
    if (Posttype == null && Posttype == 'undefined' && Posttype == "")
        Posttype = "post";
    if (objData == null && objData == 'undefined' && objData == "")
        objData = '';
    try {
        $.ajax({
            url: Url,
            dataType: "json",
            type: Posttype,
            async: false,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(objData),
            success: function (objData) {
                rtnData = objData;
            },
            error: function (xhr, textStatus, errorThrown) {
                alert('error');
            }
        });
    }
    catch (ex)
    { }
    return rtnData;
}

function IsDisplay(elementId, value) {
    if (Boolean(value) == true)
        $(elementId).css("display", "block");
    else
        $(elementId).css("display", "none");
}

function DataColumn(controll, coll, row, CssClass, Value, width, eid) {
    var rtnDataColumn = '';
    if (controll != null && controll != 'undefined') {

        rtnDataColumn = "<" + controll;

        if (coll != '' && coll != 'undefined')
            rtnDataColumn += " colspan='" + coll + "' ";

        if (row != '' && row != 'undefined')
            rtnDataColumn += " rowspan='" + row + "' ";

        if (CssClass != '' && CssClass != 'undefined')
            rtnDataColumn += " class='" + CssClass + "' ";

        if (width != '' && width != 'undefined')
            rtnDataColumn += " style='width:" + width + "' ";

        if (eid != '' && eid != 'undefined')
            rtnDataColumn += " Id='" + eid + "' ";

        rtnDataColumn += ">" + Value + "</" + controll + ">";
    }
    return rtnDataColumn;
}


function LettersOnly(e) {
    var keycode;
    if (window.event) {
        keycode = window.event.keyCode; //alert('IE'); 
    }
    else if (e) {
        keycode = e.which; //alert('FF'); 
    }
    var k = parseInt(keycode);
    if ((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32) || (k == 0) || (k == 8)) {
        return true;
    }
    return false;
}

function InputControlDisableEdite(e)
{
    var keycode;
    if (window.event) {
        keycode = window.event.keyCode; //alert('IE'); 
    }
    else if (e) {
        keycode = e.which; //alert('FF'); 
    }
    var k = parseInt(keycode);
    alert('f');
    if ( k == 0) {
        return true;
    }
    return false;
}
function LettersCommaOnly(e) {
    var keycode;
    if (window.event) {
        keycode = window.event.keyCode; //alert('IE'); 
    }
    else if (e) {
        keycode = e.which; //alert('FF'); 
    }
    var k = parseInt(keycode);
    if ((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32) || (k == 0) || (k == 8) || (k == 44) || (k == 45)) {
        return true;
    }
    return false;
}


function onlyNumerics(e) {
    /// <summary>
    /// Performs an action that accepts Numbers Only
    /// </summary>
    var keycode;
    if (window.event) {
        keycode = window.event.keyCode; //alert('IE'); 
    }
    else if (e) {
        keycode = e.which; //alert('FF'); 
    }
    var k = parseInt(keycode);
    if (k > 47 && k < 58 || k == 13 || (k == 8) || (k == 0) || (k == 127) || (k == 0))
        return true;
    else
        return false;
}

var CardDetails = [{ id: 0, CardName: 'None', CardStardDegit: '0', CardMaxLength: 16, CvcLength: 4, MinCardLength: 16, maxCardLength: 16 },
                   { id: 1, CardName: 'Visa', CardStardDegit: '4', CardMaxLength: 16, CvcLength: 3, MinCardLength: 16, maxCardLength: 16 },
                   { id: 2, CardName: 'MasterCard', CardStardDegit: '5', CardMaxLength: 16, CvcLength: 3, MinCardLength: 16, maxCardLength: 16 },
                   { id: 3, CardName: 'American Express', CardStardDegit: '3', CardMaxLength: 15, CvcLength: 4, MinCardLength: 15, maxCardLength: 16 },
                   { id: 4, CardName: 'Diners Club', CardStardDegit: '3', CardMaxLength: 0, CvcLength: 3, MinCardLength: 13, maxCardLength: 16 },
                   { id: 5, CardName: 'Discover', CardStardDegit: '6', CardMaxLength: 16, CvcLength: 3, MinCardLength: 16, maxCardLength: 16 },
                   { id: 6, CardName: 'Carte Blanche', CardStardDegit: '3', CardMaxLength: 0, CvcLength: 3, MinCardLength: 13, maxCardLength: 16 }];

function ValidateCardDetails(cardNumberNumber, PaymentMethod,elementid){
    var Isvalid = false;
    $(elementid).html('');
    $.each(CardDetails, function (i, _cadrDetails) {
        if (_cadrDetails.id == parseInt(PaymentMethod) && String(cardNumberNumber).substr(0, 1) == _cadrDetails.CardStardDegit) {

            if (_cadrDetails.CardMaxLength == 0) {
                if (String(cardNumberNumber.trim()).length >= _cadrDetails.MinCardLength && String(cardNumberNumber.trim()).length <= _cadrDetails.maxCardLength)
                    Isvalid = true;
            }
            else if (_cadrDetails.CardMaxLength == String(cardNumberNumber.trim()).length)
                Isvalid = true;
        }
    });

    if (!Isvalid) {
        $(elementid).html('Invalid Card number.');
        $(elementid).css({ 'color': 'red' });
    }

    return Isvalid;
}

function validateCardLength(PaymentMethod, cardid,cvcid)
{
    $.each(CardDetails, function (i, _cadrDetails) {
        if (_cadrDetails.id == parseInt(PaymentMethod)) {
            $(cvcid).prop('maxlength', _cadrDetails.CvcLength);
            if (_cadrDetails.CardMaxLength==0)
                $(cardid).prop('maxlength', 16);
            else
                $(cardid).prop('maxlength', _cadrDetails.CardMaxLength);
        }
    });
}
function ValidateCVClength(PaymentMethod)
{
    var retnCvcLength = 0;
    $.each(CardDetails, function (i, _cadrDetails) {
        if (_cadrDetails.id == parseInt(PaymentMethod)) {
            retnCvcLength = _cadrDetails.CvcLength;
        }
    });
    return retnCvcLength;
}


function isleap(yr) {
    if ((parseInt(yr) % 4) == 0) {
        if (parseInt(yr) % 100 == 0) {
            if (parseInt(yr) % 400 != 0) {
                return false;
            }
            if (parseInt(yr) % 400 == 0) {
                return true;
            }
        }
        if (parseInt(yr) % 100 != 0) {
            return true;
        }
    }
    if ((parseInt(yr) % 4) != 0) {
        return false;
    }
}


