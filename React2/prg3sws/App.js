// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';

//Import react-navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
const App = createStackNavigator(
  {
    FirstPage: {screen: FirstPage},
    SecondPage: {screen: SecondPage},
  },
  {initialRouteName: 'FirstPage'},
);
export default createAppContainer(App);
