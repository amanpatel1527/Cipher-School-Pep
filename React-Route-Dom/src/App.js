import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/Route/About'
import Blog from './Components/Route/Blog'
import Contact from './Components/Route/Contact'
import Home from './Components/Route/Home'

export default function App() {
  return (
    <div>
      <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
