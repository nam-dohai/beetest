import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FindStack from "./FindStack";
import MatchStack from "./MatchStack";
import ChatStack from "./ChatStack";
import ProfileStack from "./ProfileStack";
import TabBarIcon from "../components/TabBarIcon";

export default function RootTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "grey",
        labelStyle: {
          fontSize: 14,
        },
        style: {
          paddingTop: 4,
          borderTopWidth: 0,
          marginBottom: 0,
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowColor: "black",
          shadowOffset: { height: 0, width: 0 },
        },
      }}
    >
      <Tab.Screen
        name="FindStack"
        component={FindStack}
        options={{
          title: "Find",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="compass" />
          ),
        }}
      />
      <Tab.Screen
        name="MatchStack"
        component={MatchStack}
        options={{
          title: "Match",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="heart" />
          ),
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          title: "Chat",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="message" />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="account" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
