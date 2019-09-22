import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeLayout from './components/pages/homeLayout'

//pages

import Dashboard from './views/Dashboard'
import PokemonPage from './views/PokemonPage'

function App () {
	return (
		<Router>
			<HomeLayout>
				<Route exact path='/' component={Dashboard} />
				<Route path='/:pokemon' component={PokemonPage} />
			</HomeLayout>	
		</Router>
	)
}

export default App