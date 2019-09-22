import React, { Component } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

class Card extends Component {

	render() {
		const Image = `https://img.pokemondb.net/artwork/${this.props.name}.jpg`
		return(
			<div className="card card-cover text-center">
			  <img className="card-img-top img-pokemon" src={Image} alt={this.props.name}/>
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name}</h5>
			    <Link to={'/' + this.props.name}><button className="btn btn-pokemon">¡Ver más de {this.props.name}!</button></Link>
			    
			  </div>
			</div>
		)
	}
}

export default Card