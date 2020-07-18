import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import styled from './node_modules/styled-components';

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