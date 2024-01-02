import React from "react";
import logo from '../images/logo.png';
import './Navbar.css';
import avatar from '../images/avatar.png';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [color,setColor]=useState(false);
    const scrollNavbar=()=>{
        //shown by the navbar bg color
        if(window.scrollY>100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",scrollNavbar);
        
        // return(()=>{
        //     window.removeEventListener("scroll",scrollNavbar)
        // })
    },[])

    const navigate=useNavigate();
    const gotoLogin=()=>{
        navigate('/login');
    }

    return (
        <div className={`navbar ${color ?"navbar-bg":null}`}>
            <img className="logo"
                alt="Netflix"
                src={logo} />
            <img className="avatar"
                alt="SignUp"
                src={avatar} 
                onClick={gotoLogin}
                />
        </div>
    );
}
export default Navbar;