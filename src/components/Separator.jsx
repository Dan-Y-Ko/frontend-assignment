import styled from 'styled-components'

const SeparatorStyled = styled.hr`
    margin-top: 1%;
    margin-bottom: 2%;
    border: 1px solid ${props => props.theme.colors.bg.tertiary};
`

const Separator = () => {
    return (
        <SeparatorStyled />
    )
}

export default Separator
