import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './src/components/molecules/Calculator';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[styles.wrapperCalculator, styles.shadowProp]}>
        <Calculator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperCalculator: {
    borderRadius: 5
  },
  shadowProp: {
    elevation: 2,
  }
});
