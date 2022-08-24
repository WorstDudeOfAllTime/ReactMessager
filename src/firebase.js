import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB-oZ4ji5jfmmQs6PZUyDfg1fgmz-e7Cdg",
    authDomain: "chat-app-redux-83e52.firebaseapp.com",
    projectId: "chat-app-redux-83e52",
    storageBucket: "chat-app-redux-83e52.appspot.com",
    messagingSenderId: "14401585404",
    appId: "1:14401585404:web:273ff479c5def77fee1779"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const login = (email, password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
        const user = userCredentials.user;
    }).catch((err) => {
        console.log(err.message);
    })
}
const signUp = (email, password) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
        const user = userCredentials.user;
        console.log("User Creation Success");
    }).catch((err) => {
        console.log(err.message);
    })
}


export {db, login, signUp};