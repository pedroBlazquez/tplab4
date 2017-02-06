import React from 'react';
import Styled from 'styled-components';
import Label from './Label.js';
import { fontSizeXSmall } from './const.js';

export default Styled(Label)`
  > {
    &:after {
      font-size: ${fontSizeXSmall};
      content: " *requerido";
      color: red;
      vertical-align: super;
    }
  }
`;
