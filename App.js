import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Calculator from './src/components/molecules/Calculator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        animated={true}
        backgroundColor="#ffffff"
        style="auto" 
      />
      <View style={[styles.wrapperCalculator, styles.shadowProp]}>
        <Calculator />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  wrapperCalculator: {
    borderRadius: 5
  },
  shadowProp: {
    elevation: 2,
  }
});
