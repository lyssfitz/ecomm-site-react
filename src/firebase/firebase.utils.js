import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC31jMs8r3-ovAUlcqywIfp0_eQxiTizW8',
	authDomain: 'crwn-db-b4e32.firebaseapp.com',
	databaseURL: 'https://crwn-db-b4e32.firebaseio.com',
	projectId: 'crwn-db-b4e32',
	storageBucket: '',
	messagingSenderId: '1060167886448',
	appId: '1:1060167886448:web:c0ca85a7750787539476b5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
