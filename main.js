  // Firebase configuration (json ovject from console)
  var firebaseConfig = {
    apiKey: "AIzaSyAGCEJPnJodPw0XPlmphGQNznLoM9mtEDA",
    authDomain: "storvicing.firebaseapp.com",
    databaseURL: "https://storvicing.firebaseio.com",
    projectId: "storvicing",
    storageBucket: "storvicing.appspot.com",
    messagingSenderId: "783825401766",
    appId: "1:783825401766:web:fe0a004bb4bbd4acfb4167",
    measurementId: "G-4942080H8T",
  };
  // Initialize Firebase 2 line of code to connect firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  var database = firebase.database();
  console.log("database loaded");