import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import GroupNavigation from "../navigation/GroupNavigation";
import SearchBar from "../components/SearchBar";

const Applications = () => {
  const UsersTap = () => {
    const users = [
      {
        name: "Pham Van Thinh",
        nickName: "thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar: "../assets/avatar.jpg",
      },
    ];
    return (
      <View className="mt-2 bg-white p-4">
        <View>
          <SearchBar onSearchChange={() => {}} inputPlaceHolder="Search User" />
        </View>
        <ScrollView></ScrollView>
      </View>
    );
  };
  const GroupsTab = () => {
    return <Text>GroupsTab</Text>;
  };

  return (
    <>
      <View
        style={{ paddingTop: 20 }}
        className="bg-white h-[70px] border-b-[1px] border-b-gray-200 flex justify-center items-center"
      >
        <Text className="text-xl font-semibold text-gray-900">Users</Text>
      </View>
      <GroupNavigation UsersTap={UsersTap} GroupsTab={GroupsTab} />
    </>
  );
};

export default Applications;
