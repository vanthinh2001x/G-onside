import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { setInitialState } from "../app/features/userSlice";
import BottomTabBar from "../components/BottomTabBar";
import StorageKeys from "../constants/storage-key";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import Messages from "../screens/Messages";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import SignupScreen from "../screens/SignupScreen";
import { config } from "./config";

const AppNavigation = () => {
  const [initialRouteName, setInitialRouteName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      authUser();
    })();
  }, []);

  const authUser = async () => {
    try {
      const userData = await AsyncStorage.getItem(StorageKeys.USER);
      if (userData) {
        dispatch(setInitialState());
        console.log("login:", userData);
        setInitialRouteName("Home");
      } else {
        setInitialRouteName("AuthStack");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeTab = () => (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={config}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );

  const HomeStack = () => (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
    </Stack.Navigator>
  );

  const AuthStack = () => (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {!initialRouteName ? (
        <Text>Loading....</Text>
      ) : (
        <Stack.Navigator
          screenOptions={config}
          initialRouteName={initialRouteName}
        >
          <Stack.Screen name="Home" component={HomeStack} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
