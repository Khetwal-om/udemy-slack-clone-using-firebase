import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"


var firebaseConfig = {
    apiKey: "AIzaSyCTKoGb803xZoodjUDkZ0GxS4i-2M8P0CQ",
    authDomain: "slackclone-44ecf.firebaseapp.com",
    databaseURL: "https://slackclone-44ecf.firebaseio.com",
    projectId: "slackclone-44ecf",
    storageBucket: "slackclone-44ecf.appspot.com",
    messagingSenderId: "408787999787",
    appId: "1:408787999787:web:75f574f51a2b1124219e6e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase