import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const goToHome=()=>{
        navigate('/')
    }
    const goToAbout=()=>{
        navigate('/about')
    }
    const goToContact=()=>{
        navigate('/contact')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Route</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={goToHome} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={goToAbout}  href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={goToContact} href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
