import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';

export default function MyComponent() {
  return (
    <View style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <Text style={styles.text}>MyComponent🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccda2dff' },
  text: { fontSize: 20, fontWeight: '600' }
});