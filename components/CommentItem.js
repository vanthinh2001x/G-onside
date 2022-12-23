import {
  View,
  Text,
  Image,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
const CommentItem = ({ isReply, replyPress }) => {
  const cmt = {
    avatar:
      "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
    name: "Justin Bieber",
    content:
      "Beautiful flower bouquet!\nI would be very happy if I had the opportunity to receive flowers from my family, friends and boyfriend💐🤭🤣",
    time: "10w",
  };
  const { showActionSheetWithOptions } = useActionSheet();
  const cmtLongPress = () => {
    const options = ["Reply", "copy", "Edit", "Delete", "Cancel"];
    const destructiveButtonIndex = 3;
    const cancelButtonIndex = 4;
    const tintColor = "#3b82f6";
    const cancelButtonTintColor = "#3b82f6";
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        tintColor,
        cancelButtonTintColor,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            () => {};
            break;
          case 1:
            () => {};
            break;
          case 2:
            () => {};
            break;
          case destructiveButtonIndex:
            //delete
            () => {};
            break;
          case cancelButtonIndex:
          // cancel
        }
      }
    );
  };
  return (
    <View className={`flex-row px-3 py-2 ${isReply && "ml-12"}`}>
      <Image
        source={{ uri: cmt.avatar }}
        className={`${isReply ? "w-7 h-7" : "w-10 h-10"} rounded-full`}
      />
      <View className="ml-2 flex-1">
        <View className="flex-row">
          <TouchableWithoutFeedback onLongPress={() => cmtLongPress()}>
            <View className="bg-gray-100 rounded-2xl px-3 py-2 flex-grow-0">
              <Text className="text-[14px] font-semibold text-gray-900 mb-1">
                {cmt.name}
              </Text>
              <Text className="text-[15px]">{cmt.content}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View className="flex-row ml-3 mt-1">
          <Text className="text-gray-600 mr-4">{cmt.time}</Text>
          <Pressable onPress={replyPress}>
            <Text className="text-gray-600 font-semibold">Reply</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CommentItem;
