import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {firebase} from '../../firebase/config';

export default function ProfileScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>ProfileScreen</Text>
        <Button
          title={"Log out"}
          onPress={()=>{
            firebase.auth().signOut();
          }}
        />
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
