import { View, Text } from "react-native";
import React from "react";
import CommentItem from "./CommentItem";

const CommentComponent = ({ cmtRef }) => {
  const replyPress = () => {
    cmtRef.current.focus();
  };
  return (
    <View>
      <CommentItem replyPress={replyPress} />
      <CommentItem isReply={true} replyPress={replyPress} />
      <CommentItem isReply={true} replyPress={replyPress} />
    </View>
  );
};

export default CommentComponent;
