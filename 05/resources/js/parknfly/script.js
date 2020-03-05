
 var t = !0, e = !0;
    $("#froCity").autocomplete({
        source:function(t, e) {
            $.getJSON("/get_city_list", {
                term:extractLast(t.term),
                type:"flight"
            }, e);
        },
        search:function() {
            var t = extractLast(this.value);
            return t.length < 1 ? !1 :void 0;
        },
        focus:function() {
           // return !1;
        },
        select:function(e, i) {
            var r = split(this.value);
            return r.pop(), r.push(i.item.value), this.value = r, t = !1,
            !1;
        }
    }).blur(function() {
        t && -1 == $("#froCity").val().indexOf(",") && $("#froCity").val($("ul#ui-id-1 li:first a").text());
    });
    
    function split(t) {
        return t.split(/,\s*/);
    }

    function extractLast(t) 
    {
        return split(t).pop();
    }
 


    

    function pnfSearch(){
    	if ( pnf_data == $('#pnfSearch').serialize()) {
          
    		
    		$('#sameSearch').show();
            return false;
          } else {
            
        	  $('#sameSearch').hide();
    	var validatePNF = $("#pnfSearch").validate({
    	 showErrors: function() {
            if (this.settings.highlight) {
                for (var i = 0; this.errorList[i]; ++i) {
                    this.settings.highlight.call(this, this.errorList[i].element,
                        this.settings.errorClass, this.settings.validClass);
                }
            }
            if (this.settings.unhighlight) {
                for (var i = 0, elements = this.validElements(); elements[i]; ++i) {
                    this.settings.unhighlight.call(this, elements[i],
                        this.settings.errorClass, this.settings.validClass);
                }
            }
        },
    		rules:{
    			location:{
    				required:true,
    				minlength: 3
    			},
    			
    			arrivalDate: {
    				required: true,
    			},
    			exitDate: {
    				required: true,
    			}
    			
    		},
    		 errorElement: "span" ,                              
               messages: {
                    location: {
    					required: "Please enter a valid Origin City.",
    					minlength: "Origin City must consist of at least 3 characters"
    				},
    				arrivalDate: {
    					required: "Please enter a valid Arrival Date.",
    				},
    				exitDate: {
    					required: "Please enter a valid Exit Date.",
    				}
    				}
    	});
    	 if(validatePNF.form()){
    	var rndId = randomString(12);
    	
    	if($('#currentDevice').val()=="Normal"){
    		$('form#pnfSearch').attr({action: '/pnfSearch/id/'+rndId});
    	}else if($('#currentDevice').val()=="Mobile"){
    		$('form#pnfSearch').attr({action: '/m/pnfSearch/id/'+rndId});  
    	}else if($('#currentDevice').val()=="Tablet"){
    		$('form#pnfSearch').attr({action: '/t/pnfSearch/id/'+rndId});
    	}else{
    		$('form#pnfSearch').attr({action: '/pnfSearch/id/'+rndId});  
    	} 
    	  $('form#flightSearch').submit();
    	  
    	  
    	$('form#pnfSearch').submit();
    	
    	}
          }
    }