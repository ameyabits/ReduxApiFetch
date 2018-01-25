import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import MyContainer from './container/MyContainer';


const store = createStore(reducers, applyMiddleware(thunk));
export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <View>
          <MyContainer />
        </View>
      </Provider>
    );
  }
}

