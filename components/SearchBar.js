import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const SearchBar = ({ onSearchChange, inputPlaceHolder }) => {
  return (
    <View className="flex-row w-full h-12 items-center bg-[#f7f7f7] py-2 px-4 rounded-xl">
      <Icon name="search" size={20} color="#bebec0" />
      <TextInput
        onChangeText={onSearchChange}
        placeholder={inputPlaceHolder}
        placeholderTextColor="#bebec0"
        className="flex-1 ml-2 text-base leading-5 text-gray-900"
      />
    </View>
  );
};

export default SearchBar;
