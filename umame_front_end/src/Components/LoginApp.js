import { Container, Card } from "@mui/material";
import React, { useState } from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';







const App = () => {
    
    const navigate = useNavigate();

    const onLoginClick = () => {
        document.getElementById("hoverBox").style.top="0%";
        document.getElementById("hoverBox").style.height="60%";
        document.getElementById("boxMessage").style.display="flex";
        document.getElementById("boxMessage1").style.display="none";
       

    }
    const onSignUpClick = () => {
        document.getElementById("hoverBox").style.top="60%";
        document.getElementById("hoverBox").style.height="40%";
        document.getElementById("boxMessage").style.display="none";
        document.getElementById("boxMessage1").style.display="flex";

    }

    
    return(
        <Container id="bodyContainer">
            

            <Card variant="fullWidth" id="loginContainer">
                <div id="hoverBox" onSwipedDown={onSignUpClick}>
                    <div>

                    <span id="uma">UMA</span><span id="me">Me</span>
                    </div>
                    <div id="changeBtn">
                    <div id="boxMessage" onClick={onSignUpClick}><div>Not a user? Create an account</div></div>
                    <div id="boxMessage1" onClick={onLoginClick}><div>Already have an account? Login</div></div>
                    </div>
                </div>
               <div className="loginSections" id="signUpDiv">
               <div className="formHeader">Sign Up</div>
                <SignUpForm className="loginSections"/>
               </div>
               <div className="loginSections" id="logInDiv">
                <div className="formHeader">Log In</div>
                <LoginForm className="loginSections" />
               </div>
            </Card>
            
        </Container>
    );     

}
    

export default App; 