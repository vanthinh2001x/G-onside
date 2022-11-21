import { useActionSheet } from "@expo/react-native-action-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useMemo, useRef, useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Ionicons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { logout } from "../app/features/userSlice";
import StorageKeys from "../constants/storage-key";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";

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

  const [imageModalVisible, setImageModalVisible] = useState(false);
  const images = [
    {
      url: "",
      props: {
        source: require("../assets/avatar.jpg"),
      },
    },
  ];

  const avatarSheetRef = useRef(null);
  const avatarSnapPoints = useMemo(() => ["30%"], []);
  return (
    <SafeAreaView
      className="bg-white w-full h-full "
      style={AndroidSafeArea.AndroidSafeArea}
    >
      <View className="relative flex-row items-center justify-center p-4 border-b-[1px] border-b-gray-100">
        <Text className="text-xl font-semibold text-gray-900">Profile</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("EditProfile")}
          className="absolute right-4"
        >
          <Text className="text-base font-semibold">
            <Ionicons name="create-outline" size={28} />
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        className="pt-8"
      >
        <View className="flex-row items-center px-6">
          <View>
            <TouchableOpacity
              activeOpacity={0.9}
              // onPress={() => setImageModalVisible(true)}
              onPress={() => avatarSheetRef.current.expand()}
            >
              <Image
                source={require("../assets/avatar.jpg")}
                className="h-[84px] w-[84px] rounded-full mr-6 border-4 border-blue-200"
              />
            </TouchableOpacity>
            <View className="relative">
              <Modal
                transparent={true}
                animationType="fade"
                visible={imageModalVisible}
                className="absolute"
              >
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
                  <Ionicons name="close-circle" size={28} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="absolute top-4 right-6 z-10"
                  activeOpacity={0.5}
                  onPress={() => {}}
                >
                  <Ionicons name="download-outline" size={28} color="#fff" />
                </TouchableOpacity>
              </Modal>
            </View>
          </View>
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
      <BottomSheet
        ref={avatarSheetRef}
        index={-1}
        snapPoints={avatarSnapPoints}
        enablePanDownToClose
        overDragResistanceFactor={10}
        backgroundStyle={{}}
        handleStyle={{
          borderWidth: 2,
          borderBottomWidth: 0,
          borderColor: "#d1d5db",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
        style={{}}
        handleIndicatorStyle={{ backgroundColor: "#9ca3af", width: 40 }}
      >
        <View className="h-[100%] w-full p-4">
          <TouchableOpacity
            onPress={() => {
              setImageModalVisible(true);
              avatarSheetRef.current.close();
            }}
            activeOpacity={0.6}
            className="flex-row items-center gap-3 mb-4"
          >
            <View className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10">
              <Ionicons
                name="person-circle-outline"
                color="#111827"
                size={30}
              />
            </View>
            <Text className="text-lg font-semibold text-gray-900">
              View Profile Picture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              avatarSheetRef.current.close();
            }}
            className="flex-row items-center gap-3 mb-4"
          >
            <View className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10">
              <Ionicons name="images" color="#111827" size={24} />
            </View>
            <Text className="text-lg font-semibold text-gray-900">
              Select Profile Picture
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Profile;
