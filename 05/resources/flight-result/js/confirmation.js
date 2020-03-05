

function brbSetValue(productCode,productPrice,rndId) {
	key=false;
	$("#"+productCode).prop('checked', true);
	$("#brbError").removeClass('help-block');
	$("#brbProductCode").val(productCode);
	$("#brbProductPrice").val(productPrice);
	
}


function submitForm(rndId){
	
	if ($("input[name='brb']:checked").val() == "Yes" || $("input[name='TripMate']:checked").val() == "Yes" || $("input[name='macp']:checked").val() == "Yes" ) {
		
			$('form#booking').attr({action: '/bookedCrossSellBRB/'+rndId});  
			$('form#booking').submit();
		}
	else{
		$("#brbError").addClass('help-block');
		$("#tmpid").addClass('help-block');
		$("#tcpid").addClass('help-block');
	}
	
}

function enableButton(){
	
	if ($("input[name='brb']:checked").val() == "Yes" || $("input[name='TripMate']:checked").val() == "Yes" || $("input[name='macp']:checked").val() == "Yes" ) {
		$("#ancilarryAdd").removeAttr("disabled")
		}
	else{
		$("#ancilarryAdd").attr( "disabled", "disabled" );
	}
}