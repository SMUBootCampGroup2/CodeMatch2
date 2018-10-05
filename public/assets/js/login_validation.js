var displayName = "";
var uid = "";
var email = "";


$(document).ready(function () {
    //	user login event listener
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //	set user menu data if user is logged in
            displayName = user.displayName;
            uid = user.uid;
            email = user.email;

            // document.cookie = "userName=" + displayName + ";";
            // document.cookie = "userId=" + uid + ";";
            // document.cookie = "email=" + email + ";";

            //	update user menu displays
            // $(".username").text(escapeHTML(user.displayName));
            // $(".dropdown").empty();
            // var logout = $("<div>");
            // logout.text("Logout");
            // logout.attr("id", "logout");
            // var profile = $("<div>");
            // profile.text("Profile");
            // $(".dropdown").append(logout, profile);	

            //	usersInfo event listener
            db.ref("users/" + uid + "/userInfo").on("value", function (snapshot) {
                if (snapshot) {
                    // //	if userInfo exists, fill in the calculator form with the user"s previous values
                    console.log("login_validation: " + displayName);
                    console.log("login_validation: " + uid);
                    console.log("login_validation: " + email);

                    document.cookie = "userName=" + displayName + ";";
                    document.cookie = "userId=" + uid + ";";
                    document.cookie = "email=" + email + ";";

                }
            }, function (error) {
                console.log("Error: " + error.code);
            });
        } else {
            //	redirect to homepage if not logged in
            // window.location.href="/";
            console.log("else do nothing");
        }
    });
    //	User Menu Logout event listener
    // $(document).on("click", "#logout", logOut);

});		//	End of document.ready()

// document.cookie = "userName=" + displayName + ";";
// document.cookie = "userId=" + uid + ";";
// document.cookie = "email=" + email + ";";