import React from 'react';
import Styled from 'styled-components';
import { footerHeight, headerHeight } from './const.js';

export default Styled.div`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
  margin: 0 90px;
  padding: 15px 0;
`;
