import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Half = Styled.div`
  min-width: 50%;
  min-height: 100%;
`;

class SplitHalf extends React.Component {

  render () {
    const { right, left } = this.props;
    return (
      <Container>
        <Half>{left}</Half>
        <Half>{right}</Half>
      </Container>
    );
  }
}

SplitHalf.propTypes = {
  right: React.PropTypes.node.isRequired,
  left: React.PropTypes.node.isRequired
};

export default SplitHalf;