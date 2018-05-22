import React from 'react'
import Navbar from '../nav/Navbar'
import Footer from '../footer/Footer'

const HomeLayout = (props) => {
	return(
		<div>
			<div className="container">
				<div className="row">
					<Navbar />
						{props.children}
					<br/>
				</div>
				<button className="btn btn-red" onClick={props.loadMore}>Ver mas</button>
			</div>
			<Footer />
		</div>
		)
}

export default HomeLayout