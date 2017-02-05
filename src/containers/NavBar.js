import { connect } from 'react-redux';
import { getSiteMapLinks } from 'modules/Configuration/selectors.js';
import NavBar from 'components/NavBar';

const mapStateToProps = (state) => (
  {
    links: getSiteMapLinks(state)
  }
); 

export default connect(mapStateToProps)(NavBar);
