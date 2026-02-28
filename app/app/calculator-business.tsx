import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const URL = 'https://carboncrowd.net/sustainable-options-for-business';

export default function CalculatorBusinessScreen() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <WebView source={{ uri: URL }} style={StyleSheet.absoluteFill} />
    </View>
  );
}
