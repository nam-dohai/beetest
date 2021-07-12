import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabBarIcon({focused, name}) {
  return <MaterialCommunityIcons name={name} size={24} color={focused ? "blue" : "grey"} />;
}
