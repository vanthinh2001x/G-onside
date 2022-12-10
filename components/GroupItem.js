import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const GroupItem = ({ group, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="flex-row items-center gap-4 mb-4"
      onPress={() => navigation.navigate("GroupMember", group)}
    >
      <View className="w-11 h-11 bg-slate-100 flex-row flex-wrap rounded-full overflow-hidden">
        {group.users.slice(0, 4).map((user, index) => (
          <Image
            className={`${
              group.users.length >= 4
                ? "w-[22px] h-[22px]"
                : group.users.length == 3
                ? index == 2
                  ? "w-11 h-[22px]"
                  : "w-[22px] h-[22px]"
                : group.users.length == 2
                ? "w-[22px] h-11"
                : "w-11 h-11"
            }`}
            key={index}
            source={{
              uri: user.avatar,
            }}
          />
        ))}
      </View>
      <View>
        <Text className="text-[16px] mb-[2px] font-semibold text-gray-900">
          {group.name}
        </Text>
        <Text className="text-[14px] text-gray-500">
          {group.users.length} Member
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GroupItem;
