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

export const createUserProfileDocument = async (userAuth,additionalData ) => {
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();

if(!snapShot.exists){
  const { displayName, email} = userAuth;
  const createdAt = new Date();
  try {
    await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
  })
  }
  catch(error){
console.log('error creating user', error.message)
  }
}
return userRef;
}


  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters ({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;