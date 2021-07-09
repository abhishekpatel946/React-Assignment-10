import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import config from './config';

const rsf = new ReduxSagaFirebase(config);

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
export { rsf, firebase };
