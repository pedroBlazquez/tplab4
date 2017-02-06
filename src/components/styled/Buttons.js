import React from 'react';
import Styled from 'styled-components';
import { gray, lightGray, borderGray, darkGray, pink, fontSizeMedium } from './const.js';

export const Button = Styled.button`
  background-color: ${lightGray};
  border: ${borderGray};
  font-size: ${fontSizeMedium};
  color: ${darkGray};
  font-family: Open Sans;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  &:hover:enabled {
    background-color: ${gray};
  }
  &:disabled {
    color: ${gray};
  }
`;

export const PinkButton = Styled(Button)`
  color: white;
  background-color: ${pink};
  border: none;
  &:hover:enabled {
    color: ${pink};
  }
`;
