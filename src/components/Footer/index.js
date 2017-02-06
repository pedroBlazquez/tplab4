import React from 'react';
import SiteMap from 'components/SiteMap';
import SplitHalf from 'components/SplitHalf';
import StyledFooter from 'components/styled/Footer.js';

class Footer extends React.Component {
  render () {
    const { siteMapLinks } = this.props;
    return (
      <StyledFooter>
        <SplitHalf
          left={
            <SiteMap links={siteMapLinks}/>
          }
          right={
            'Here should be media buttons'
          }
        />
      </StyledFooter>
    );
  }
}

export default Footer;