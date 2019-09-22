import React, { Component } from 'react'
import Card from '../components/card/Card'
import '../App.css'
import { connect } from 'react-redux'
import * as pokemonActions from '../actions/pokemonActions';

class Dashboard extends Component {
	constructor() {
		super()
		this.state = {
			loading: false,
		}

	}
	
	async componentDidMount() {
		this.setState({
			loading: true
		})
		await this.props.getPokemons()
		this.setState({
			loading: false
		})
	}
	
	renderView() {
		if (this.state.loading) {
			return(
				<div className="text-center">
					<p>Cargando datos! por favor espere.</p>
				</div>
  				)
			} else {
				return(
					this.props.pokemon.map((item, index) => (
						<div className="col-12 col-md-4" key={index}>
							<Card name={item.name} urlPokemon={item.url}/>
						</div>
				))
			)
		}
	}

	render() {
		return (
			<div className="row">
				{this.renderView()}
			</div>
		)
	}
}

const mapStateToProps = (reducers) => {
	return reducers.pokemonReducer
}

export default connect(mapStateToProps, pokemonActions)(Dashboard);
