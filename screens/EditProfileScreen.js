import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../components/Input";
import InputDate from "../components/InputDate";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";

const EditProfileScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const handleConfirmDate = (date) => setDate(date);

  return (
    <SafeAreaView
      style={AndroidSafeArea.AndroidSafeArea}
      className="bg-white w-full h-full"
    >
      <View className="flex-row items-center justify-between p-4 border-b-[1px] border-b-gray-100">
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <Text className="text-base font-semibold text-gray-900">Cancel</Text>
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">
          Setting Profile
        </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text className="text-base font-semibold text-gray-900">Save</Text>
        </TouchableOpacity>
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
