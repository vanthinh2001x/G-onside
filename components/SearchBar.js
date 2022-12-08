import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const SearchBar = ({ onSearchChange, inputPlaceHolder }) => {
  return (
    <View className="flex-row w-full h-10 items-center bg-[#e4e6eb] py-2 px-4 rounded-3xl">
      <Icon name="search" size={20} color="#9ca3af" />
      <TextInput
        onChangeText={onSearchChange}
        placeholder={inputPlaceHolder}
        className="flex-1 ml-2 text-base leading-5 text-gray-900"
      />
    </View>
  );
};

export default SearchBar;
