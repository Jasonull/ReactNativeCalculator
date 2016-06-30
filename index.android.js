import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import App from './js/App';
import reactive from './js/reducers';

let store = createStore(reactive);

class ReactNativeCalculator extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
};

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator);
