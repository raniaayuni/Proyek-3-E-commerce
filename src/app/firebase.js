import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC0yMY2jwnC3iECsCGhnF4zzRI6qlwomvo",
    authDomain: "bonik-next-ecommerce.firebaseapp.com",
    projectId: "bonik-next-ecommerce",
    storageBucket: "bonik-next-ecommerce.appspot.com",
    messagingSenderId: "9234130230",
    appId: "1:9234130230:web:7212b405d7a1c4bc89ff97"
  };

export const app = firebase.initializeApp(firebaseConfig)  
export const auth = firebase.auth()
export const db = firebase.firestore()