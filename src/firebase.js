
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDx4JkdARw8JhyukmxMX6woTvkcNgHGuN0",
  authDomain: "replica-instagram-d1f88.firebaseapp.com",
  databaseURL: "https://replica-instagram-d1f88-default-rtdb.firebaseio.com",
  projectId: "replica-instagram-d1f88",
  storageBucket: "replica-instagram-d1f88.appspot.com",
  messagingSenderId: "969014148114",
  appId: "1:969014148114:web:3f3f998a59670288a22ccb",
  measurementId: "G-LDSN5053PW"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};