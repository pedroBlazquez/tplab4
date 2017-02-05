import React from 'react';
import Styled from 'styled-components';
import { gray, darkGray } from './const.js';
import { Link } from 'react-router';

export const NavBar = Styled.nav`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding-bottom: 25px;
`;

const StyledLink = Styled(Link)`
  text-decoration: none;
  padding: 15px;
  color: ${darkGray};
  text-transform: uppercase;
  &:hover, &.active {
    background-color: ${gray};
  }
`;

export const NavBarItem = (props) => (<StyledLink activeClassName={'active'} {...props} />)