import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
 return(
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
	    	<Link to='/' className='navbar-brand'><strong>Pokevicent</strong></Link>
	    </nav>
 	)
}

export default Navbar