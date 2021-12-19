import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const App = {
  apiKey: 'AIzaSyBU-T323blTUnOsn763ut9KLVl-ONQB3hQ',
  authDomain: 'damita-website.firebaseapp.com',
  projectId: 'damita-website',
  storageBucket: 'damita-website.appspot.com',
  messagingSenderId: '412945851073',
  appId: '1:412945851073:web:9ec0d931be1d54da6b6a40',
};

firebase.initializeApp(App);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firestore;
