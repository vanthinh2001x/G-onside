import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const GroupNavigation = ({ UsersTap, GroupsTab }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "none",
          fontSize: 14,
          fontWeight: "700",
        },
        tabBarPressColor: "transparent",
        tabBarActiveTintColor: "#1876f2",
        tabBarInactiveTintColor: "#4b5563",
        tabBarStyle: {
          backgroundColor: "white",
          height: 44,
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#1876f2",
          height: 3,
        },
      }}
    >
      <Tab.Screen name="Users" component={UsersTap} />
      <Tab.Screen name="Groups" component={GroupsTab} />
    </Tab.Navigator>
  );
};

export default GroupNavigation;
