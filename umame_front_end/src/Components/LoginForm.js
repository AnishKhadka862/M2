import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import "../app.css";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 

const LoginForm = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://3.14.254.41:5000/users/login", {
                username,
                password
            });
            
            if (response.data) {
                console.log(response)
                navigate("/");
            } else {
                alert("Invalid username or password!");
                setUsername("");
                setPassword("");
            }
        } catch (error) {
            console.error("There was an error logging in:", error);
            alert("Invalid username or password!");
                setUsername("");
                setPassword("");
        }
    }
    
    
    return (
        <div className='loginSections'>
            <TextField size="small"  margin="normal" label="Username" value={username} style={{margin: '2rem 0 0 0', width:'80%'}} onChange={e => setUsername(e.target.value)} />
            <TextField size="small"  margin="normal" className="textInputs" label="Password" type="password" style={{width:'80%'}} value={password} onChange={e => setPassword(e.target.value)} />
            <Button size="small" style={{ margin: '1rem' }} variant="contained" onClick={handleSubmit}>Login</Button>
        </div>
    );
}

export default LoginForm;
