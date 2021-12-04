import React from 'react'
import './index.css'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook,BsWhatsapp,BsInstagram} from 'react-icons/bs'
import {ImTwitter} from 'react-icons/im'

export default function Header(props) {
    return (
        <div className="Header">
            <nav className="HeaderMenu">
                <a href='#'>HOME</a>
                <a href='#'>ABOUT US</a>
                <a href='#'>CONTACT US</a>
            </nav>
            <div className="socialIcons">
                <FaGithub />
                <BsFacebook />
                <ImTwitter />
                <BsWhatsapp />
                <BsInstagram />
            </div>
        </div>
    )
}
