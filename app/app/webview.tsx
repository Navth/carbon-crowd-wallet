import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import { Text } from 'react-native';

export default function WebViewScreen() {
  const { url } = useLocalSearchParams<{ url: string }>();
  const router = useRouter();
  const uri = url || 'https://carboncrowd.net';

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
      </View>
      <WebView
        source={{ uri }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 56,
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backBtn: { alignSelf: 'flex-start' },
  backText: { fontSize: 16, color: '#208B21' },
  webview: { flex: 1 },
});
