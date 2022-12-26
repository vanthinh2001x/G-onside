import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import Input from "../components/Input";
import InputDate from "../components/InputDate";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";
import { Ionicons } from "react-native-vector-icons";

const EditProfileScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const handleConfirmDate = (date) => setDate(date);

  return (
    <SafeAreaView
      style={AndroidSafeArea.AndroidSafeArea}
      className="bg-white w-full h-full"
    >
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
              <Ionicons name="close" size={28} />
            </View>
          </Pressable>
        </View>
        <Text className="text-lg font-semibold">Edit Profile</Text>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#0369a1" : "#3b82f6",
              borderRadius: 6,
            },
          ]}
        >
          <View className="flex items-center justify-center w-16 h-9 rounded-md">
            <Text className="text-base font-medium text-white">Save</Text>
          </View>
        </Pressable>
      </View>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView
          pagingEnabled
          showsVerticalScrollIndicator={false}
          className="px-6"
        >
          <View className="mt-8">
            <View className="flex-row items-center gap-4">
              <View className="flex-1">
                <Text className="text-base font-medium text-gray-900 pl-1 mb-1">
                  First Name
                </Text>
                <Input placeholder="First Name" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-medium text-gray-900 pl-1 mb-1">
                  Last Name
                </Text>
                <Input placeholder="Last Name" />
              </View>
            </View>
            <View>
              <Text className="text-base font-medium text-gray-900 pl-1 mb-1">
                Email
              </Text>
              <Input iconName="email-outline" placeholder="Email" />
            </View>
            <View>
              <Text className="text-base font-medium text-gray-900 pl-1 mb-1">
                UserName
              </Text>
              <Input iconName="account-outline" placeholder="UserName" />
            </View>
            <View className="mb-4">
              <Text className="text-base font-medium text-gray-900 pl-1 mb-3">
                Day Of Birth
              </Text>
              <InputDate date={date} onConfirmDate={handleConfirmDate} />
            </View>
            <View>
              <Text className="text-base font-medium text-gray-900 pl-1 mb-1">
                Phone
              </Text>
              <Input
                iconName="phone-outline"
                placeholder="Phone"
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text className="text-base font-medium text-gray-900 pl-1 mb-1">
                Address
              </Text>
              <Input iconName="map-marker-outline" placeholder="Address" />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
