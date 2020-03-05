<!doctype html>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<html>
<head>
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="user-scalable=0, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

<title>Disclaimer - Cheap Air Tickets at ${data.siteName}</title>

<link rel="icon" href="/resources/images/favicon.png" type="image/x-icon" />
<link href="/resources/css/reset.css" rel="stylesheet">
    <link href="resources/travelopick/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/style.css" rel="stylesheet">
<link href="/resources/travelopick/css/header.css" rel="stylesheet">
<link href="/resources/css/font-awesome.css" rel="stylesheet">
<link href="/resources/us/css/jquery-ui.min.css" rel="stylesheet"> 
<script src="/resources/travelopick/js/jquery.1.11.1.min.js"></script> 	


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>

<body>

				
<!--- Main Section---->
    <div class="main">
        		<!--- Header Section Start---->
	<jsp:include page="home_header.jsp"></jsp:include>
	<!--- Header Section End---->
		
          <!-- Banner Box -->

  <!-- Banner Box -->
    	<div class=" ">
        	<div class="container">
            	<div class="row">
                	<div class="col-md-12 col-xs-12 col-lg-12 col-sm-12 pt30 mb20">
                    	
                        	<div class="content-box">
                            	<h1 class="blueHead2">Disclaimer</h1>
                            	<!-----Accordian class---------->

                            <p>Please be informed that the content displayed on www.${data.siteName}.com is for general purposes only. All the necessary steps have been taken to ensure that the information displayed on the website is accurate. However, under no circumstances, shall we assume the warranty of representation, expressed or implied, pertaining to the reliability, accuracy, or completeness of the website or any fragment of information displayed on it. Any losses or damages incurred by you due to the trust you put on the website or any of the content displayed on it cannot be used to hold www.${data.siteName}.com responsible. </p>
                                
                            <p>If you have any queries you can call us at <c:out value='${data.tfnNo}' /> or simply email us at <!--${data.supportMail}.-->
                                <a href="mailto:support@travelopick.com">support@travelopick.com</a>
                                </p>
                            </div><!-----content-box---------->
                      
                        
                    </div>
                </div>
            </div>
        
        </div>
        
    
<!--- Footer Section Start---->
	<jsp:include page="home_footer.jsp"></jsp:include>
<!--- Footer Section End---->		
    </div><!--Main--> 

	

			
<script src="/resources/js/jquery-1.8.2.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script> 
<script src="/resources/js/jquery-ui.1.10.4.min.js"></script>
<script src="/resources/js/jquery.slides.min.js"></script>
<script src="/resources/js/modernizr.min.js"></script> 
<script src="/resources/js/respond.min.js"></script> 
<script src="/resources/js/prefixfree.min.js"></script>

<script>
        $(function() {
          $('.contain').slidesjs({	
            height: 450,
            navigation: false,
            pagination: false,
            effect: {
              fade: {
                speed: 100
              }
            },
            callback: {
                start: function(number)
                {			
                    $("#slider_content1,#slider_content2,#slider_content3").fadeOut(10);
                },
                complete: function(number)
                {			
                    $("#slider_content" + number).delay(500).fadeIn(1000);
                }		
            },
            play: {
                active: false,
                auto: true,
                interval: 6000,
                pauseOnHover: false,
                effect: "fade"
            }
          });
        });
		 $(document).ready(function() {
			$("#departDate").datepicker();
			$("#returnDate").datepicker();
		  });
		  
		  $('.form-group-select-plus').each(function () {
				var self = $(this),
					btnGroup = self.find('.btn-group').first(),
					select = self.find('select');
					
				btnGroup.children('label').last().click(function () {
					btnGroup.addClass('hidden');
					select.removeClass('hidden');
					
					
				});
				btnGroup.children('label:not(:last-child)').click(function () {
					select.val($(this).children("input:eq(0)").data("value"));
				});
			});
			
			$('label').click(function() {
				  $("label.active").removeClass("active");
				  $(this).addClass('active');
			});
        </script>
        <script type='text/javascript'>
			$(function(){
			var overlay = $('<div id="overlay" onclick="hideQuote()"></div>');
			$('.close_new').click(function(){
			$('.popup_feedback').hide();
			overlay.appendTo(document.body).remove();
			return false;
			});
			
			$('.x').click(function(){
			$('.popup_feedback').hide();
			overlay.appendTo(document.body).remove();
			return false;
			});
			
			$('.click').click(function(){
			overlay.show();
			overlay.appendTo(document.body);
			$('.popup_feedback').show();
			return false;
			});
			});
			function hideQuote(){
			$(document).ready(function () {
			$('#overlay').click(function () {
			
				$(this).hide();
			
				$('.popup_feedback').hide();
			
				});
			});
			}
			
			function ddlTypejourneyChange(ddlType) {
				if ($(ddlType).val() == "1") {
					$("input[name='tbReturn']").prop("disabled", false);
				}
				else {
					$("input[name='tbReturn']").prop("disabled", true);
				}
			}
			function toggleChevron(e) {
				$(e.target)
					.prev('.panel-heading')
					.find("i.indicator")
					.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
			}
			$('#accordion').on('hidden.bs.collapse', toggleChevron);
			$('#accordion').on('shown.bs.collapse', toggleChevron);
		</script>
        

        
</body>
</html>