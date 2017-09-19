import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

console.ignoredYellowBox = ['Setting a timer'];

class App extends Component {
  componentWillMount() {
    const config = {
     
      apiKey: 'AIzaSyBh_Q_ZOpS_i_0sMsHZbSK7jJglz85g2bs',
      authDomain: 'avalapp-decf0.firebaseapp.com',
      databaseURL: 'https://avalapp-decf0.firebaseio.com',
      projectId: 'avalapp-decf0',
      storageBucket: 'avalapp-decf0.appspot.com',
      messagingSenderId: '322246834791'

    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
