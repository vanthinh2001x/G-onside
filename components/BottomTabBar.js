import React from "react";
import { Pressable, View } from "react-native";
import Animated, { BounceIn } from "react-native-reanimated";
import Icon from "react-native-vector-icons/Ionicons";

const tabBarData = [
  {
    name: "Home",
    icon: "ios-home-outline",
    iconActive: "ios-home",
    routeName: "Home",
  },
  {
    name: "Messages",
    icon: "ios-chatbox-outline",
    iconActive: "ios-chatbox",
    routeName: "Messages",
  },
  {
    name: "Notification",
    icon: "ios-notifications-outline",
    iconActive: "ios-notifications",
    routeName: "Notifications",
  },
  {
    name: "Profile",
    icon: "ios-person-circle-outline",
    iconActive: "ios-person-circle",
    routeName: "Profile",
  },
];
const BottomTabBar = ({ navigation, state }) => {
  const renderTabBarItem = (item, index) => {
    const isActive = state.index === index;
    const onPress = () => navigation.navigate(item.routeName);
    return (
      <Pressable
        key={item.name}
        onPress={onPress}
        className="flex-1 justify-center items-center h-full"
      >
        {isActive && (
          <Animated.View entering={BounceIn} className="activeLine" />
        )}
        {isActive ? (
          <Icon name={item.iconActive} size={27} color="#3b82f6" />
        ) : (
          <Icon name={item.icon} size={27} color="#94a3b8" />
        )}
      </Pressable>
    );
  };

  return (
    <View>
      <View className="flex-row h-16 items-center justify-between bg-white border-t-gray-200 border-t-2">
        {tabBarData.map(renderTabBarItem)}
      </View>
    </View>
  );
};

export default BottomTabBar;
