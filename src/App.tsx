import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { AppNavbar, themeMode } from './navbar';
import { Home } from './home';
import { Input } from './input';
import { Login } from './login';
import { Monitor } from './monitor';
import { Results } from './results';
import { Three } from './three';
import model from './json/model.json'

const App = () => {
  const [mode, changeMode] = useState(themeMode.Light)

  return (
    <div className="App" data-bs-theme={mode}>
        <Router>
            <AppNavbar name="Ben Cannell" setMode={changeMode}/>
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
