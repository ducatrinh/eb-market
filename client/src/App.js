import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import AdListContainer from './components/AdListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AdListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
