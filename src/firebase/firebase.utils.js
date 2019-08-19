import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCgDKJX6Uu87ddXJ2tfkajFTVTq5GQjuRw",
  authDomain: "clothing-store-db3ff.firebaseapp.com",
  databaseURL: "https://clothing-store-db3ff.firebaseio.com",
  projectId: "clothing-store-db3ff",
  storageBucket: "",
  messagingSenderId: "878995570558",
  appId: "1:878995570558:web:3c792a2392d91703"
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
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;