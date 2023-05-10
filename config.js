import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBPg8dYreTUnik8XObkXx9II1o61Y6u7eE",
  authDomain: "authsocial-55b11.firebaseapp.com",
  projectId: "authsocial-55b11",
  storageBucket: "authsocial-55b11.appspot.com",
  messagingSenderId: "110184963452",
  appId: "1:110184963452:web:2baff37934c6b37f6558f9"
};
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };