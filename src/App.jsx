import {useState, useEffect} from 'react'
import styled from 'styled-components'

import Logo from './ui/Logo';
import useFetch from './hooks/useFetch';

const ContainerStyled = styled.div`
	width: 83%;
	margin: auto;
`

const App = () => {
	const [movies, setMovies] = useState([])
	const {response, error} = useFetch('movie/now_playing');
	

	useEffect(() => {
		setMovies(response);
	}, [response])

	
	
	console.log(movies);

	return (
		<ContainerStyled>
			<Logo />
		</ContainerStyled>
	)
}

export default App;