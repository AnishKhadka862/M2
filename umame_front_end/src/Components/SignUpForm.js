// SignupForm.js

import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import "../app.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const SignUpForm = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://3.14.254.41:5000/users/", {
                name,
                password,
                email,
                age
            });
            
            if (response.data) {
                alert("Account created successfully!");
                console.log(response)
                // history.push("/");
            } else {
                alert("Invalid username or password!");
                setName("");
                setEmail("");
                setPassword("");
                setAge("");
            }
        } catch (error) {
            console.error("There was an error logging in:", error);
            alert("Invalid username or password!");
            setName("");
            setEmail("");
            setPassword("");
            setAge("");
        }
    }

    return (
        <div className='loginSections'>
            <TextField size="small" style={{width:'80%'}} margin="normal" className="textInputs" label="Name" value={name} onChange={e => setName(e.target.value)} />
            <TextField size="small" style={{width:'80%'}} margin="normal" className="textInputs" label="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <TextField size="small" style={{width:'80%'}} margin="normal" className="textInputs" label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <TextField size="small" style={{width:'80%'}} margin="normal" className="textInputs" label="Age" type="number" value={age} onChange={e => setAge(e.target.value)} />
            <Button size="small" style={{ margin: '1rem' }} variant="contained" onClick={handleSubmit}>Signup</Button>

        </div>
    );
}

export default SignUpForm;
