import { View, Text, ScrollView } from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Ionicons } from "react-native-vector-icons";
import Checkbox from "expo-checkbox";
import ButtonPrimary from "../components/ButtonPrimary";
import { useState } from "react";

const PostAudienceScreen = ({ navigation }) => {
  const [audienceType, setAudienceType] = useState("public");
  const onAudienceChange = (type) => {
    setAudienceType(type);
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
        <Text className="text-lg font-medium">Post audience</Text>
        <View className="w-16 h-9"></View>
      </View>
      {/* Container  */}
      <ScrollView>
        <Text className="text-lg font-semibold text-gray-900 p-4 mb-4">
          Who can see this post?
        </Text>
        <View>
          {/* Button item  */}
          <Pressable
            onPress={() => onAudienceChange("public")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#dedfe1" : "white",
              },
            ]}
          >
            <View className="flex-row items-center px-4 py-2  border-b-[0.5px] border-gray-400">
              <Ionicons name="earth" size={30} />
              <View className="flex-1 mx-2">
                <Text className="text-base font-medium text-gray-900">
                  Public
                </Text>
                <Text className="text-gray-500">Everyone can see</Text>
              </View>
              <Checkbox
                value={audienceType === "public"}
                className="mr-2"
                onValueChange={() => onAudienceChange("public")}
              />
            </View>
          </Pressable>
          {/* Button item  */}
          <Pressable
            onPress={() => {
              navigation.navigate("AudienceFilter", { type: "designated" });
              onAudienceChange("designated");
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#dedfe1" : "white",
              },
            ]}
          >
            <View className="flex-row items-center px-4 py-2  border-b-[0.5px] border-gray-400">
              <Ionicons name="people" size={30} />
              <View className="flex-1 mx-2">
                <Text className="text-base font-medium text-gray-900">
                  Designated colleagues
                </Text>
                <Text className="text-gray-500">
                  Show to Designated colleagues
                </Text>
              </View>
              <Checkbox
                value={audienceType === "designated"}
                className="mr-2"
                onValueChange={() => onAudienceChange("designated")}
              />
            </View>
          </Pressable>
          {/* Button item  */}
          <Pressable
            onPress={() => {
              navigation.navigate("AudienceFilter", { type: "except" });
              onAudienceChange("except");
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#dedfe1" : "white",
              },
            ]}
          >
            <View className="flex-row items-center px-4 py-2  border-b-[0.5px] border-gray-400">
              <Ionicons name="person-remove" size={30} />
              <View className="flex-1 mx-2">
                <Text className="text-base font-medium text-gray-900">
                  Colleagues except ...
                </Text>
                <Text className="text-gray-500">
                  Don't show to some colleagues
                </Text>
              </View>
              <Checkbox
                value={audienceType === "except"}
                className="mr-2"
                onValueChange={() => onAudienceChange("except")}
              />
            </View>
          </Pressable>
          {/* Button item  */}
          <Pressable
            onPress={() => onAudienceChange("only")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#dedfe1" : "white",
              },
            ]}
          >
            <View className="flex-row items-center px-4 py-2  border-b-[0.5px] border-gray-400">
              <Ionicons name="lock-closed" size={30} />
              <View className="flex-1 mx-2">
                <Text className="text-base font-medium text-gray-900">
                  Only me
                </Text>
                <Text className="text-gray-500">Only me can see</Text>
              </View>
              <Checkbox
                value={audienceType === "only"}
                className="mr-2"
                onValueChange={() => onAudienceChange("only")}
              />
            </View>
          </Pressable>
        </View>
        {/* Button */}
        <View className="px-3 mt-10">
          <ButtonPrimary
            title="Save"
            bgColor="#3b82f6"
            textColor="#fff"
            style={{ height: 48 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PostAudienceScreen;
