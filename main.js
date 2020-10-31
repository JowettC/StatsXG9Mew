  // Firebase configuration (json ovject from console)
  var firebaseConfig = {
    apiKey: "AIzaSyDsvYlfV95ui53icp23QLo7phJ7Zrzw90M",
    authDomain: "g9mewstats.firebaseapp.com",
    databaseURL: "https://g9mewstats.firebaseio.com",
    projectId: "g9mewstats",
    storageBucket: "g9mewstats.appspot.com",
    messagingSenderId: "1003702686211",
    appId: "1:1003702686211:web:b1595c3901c9450633b436",
    measurementId: "G-9EE14GJBJX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();