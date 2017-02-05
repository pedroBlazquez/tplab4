import React from 'react';
import Styled from 'styled-components';
import PinkLink from 'components/styled/PinkLink.js';

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

class SiteMap extends React.Component {

  render () {
    const { links } = this.props;
    return(
      <Container>
        {links.map((l, i) =>
          <PinkLink key={i} to={l.to} children={l.text}/>
        )}
      </Container>
    );
  }
};

SiteMap.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape(
      {
        to: React.PropTypes.string,
        text: React.PropTypes.string
      }
    )
  ).isRequired
};

export default SiteMap;
