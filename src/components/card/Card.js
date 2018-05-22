import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(event) {
		this.props.openModal(this.props)
	}

	render() {
		const Image = `https://img.pokemondb.net/artwork/${this.props.name}.jpg`
		return(
			<div className="card card-cover text-center">
			  <img className="card-img-top img-pokemon" src={Image} alt={this.props.name}/>
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name}</h5>
			    <button href="" className="btn btn-pokemon" onClick={this.handleClick}>¡Ver más de {this.props.name}!</button>
			  </div>
			</div>
		)
	}
}

export default Card