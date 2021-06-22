import styled from 'styled-components'

const SearchBarWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 5vh;
    width: 12%;
    border: 1px solid ${props => props.theme.colors.bg.tertiary};
    border-radius: 2px;
    padding-left: 10px;
`

const InputStyled = styled.input`
    border: none;
    height: 100%;
    width: 100%;
    margin-left: 10px;
    color: ${props => props.theme.colors.text.secondary};
    font-family: ${props => props.theme.fontFamily[0]};
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes[0]};

    &:focus {
        outline: none;
    }

    &::placeholder {
       padding-left: 20px;
       color: ${props => props.theme.colors.text.secondary};
       font-family: ${props => props.theme.fontFamily[0]};
       font-weight: ${props => props.theme.fontWeights.regular};
        font-size: ${props => props.theme.fontSizes[0]};
   }
`

const Searchbar = () => {
    return (
        <SearchBarWrapperStyled>
            <i class="fa fa-search"></i>
            <InputStyled placeholder="Search for a movie" />
        </SearchBarWrapperStyled>
    )
}

export default Searchbar
