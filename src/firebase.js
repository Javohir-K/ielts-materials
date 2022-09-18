import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUIcS-Czl5yBKtMRh1uFrRDXP7i3eZizM",
  authDomain: "ielts-materials-3295d.firebaseapp.com",
  projectId: "ielts-materials-3295d",
  storageBucket: "ielts-materials-3295d.appspot.com",
  messagingSenderId: "637116640006",
  appId: "1:637116640006:web:17bbe89abc4584779b8c87"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const storage = app.storage()

export {db, storage};