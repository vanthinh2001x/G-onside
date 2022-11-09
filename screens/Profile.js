import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../app/features/userSlice";
import StorageKeys from "../constants/storage-key";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
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
        className="bg-blue-600 text-sm leading-6 font-medium py-3 px-6 rounded-xl mt-5"
      >
        <Text className="text-white">Clear translate</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
