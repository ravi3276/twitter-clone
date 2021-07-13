import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCk7yqt2YZs_rvbOQFLyP5gWQz9pnNmJxo",
    authDomain: "twitter-clone-321.firebaseapp.com",
    projectId: "twitter-clone-321",
    storageBucket: "twitter-clone-321.appspot.com",
    messagingSenderId: "190746906402",
    appId: "1:190746906402:web:9aca6e7a140adf00d25f7b",
    measurementId: "G-ZY8P72MWZT"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;