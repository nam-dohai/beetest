import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindStack from './FindStack';
import MatchStack from './MatchStack';
import ChatStack from './ChatStack';
import ProfileStack from './ProfileStack';

export default function RootTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="FindStack" component={FindStack} />
            <Tab.Screen name="MatchStack" component={MatchStack} />
            <Tab.Screen name="ChatStack" component={ChatStack} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} />
        </Tab.Navigator>
    )
}
