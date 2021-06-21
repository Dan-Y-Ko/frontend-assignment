import {useState, useEffect} from 'react'

import logo from '../images/logo.svg';
import API from '../api'

const App = () => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		const fetchMovies = async () => {
			const result = await API.get('movie/now_playing');
			setMovies(result.data.results);
		}

		fetchMovies();
	}, [])
	
	console.log(movies);

	return (
		<img src={logo} alt="Timescale" />
	)
}

export default App;