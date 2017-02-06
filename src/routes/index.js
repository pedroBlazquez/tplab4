import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import MainView from 'views/MainView';
import Inicio from './Inicio';
import Talleres from './Talleres';
import Eventos from './Eventos';
import Contacto from './Contacto';

class MainRouter extends React.Component {

  render () {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={MainView}>
          <IndexRedirect to={'/inicio'}/>
          <Route path={'inicio'} component={Inicio} />
          <Route path={'talleres'} component={Talleres} />
          <Route path={'eventos'} component={Eventos} />
          <Route path={'entradas'} component={Inicio} />
          <Route path={'contacto'} component={Contacto} />
        </Route>
      </Router>
    );
  }
}

export default MainRouter;