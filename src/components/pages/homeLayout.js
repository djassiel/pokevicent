import React from 'react'
import Navbar from '../nav/Navbar'
import Footer from '../footer/Footer'

const HomeLayout = (props) => {
	return(
		<div>
			<div className="container">
				<Navbar />
					{props.children}
				<br/>
			</div>
			<Footer />
		</div>
		)
}

export default HomeLayout