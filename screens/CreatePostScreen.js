import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const { width } = Dimensions.get("window");
const imgUrl =
  "https://i.pinimg.com/736x/4a/18/ea/4a18ea768f70d1ed5537385526a83b0c.jpg";
const CreatePostScreen = ({ navigation }) => {
  const [imgSize, setImgSize] = useState({ width: 0.1, height: 0 });
  useEffect(() => {
    Image.getSize(imgUrl, (width, height) => {
      setImgSize({ width, height });
    });
  }, []);
  const [text, setText] = useState("");
  return (
    <View className="bg-white flex-1">
      {/* header */}
      <View className="flex-row items-center justify-between bg-gray-100 p-2 pt-7">
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
              <Ionicons name="close" size={28} />
            </View>
          </Pressable>
        </View>
        <Text className="text-lg font-semibold">Create Post</Text>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#0369a1" : "#3b82f6",
              borderRadius: 6,
            },
          ]}
        >
          <View
            className={`flex items-center justify-center w-16 h-9 rounded-md ${
              !text && "bg-[#e4e5ea]"
            }`}
          >
            <Text
              className={`text-lg font-medium text-white ${
                !text && "text-[#c1c2c8]"
              }`}
            >
              Post
            </Text>
          </View>
        </Pressable>
      </View>
      {/* container  */}
      <ScrollView>
        {/* Title */}
        <View className="flex-row p-3">
          <Image
            source={require("../assets/avatar.jpg")}
            className="w-10 h-10 rounded-full"
          />
          <View className="ml-2 flex items-start">
            <Text className="text-[16px] font-semibold">Pham Van Thinh</Text>
            <Pressable
              onPress={() => navigation.navigate("PostAudience")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#dedfe1" : "white",
                  transform: [{ scale: pressed ? 0.98 : 1 }],
                  borderRadius: 4,
                  marginTop: 4,
                },
              ]}
            >
              <View className="flex-row items-center px-1 py-[2px] border-[0.5px] border-gray-400 rounded">
                <Ionicons name="earth" size={14} color="#656565" />
                <Text className="mx-1 text-[#656565]">Public</Text>
                <Ionicons name="caret-down" size={12} color="#656565" />
              </View>
            </Pressable>
          </View>
        </View>
        {/* Input */}
        <TextInput
          multiline
          numberOfLines={4}
          className="p-3 text-[16px] flex flex-row"
          placeholder="What's on your mind?"
          placeholderTextColor="#4b5563"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#242424] z-10 rounded"
          >
            <Text>
              <Ionicons name="close" size={24} color="#fff" />
            </Text>
          </TouchableOpacity>
          <Image
            source={{ uri: imgUrl }}
            style={{ width, height: (width * imgSize.height) / imgSize.width }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreatePostScreen;
