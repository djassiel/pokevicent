import React, { Component } from 'react'
import './moreInfo.css'

class MoreInfoPokemon extends Component {
	state = {
		abilities: [],
		loading: false,
		urlPokemon: this.props.urlPokemon
	}
	componentDidMount() {
		this.getInfoPokemon()
	}
	getInfoPokemon = () => {
		this.setState({ loading: true })
		fetch(this.props.urlPokemon)
		  .then(res => res.json())
		  .then(res => {
			this.setState({
				abilities: res.abilities,
				loading: false
			})
		  })
	}

	renderView() {
		if(this.state.loading) {
			return (
				<div>
					<p className="contador">Cargando datos!!!</p>
				</div>
			)
		} else {
			return (
				<div>
					{this.state.abilities.map((abilities, index) => (
						<div key={index}>
							<p><strong>{abilities.ability.name}</strong></p>
						</div>
					))}
					<p className="contador"><strong>{this.props.name}</strong> solo cuenta con {this.state.abilities.length} habilidades!</p>
				</div>
			)
		}
	}
	render() {
		const Image = `https://img.pokemondb.net/artwork/${this.props.name}.jpg`
		return(
			<div className="container">
				<div className="row text-center">
					<div className="col-12 col-md-6 pokemonInfo">
						<img className="ImgPokemon" width={140} height={140} src={Image} alt={this.props.name}/>
						<h1>{this.props.name}</h1>
					</div>
					<div className="col-12 col-md-6 pokemonHabilidades">
						<h1>HABILIDADES</h1>
						{ this.renderView() }
					</div>
				</div>
			</div>
		)
	}
}

export default MoreInfoPokemon