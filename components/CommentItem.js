import { View, Text, Image, Pressable, Dimensions } from "react-native";
import React from "react";
const { width } = Dimensions.get("window");
const CommentItem = () => {
  const cmt = {
    avatar: "https://by.com.vn/8gkIt",
    name: "Justin Bieber",
    content: "123",
    // "Beautiful flower bouquet!\nI would be very happy if I had the opportunity to receive flowers from my family, friends and boyfriend💐🤭🤣",
    time: "10w",
  };
  return (
    <View className="flex-row px-3 py-2">
      <Image source={{ uri: cmt.avatar }} className="w-10 h-10 rounded-full" />
      <View className="ml-2 flex-1">
        <View className="bg-gray-100 rounded-2xl px-3 py-2">
          <Text className="text-[14px] font-semibold text-gray-900 mb-1">
            {cmt.name}
          </Text>
          <Text className="text-[15px]">{cmt.content}</Text>
        </View>
        <View className="flex-row ml-3 mt-1">
          <Text className="text-gray-600 mr-4">{cmt.time}</Text>
          <Pressable>
            <Text className="text-gray-600 font-semibold">Reply</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CommentItem;
