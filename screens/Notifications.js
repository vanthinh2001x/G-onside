import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "react-native-vector-icons";

import React from "react";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";

const Notifications = ({ navigation }) => {
  return (
    <SafeAreaView
      className="bg-white flex-1"
      style={AndroidSafeArea.AndroidSafeArea}
    >
      <View className="relative flex-row items-center justify-center p-4 border-b-[1px] border-b-gray-100">
        <Text className="font-bold text-[22px] text-gray-900">
          Notification
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {}}
          className="absolute right-4"
        >
          <Text className="text-base font-semibold">
            <Ionicons name="create-outline" size={28} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
