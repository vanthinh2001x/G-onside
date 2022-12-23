import React from "react";
import {
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const CommentInput = ({ cmtRef }) => {
  return (
    <View className="px-4 py-2 flex-row items-end border-t-[0.5px] border-t-gray-200 bg-white">
      <Image
        source={{
          uri: "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
        }}
        className="w-11 h-11 rounded-full"
      />
      <View className="flex-1 flex-row items-end border-[1px] border-gray-300 rounded-3xl px-3 py-[8px] mx-2 max-h-[150px]">
        <TextInput
          ref={cmtRef}
          placeholder="Write a comment..."
          className="flex-1 pb-[5px] text-[16px]"
          multiline={true}
        />
        <TouchableOpacity activeOpacity={0.6} className="ml-2">
          <Ionicons name="camera-outline" size={28} color="#6b7280" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} className="ml-2">
          <Ionicons name="attach" size={28} color="#6b7280" />
        </TouchableOpacity>
      </View>
      <Pressable className="pb-1">
        {({ pressed }) => (
          <Ionicons
            name="paper-plane"
            size={28}
            color={pressed ? "#0369a1" : "#3b82f6"}
          />
        )}
      </Pressable>
    </View>
  );
};

export default CommentInput;
