<html>
<head>

<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="css/skeleton.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script>
  (function(w,d,s,c,n,a,b){w['PactSafeObject']=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},w[n].t=1*new Date();a=d.createElement(s),b=d.getElementsByTagName(s)[0];a.async=1;a.src=c;b.parentNode.insertBefore(a,b)})(window,document,'script', '//ps-vault.s3.amazonaws.com/ps.min.js','_ps');
  // initiate PactSafe with your SITE ACCESS ID found here: http://beta.pactsafe.com/settings/site
  _ps('create', '0910885f-fb13-492c-be6a-373ec23927f2');
  // load a specific agreement
  // dynamically loads http://ps-vault.s3.amazonaws.com/s/<SITE ACCESS ID>/groups/<AGREEMT GROUP KEY>/group.js
  // your group key can be found here: http://beta.pactsafe.com/agreementGroups
  	// => click into your group and find the "Key" field
  	// => should be something like checkout-click-through-agreement
  var agreement_key = 'click-through-agreement';
  _ps('load', agreement_key);
</script>
<script type="text/javascript">
	$(document).ready(function(){
		//if the checkbox is checked, an "agree" response is sent to PactSafe
		$('#accept-agreements').on('click', function(){
			var group = _ps.getByName('s0').getByKey(agreement_key);

			if($('#accept-agreements:checked').val() == 'on'){
				// send response to PactSafe
				_ps('send', 'agreed', { agreements: group.get('agreements'), versions: group.get('versions'), agreement_group: group.get('agreement_group')});
			} else {
				// you can also send the "disagreed" response to PactSafe when they uncheck the box
				_ps('send', 'disagreed', { agreements: group.get('agreements'), versions: group.get('versions'), agreement_group: group.get('agreement_group')});
			
			}
		});

		// hide the scrollable agreement unless someone clicks "Terms and Conditions" link
		$('#agreements').hide();

		// if someone clicks "Terms and Conditions", show the scrollable agreement
		$('#terms-link').on('click', function(){
			$('.ps-agreement input').hide(); 
			$('#agreements').toggle(); 
			return false;
		})
	});
</script>
<style type="text/css">
	/* These are the styles for the agreement display */
	.ps-agreement { height: 300px; overflow: scroll; border: 1px solid #ccc; padding: 10px; }
	.ps-agreement input.ps-agreement-target { display: none; }
</style>


<!--  / Google analytics \ -->
<jsp:include page="google-analytics.jsp"></jsp:include>
<!--  / Google analytics \ -->
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="twelve columns">
				<form action="..." method="post" id="form1" class="form">
					<h1>Sign up for our service!</h1>
					<p>Simply fill out the form below and accept our legal terms.</p>
					<div>
						<label for="email-address">Email Address:</label>
						<input type="email" name="email" id="login-email" />
					</div>
					<div>
						<label for="email-address">Password:</label>
						<input type="password" name="password" id="ps-password1" />
					</div>
					<div>
						<label for="email-address">Confirm Password:</label>
						<input type="password" name="password2" id="ps-password2" />
					</div>
					<div>
						<label for="accept-agreements">
							<input type="checkbox" id="accept-agreements" name="accept-agreements" />
							<div id="agreements" class="u-pull-left"></div>
							I understand and agree to the <a href="#" id="terms-link">Terms and Conditions</a>.
						</label>
					</div>
					<div id="agreements"></div>
					<p><br/><input type="submit" value="Submit" /></p>
				</form>
			</div>
		</div>
	</div>
</body>
</html>