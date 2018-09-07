import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBWCdghHRDMC-NZ_tw9et695WP_B2i1ar4",
  authDomain: "m-city-d8038.firebaseapp.com",
  databaseURL: "https://m-city-d8038.firebaseio.com",
  projectId: "m-city-d8038",
  storageBucket: "m-city-d8038.appspot.com",
  messagingSenderId: "178625946681"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

// firebaseDB.ref('matches').once('value').then((snapshot) => {
//   console.log(snapshot.val());
// })
export {
  firebase,
  firebaseMatches
}