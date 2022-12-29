import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import ButtonChangeBg from "../components/ButtonChangeBg";
import * as ImagePicker from "expo-image-picker";

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
  const [media, setMedia] = useState([]);
  const [file, setFile] = useState([]);
  //image Picker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      presentationStyle: "fullScreen",
      allowsMultipleSelection: true,
      selectionLimit: 10,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.selected) {
      result.selected = result.selected.map(
        (item, index) => (item = { uri: item.uri, type: item.type })
      );
      setMedia([...media, ...result.selected]);
    }
  };
  const handleRemoveImage = (index) => {
    const newMedia = media.filter((_, idx) => idx !== index);
    setMedia(newMedia);
  };
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
        {media.map((item, index) => (
          <View key={index} className="mb-4">
            <TouchableOpacity
              onPress={() => handleRemoveImage(index)}
              activeOpacity={0.6}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#242424] z-10 rounded"
            >
              <Text>
                <Ionicons name="close" size={24} color="#fff" />
              </Text>
            </TouchableOpacity>
            <Image
              source={{ uri: item.uri }}
              style={{
                width,
                height: (width * imgSize.height) / imgSize.width,
              }}
              // resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View
          className="absolute bottom-0 h-[60px] w-full px-4 bg-white rounded-tl-2xl 
                  rounded-tr-2xl flex-row items-center justify-start"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -2,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
          }}
        >
          {[
            { name: "camera", onPress: () => {}, color: "#f1be1a" },
            { name: "images", onPress: pickImage, color: "#46bc64" },
            { name: "document-text", onPress: () => {}, color: "#1c76ef" },
          ].map((item, index) => (
            <ButtonChangeBg
              key={index}
              onPress={item.onPress}
              styles={{
                width: 60,
                height: 44,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Ionicons name={item.name} size={32} color={item.color} />
            </ButtonChangeBg>
          ))}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreatePostScreen;
