import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCVI8bResWNaHrpuAI3na7VMYbPuR8LcFk',
  authDomain: 'image-finder-3e135.firebaseapp.com',
  databaseURL: 'https://image-finder-3e135-default-rtdb.firebaseio.com',
  projectId: 'image-finder-3e135',
  storageBucket: 'image-finder-3e135.appspot.com',
  messagingSenderId: '1019594102690',
  appId: '1:1019594102690:web:1427671a718408c93844fb',
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
const database = fire.database();

export default database;
