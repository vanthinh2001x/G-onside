import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

import React from "react";
import NotificationItem from "../components/NotificationItem";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";

const Notifications = ({ navigation }) => {
  const notifications = [
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "07:50",
      seen: true,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "07:50",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "07:50",
      seen: true,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "07:50",
      seen: true,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "07:50",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "07:50",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "07:50",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "07:50",
      seen: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      message:
        "[base Checking] Welcome to office. You have checked in at 07:50 10/12/2022",
      time: "07:50",
      seen: false,
    },
  ];
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
            onPress={() => {}}
            className="absolute right-4 translate-y-[2px]"
          >
            <Text className="text-base font-semibold">
              <Ionicons name="settings-outline" size={25} />
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {notifications.map((notification, index) => (
            <NotificationItem notification={notification} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Notifications;
