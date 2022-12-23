import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import CommentComponent from "../components/CommentComponent";
import CommentInput from "../components/CommentInput";
import PostItem from "../components/PostItem";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";

const CommentScreen = ({ navigation, route }) => {
  const { post } = route.params;
  const cmtRef = useRef();
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
          <CommentComponent cmtRef={cmtRef} />
          <CommentComponent cmtRef={cmtRef} />
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="position">
        <CommentInput cmtRef={cmtRef} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CommentScreen;
