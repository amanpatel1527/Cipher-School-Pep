import React from 'react'
import Cards from './Cards'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <Cards/>
            <Footer/>
        </div>
    )
}
