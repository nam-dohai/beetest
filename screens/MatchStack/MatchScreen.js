import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MatchScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>MatchScreen</Text>
        <Button title="Go to MatieProfile" onPress={()=>{navigation.navigate("MatieProfileScreen")}} />
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
