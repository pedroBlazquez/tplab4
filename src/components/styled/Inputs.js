import React from 'react';
import Styled from 'styled-components';
import { darkGray, borderGray } from './const.js';

const baseInput = `
  border-radius: 5px;
  border: ${borderGray};
  color: ${darkGray};
`;

export const Input = Styled.input`
  ${baseInput}
  padding: 5px;
`

export const TextArea = Styled.textarea`
  ${baseInput}
`;
