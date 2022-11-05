import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/counter">Counter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/use-effect">UseEffect</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apircc">Api Rcc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apirfc">Api Rfc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/usecallback">UseCallBack</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/usememo">UseMemo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/useref">UseRefDemo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reduxdemo">ReduxDemo</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}
 