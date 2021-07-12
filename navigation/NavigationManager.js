import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginStack from './LoginStack'
import RootTab from './RootTab'

export default function NavigationManager() {    
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginStack}/>
            <Stack.Screen name="Main" component={RootTab} options={{title:"Main"}}/>
        </Stack.Navigator>
    )
}
