import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MatchScreen, MatieProfileScreen } from '../screens/MatchStack';

export default function MatchStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="MatchScreen" component={MatchScreen} />
            <Stack.Screen name="MatieProfileScreen" component={MatieProfileScreen} />
        </Stack.Navigator>
    )
}
