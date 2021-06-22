import styled from 'styled-components'

const SearchBarWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 5vh;
    width: 12%;
    border: 1px solid ${props => props.theme.colors.bg.tertiary };
    border-radius: 2px;
    padding-left: 10px;
`

const InputStyled = styled.input`
    border: none;
    height: 100%;
    width: 100%;
    margin-left: 10px;

    &:focus {
        outline: none;
    }

    &::placeholder {
       padding-left: 20px;
   }
`

const SearchIcon = () => <i class="fa fa-search"></i>

const IconStyled = styled(SearchIcon)`
`

const Searchbar = () => {
    return (
        <SearchBarWrapperStyled>
            <IconStyled></IconStyled>
            <InputStyled placeholder="Search for a movie" />
        </SearchBarWrapperStyled>
    )
}

export default Searchbar
