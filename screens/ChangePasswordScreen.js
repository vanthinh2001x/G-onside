import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Button from "../components/Button";
import Input from "../components/Input";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";
const ChangePasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={AndroidSafeArea.AndroidSafeArea}
      className="bg-white w-full h-full"
    >
      <View className="relative flex-row items-center justify-center p-4 border-b-[1px] border-b-gray-100">
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
          className="absolute left-4"
        >
          <Text className="text-base font-semibold">
            <Ionicons name="chevron-back" size={28} />
          </Text>
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">
          Change password
        </Text>
      </View>
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        className="px-6"
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
