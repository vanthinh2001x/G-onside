import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Switch,
  RefreshControl,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

import React, { useRef, useState, useCallback } from "react";
import NotificationItem from "../components/NotificationItem";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";
import { Modalize } from "react-native-modalize";
import { Portal } from "@gorhom/portal";
const Notifications = ({ navigation }) => {
  const notifications = [
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "🎨 Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter & more",
      time: "07:50",
      seen: true,
    },
    {
      avatar:
        "https://i.pinimg.com/736x/7b/ac/02/7bac027ae0c163556293c246dfcb2c52.jpg",
      message:
        "[Premium designed] icons for use in web, iOS, Android, and desktop apps. ",
      time: "08:01",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message: "🏪 One component to pick them all at 07:50 10/12/2022",
      time: "08:10",
      seen: true,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/be/be/ef/bebeef8e0002ec3d95dd2fa132c28168.jpg",
      message:
        "🌳 Tiny & elegant JavaScript HTTP client based on the browser Fetch API",
      time: "08:50",
      seen: true,
    },
    {
      avatar:
        "https://i.pinimg.com/736x/aa/b8/2d/aab82d905e88e5fade4560fe9c952f7b.jpg",
      message:
        "[Prepare] for a career in tech by joining GitHub Global Campus.",
      time: "07:46",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/d2/f7/3e/d2f73e855dfbc159d09d5526cbbd5677.jpg",
      message:
        "👷 TypeScript's largest type utility library at 07:50 10/12/2022",
      time: "07:51",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[A performant] interactive bottom sheet with fully configurable options 🚀",
      time: "08:45",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/76/87/26/768726858fcedde6e06d35d1c5405930.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "09:00",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/a4/f1/b9/a4f1b9fc7d4b0afcbe52a3265dfcad6d.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "08:20",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "🎨 Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter & more",
      time: "07:50",
      seen: true,
    },
    {
      avatar:
        "https://i.pinimg.com/736x/7b/ac/02/7bac027ae0c163556293c246dfcb2c52.jpg",
      message:
        "[Premium designed] icons for use in web, iOS, Android, and desktop apps. ",
      time: "08:01",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message: "🏪 One component to pick them all at 07:50 10/12/2022",
      time: "08:10",
      seen: true,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/be/be/ef/bebeef8e0002ec3d95dd2fa132c28168.jpg",
      message:
        "🌳 Tiny & elegant JavaScript HTTP client based on the browser Fetch API",
      time: "08:50",
      seen: true,
    },
    {
      avatar:
        "https://i.pinimg.com/736x/aa/b8/2d/aab82d905e88e5fade4560fe9c952f7b.jpg",
      message:
        "[Prepare] for a career in tech by joining GitHub Global Campus.",
      time: "07:46",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/d2/f7/3e/d2f73e855dfbc159d09d5526cbbd5677.jpg",
      message:
        "👷 TypeScript's largest type utility library at 07:50 10/12/2022",
      time: "07:51",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[A performant] interactive bottom sheet with fully configurable options 🚀",
      time: "08:45",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/76/87/26/768726858fcedde6e06d35d1c5405930.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "09:00",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/a4/f1/b9/a4f1b9fc7d4b0afcbe52a3265dfcad6d.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "08:20",
      seen: false,
    },
  ];
  const modalizeRef = useRef(null);
  const SWITCH_TRACK_COLOR = {
    true: "rgba(147, 197, 253, 0.5)",
    false: "rgba(0,0,0,0.1)",
  };
  const [allowNoti, setAllowNoti] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  return (
    <>
      <SafeAreaView
        className="bg-white flex-1"
        style={AndroidSafeArea.AndroidSafeArea}
      >
        <View className="flex-row items-center justify-center p-4 border-b-[1px] border-b-gray-100">
          <Text className="font-bold text-[22px] text-gray-900">
            Notification
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => modalizeRef.current?.open()}
            className="absolute right-4 translate-y-[2px]"
          >
            <Text className="text-base font-semibold">
              <Ionicons name="settings-outline" size={25} />
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {notifications.map((notification, index) => (
            <NotificationItem notification={notification} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
      <Portal>
        <Modalize
          ref={modalizeRef}
          handlePosition="inside"
          adjustToContentHeight={true}
          handleStyle={{ backgroundColor: "#bcc0c1" }}
        >
          <View>
            <View className="items-center justify-center pb-2 border-b-[1px] border-b-gray-300 m-6 mb-4">
              <Ionicons name="settings-outline" size={28} color="#111827" />
              <Text className="text-lg font-semibold">Settings</Text>
            </View>
            <View className="pb-10 flex-col gap-0">
              <View className="flex-row items-center py-2 px-6">
                <View className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-3">
                  <Ionicons name="notifications" color="#111827" size={24} />
                </View>
                <Text className="text-[18px] font-medium text-gray-900 m-0 mr-3">
                  Allow notifications
                </Text>
                <Switch
                  value={allowNoti}
                  onValueChange={(toggled) => {
                    setAllowNoti(allowNoti ? false : true);
                  }}
                  trackColor={SWITCH_TRACK_COLOR}
                  thumbColor={"#3b82f6"}
                  style={{ transform: [{ scale: 0.84 }] }}
                />
              </View>
              <TouchableOpacity
                className="flex-row items-center py-2 px-6"
                onPress={() => modalizeRef.current.close()}
              >
                <View className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-3">
                  <Ionicons name="mail-open" color="#111827" size={24} />
                </View>
                <Text className="text-lg font-medium text-gray-900">
                  Mark all notifications as read
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modalize>
      </Portal>
    </>
  );
};

export default Notifications;
