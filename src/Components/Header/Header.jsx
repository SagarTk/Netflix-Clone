import React from 'react'
import logo from "../../logo.png"
import {Link} from "react-router-dom"
import  {ImSearch} from "react-icons/im"


const Header = () => {
    return (
        <nav className='header'>
                    
            <img src={logo} alt="logo" />
                
            <div className='header-item'>
                
                <Link to="/">Tv Shows</Link>
                <Link to="/">Home</Link>
                <Link to="/">Recently Added</Link>
                <Link to="/">My List</Link>
                
            </div>
            <ImSearch />
        </nav>
  )
}

export default Header
