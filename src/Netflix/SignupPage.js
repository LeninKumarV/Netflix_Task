import React from "react";
import './SignupPage.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

    //firebase package
    const firebaseConfig = {
        apiKey: "AIzaSyAAunfeWXe86yMyNZdXHL6bc9uir-oSQbk",
        authDomain: "netflix-clone-b7a84.firebaseapp.com",
        projectId: "netflix-clone-b7a84",
        storageBucket: "netflix-clone-b7a84.appspot.com",
        messagingSenderId: "1027943300494",
        appId: "1:1027943300494:web:ebe8a2a7e6f0f4c758b8df"
    };


    const initial = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore();

    //const auth = getAuth();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        //using firebase
        createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
            console.log(authUser);
            Usenavi('/home')  
        }).catch((err) => {
            alert(err.message);
        });
      
    }
    const Usenavi=useNavigate();
    if(login){

    }
    else{
        Usenavi('/login')
    }


    return (
        <div className="signupbg">
            <div className="signup">
                <h4 style={{ color: "white" }}>LogIn</h4>
                <input type="email" value={email} name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" value={password} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={login}>SignIn</button>
                <p>
                    <span>New to Netflix?</span> Signup Now
                </p>
            </div>

        </div>
    );
}
export default SignupPage;