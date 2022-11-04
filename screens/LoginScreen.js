import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import Button from "../components/Button";
import Input from "../components/Input";
function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const handleInputChange = (newData, key) => {
    setInputData((prev) => ({ ...prev, [key]: newData }));
  };
  const handleSubmit = async () => {
    try {
      const action = login(inputData);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      if (user) {
        navigation.navigate("Home");
      }
      console.log("user", user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView className="pt-10 px-3 bg-white h-full">
      <View className="pt-12 px-5">
        <View className="items-center">
          <Image
            className="h-20 w-20 mb-5"
            source={require("../assets/logo.png")}
          />
          <Text className="text-gray-500 text-5xl font-bold">
            <Text className="text-blue-500">Log</Text> In
          </Text>
          <Text className="text-gray-600 text-lg font-medium my-3">
            Enter Your Account To Login
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleInputChange(text, "email")}
            label="Email"
            iconName="email-outline"
            placeholder="Email Address"
            error={false}
          />
          <Input
            onChangeText={(text) => handleInputChange(text, "password")}
            label="Password"
            iconName="lock-outline"
            placeholder="Password"
            error={false}
            password={true}
          />
        </View>
        <Button title="Login" onPress={handleSubmit} />
        <Text className="text-gray-500 font-medium text-center text-base">
          Don't have account?{" "}
          <Text
            onPress={() => navigation.navigate("Signup")}
            className="text-blue-500"
          >
            Register here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
