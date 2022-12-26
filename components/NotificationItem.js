import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "react-native-vector-icons";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";

const NotificationItem = ({ notification }) => {
  const modalizeRef = useRef(null);
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? notification.seen
                ? "#d1d9e6"
                : "#e4e4e4"
              : notification.seen
              ? "#eaf2ff"
              : "white",
          },
        ]}
        onPress={() => {}}
      >
        <View className="flex-row p-3 items-center">
          <Image
            source={{ uri: notification.avatar }}
            className="w-16 h-16 rounded-full mr-3"
          />
          <View className="flex-1">
            <Text className="text-[14px] font-medium text-gray-800 mb-[6px]">
              {notification.message}
            </Text>
            <Text className="text-[12px] text-gray-600">
              {notification.time}
            </Text>
          </View>
          <TouchableOpacity onPress={() => modalizeRef.current.open()}>
            <Ionicons name="ellipsis-horizontal-outline" size={24} />
          </TouchableOpacity>
        </View>
      </Pressable>
      <Portal>
        <Modalize
          ref={modalizeRef}
          handlePosition="inside"
          adjustToContentHeight={true}
          handleStyle={{ backgroundColor: "#bcc0c1" }}
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
            <View className="pb-10 flex-col">
              <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "#e4e4e4" : "white" },
                ]}
                onPress={() => modalizeRef.current.close()}
              >
                <View className="flex-row items-center py-2 px-6">
                  <View className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-3">
                    <Ionicons name="close-circle" color="#111827" size={24} />
                  </View>
                  <Text className="text-lg font-medium text-gray-900">
                    Remove this notification
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "#e4e4e4" : "white" },
                ]}
                onPress={() => modalizeRef.current.close()}
              >
                <View className="flex-row items-center py-2 px-6">
                  <View className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-3">
                    <Ionicons name="mail-open" color="#111827" size={24} />
                  </View>
                  <Text className="text-lg font-medium text-gray-900">
                    Mark this notification as read
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </Modalize>
      </Portal>
    </>
  );
};

export default NotificationItem;
