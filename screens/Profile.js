import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { logout } from "../app/features/userSlice";
import StorageKeys from "../constants/storage-key";
import { useActionSheet } from "@expo/react-native-action-sheet";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { showActionSheetWithOptions } = useActionSheet();
  const handleLogout = async () => {
    const user = await AsyncStorage.getItem(StorageKeys.USER);
    const gtk = JSON.parse(user).jwtToken;
    const action = logout(gtk);
    await dispatch(action);
    const userExist = await AsyncStorage.getItem(StorageKeys.USER);
    if (!userExist) {
      navigation.navigate("AuthStack");
    }
  };
  const handleClearTranslate = async () => {
    await AsyncStorage.removeItem(StorageKeys.TRANSLATE);
  };
  const logoutPress = () => {
    const options = ["Logout", "Cancel"];
    const cancelButtonIndex = 1;
    const tintColor = "#dc2626";
    const cancelButtonTintColor = "#3b82f6";
    const title = "Are you sure you want to log out?";
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        tintColor,
        cancelButtonTintColor,
        title,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            handleLogout();
            break;
          case cancelButtonIndex:
          // cancel
        }
      }
    );
  };

  return (
    <SafeAreaView className="bg-white w-full h-full ">
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        className="pt-8"
      >
        <View className="flex-row items-center px-6">
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("avatar")}
          >
            <Image
              source={require("../assets/avatar.jpg")}
              className="h-[84px] w-[84px] rounded-full mr-6 border-4 border-blue-200"
            />
          </TouchableOpacity>
          <View>
            <Text className="text-2xl font-bold text-slate-800 pb-[4px]">
              Thinh Pham Van
            </Text>
            <Text className="text-neutral-600">Frontend developers</Text>
          </View>
        </View>
        <View className="mt-8 px-6">
          <View className="flex-row items-center gap-4 mb-1">
            <Icon name="phone-outline" size={20} color="#6b7280" />
            <Text className="text-neutral-600">(+84) 944945384</Text>
          </View>
          <View className="flex-row items-center gap-4 mb-1">
            <Icon name="email-outline" size={20} color="#6b7280" />
            <Text className="text-neutral-600">
              phamvanthinh2001x@gmail.com
            </Text>
          </View>
          <View className="flex-row items-center gap-4">
            <Icon name="map-marker-outline" size={20} color="#6b7280" />
            <Text className="text-neutral-600">
              Binh thanh, Ho Chi Minh, Viet Nam
            </Text>
          </View>
        </View>
        <View className="mt-12 border-t-[1px] border-t-gray-200">
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("changePassword")}
          >
            <View className="flex-row items-center gap-4 px-6 py-4 border-b-[1px] border-b-gray-300 ">
              <Ionicons name="key" size={26} color="#1e293b" />
              <Text className="flex-1 text-lg font-bold text-slate-800">
                Change Password
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#1e293b"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <View className="flex-row items-center gap-4 px-6 py-4 border-b-[1px] border-b-gray-300 ">
              <Ionicons name="people" size={26} color="#1e293b" />
              <Text className="flex-1 text-lg font-bold text-slate-800">
                Users
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#1e293b"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <View className="flex-row items-center gap-4 px-6 py-4 border-b-[1px] border-b-gray-300 ">
              <Icon name="account-group" size={26} color="#1e293b" />
              <Text className="flex-1 text-lg font-bold text-slate-800">
                Groups
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#1e293b"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <View className="flex-row items-center gap-4 px-6 py-4 border-b-[1px] border-b-gray-300 ">
              <Ionicons name="layers" size={26} color="#1e293b" />
              <Text className="flex-1 text-lg font-bold text-slate-800">
                Applications & Services
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#1e293b"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={logoutPress}>
            <View className="flex-row items-center gap-4 px-6 py-4 border-b-[1px] border-b-gray-300 ">
              <Ionicons name="log-out" size={26} color="#1e293b" />
              <Text className="flex-1 text-lg font-bold text-slate-800">
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
