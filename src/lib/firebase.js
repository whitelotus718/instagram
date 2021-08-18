import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCCr9NrCkdIJO0XsdnVNdrdpsnK_nSgk90",
    authDomain: "instagram-59020.firebaseapp.com",
    projectId: "instagram-59020",
    storageBucket: "instagram-59020.appspot.com",
    messagingSenderId: "186037011641",
    appId: "1:186037011641:web:ff66adf0bbca0e1e4b0768"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call the seed file only once
// seedDatabase(firebase);

export { firebase, FieldValue };
