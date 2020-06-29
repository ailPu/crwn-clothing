import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBV3doHWWu2nZDMtX44NGCvDoSDb61raOY",
	authDomain: "crwn-db-73458.firebaseapp.com",
	databaseURL: "https://crwn-db-73458.firebaseio.com",
	projectId: "crwn-db-73458",
	storageBucket: "crwn-db-73458.appspot.com",
	messagingSenderId: "251422534015",
	appId: "1:251422534015:web:a62f4e9afd9bd15645524a",
	measurementId: "G-9SJ4DXCHZX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
