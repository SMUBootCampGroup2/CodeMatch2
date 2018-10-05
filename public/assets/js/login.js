

function signIn() {
	if (firebase.auth().currentUser) {
		//	If user is signed in, sign them out
		firebase.auth().signOut();
	} else {
		var email = $("#email").val().trim();
		var password = $("#password").val().trim();

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
			//	Handle errors here
			var errorCode = error.code;
			var errorMessage = error.message;

			if (errorCode === "auth/wrong-password") {
				alert("Wrong password");
			} else {
				alert(errorMessage);
			}
			console.log(error);
			
			isLoggedIn = true;
			console.log(isLoggedIn);
		});
	}
} //closes signIn function

$("#login-btn").click(function (event) {
	console.log("#login-btn clicked");
	event.preventDefault();
	signIn();
});

firebase.auth().onAuthStateChanged(function (user) {
	console.log("user: " + user);
	console.log("user.email: " + user.email);
	console.log("user.uid: " + user.uid);
	// console.log(JSON.stringify(user));
	if (user) {
		//routes to homepage if logged in
		// window.location.href="/";
	} else {
		//	User is signed out
		console.log("User is signed out");
	}
});