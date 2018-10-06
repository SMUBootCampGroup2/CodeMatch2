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
            console.log(user.displayName);
            console.log(user.email);
            console.log(uid);
            
            //	usersInfo event listener
            db.ref("users/" + uid + "/userInfo").on("value", function (snapshot) {
                if (snapshot) {
                    // if user info exists, create the following cookies 
                    document.cookie = "userName=" + displayName + ";";
                    document.cookie = "email=" + email + ";";
                    document.cookie = "userId=" + uid + ";";
                }
            }, function (error) {
                console.log("Error: " + error.code);
            });
        } else {
            console.log("else do nothing");
        }
        // console.log(document.cookie);
        // console.log(document.cookie[9])
    });
});		//	End of document.ready()
