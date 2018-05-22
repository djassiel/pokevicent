import React, { Component } from 'react'
import Navbar from './components/nav/Navbar'
import Card from './components/Card'
import Footer from './components/footer/Footer'
import './App.css'

class App extends Component {
		
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
			pokemon: [],
			url: 'https://pokeapi.co/api/v2/pokemon/',
		}

		this.loadMore = this.loadMore.bind(this)
	}

	componentDidMount() {
		this.getPokemon();
	}
	getPokemon() {
		this.setState({ loading: true })

		fetch(this.state.url)
		.then(res => res.json())
		.then( res => {
			this.setState({
				pokemon: res.results,
				url: res.next,
				loading: false
			})
		})
  	.catch(error => { console.log('Request failed', error) })
	}

	loadMore() {
	    fetch(this.state.url)
		.then(res => res.json())
		.then( res => {
			this.setState({
				pokemon: [...this.state.pokemon, ...res.results],
				url: res.next,
				loading: false
			})
		})
  	.catch(error => { console.log('Request failed', error) })
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
				this.state.pokemon.map((item, index) => (
					<div className="col-12 col-md-4">
						<Card name={item.name} key={index} />
					</div>
				))
  			)
  		}
  	}

	render() {
		return(

				<div>
					<div className="container">
						<div className="row">
							<Navbar />
								{this.renderView()}
							<br/>
						</div>
						<button className="btn btn-red" onClick={this.loadMore}>Ver mas</button>
					</div>
					<Footer />
				</div>
			)
	}
}

export default App;
