import React from 'react';
import LoginApp from './Components/LoginApp';
import Home from './Home';
import Nav from './Components/Nav';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationButton from './Components/NavigationButton';
import './app.css'





const App = () => {
    


    return (
        <Router >
            <div id='appContainer'>
            <div id='navBar'>
            <NavigationButton path='/' name='UMAMe' cName='logoBtn' />
                <NavigationButton path='/login' name='Login' cName='roundBtn'/>
            </div>
                    <Routes>
                    <Route path="/login" element={<LoginApp/>} />
                    <Route path="/" element={<Home/>} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
