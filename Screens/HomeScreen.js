import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

export default function HomeScreen({navigation}) {
    return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Button mode="text" onPress={()=>navigation.navigate('Info')}>Go to Info</Button>
      <StatusBar style="auto" />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
