import { Video } from "expo-av";
import React, { useState, useRef } from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const VideoPost = ({ uri, width, height }) => {
  const videoRef = useRef();
  const [status, setStatus] = useState({});
  return (
    <View
      className="related flex items-center justify-center"
      style={{ width, height }}
    >
      <Video
        ref={videoRef}
        source={{
          uri,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        style={{ width, height }}
        className="absolute top-0"
      />
      {!status.isPlaying && (
        <Pressable
          className="h-10 w-10 rounded-full flex items-center justify-center border-[1px] border-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          onPress={() => videoRef.current.playAsync()}
        >
          <Ionicons name="play" size={24} color="#fff" className="pl-1" />
        </Pressable>
      )}
    </View>
  );
};

export default VideoPost;
