import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import MainView from 'views/MainView';
import Home from './Home';

class MainRouter extends React.Component {

  render () {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={MainView}>
          <IndexRedirect to={'/home'}/>
          <Route path={'home'} component={Home} />
        </Route>
      </Router>
    );
  }
}

export default MainRouter;