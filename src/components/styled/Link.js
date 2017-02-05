import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router';

export default Styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;