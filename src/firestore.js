import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAKOLMTZ82Hum5tyhaoUKNVMfYThwYUxuo",
    authDomain: "fb-counter-6658c.firebaseapp.com",
    databaseURL: "https://fb-counter-6658c.firebaseio.com",
    projectId: "fb-counter-6658c",
    storageBucket: "fb-counter-6658c.appspot.com",
    messagingSenderId: "777747172390"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;