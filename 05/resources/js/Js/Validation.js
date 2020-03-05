//================================= Paymet page Validation Start ========================================================


function birthYearValidate(elementid, index) {
    $("#labBirthYear_" + index).html('');
    var byear = $(elementid).val().trim();
    var dt = new Date();
    var Cyear = dt.getFullYear();
    var minYear = Cyear - 120;
    if (byear != null) {
        $("#labBirthYear_" + index).css({ 'color': 'red' });
        if (parseInt(byear) > Cyear) {
            $("#labBirthYear_" + index).html('Birth Year should not be greater than current Year');
        }
        else if (parseInt(byear) < minYear) {
            $("#labBirthYear_" + index).html('Birth Year should not be less than ' + minYear + '.');
        }
    }
}

function BirthdayValidate(elementid, index) {
    $("#labBirthday_" + index).html('');
    var bdays = $(elementid).val().trim();

    if (bdays != null && bdays.length > 0) {
        $("#labBirthday_" + index).css({ 'color': 'red' });
        if (parseInt(bdays) > 31) {
            $("#labBirthday_" + index).html('Birth days should not be greater than 31 days');
        }
    }
}

//============================ Payment Card Validation====================================
function paymentCardvalidate() {
    $("#cardCvvNo").html(" ");
    $("#cardCvvNo").css({ 'color': 'red' });
    var cardType = $('select#Payments_PaymentMethod option:selected').val();
    var cvc = $("#Payments_CvvNo").val();
    var value = $("#Payments_CardNumber").val();
    ValidateCardDetails(value.trim(), cardType, "#cardRange");
    if (cardType == 0)
        $("#cardCvvNo").html("Please select your payment method");
    else {
        if (cvc.length != ValidateCVClength(cardType))
            $("#cardCvvNo").html("Please provide a valid card verification number.");
        if (cvc.length != ValidateCVClength(cardType))
            $("#cardCvvNo").html("Please provide a valid card verification number.");
    }
}


function PayMentSubmitValidation(totatraval) {

    var rtnValidate = true;
    var dt = new Date();
    var Cyear = dt.getFullYear();
    var minYear = Cyear - 120;

    //============== Card Validate =============================================
    var cardType = $('select#Payments_PaymentMethod option:selected').val();
    var value = $("#Payments_CardNumber").val();
    if (value.length > 0)
        rtnValidate = ValidateCardDetails(value.trim(), cardType, "#cardRange");

    for (index = 0; index < totatraval; index++) {
        var bday = $("#Passengers_" + index + "__DobDate").val().trim();
        var bmonth = $('select#Passengers_' + index + '__DobMonth option:selected').val().trim();
        var byear = $("#Passengers_" + index + "__DobYear").val().trim();

        $("#labBirthYear_" + index).css({ 'color': 'red' });
        $("#labBirthYear_" + index).html('');

        if (bday.length > 0 && bmonth.length > 0 && byear.length > 0) {

            var prDate = new Date(byear, parseInt(bmonth) - 1, bday);
            if (prDate > dt) {
                $("#labBirthYear_" + index).html('Date of Birth should not be future date');
            }
            else {
                var age = parseFloat(((dt.getTime() - prDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)));
                var TrType = $("#labtra_" + index).html();
                if (byear != null && byear != '') {
                    if (parseInt(byear) > Cyear) {
                        $("#labBirthYear_" + index).html('Birth Year should not be future Year');
                        rtnValidate = false;
                    }
                    else if (parseInt(byear) < minYear) {
                        $("#labBirthYear_" + index).html('Birth Year should not be less than ' + minYear + '.');
                        rtnValidate = false;
                    }
                }
                if (bmonth == 2) {
                    if (bday > 28) {
                        var leapyear = isleap(byear);
                        if (!(leapyear == true && bday == 29)) {
                            $("#labBirthYear_" + index).html('Date of Birth should not be valid  .');
                            rtnValidate = false;
                        }
                    }
                }
                else if (bmonth == 4 || bmonth == 6 || bmonth == 9 || bmonth == 11) {
                    if (bday > 30) {
                        $("#labBirthYear_" + index).html('Date of Birth should not be valid  .');
                        rtnValidate = false;
                    }
                }

                if (byear != null && byear != '' && bmonth != null && bmonth != '' && bday != null && bday != ''
                     && parseInt(byear) >= Cyear && parseInt(bmonth) >= (dt.getMonth + 1) && parseInt(bday) > dt.getDate()) {
                    $("#labBirthYear_" + index).html('Date of Birth should not be future date .');
                    rtnValidate = false;
                }

                if (TrType.trim() == 'Adult') {
                    if (age < 12) {
                        $("#labBirthYear_" + index).html('Adult age should be greater than 12 year');
                        rtnValidate = false;
                    }
                }
                else if (TrType.trim() == 'Child') {
                    if (age > 12) {
                        $("#labBirthYear_" + index).html('Child age should be less than 12 year & greater than 2 year');
                        rtnValidate = false;
                    }
                }
                else if (TrType.trim() == 'Infant') {
                    if (age >= 2) {
                        $("#labBirthYear_" + index).html('Infant age should be less than 2');
                        rtnValidate = false;
                    }
                }
            }
        }
        else {
            $("#labBirthYear_" + index).html('Date of Birth is required and can not be empty! .');
            rtnValidate = false;
        }
    }
    return rtnValidate;
}

//========================== End Of Payment Validation =================================================================================



