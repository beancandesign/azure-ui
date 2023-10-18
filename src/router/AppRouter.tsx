import { Routes, Route }
    from 'react-router-dom';

import { Home } from '../home';
import { Input } from '../input';
import { Login } from '../login';
import { Monitor } from '../monitor';
import { Results } from '../results';
import { Three } from '../three';
import model from '../json/model.json'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/input' element={<Input jsonInput={model} />} />
      <Route path='/monitor' element={<Monitor />} />
      <Route path='/results' element={<Results />} />
      <Route path='/three' element={<Three />} />
    </Routes>
  )
  }