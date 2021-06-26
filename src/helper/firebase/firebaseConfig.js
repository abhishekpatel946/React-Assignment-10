// import * as firebase from 'firebase/app';
// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBvPM1zymHn8xT2bwOb6Bg4qOJwU4uRmOk',
  authDomain: 'reminder-app-fd4ef.firebaseapp.com',
  projectId: 'reminder-app-fd4ef',
  storageBucket: 'reminder-app-fd4ef.appspot.com',
  messagingSenderId: '874459163091',
  appId: '1:874459163091:web:158d198bcc17d353d9a726',
  measurementId: 'G-LSLWZ1ZJ6S',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
