import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Routes/About';
import Blog from './Routes/Blog';
import Contact from './Routes/Contact';
import Home from './Routes/Home';

export default function App21() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<div>Home Page</div>} />
                <Route path="about" element={<div>About Page</div>} />
                <Route path="contact" element={<div>Contact Page</div>} />
                <Route path="blog" element={<div>Blog Page</div>} /> */}

                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
}
