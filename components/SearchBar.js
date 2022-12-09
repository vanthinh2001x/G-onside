import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const SearchBar = ({ onSearchChange, inputPlaceHolder }) => {
  return (
    <View className="flex-row w-full h-11 items-center bg-[#f3f4f6] py-2 px-4 rounded-xl">
      <Icon name="search" size={20} color="#a1a1aa" />
      <TextInput
        onChangeText={onSearchChange}
        placeholder={inputPlaceHolder}
        placeholderTextColor="#a1a1aa"
        className="flex-1 ml-2 text-base leading-5 text-gray-900"
      />
    </View>
  );
};

export default SearchBar;
