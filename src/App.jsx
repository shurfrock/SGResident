import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Residents from './pages/residents'
import Payments from './pages/payments'

import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/residents' element={<Residents />} />
            <Route path='/payments' element={<Payments />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </MantineProvider>
  )
}


export default App
