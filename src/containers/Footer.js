import { connect } from 'react-redux';
import { getSiteMapLinks } from 'modules/Configuration/selectors.js';
import Footer from 'components/Footer';

const mapStateToProps = (state) => (
  {
    siteMapLinks: getSiteMapLinks(state)
  }
); 

export default connect(mapStateToProps)(Footer);
