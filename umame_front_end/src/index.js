import React from "react";
import ReactDOM from "react-dom/client";
import { Container, Box, Button , Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import App from "./App";
import "./app.css"


const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<App />);



