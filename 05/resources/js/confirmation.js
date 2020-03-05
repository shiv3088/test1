function brbSetValue(productCode,productPrice,rndId){
	key=false;
	$("#"+productCode).prop('checked', true);
	$("#brbError").removeClass('help-block');
	$("#brbProductCode").val(productCode);
	$("#brbProductPrice").val(productPrice);
	
}

function submitForm(rndId){
	
	//alert(rndId);
	if (!$("input[name='brb']").is(':checked')) {
	
		   $("#brbError").addClass('help-block');
		   return false;
		}
	$('form#booking').attr({action: '/bookedCrossSellBRB/'+rndId});    
    $('form#booking').submit();
}