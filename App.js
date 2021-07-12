import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationManager from './navigation/NavigationManager';

export default function App() {
  return (
      <NavigationContainer>
        <NavigationManager/>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}
