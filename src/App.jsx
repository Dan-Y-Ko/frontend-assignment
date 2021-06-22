import {useState, useEffect} from 'react'
import styled from 'styled-components'

import useFetch from './hooks/useFetch';
import Logo from './components/Logo';
import Searchbar from './components/Searchbar';
import Separator from './components/Separator';
import MovieList from './features/movies/MovieList';

const ContainerStyled = styled.div`
	width: 83%;
	margin: auto;
`

const HeaderContainerStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2%;
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
			<Separator />
			<MovieList />
		</ContainerStyled>
	)
}

export default App;