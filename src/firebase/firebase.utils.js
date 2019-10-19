import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJFyPnrLWRW_VBhQ8cADtJjoJP7BxJSfI",
  authDomain: "crwn-db-da272.firebaseapp.com",
  databaseURL: "https://crwn-db-da272.firebaseio.com",
  projectId: "crwn-db-da272",
  storageBucket: "crwn-db-da272.appspot.com",
  messagingSenderId: "42105594216",
  appId: "1:42105594216:web:5870d8b8f38d2987a876dd",
  measurementId: "G-GW85J438PY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
