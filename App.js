import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './Screens/HomeScreen';
import MatchListScreen from './Screens/MatchListScreen';
import MatieInfoScreen from './Screens/MatieInfoScreen';

const Match = () => {
  const MatchStack = createStackNavigator();
  return (
    <MatchStack.Navigator>
      <MatchStack.Screen name="List" component={MatchListScreen} />
      <MatchStack.Screen name="Info" component={MatieInfoScreen} />
    </MatchStack.Navigator>
  );
};

const Home = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  const RootTab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <RootTab.Navigator>
          <RootTab.Screen name='Home' component={Home} />
          <RootTab.Screen name='Match' component={Match} />
        </RootTab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
