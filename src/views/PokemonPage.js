import React from 'react'

function PokemonPage (props) {
	return (
		<div>
			<p>Hola {props.match.params.pokemon}</p>
		</div>
	)
}

export default PokemonPage