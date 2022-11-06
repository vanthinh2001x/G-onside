import { View, Text, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React from "react";
import StorageKeys from "../constants/storage-key";
import { logout } from "../app/features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const gtk = await AsyncStorage.getItem(StorageKeys.TOKEN);
    const action = logout(gtk);
    await dispatch(action);
    const user = await AsyncStorage.getItem(StorageKeys.USER);
    if (!user) {
      navigation.navigate("AuthStack");
    }
  };
  const handleClearTranslate = async () => {
    await AsyncStorage.removeItem(StorageKeys.TRANSLATE);
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Pressable
        onPress={handleLogout}
        className="bg-blue-600 text-sm leading-6 font-medium py-3 px-6 rounded-xl pb-5"
      >
        <Text className="text-white">Logout</Text>
      </Pressable>
      <Pressable
        onPress={handleClearTranslate}
        className="bg-blue-600 text-sm leading-6 font-medium py-3 px-6 rounded-xl"
      >
        <Text className="text-white">Clear translate</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
