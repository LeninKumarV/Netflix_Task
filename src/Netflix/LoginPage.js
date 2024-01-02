import React from "react";
import logo from '../images/logo.png';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    
    const homepage = () => {
        if(email.length==0){
            alert("Enter your email");
        }
        else if(email.length>1){
            regex();        
        }
    }

    const regex=()=>{
        let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(regex.test(email)){
            alert("Hello ! "+email);
                nav('./home');
        }
        else{
            alert("Enter Your valid Email");
        }
    }

    return (
        <div className="loginpage">
            <div className="logintop">
                <img className="loginlogo" src={logo} />
                <button className="btn1">SignIn</button>
            </div>
            <div className="logingradient"></div>

            <div className="loginbody">

                <div className="logincontent">
                    <div className="content">
                        <h2> Unlimited films, TV programmes and more.</h2>
                        <h4>Watch anywhere. Cancel at any time.</h4>
                        <h6>
                            Ready to watch? Enter your email to create or restart your
                            membership.
                        </h6>
                    </div>

                    <div className="logininput">
                        <input type="email" name="email"  value={email} placeholder="Email Address" required="required" onChange={(e) => setEmail(e.target.value)} />
                        <button onClick={homepage}>Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default LoginPage;