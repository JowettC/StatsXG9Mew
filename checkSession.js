$(window).on("load", function () {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
      } else {
        // User is signed out.
        window.location.href = "login.html";
      }
      //permission
      if (email != "admin@admin.com"){
        console.log("User role")
        $("#adminOnly").hide();
      }
      else{
        console.log("Admin role")
      }
  
    });
  
  });