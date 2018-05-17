import React, { Component } from 'react'
import Navbar from './components/nav/Navbar'
import Card from './components/Card'
import Footer from './components/footer/Footer'
import './App.css';

class App extends Component {
		
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
			pokemon: [],
			url: 'https://pokeapi.co/api/v2/pokemon/',
			imgPokemon: ''
		}
	}

	componentWillMount() {
		this.getPokemon();
	}
	getPokemon = () => {
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

	render() {
		if (this.state.loading) {
			return (
				<div>
					Descargando
				</div>
			);
		} 
		return(

				<div>
					<div className="container">
						<Navbar />
						{
							this.state.pokemon.map((item, index) => (
								<Card name={item.name} key={index}/>
							))}
					</div>
					<p>Proximamente paginacion de pokemones!</p>
					<Footer />
				</div>
			)
	}
}

export default App;
