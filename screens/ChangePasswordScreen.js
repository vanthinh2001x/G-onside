import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Button from "../components/ButtonPrimary";
import Input from "../components/Input";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";
const ChangePasswordScreen = ({ navigation }) => {
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
              <Ionicons name="chevron-back" size={28} />
            </View>
          </Pressable>
        </View>
        <Text className="text-lg font-semibold">Change Password</Text>
        <View className="w-16" />
      </View>
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        className="px-6"
      >
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={{ paddingBottom: 90 }}
        >
          <View className="mt-8">
            <View>
              <Text className="text-base font-medium text-gray-900 pl-1 mb-1">
                Current password
              </Text>
              <Input iconName="lock-outline" placeholder="Current password" />
            </View>
            <View>
              <Text className="text-base font-medium text-gray-900 pl-1 mb-1">
                New password
              </Text>
              <Input iconName="key-outline" placeholder="New password" />
            </View>
            <View>
              <Text className="text-base font-medium text-gray-900 pl-1 mb-1">
                Retype new password
              </Text>
              <Input iconName="key-outline" placeholder="Retype new password" />
            </View>

            <View className="mt-4">
              <Button title={"Update"} bgColor="#3b82f6" textColor="#fff" />
            </View>
            <View className="mt-4">
              <Button
                title={"Cancel"}
                onPress={() => navigation.goBack()}
                bgColor="#d1d5db"
                textColor="#111827"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
