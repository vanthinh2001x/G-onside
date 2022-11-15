import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import translateApi from "../api/translateApi";
import { setTranslate } from "../app/features/translateSlice";
import { setInitialState } from "../app/features/userSlice";
import BottomTabBar from "../components/BottomTabBar";
import StorageKeys from "../constants/storage-key";
import AvatarScreen from "../screens/AvatarScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import GroupScreen from "../screens/GroupScreen";
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import Messages from "../screens/Messages";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import SignupScreen from "../screens/SignupScreen";
import { config } from "./config";

const AppNavigation = () => {
  const [initialRouteName, setInitialRouteName] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      authUser();
      translateCheck();
    })();
  }, []);

  const translateCheck = async () => {
    try {
      const translateStorage = await AsyncStorage.getItem(
        StorageKeys.TRANSLATE
      );
      if (translateStorage) {
        const translateData = JSON.parse(translateStorage);
        dispatch(setTranslate(translateData));
      } else {
        let translate = await translateApi.getTranslationByApp("g-on", "vi");
        let translateData = {};
        translate.map((x) => {
          translateData = { ...translateData, [x.translationCode]: x.text };
        });
        dispatch(setTranslate(translateData));
        await AsyncStorage.setItem(
          StorageKeys.TRANSLATE,
          JSON.stringify(translateData)
        );
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const authUser = async () => {
    try {
      const userData = await AsyncStorage.getItem(StorageKeys.USER);
      if (userData) {
        dispatch(setInitialState(userData));
        // console.log("login:", userData);
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

  const HomeTab = ({ navigation }) => (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={config}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Group" component={GroupScreen} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: "20px",
          },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Icon
                name="edit-3"
                size={20}
                color="#111827"
                style={{ paddingRight: 20 }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            height: 70,
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );

  const HomeStack = () => (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="avatar" component={AvatarScreen} />
      <Stack.Screen name="changePassword" component={ChangePasswordScreen} />
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
      {!initialRouteName || loading ? (
        <LoadingScreen />
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
