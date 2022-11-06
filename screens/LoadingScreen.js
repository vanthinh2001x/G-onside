import React from "react";
import { Image, Text, View } from "react-native";

const LoadingScreen = () => {
  return (
    <View className="flex justify-center items-center w-full h-[80%]">
      <Image source={require("../assets/Gnet.jpg")} className="h-32 w-32" />
      <Text className="text-2xl font-bold text-blue-500">G-net Technology</Text>
    </View>
  );
};

export default LoadingScreen;
