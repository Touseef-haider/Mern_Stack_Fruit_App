import React from 'react';
import './style.css'
import {Link} from 'react-router-dom';
const Navbar = ()=>{
    return(
        <div className="Navbar">
            <div className="Navbar-1">
                <span><Link to='/'>Get And Update Fruit</Link></span>    
            </div>
            <div className="Navbar-2">
                <span><Link to='/add'>Add  Fruit</Link></span>
            </div>
        </div>
    )
}
export default Navbar;