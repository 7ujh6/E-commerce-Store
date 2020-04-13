import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBi4KQIHfETtfOnHpoZthl6i1qeBwH-Pb8",
    authDomain: "crown-db-8c5f3.firebaseapp.com",
    databaseURL: "https://crown-db-8c5f3.firebaseio.com",
    projectId: "crown-db-8c5f3",
    storageBucket: "crown-db-8c5f3.appspot.com",
    messagingSenderId: "705964691961",
    appId: "1:705964691961:web:af2230d163adc0f5036d28",
    measurementId: "G-56DK9PJ8DH"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument =  async (userAuth, additionalData) =>
  {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists)
   { 
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({displayName, email, createdAt, ...additionalData});
      } catch(error) {
        console.log('error creating user', error.message);
      }
   }
   
    return userRef;
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);
  
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)});

   return await console.log("The return of batch.commit()", batch.commit());
  }

  export default firebase;