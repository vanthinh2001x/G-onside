import React, { useCallback, useState } from "react";
import {
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import UserItem from "../components/UserItem";

const GroupMemberListScreen = ({ navigation, route }) => {
  const { users, name } = route.params;
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-row items-center justify-between p-2 border-b-[1px] border-b-gray-100">
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
              <Ionicons name="arrow-back" size={28} />
            </View>
          </Pressable>
        </View>
        <Text className="text-lg font-semibold">{name}</Text>
        <View className="w-16" />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        className="flex-1 pt-2"
      >
        {users.map((user, index) => (
          <UserItem user={user} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroupMemberListScreen;
