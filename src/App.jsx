import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider, Text } from '@mantine/core';

import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Residents from './pages/residents'
import Payments from './pages/payments'

import './App.css'

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/residents' element={<Residents />} />
          <Route path='/payments' element={<Payments />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}


export default App
