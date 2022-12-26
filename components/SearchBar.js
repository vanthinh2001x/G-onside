import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const SearchBar = ({ onSearchChange, inputPlaceHolder, searchRef }) => {
  return (
    <View className="flex-row w-full h-11 items-center bg-[#ededef] py-2 px-4 rounded-xl">
      <Icon name="search" size={20} color="#a3a3a3" />
      <TextInput
        ref={searchRef}
        onChangeText={onSearchChange}
        placeholder={inputPlaceHolder}
        placeholderTextColor="#a3a3a3"
        className="flex-1 ml-2 text-base leading-5 text-gray-900"
      />
    </View>
  );
};

export default SearchBar;
