import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import CommentItem from "../components/CommentItem";
import PostItem from "../components/PostItem";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";

const CommentScreen = ({ navigation, route }) => {
  const { post } = route.params;
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
      {/* Header */}
      <View className="flex-row items-center justify-between bg-white px-2 py-1 border-b-[1px] border-b-gray-100">
        <View className="w-16 h-9 flex items-start">
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#dedfe1" : "transparent",
                borderRadius: 100,
              },
            ]}
          >
            <View className="w-9 h-9 flex justify-center items-center rounded-full">
              <Ionicons name="chevron-back-outline" size={30} />
            </View>
          </Pressable>
        </View>
        <Text className="text-lg font-medium">Comments</Text>
        <View className="w-16 h-9" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PostItem post={post} isCmtScreen={true} />
        <View className="mt-4">
          <CommentItem />
          <CommentItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommentScreen;
