import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDSXQlkCxGb8kQRhrckkz-CyotFr2-66o0",
    authDomain: "beetest-1ab31.firebaseapp.com",
    projectId: "beetest-1ab31",
    storageBucket: "beetest-1ab31.appspot.com",
    messagingSenderId: "196582731000",
    appId: "1:196582731000:web:7defadb3751a7a0b6e9f0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;