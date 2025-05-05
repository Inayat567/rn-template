/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import BaseNavigation from './src/navigation';
import {CustomStatusBar} from './src/components';
import {requestPermissions} from './src/utils/permissions';

function App() {
  useEffect(() => {
    const getAllRequiredPermission = async () => {
      await requestPermissions();
    };

    getAllRequiredPermission();
  }, []);

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <BaseNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    paddingHorizontal: 5
  },
});

export default App;
