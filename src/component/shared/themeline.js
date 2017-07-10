import React, { Component } from 'react';
import Styled from 'styled-components';

const Line = Styled.div`
  border-width: 0.15vw;
  border-bottom-style: ${props => props.horizontal};
  width: 3vw;
  height: ${props => props.height};
  border-right-style: ${props => props.vertical};
`;

class Themeline extends Component {
  render() {
    return (
      <Line
        horizontal={ (this.props.horizontal) ? 'solid' : 'none' }
        vertical={ (this.props.vertical) ? 'solid' : 'none' }
        height={ (this.props.vertical) ? '3vw' : '0vw' }
      />
    );
  }
}

export default Themeline;
