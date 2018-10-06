$(document).ready(function () {
    console.log(document.cookie);
    console.log(document.cookie[9])
    var cookieArray = document.cookie.split(";");
    console.log(cookieArray);
    var cookieUserName = cookieArray[0];
    console.log(cookieUserName);
    var userName = cookieUserName.replace("userName=","");
    console.log(userName);
    $(".welcomeUser").text("Welcome " + userName + ". Please fill out the following survey to help us match you with the perfect tutor."  );

    // $("#userName").text(userName);

});