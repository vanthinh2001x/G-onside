import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const GroupNavigation = ({ UsersTap, GroupsTab }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "none",
          fontSize: 17,
          fontWeight: "600",
        },
        tabBarPressColor: "transparent",
        tabBarActiveTintColor: "#111827",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarStyle: {
          backgroundColor: "white",
          height: 52,
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#3b82f6",
          height: 2.5,
        },
      }}
    >
      <Tab.Screen name="Users" component={UsersTap} />
      <Tab.Screen name="Groups" component={GroupsTab} />
    </Tab.Navigator>
  );
};

export default GroupNavigation;
