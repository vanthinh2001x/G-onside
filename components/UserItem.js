import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Modal as ModalImage,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ImageViewer from "react-native-image-zoom-viewer";

const { height, width } = Dimensions.get("window");

const UserItem = ({ user }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  console.log(isModalVisible, imageModalVisible);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const images = [
    {
      url: user.avatar,
      props: {},
    },
  ];

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row items-center gap-4 mb-4"
        onPress={toggleModal}
      >
        <Image
          source={{
            uri: user.avatar,
          }}
          className="h-11 w-11 rounded-full"
        />
        <View>
          <Text className="text-[16px] mb-[2px] font-semibold text-gray-900">
            {user.name}
          </Text>
          <Text className="text-[14px] text-gray-500">{user.position}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        backdropColor="#ccc"
        backdropOpacity={0.6}
        onBackdropPress={toggleModal}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        className="flex items-center justify-center"
      >
        <View className="bg-white flex items-center justify-center h-auto w-[84%] px-4 py-6 rounded-2xl">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              console.log("press");
              console.log(imageModalVisible);
              setImageModalVisible(true);
            }}
          >
            <Image
              source={{
                uri: user.avatar,
              }}
              className="h-24 w-24 rounded-full mb-5"
            />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">{user.name}</Text>
          <View className="flex-row mb-4">
            <Text className="text-center">
              <Text className="text-sm font-bold text-gray-800">
                {user.nickName}
              </Text>
              <Text> - </Text>
              <Text className="text-sm text-gray-800">{user.position}</Text>
            </Text>
          </View>
          <View className="flex-row items-center justify-between gap-4">
            <TouchableOpacity className="border-2 border-[#2e8dfa] bg-[#2e8dfa] flex-1 flex-row items-center justify-center py-2 rounded-lg">
              <Icon name="chatbubble-ellipses" size={20} color="white" />
              <Text className="ml-2 text-white text-[16px]">Message</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-2 border-[#2e8dfa] flex-1 flex-row items-center justify-center py-2 rounded-lg">
              <Icon name="call" size={20} color="#2e8dfa" />
              <Text className="ml-2 text-[#2e8dfa] text-[16px]">Call</Text>
            </TouchableOpacity>
          </View>
          <View className="h-[1px] w-full bg-gray-300 my-6"></View>
          <View className="flex-row items-end self-start gap-3 mb-4">
            <MaterialIcons
              name="cake-variant-outline"
              size={20}
              color="#374151"
            />
            <Text className="text-gray-700 font-medium">
              {user.dateOfBirth}
            </Text>
          </View>
          <View className="flex-row items-end self-start gap-3 mb-4">
            <MaterialIcons
              name="phone-in-talk-outline"
              size={20}
              color="#374151"
            />
            <Text className="text-gray-700 font-medium">{user.phone}</Text>
          </View>
          <View className="flex-row items-end self-start gap-3 mb-4">
            <MaterialIcons name="email-outline" size={20} color="#374151" />
            <Text className="text-gray-700 font-medium">{user.email}</Text>
          </View>
          <TouchableOpacity className="flex-row items-end self-start gap-3">
            <MaterialIcons
              name="account-group-outline"
              size={20}
              color="#374151"
            />
            <Text className="text-[#2e8dfa] font-medium">See Groups</Text>
          </TouchableOpacity>
        </View>
        <View className="fixed z-10">
          <Modal animationType="fade" visible={imageModalVisible}>
            <ImageViewer
              imageUrls={images}
              renderIndicator={() => ""}
              onSwipeDown={() => setImageModalVisible(false)}
              enableSwipeDown={true}
            />
            <TouchableOpacity
              className="absolute top-4 left-6 z-10 "
              activeOpacity={0.5}
              onPress={() => setImageModalVisible(false)}
            >
              <Icon name="close-circle" size={28} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              className="absolute top-4 right-6 z-10"
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Icon name="download-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </Modal>
        </View>
      </Modal>
    </>
  );
};

export default UserItem;
