import React from 'react';
import Styled from 'styled-components';
import Link from './Link.js';
import { pink } from './const.js';

export default Styled(Link)`
  color: ${pink};
  text-transform: uppercase;
`;
