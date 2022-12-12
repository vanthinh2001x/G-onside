import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "react-native-vector-icons";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";

const NotificationItem = ({ notification }) => {
  const modalizeRef = useRef(null);
  return (
    <>
      <TouchableOpacity
        className={`flex-row p-3 items-center ${
          notification.seen ? "" : "bg-gray-200"
        }`}
        onPress={() => {}}
      >
        <Image
          source={{ uri: notification.avatar }}
          className="w-16 h-16 rounded-full mr-3"
        />
        <View className="flex-1">
          <Text className="text-[14px] font-medium text-gray-800 mb-[6px]">
            {notification.message}
          </Text>
          <Text className="text-[12px] text-gray-600">{notification.time}</Text>
        </View>
        <TouchableOpacity onPress={() => modalizeRef.current.open()}>
          <Ionicons name="ellipsis-horizontal-outline" size={24} />
        </TouchableOpacity>
      </TouchableOpacity>
      <Portal>
        <Modalize
          ref={modalizeRef}
          handlePosition="inside"
          adjustToContentHeight={true}
          handleStyle={{ backgroundColor: "#bcc0c1", height: 4 }}
        >
          <View>
            <View className="items-center justify-center pb-2 border-b-[1px] border-b-gray-300 m-6 mb-4">
              <Image
                source={{ uri: notification.avatar }}
                className="w-[70px] h-[70px] rounded-full mb-2"
              />
              <Text className="text-base font-medium text-center">
                {notification.message}
              </Text>
            </View>
            <View className="pb-10 flex-col gap-0">
              <TouchableOpacity
                className="flex-row items-center py-2 px-6"
                onPress={() => modalizeRef.current.close()}
              >
                <View className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-3">
                  <Ionicons name="close-circle" color="#111827" size={24} />
                </View>
                <Text className="text-lg font-medium text-gray-900">
                  Remove this notification
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row items-center py-2 px-6"
                onPress={() => modalizeRef.current.close()}
              >
                <View className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-3">
                  <Ionicons name="mail-open" color="#111827" size={24} />
                </View>
                <Text className="text-lg font-medium text-gray-900">
                  Mark this notification as read
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modalize>
      </Portal>
    </>
  );
};

export default NotificationItem;
