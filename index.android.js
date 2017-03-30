
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';


import Signup from './src/pages/Signup';
import Login from './src/pages/Login';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyABKG5wmicgJBR9gtyzmz0NudyotMbifQ8",
    authDomain: "rnauth-36d17.firebaseapp.com",
    databaseURL: "https://rnauth-36d17.firebaseio.com",
    storageBucket: "rnauth-36d17.appspot.com",
    messagingSenderId: "1040039597678"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class rnAuth extends Component {
  render() {
    return (



      // For now our navigator will always take us to the signup page.
      // We will use a transition where the new page will slide in from the right.
      <Navigator
        initialRoute={{component: Login}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if(route.component){
            // Pass the navigator the the component so it can navigate as well.
            // Pass firebaseApp so it can make calls to firebase.
            return React.createElement(route.component, { navigator, firebaseApp});
          }
      }} />
    );
  }
}



AppRegistry.registerComponent('rnAuth', () => rnAuth);
