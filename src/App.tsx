import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { AppNavbar } from './navbar';
import { Home } from './home';
import { Input } from './input';
import { Login } from './login';
import { Monitor } from './monitor';
import { Results } from './results';
import { Three } from './three';
import model from './json/model.json'

function App() {
  return (
    <div className="App">
        <Router>
            <AppNavbar name="Ben Cannell"/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/input' element={<Input jsonData={model} />} />
                <Route path='/monitor' element={<Monitor />} />
                <Route path='/results' element={<Results />} />
                <Route path='/three' element={<Three />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
