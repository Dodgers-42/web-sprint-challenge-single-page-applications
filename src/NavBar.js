import React from './react';
import { Link } from './react-router-dom';
import styled from './styled-components';

const NavBar = props => {
    return (
        <Navigation>
            <Link to='/'>Home</Link>
        </Navigation>
    );
}

const Navigation = styled.nav`
    
`

export default NavBar;