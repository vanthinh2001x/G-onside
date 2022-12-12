import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";

const NotificationItem = ({ notification }) => {
  return (
    <TouchableOpacity
      className={`flex-row py-2 px-3 items-center gap-2 ${
        notification.seen ? "" : "bg-gray-200"
      }`}
      onPress={() => {}}
    >
      <Image
        source={{ uri: notification.avatar }}
        className="w-16 h-16 rounded-full"
      />
      <View className="flex-1">
        <Text className="text-[14px] font-medium text-gray-800 mb-[6px]">
          {notification.message}
        </Text>
        <Text className="text-[12px] text-gray-600">{notification.time}</Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="ellipsis-horizontal-outline" size={24} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NotificationItem;
