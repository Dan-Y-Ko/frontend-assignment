import {useState, useEffect} from 'react'
import styled from 'styled-components'

import useFetch from './hooks/useFetch';
import Logo from './components/Logo';
import Searchbar from './components/Searchbar';

const ContainerStyled = styled.div`
	width: 83%;
	margin: auto;
`

const HeaderContainerStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
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
			<HeaderContainerStyled>
				<Logo />
				<Searchbar />
			</HeaderContainerStyled>
		</ContainerStyled>
	)
}

export default App;