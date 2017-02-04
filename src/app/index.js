import React from 'react';
import { Provider } from 'react-redux';
import MainRouter from 'routes';
import Store from 'store';

class App extends React.Component {
  render () {
    return (
      <Provider store={Store}>
        <MainRouter />
      </Provider>
    );
  }
}

export default App;