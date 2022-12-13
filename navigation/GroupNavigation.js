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
        tabBarActiveTintColor: "#313743",
        tabBarInactiveTintColor: "#8e8e8e",
        tabBarStyle: {
          backgroundColor: "white",
          height: 52,
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#1876f2",
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
