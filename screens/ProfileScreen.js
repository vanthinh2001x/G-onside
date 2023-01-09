import { useActionSheet } from "@expo/react-native-action-sheet";
import { Portal } from "@gorhom/portal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useRef, useState } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Ionicons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { setPhotoVisible } from "../app/features/photoModalSlice";
import { logout } from "../app/features/userSlice";
import ButtonChangeBg from "../components/ButtonChangeBg";
import PhotoDetailModal from "../components/PhotoDetailModal";
import StorageKeys from "../constants/storage-key";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";

//constants
const SWITCH_TRACK_COLOR = {
  true: "#438eff",
  false: "rgba(0,0,0,0.1)",
};
const VN_URL =
  "https://product.hstatic.net/200000122283/product/c-e1-bb-9d-vi-e1-bb-87t-nam_2c0683597d2d419fac401f51ccbae779_master.jpg";
const UK_URL =
  "https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_960_720.jpg";
const imgUrl =
  "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg";

const ProfileScreen = ({ navigation }) => {
  //refresh control
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  //logout actions
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
  //logout modal
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

  //avatar modal
  const avatarSheetRef = useRef();
  const imageRef = useRef();
  const onImagePress = useCallback(() => {
    imageRef.current?.measure((x, y, width, height, pageX, pageY) => {
      const img = { url: imgUrl };
      const specs = { x, y, width, height, pageX, pageY, borderRadius: 46 };
      dispatch(setPhotoVisible({ img, specs }));
    });
  }, []);
  const { isPhotoVisible, photoData } = useSelector(
    (state) => state.photoModal
  );
  //change mode
  const [theme, setTheme] = useState("light");

  return (
    <SafeAreaView
      className="bg-white flex-1"
      style={AndroidSafeArea.AndroidSafeArea}
    >
      <View className="flex-row items-center justify-between py-4 px-4 border-b-[1px] border-b-gray-100">
        <View className="w-9" />
        <Text className="text-[22px] font-bold text-gray-900">Profile</Text>
        <ButtonChangeBg
          bg={"#e4e5ea"}
          bgPress={"#cdced3"}
          scale={0.95}
          radius={18}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <View className="w-9 h-9 rounded-full flex items-center justify-center">
            <Ionicons name="create-outline" size={24} />
          </View>
        </ButtonChangeBg>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className="flex-row items-center px-6 pt-8">
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => avatarSheetRef.current.open()}
            >
              <Image
                ref={imageRef}
                source={{ uri: imgUrl }}
                className="h-[92px] w-[92px] rounded-full mr-6 border-4 border-blue-200 object-cover"
              />
            </TouchableOpacity>
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
          <View>
            <View className="flex-row items-center gap-4 px-6 py-4 border-b-[1px] border-b-gray-300 ">
              <Ionicons name="sunny-outline" size={26} color="#1e293b" />
              <Text className="flex-1 text-lg font-semibold text-slate-800">
                Dark mode
              </Text>
              <Switch
                value={theme === "light"}
                onValueChange={(toggled) => {
                  setTheme(toggled ? "light" : "dark");
                }}
                trackColor={SWITCH_TRACK_COLOR}
                style={{ transform: [{ scale: 0.84 }] }}
              />
            </View>
          </View>
          <View>
            <View className="flex-row items-center gap-4 px-6 py-4 border-b-[1px] border-b-gray-300 ">
              <Ionicons name="globe-outline" size={26} color="#1e293b" />
              <Text className="flex-1 text-lg font-semibold text-slate-800">
                Language
              </Text>
              <View className="flex-row">
                <TouchableOpacity>
                  <Image
                    source={{ uri: VN_URL }}
                    className="w-6 h-6 rounded-full mr-3 opacity-40"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={{ uri: UK_URL }}
                    className="w-6 h-6 rounded-full"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ButtonChangeBg onPress={() => navigation.navigate("ChangePassword")}>
            <View className="flex-row items-center gap-4 px-6 py-4 border-b-[1px] border-b-gray-300 ">
              <Ionicons name="key-outline" size={26} color="#1e293b" />
              <Text className="flex-1 text-lg font-semibold text-slate-800">
                Change password
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#1e293b"
              />
            </View>
          </ButtonChangeBg>
          <ButtonChangeBg onPress={logoutPress}>
            <View className="flex-row items-center gap-4 px-6 py-4 border-b-[1px] border-b-gray-300 ">
              <Ionicons name="log-out-outline" size={26} color="#1e293b" />
              <Text className="flex-1 text-lg font-semibold text-slate-800">
                Logout
              </Text>
            </View>
          </ButtonChangeBg>
        </View>
      </ScrollView>
      {/* BottomSheet */}
      <Portal>
        <Modalize
          ref={avatarSheetRef}
          handlePosition="inside"
          adjustToContentHeight={true}
          handleStyle={{ backgroundColor: "#bcc0c1" }}
        >
          <View className="h-[240px] pt-6">
            <ButtonChangeBg
              onPress={() => {
                onImagePress();
                avatarSheetRef.current.close();
              }}
            >
              <View className="flex-row items-center py-3 px-6">
                <View className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-3">
                  <Ionicons
                    name="person-circle-outline"
                    color="#111827"
                    size={26}
                  />
                </View>
                <Text className="text-lg font-medium text-gray-900">
                  View Profile Picture
                </Text>
              </View>
            </ButtonChangeBg>
            <ButtonChangeBg
              onPress={() => {
                avatarSheetRef.current.close();
              }}
            >
              <View className="flex-row items-center py-3 px-6">
                <View className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-3">
                  <Ionicons name="images" color="#111827" size={24} />
                </View>
                <Text className="text-lg font-medium text-gray-900">
                  Select Profile Picture
                </Text>
              </View>
            </ButtonChangeBg>
          </View>
        </Modalize>
      </Portal>
      {isPhotoVisible && <PhotoDetailModal />}
    </SafeAreaView>
  );
};

export default ProfileScreen;
