import React, { Component } from 'react';
import Styled from 'styled-components';

const Line = Styled.div`
  border-width: 2px;
  border-bottom-style: ${props => props.horizontal};
  width: 4rem;
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
      />
    );
  }
}

export default Themeline;
