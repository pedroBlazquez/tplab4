import React from 'react';
import Layout from 'components/styled/Layout.js';
import FixedHeader from 'components/styled/FixedHeader.js';
import Footer from 'components/styled/Footer.js';
import MainContent from 'components/styled/MainContent.js';

/**
 * @description Main View component. This View should be mapped by "/" route.
 * All Child routes for the this route component will be injected as Children
 *
 */

class MainView extends React.Component {

  render () {
    return (
      <Layout>
        <FixedHeader>
          {'Here should be placed the NavBar'}
        </FixedHeader>
        <MainContent>
          {this.props.children}
        </MainContent>
        <Footer>
          {'Here should be placed the footer'}
        </Footer>
      </Layout>
    ); 
  }
}

export default MainView;