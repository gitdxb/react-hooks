import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {

    let {uLogin} = useSelector(state => state.QLNDReducer)

    let renderName = () => {

        if(uLogin != null){
            //đã đăng nhập
            return <NavLink className="nav-link" to="/profile">Hello {uLogin.hoTen}</NavLink>

        }else{
            //chưa đăng
            return <NavLink className="nav-link" to="/login">Login</NavLink>
        }

    }


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
                            
                            {renderName()}

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
                            <NavLink className="nav-link" to="/apircc">ApiRcc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apirfc">ApiRfc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/usecallback">UseCallBack</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/usememo">UseMemo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/useref">UseRef</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reduxdemo">ReduxDemo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apiredux">ApiMiddleWare</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/detail/phim123">Detail</NavLink>
                        </li>
                        
                    </ul>
                   
                </div>
            </nav>

        </header>
    )
}
