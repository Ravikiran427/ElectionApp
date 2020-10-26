/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './src/pages/Login.js';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component<{}> {
  render() {
    return (
      <View styles={styles.container}>
          <StatusBar
              backgroundColor='#1c313a'
          />
          <Login/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgba(0,0,0,1)',
  },
});

