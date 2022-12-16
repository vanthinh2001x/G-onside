import React from "react";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import SearchBar from "../components/SearchBar";

const AudienceFilter = ({ route, navigation }) => {
  const [search, setSearch] = useState("");
  console.log(search);
  const { type } = route.params;
  return (
    <View className="bg-white flex-1">
      {/* Header */}
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
        <Text className="text-lg font-medium">
          {type === "designated" ? "Designated " : "Except "}colleagues{" "}
        </Text>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#dedfe1" : "transparent",
              borderRadius: 8,
            },
          ]}
        >
          <View className="w-16 h-9 flex items-center justify-center ">
            <Text className="text-lg font-semibold text-blue-600">Done</Text>
          </View>
        </Pressable>
      </View>
      {/* Container */}
      <View>
        <View className="p-2">
          <SearchBar
            onSearchChange={(text) => setSearch(text)}
            inputPlaceHolder="Search"
          />
        </View>
      </View>
    </View>
  );
};

export default AudienceFilter;
