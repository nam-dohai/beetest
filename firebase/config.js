import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2pBDWExb54XgxUIwcZVfmkx__sK8Xmb0",
  authDomain: "beetest-b060d.firebaseapp.com",
  projectId: "beetest-b060d",
  storageBucket: "beetest-b060d.appspot.com",
  messagingSenderId: "166478415993",
  appId: "1:166478415993:web:82e39ba3f6ec2558182ca8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};
