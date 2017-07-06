import React, { Component } from 'react';
import Styled from 'styled-components';

const Line = Styled.div`
  border-width: 2px;
  border-bottom-style: ${props => props.horizontal};
  width: 4rem;
  height: ${props => props.height};
  border-right-style: ${props => props.vertical};
  margin-bottom: 10px;
  margin-top: 10px;
`;

class Themeline extends Component {
  render() {
    return (
      <Line
        horizontal={ (this.props.horizontal) ? 'solid' : 'none' }
        vertical={ (this.props.vertical) ? 'solid' : 'none' }
        height={ (this.props.vertical) ? '3rem' : '0rem' }
      />
    );
  }
}

export default Themeline;
