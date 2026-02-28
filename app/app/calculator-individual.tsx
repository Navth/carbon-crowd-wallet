import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const URL = 'https://carboncrowd.net/sustainable-options-for-individual';

export default function CalculatorIndividualScreen() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <WebView source={{ uri: URL }} style={StyleSheet.absoluteFill} />
    </View>
  );
}
