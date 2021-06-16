import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDanGRltrWWZ-mTs1hnswS9dy_iI07Qi-Y",
    authDomain: "herculean-hack.firebaseapp.com",
    databaseURL: "https://herculean-hack-default-rtdb.firebaseio.com",
    projectId: "herculean-hack",
    storageBucket: "herculean-hack.appspot.com",
    messagingSenderId: "63007099057",
    appId: "1:63007099057:web:1b6a1158d000befe57ba90",
    measurementId: "G-1W2S7FK38G"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database()