// App.js

import React from 'react';
import Navigation from './Navigation/Navigation'
//import Search from './Components/Search'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation/>
        
      </Provider>
    );
  }
}
