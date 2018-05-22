import React from 'react'
import './Card.css'

const Card = (props) => {
	const Image = `https://img.pokemondb.net/artwork/${props.name}.jpg`
	return(
		<div className="card card-cover text-center">
		  <img className="card-img-top img-pokemon" src={Image} alt={props.name}/>
		  <div className="card-body">
		    <h5 className="card-title">{props.name}</h5>
		    <button href="" className="btn btn-pokemon disabled">Ver más de {props.name} proximamente!!!</button>
		  </div>
		</div>
	)
}

export default Card