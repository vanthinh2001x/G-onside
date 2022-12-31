import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import translateApi from "../api/translateApi";
import { setTranslate } from "../app/features/translateSlice";
import { setInitialState } from "../app/features/userSlice";
import BottomTabBar from "../components/BottomTabBar";
import StorageKeys from "../constants/storage-key";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import GroupScreen from "../screens/GroupScreen";
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import ApplicationsScreen from "../screens/ApplicationsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignupScreen from "../screens/SignupScreen";
import GroupMemberListScreen from "../screens/GroupMemberListScreen";
import { config } from "./config";
import CreatePostScreen from "../screens/CreatePostScreen";
import PostAudienceScreen from "../screens/PostAudienceScreen";
import AudienceFilterScreen from "../screens/AudienceFilterScreen";
import ImageDetailScreen from "../screens/ImageDetailScreen";
import CommentScreen from "../screens/CommentScreen";
import CameraScreen from "../screens/CameraScreen";
import WebViewScreen from "../screens/WebViewScreen";

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
      <Tab.Screen name="Applications" component={ApplicationsScreen} />
      <Tab.Screen name="Group" component={GroupScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );

  const HomeStack = () => (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="GroupMember" component={GroupMemberListScreen} />
      <Stack.Screen name="WebView" component={WebViewScreen} />
      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="PostAudience"
        component={PostAudienceScreen}
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="AudienceFilter"
        component={AudienceFilterScreen}
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetailScreen}
        options={{ gestureEnabled: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen name="Comment" component={CommentScreen} />
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
