import React from 'react';
import Styled from 'styled-components';
import { fontWeightBold, fontSizeXBig, fontSizeBig, fontSizeMedium, pink } from './const.js';

export const Cabecera = Styled.h1`
  margin: 25px 0;
  font-size: ${fontSizeXBig};
  font-weight: ${fontWeightBold};
  text-transform: uppercase;
  text-align: center;
`;

export const SubCabecera = Styled.h2`
  font-size: ${fontSizeBig};
  font-weight: ${fontWeightBold};
`;

export const Titulo = Styled.h3`
  text-align: center;
  font-size: ${fontSizeBig};
`;

export const LeftPinkBorderTitle = Styled(Titulo)`
  border-left: 4px solid ${pink};
`;