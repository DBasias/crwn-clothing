import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBhclqABPaeO1VCTbgLvplNLxbaXXWY5cM',
  authDomain: 'crwn-db-9a50a.firebaseapp.com',
  databaseURL: 'https://crwn-db-9a50a.firebaseio.com',
  projectId: 'crwn-db-9a50a',
  storageBucket: '',
  messagingSenderId: '528863211520',
  appId: '1:528863211520:web:c42ce2ffa7c37510'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
