var username = "";
		$(document).ready(function () {
			//	Listens for users signing in or out
			firebase.auth().onAuthStateChanged(function (user) {
				if (user && username != "") {
					//	User successfully created
					user.updateProfile({
						displayName: username
					}).then(function () {
						db.ref("users/" + user.uid + "/userInfo").set({
							displayName: user.displayName,
                            email: user.email
                        });
						sendEmailVerification();
						window.location.href = "/";
					}, function (error) {
						alert(error.message);
					});
				}
			});

			$("#signup-btn").click(function (event) {
				event.preventDefault();
				signUp();
			});
			//	Toggles Help Info on hover
			$(".help-icon").hover(function () {
				$(".tooltip-text").removeClass("js-hidden");
			}, function () {
				$(".tooltip-text").addClass("js-hidden");
			});
        });
        