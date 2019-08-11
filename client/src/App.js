import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import AdListContainer from './components/AdList/AdListContainer'
import AdFormContainer from './components/AdForm/AdFormContainer'
import AdDetailsContainer from './components/AdDetails/AdDetailsContainer'
import SignupFormContainer from './components/SignupForm/SignupFormContainer'
import LoginFormContainer from './components/LoginForm/LoginFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route path="/" exact component={AdListContainer} />
          <Route path="/ad/:id" component={AdDetailsContainer} />
          <Route path="/sell" exact component={AdFormContainer} />
          <Route path="/signup" exact component={SignupFormContainer} />
          <Route path="/login" exact component={LoginFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
