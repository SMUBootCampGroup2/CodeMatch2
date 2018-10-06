function resetPassword() {
	var errors = false;
	var email = $('#email').val().trim();
	$('#email-icon').addClass('js-hidden');
	if(email == '') {
		displayErrors('email', 'Email required');
		$('#email').focus().addClass('error');
		errors = true;
	}
	if(!errors) {
		firebase.auth().sendPasswordResetEmail(email).then(function() {
			alert('Password has been reset. Follow the instructions in the email sent to your inbox to change your password and login.');
			window.location.href= "login.html";
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			if(errorCode == 'auth/invalid-email') {
				displayErrors('email', errorMessage);
				$('#email').focus().addClass('error');
			} else if(errorCode == 'auth/user-not-found') {
				displayErrors('email', errorMessage);
				$('#email').focus().addClass('error');
			}
			console.log(error);
		});
	}
}; // closes resetPassword function