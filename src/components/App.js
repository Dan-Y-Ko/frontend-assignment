import {useState, useEffect} from 'react'

import logo from '../images/logo.svg';
import useFetch from './../hooks/useFetch';

const App = () => {
	const [movies, setMovies] = useState([])
	const {response, error} = useFetch('movie/now_playing');
	

	useEffect(() => {
		setMovies(response);
	}, [response])

	
	
	console.log(movies);

	return (
		<img src={logo} alt="Timescale" />
	)
}

export default App;