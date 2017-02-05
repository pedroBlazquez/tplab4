import React from 'react';
import { NavBar as NavBarContainer, NavBarItem } from 'components/styled/NavBar.js';

class NavBar extends React.Component {

  render () {
    const { links } = this.props;
    return (
      <NavBarContainer>
        {links.map((l, i) =>
          <NavBarItem key={i} to={l.to} children={l.text} />
        )}
      </NavBarContainer>
    );
  }
}

export default NavBar;
