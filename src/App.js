import React, { Component } from 'react'
import HomeLayout from './components/pages/homeLayout'
import ModalContainer from './components/widget/container/modal'
import Modal from './components/widget/components/modal'
import Card from './components/card/Card'
import MoreInfoPokemon from './components/moreInfo/containers/moreInfo'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			loading: false,
			pokemon: [],
			url: 'https://pokeapi.co/api/v2/pokemon/',
			modalVisible: false
		}

		this.loadMore = this.loadMore.bind(this)
		this.handleCloseModalClick = this.handleCloseModalClick.bind(this)
		this.handleOpenModal = this.handleOpenModal.bind(this)
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
				loading: false,
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
						<div className="col-12 col-md-4" key={index}>
						<Card name={item.name} urlPokemon={item.url} openModal={this.handleOpenModal}/>
					</div>
				))
			)
		}
	}
	
	handleCloseModalClick(event) {
		this.setState({
			modalVisible: false
		})
	}
	
	handleOpenModal(data) {
		this.setState({
			modalVisible: true,
			data
		})
		
  	}

	render() {
		return(
			<HomeLayout loadMore={this.loadMore}>
				{this.renderView()}
				{this.state.modalVisible &&
				<ModalContainer>
					<Modal handleClick={this.handleCloseModalClick} show={this.state.modalVisible}>
						<MoreInfoPokemon name={this.state.data.name} urlPokemon={this.state.data.urlPokemon}/>
					</Modal>
				</ModalContainer>
				}
			</HomeLayout>
			)
	}
}

export default App;
