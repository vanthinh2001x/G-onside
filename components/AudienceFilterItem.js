import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";

const AudienceFilterItem = ({ type, item, onPress }) => {
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#dedfe1" : "transparent",
        },
      ]}
    >
      <View className="flex-row items-center p-3 border-b-[0.5px] border-gray-200">
        <Image
          source={{ uri: item.avatar }}
          className="w-11 h-11 rounded-full"
        />
        <Text className="flex-1 mx-2 text-base font-semibold">{item.name}</Text>
        <Checkbox
          value={item.typeAudience?.includes(type)}
          className="w-[18px] h-[18px] border-[1.2px]"
          color={type === "except" ? "red" : ""}
          onValueChange={() => onPress(item)}
        />
      </View>
    </Pressable>
  );
};

export default AudienceFilterItem;
