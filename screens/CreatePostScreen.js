import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import React, { createRef, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import ButtonChangeBg from "../components/ButtonChangeBg";
import VideoPost from "../components/VideoPost";

const { width, height } = Dimensions.get("window");
const CreatePostScreen = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const [mediaFile, setMediaFile] = useState([]);
  const [documentFile, setDocumentFile] = useState([]);
  //images Picker
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
        (item) => (item = { uri: item.uri, type: item.type })
      );
      setMediaFile([...mediaFile, ...result.selected]);
    }
  };
  const handleRemoveImage = (index) => {
    const newMediaFile = mediaFile.filter((_, idx) => idx !== index);
    setMediaFile(newMediaFile);
  };
  //videos
  const videoRef = useRef([]);
  useEffect(() => {
    videoRef.current = Array(mediaFile.length)
      .fill()
      .map((_, i) => videoRef.current[i] || createRef());
  }, [mediaFile]);
  // Documents Picker
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    setDocumentFile([...documentFile, result]);
  };
  const handleRemoveDocument = (index) => {
    const newDocumentFile = documentFile.filter((_, idx) => idx !== index);
    setDocumentFile(newDocumentFile);
  };
  //Image from camera
  useEffect(() => {
    if (route.params?.image) {
      setMediaFile([...mediaFile, route.params.image]);
    }
  }, [route.params?.image]);

  return (
    <View className="bg-white flex-1">
      {/* header */}
      <View className="flex-row items-center justify-between bg-gray-100 p-2 pt-7">
        <View className="w-16 h-9 flex items-start">
          <ButtonChangeBg radius={100} onPress={() => navigation.goBack()}>
            <View className="w-10 h-10 flex justify-center items-center rounded-full">
              <Ionicons name="close" size={28} />
            </View>
          </ButtonChangeBg>
        </View>
        <Text className="text-lg font-semibold">Create Post</Text>
        <ButtonChangeBg
          bg={"#3b82f6"}
          bgPress={"#0369a1"}
          radius={6}
          onPress={() => console.log("press")}
          disabled={
            !text && documentFile.length === 0 && mediaFile.length === 0
          }
        >
          <View
            className={`flex items-center justify-center w-16 h-9 rounded-md ${
              !text &&
              documentFile.length === 0 &&
              mediaFile.length === 0 &&
              "bg-[#e4e5ea]"
            }`}
          >
            <Text
              className={`text-lg font-medium text-white ${
                !text &&
                documentFile.length === 0 &&
                mediaFile.length === 0 &&
                "text-[#c1c2c8]"
              }`}
            >
              Post
            </Text>
          </View>
        </ButtonChangeBg>
      </View>
      {/* container  */}
      <ScrollView className="mb-11" showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View className="flex-row p-3">
          <Image
            source={require("../assets/avatar.jpg")}
            className="w-10 h-10 rounded-full"
          />
          <View className="ml-2 flex items-start">
            <Text className="text-[16px] font-semibold">Pham Van Thinh</Text>
            <ButtonChangeBg
              scale={0.98}
              radius={4}
              styles={{ marginTop: 4 }}
              onPress={() => navigation.navigate("PostAudience")}
            >
              <View className="flex-row items-center px-1 py-[2px] border-[0.5px] border-gray-400 rounded">
                <Ionicons name="earth" size={14} color="#656565" />
                <Text className="mx-1 text-[#656565]">Public</Text>
                <Ionicons name="caret-down" size={12} color="#656565" />
              </View>
            </ButtonChangeBg>
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
        {documentFile.length > 0 && (
          <View className="px-3 mb-3">
            {documentFile.map((item, index) => (
              <View className="flex-row items-center mb-2" key={index}>
                <ButtonChangeBg
                  onPress={() => handleRemoveDocument(index)}
                  bg={"#ef4444"}
                  bgPress={"#b91c1c"}
                  radius={4}
                  styles={{ marginRight: 4 }}
                >
                  <Ionicons name="close-outline" size={20} color="#fff" />
                </ButtonChangeBg>
                <Text className="underline text-[15px] text-blue-600">
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        )}
        {mediaFile.map((item, index) => (
          <View key={index} className="mb-4 bg-black">
            <TouchableOpacity
              onPress={() => handleRemoveImage(index)}
              activeOpacity={0.6}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#242424] z-10 rounded"
            >
              <Text>
                <Ionicons name="close" size={24} color="#fff" />
              </Text>
            </TouchableOpacity>
            {item.type === "image" ? (
              <Image
                source={{ uri: item.uri }}
                style={{
                  width,
                  height: (3 / 4) * height,
                }}
                // resizeMode="contain"
              />
            ) : (
              <VideoPost
                uri={item.uri}
                width={width}
                height={(3 / 4) * height}
              />
            )}
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
            {
              name: "camera",
              onPress: () => navigation.navigate("Camera"),
              color: "#f1be1a",
            },
            { name: "images", onPress: pickImage, color: "#46bc64" },
            { name: "document-text", onPress: pickDocument, color: "#1c76ef" },
          ].map((item, index) => (
            <ButtonChangeBg
              key={index}
              onPress={item.onPress}
              styles={{
                borderRadius: 8,
              }}
            >
              <View className="w-16 h-11 justify-center items-center">
                <Ionicons name={item.name} size={32} color={item.color} />
              </View>
            </ButtonChangeBg>
          ))}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreatePostScreen;
