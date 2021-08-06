import React from 'react'
import { Link } from 'components/Router'

import styled from 'styled-components'

const Nav = styled.div`
    background-color: #000000;
    padding: 1.6rem;
`;

const NavHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavLeft = styled.div`
    color: white;
`

const NavRight = styled.div`
    color: white;
    display: flex;
`

const Title = styled.h1`
    font-size: 1.2rem;
    margin-right: 2rem;
`


class Header extends React.Component {
    render() {
            return(
                <Nav>
                    <NavHeader>
                        <NavLeft>RelyonTrip</NavLeft>
                        <NavRight>
                            <Link to="/"><Title>About</Title></Link>
                            <Link to="/"><Title>Products</Title></Link>
                            <Link to="/"><Title>News</Title></Link>
                            <Link to="/"><Title>Members</Title></Link>
                            <Link to="/"><Title>Company</Title></Link>
                            <Link to="/"><Title>Contact</Title></Link>
                        </NavRight>
                    </NavHeader>
                </Nav>
            );
    }
}

export default Header