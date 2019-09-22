import axios from 'axios'

export const getPokemons = () => async (dispatch) => {
	const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
	dispatch({
		type: 'get_pokemon',
		payload: res.data.results
	})
}