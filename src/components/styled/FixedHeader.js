import React from 'react';
import Styled from 'styled-components';
import { headerHeight, borderGray } from './const.js';

export default Styled.header`
  position: fixed;
  width: 100%;
  height: ${headerHeight};
  border-bottom: ${borderGray};
  opacity: 1;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 0;
  left: 0;
`;
