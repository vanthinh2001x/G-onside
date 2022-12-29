import React, { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

const UserItem = ({ user }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#dedfe1" : "white" },
        ]}
        onPress={toggleModal}
      >
        <View className="flex-row items-center px-4 py-2">
          <Image
            source={{
              uri: user.avatar,
            }}
            className="h-11 w-11 rounded-full mr-3"
          />
          <View>
            <Text className="text-[16px] mb-[1px] font-semibold text-gray-900">
              {user.name}
            </Text>
            <Text className="text-[14px] text-gray-500">{user.position}</Text>
          </View>
        </View>
      </Pressable>
      <Modal
        backdropColor="#ccc"
        backdropOpacity={0.6}
        onBackdropPress={toggleModal}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        className="flex items-center justify-center flex-1"
      >
        <View className="bg-white h-auto w-[84%] px-4 py-6 rounded-2xl">
          <View className="items-center">
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Image
                source={{
                  uri: user.avatar,
                }}
                className="h-24 w-24 rounded-full mb-5"
              />
            </TouchableOpacity>
            <Text className="text-xl font-bold text-gray-900">{user.name}</Text>
            <View className="mb-4">
              <Text className="text-center">
                <Text className="text-sm font-bold text-gray-900">
                  {user.nickName}
                </Text>
                <Text> - </Text>
                <Text className="text-sm text-gray-900 font-medium">
                  {user.position}
                </Text>
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-4">
            <TouchableOpacity
              activeOpacity={0.6}
              className="border-2 border-[#2e8dfa] bg-[#2e8dfa] flex-1 flex-row items-center justify-center py-2 rounded-lg"
            >
              <Icon name="chatbubble-ellipses" size={20} color="white" />
              <Text className="ml-2 text-white text-[16px] font-semibold">
                Message
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              className="border-2 border-[#2e8dfa] flex-1 flex-row items-center justify-center py-2 rounded-lg"
            >
              <Icon name="call" size={20} color="#2e8dfa" />
              <Text className="ml-2 text-[#2e8dfa] text-[16px] font-semibold">
                Call
              </Text>
            </TouchableOpacity>
          </View>
          <View className="h-[1px] w-full bg-gray-300 my-6" />
          <View className="flex-row items-end gap-x-3 mb-4">
            <MaterialIcons
              name="cake-variant-outline"
              size={20}
              color="#111827"
            />
            <Text className="text-gray-900 font-semibold">
              {user.dateOfBirth}
            </Text>
          </View>
          <View className="flex-row items-end gap-x-3 mb-4">
            <MaterialIcons
              name="phone-in-talk-outline"
              size={20}
              color="#111827"
            />
            <Text className="text-gray-900 font-semibold">{user.phone}</Text>
          </View>
          <View className="flex-row items-end gap-x-3 mb-4">
            <MaterialIcons name="email-outline" size={20} color="#111827" />
            <Text className="text-gray-900 font-semibold">{user.email}</Text>
          </View>
          <Pressable>
            {({ pressed }) => (
              <View className="flex-row items-end gap-x-3">
                <MaterialIcons
                  name="account-group-outline"
                  size={20}
                  color="#111827"
                />
                <Text
                  className={`text-[#2e8dfa] ${
                    pressed ? "font-bold" : "font-semibold"
                  }`}
                >
                  See Groups
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default UserItem;
