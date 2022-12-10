import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import UserItem from "../components/UserItem";

const GroupMemberListScreen = ({ navigation, route }) => {
  const { users, name } = route.params;
  console.log(users[0]);
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="relative flex-row items-center justify-center py-2 border-b-[1px] border-b-gray-100">
        <Text className="font-bold text-lg text-gray-900">{name}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
          className="absolute left-4"
        >
          <Text className="text-base font-semibold">
            <Ionicons name="arrow-back" size={26} />
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="flex-1 px-4 pt-2">
        {users.map((user, index) => (
          <UserItem user={user} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroupMemberListScreen;
