import React from 'react';
import Styled from 'styled-components';

const Line = Styled.div`
  border-width: 0.15vw;
  border-bottom-style: ${props => props.horizontal};
  width: 3vw;
  height: ${props => props.height};
  border-right-style: ${props => props.vertical};
  margin-bottom:  ${props => props.alignTop};
  margin-top: ${props => props.alignBottom};
`;

const ThemeLine = props => (
  <Line
    horizontal={(props.horizontal) ? 'solid' : 'none'}
    vertical={(props.vertical) ? 'solid' : 'none'}
    height={(props.vertical) ? '3vw' : '0vw'}
    alignTop={(props.alignTop) ? '1vw' : '0vw'}
    alignBottom={props.alignBottom ? '2vw' : '0vw'}
  />
);

export default ThemeLine;
