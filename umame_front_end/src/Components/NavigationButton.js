import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const NavigationButton = (props) => {
    const navigate = useNavigate();
    
    const onLoginClick = () => {
        navigate(`${props.path}`);
    }

    return <button className={props.cName} onClick={onLoginClick}>{props.name}</button>;
}

export default NavigationButton;