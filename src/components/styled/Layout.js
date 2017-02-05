import React from 'react';
import Styled from 'styled-components';
import { fontWeightLight, fontSizeSmall, headerHeight, darkGray } from './const.js';

export default Styled.div`
  font-family: "Open Sans";
  color: ${darkGray};
  font-weight: ${fontWeightLight};
  font-size: ${fontSizeSmall};
  padding-top: ${headerHeight};
`;
