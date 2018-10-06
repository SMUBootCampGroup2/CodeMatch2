$(document).ready(function() {
    // var loginid = readCookie("userName");

    // function readCookie(loginid) {
    //     var nameEQ = loginid + "=";
    //     var ca = document.cookie.split(";");
    //     for (var i = 0; i < ca.length; i++) {
    //       var c = ca[i];
    //       while (c.charAt(0) === " ") c = c.substring(1, c.length);
    //       if (c.indexOf(nameEQ) === 0) {
    //         return c.substring(nameEQ.length, c.length);
    //       }
    //     }
    //     return null;
    //   }

    // $("#userName").val() = loginid
    // $("#userName").val() = readCookie("userName");
    // $("#userName").text() = loginid

    document.getElementById("userName").innerHTML = readCookie("userName");
})