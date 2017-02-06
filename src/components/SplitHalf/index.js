import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  flex-direction: ${({inverse}) => inverse ? "row-reverse" : "row"};
  justify-content: space-between;
`;

const Half = Styled.div`
  min-width: 50%;
`;

class SplitHalf extends React.Component {

  render () {
    const { right, left, inverse } = this.props;
    return (
      <Container inverse={inverse}>
        <Half>{left}</Half>
        <Half>{right}</Half>
      </Container>
    );
  }
}

SplitHalf.propTypes = {
  right: React.PropTypes.node.isRequired,
  left: React.PropTypes.node.isRequired,
  inverse: React.PropTypes.bool
};

export default SplitHalf;