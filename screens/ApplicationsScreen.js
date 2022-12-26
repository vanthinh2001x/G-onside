import React, { useCallback, useRef, useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import G_INS from "../assets/g-ins.svg";
import G_TLC from "../assets/g-tlc.svg";
import SearchBar from "../components/SearchBar";

const ApplicationsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const searchRef = useRef();

  return (
    <View className="flex-1 bg-white">
      <View className="bg-white pt-5 px-4 pb-3">
        <View className="flex-row items-center justify-between py-4">
          <View className="w-9" />
          <Text className="text-[22px] font-bold text-gray-900">
            Applications
          </Text>
          <Pressable
            onPress={() => searchRef.current.focus()}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#cdced3" : "#e4e5ea",
                transform: [{ scale: pressed ? 0.95 : 1 }],
                borderRadius: 18,
              },
            ]}
          >
            <View className="w-9 h-9 rounded-full flex items-center justify-center">
              <Ionicons name="search" size={24} />
            </View>
          </Pressable>
        </View>
        <View>
          <SearchBar
            searchRef={searchRef}
            onSearchChange={() => {}}
            inputPlaceHolder="Search for app"
          />
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        className="pt-4 px-4"
      >
        <View className="pb-6 mb-2 border-b-[1px] border-b-gray-300">
          <Text className="text-lg font-semibold text-gray-900 mb-5">
            Insider Information Management
          </Text>
          <View className="flex-row">
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#dedfe1" : "white",
                  width: 140,
                  padding: 12,
                  borderRadius: 8,
                },
              ]}
            >
              <View className="items-center">
                <View className="border-2 border-blue-400 h-20 w-20 rounded-full flex items-center justify-center">
                  <G_INS height={78} width={78} />
                </View>
                <Text className="text-base font-medium mt-2 text-gray-900">
                  G-Inside
                </Text>
                <Text className="text-sm font-normal text-blue-500">
                  inside.g-on.vn
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View className="pb-6 mb-2 border-b-[1px] border-b-gray-300">
          <Text className="text-lg font-semibold text-gray-900 mb-5">
            Telecom Network Management
          </Text>
          <View className="flex-row">
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#dedfe1" : "white",
                  width: 140,
                  padding: 12,
                  borderRadius: 8,
                },
              ]}
            >
              <View className="items-center">
                <View className="border-4 border-[#0760ff] h-20 w-20 rounded-full flex items-center justify-center">
                  <G_TLC height={58} width={58} />
                </View>
                <Text className="text-base font-medium mt-2 text-gray-900">
                  G-Telecom
                </Text>
                <Text className="text-sm font-normal text-blue-500">
                  telecom.g-on.vn
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ApplicationsScreen;
