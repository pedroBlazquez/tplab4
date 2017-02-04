import React from 'react';

/**
 * @description Main View component. This View should be mapped by "/" route.
 * All Child routes for the this route component will be injected as Children
 *
 */

class MainView extends React.Component {

  render () {
    return (
      <div>
        {'Hello Main View'}
        {this.props.children}
      </div>
    ); 
  }
}

export default MainView;