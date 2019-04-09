import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom';

export const Nav = styled.nav`
    background-color: blue;
`

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
`

export const Li = styled.li`
    list-style-type: none;
    padding: 20px;
    color: white;
    display:inline-block;
`

export const Link = styled(ReactRouterLink)`
    color: white;
    font-family:  Arial, Helvetica, sans-serif;;
`