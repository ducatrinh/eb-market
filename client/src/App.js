import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import AdListContainer from './components/AdListContainer'
import AdFormContainer from './components/AdFormContainer'
import AdDetailsContainer from './components/AdDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route path="/" exact component={AdListContainer} />
          <Route path="/ad/:id" component={AdDetailsContainer} />
          <Route path="/sell" exact component={AdFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
