import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const GroupItem = ({ group, navigation }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#dedfe1" : "white" },
      ]}
      onPress={() => navigation.navigate("GroupMember", group)}
    >
      <View className="flex-row items-center px-4 py-2">
        <View className="w-11 h-11 flex-row flex-wrap rounded-full overflow-hidden mr-3">
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
          <Text className="text-[16px] mb-[1px] font-semibold text-gray-900">
            {group.name}
          </Text>
          <Text className="text-[14px] text-gray-500">
            {group.users.length} Member
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default GroupItem;
