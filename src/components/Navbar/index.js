import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/post">POSTS</NavLink></li>
                <li><NavLink to="/aboutus">ABOUT</NavLink></li>
                <li><NavLink to="/contactus">CONTACT</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar
