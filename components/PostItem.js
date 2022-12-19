import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { AntDesign } from "react-native-vector-icons";
const PostItem = ({ post }) => {
  const { avatar, name, time, audience, text, images, like, cmt } = post;
  const iconAudience =
    audience === "public"
      ? "earth"
      : audience === "designated" || audience === "except"
      ? "people"
      : "lock-closed";
  return (
    <View className="border-y-[0.4px] border-y-gray-400">
      <View className="p-4 flex-row justify-between">
        <View className="flex-row">
          <Image
            source={{ uri: avatar }}
            className="h-[42] w-[42] rounded-full"
          />
          <View className="ml-2">
            <Text className="text-base font-semibold text-gray-900">
              {name}
            </Text>
            <View className="flex-row items-center">
              <Text className="text-[14px] text-gray-500 mr-1">{time}</Text>
              <View className="w-[3px] h-[3px] bg-[#4b5563] rounded-full mr-1" />
              <Ionicons name={iconAudience} size={12} color="#4b5563" />
            </View>
          </View>
        </View>
        <Pressable>
          <Ionicons name="ellipsis-horizontal" size={20} color="#374151" />
        </Pressable>
      </View>
      <View className="mx-4 mb-4">
        <Text className="text-[15px] text-gray-800">{text}</Text>
      </View>
      <View>
        {images && images.map((img) => <Image source={{ uri: img }} />)}
      </View>
      <View className="px-4 pb-2 flex-row items-center">
        <View className="w-[18px] h-[18px] rounded-full flex items-center justify-center bg-blue-500">
          <AntDesign
            name="like1"
            size={11}
            color="white"
            style={{ paddingBottom: 1, paddingLeft: 1 }}
          />
        </View>
        <Text className="text-[15px] ml-1 text-gray-700">{like} Likes</Text>
        <View className="w-[4px] h-[4px] bg-[#4b5563] rounded-full mx-2" />
        <Text className="text-[15px] text-gray-700">{cmt} Comments</Text>
      </View>
      <View className="flex-row flex-1 border-t-[0.4px] border-t-gray-400">
        <Pressable className="flex-1 flex-row items-center justify-center py-3">
          <AntDesign name="like2" size={20} color="#4b5563" />
          <Text className="text-[16px] font-medium text-gray-600 ml-1">
            Like
          </Text>
        </Pressable>
        <Pressable className="flex-1 flex-row items-center justify-center">
          <Ionicons name="chatbox-outline" size={20} color="#4b5563" />
          <Text className="text-[16px] font-medium text-gray-600 ml-1">
            Comment
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PostItem;
