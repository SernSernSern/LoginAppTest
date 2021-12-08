/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ImageBackground, StatusBar, StyleSheet} from 'react-native';
import LoginPage from '../page/LoginPage';
import {Provider} from 'react-redux';
import configureStore from '../store/configStore';

const image = require('../assets/img.png');

const store = configureStore();

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={image}
        style={styles.imgBackground}
        resizeMode={'cover'}>
        <LoginPage />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
