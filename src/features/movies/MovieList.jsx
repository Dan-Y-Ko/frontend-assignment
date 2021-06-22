import styled from 'styled-components'

const TextStyled = styled.h3`
    font-family: ${props => props.theme.fontFamily[0]};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes[4]};
`

const MovieList = () => {
    return (
        <main>
            <TextStyled>
                Most Recent Movies
            </TextStyled>
        </main>
    )
}

export default MovieList
