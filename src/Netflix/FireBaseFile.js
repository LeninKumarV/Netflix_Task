import {initializeApp} from "firebase/app";
import  {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAunfeWXe86yMyNZdXHL6bc9uir-oSQbk",
    authDomain: "netflix-clone-b7a84.firebaseapp.com",
    projectId: "netflix-clone-b7a84",
    storageBucket: "netflix-clone-b7a84.appspot.com",
    messagingSenderId: "1027943300494",
    appId: "1:1027943300494:web:ebe8a2a7e6f0f4c758b8df"
  };


  const initial=initializeApp(firebaseConfig);
  const auth=getAuth();
  const db=getFirestore();

  export {auth,initial,db};