import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBDdkTHF9l4dQ_eFsIZPi5VzUsrNZNbBC8",
    authDomain: "login-a7420.firebaseapp.com",
    databaseURL: "https://login-a7420.firebaseio.com",
    projectId: "login-a7420",
    storageBucket: "login-a7420.appspot.com",
    messagingSenderId: "151012491373",
    appId: "1:151012491373:web:e43dd9c0573e353f93bf64"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;