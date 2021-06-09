import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCcOpkvGiJNz4SGntyLUuEW2AXBovOxT-k",
    authDomain: "happy-pacas.firebaseapp.com",
    projectId: "happy-pacas",
    storageBucket: "happy-pacas.appspot.com",
    messagingSenderId: "16101035622",
    appId: "1:16101035622:web:6ea38735286e5d56be27a7",
    measurementId: "G-VVPGWNHJGJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters ({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;