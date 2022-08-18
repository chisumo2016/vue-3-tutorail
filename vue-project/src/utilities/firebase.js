import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 const firebaseConfig = {
    apiKey: "AIzaSyB4JXonGVnIE-QXHPokjjHEe_l_0aFTesM",
    authDomain: "vue-project-749db.firebaseapp.com",
    projectId: "vue-project-749db",
    storageBucket: "vue-project-749db.appspot.com",
    messagingSenderId: "321534076884",
    appId: "1:321534076884:web:8edfb5bffc4d5ffbc45841"
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp (firebaseConfig);
const auth = firebase.auth ();
export default  firebase;


