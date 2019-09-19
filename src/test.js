import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
	.collection('users')
	.doc('oSJ1Nx13iIfxfJVuvgBG')
	.collection('cartItems')
	.doc('QudFI4E918jDGLP13');
firestore.doc('/users/oSJ1Nx13iIfxfJVuvgBG/cartItems/QudFI4E918jDGLP13');
