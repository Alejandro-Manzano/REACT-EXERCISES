import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import List from './pages/List/List'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter basename='/'>

      <Routes>

        <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List />} />
        </Route>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)
