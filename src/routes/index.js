import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import MainView from 'views/MainView';
import Inicio from './Inicio';
import Talleres from './Talleres';

class MainRouter extends React.Component {

  render () {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={MainView}>
          <IndexRedirect to={'/inicio'}/>
          <Route path={'inicio'} component={Inicio} />
          <Route path={'talleres'} component={Talleres} />
          <Route path={'eventos'} component={Inicio} />
          <Route path={'entradas'} component={Inicio} />
          <Route path={'contacto'} component={Inicio} />
        </Route>
      </Router>
    );
  }
}

export default MainRouter;