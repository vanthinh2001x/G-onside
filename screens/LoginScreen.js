import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/features/userSlice";
import Button from "../components/Button";
import Input from "../components/Input";
function LoginScreen({ navigation }) {
  const translate = useSelector((state) => state.translate.translateData);
  console.log("translate login: ", translate);
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
      <View className="px-5 pt-6">
        <View className="items-center">
          <Image className="h-36 w-36" source={require("../assets/Gnet.jpg")} />
          <Text className="text-blue-500 text-4xl font-bold">
            {translate.g_on_login_tieu_de_trang_dang_nhap}
          </Text>
          <Text className="text-gray-600 text-base font-medium mt-2 mb-10">
            {translate.g_on_login_noi_dung_trang_dang_nhap}
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleInputChange(text, "email")}
            label="Email"
            iconName="email-outline"
            placeholder="Email"
            error={false}
          />
          <Input
            onChangeText={(text) => handleInputChange(text, "password")}
            label="Password"
            iconName="lock-outline"
            placeholder={translate.g_on_login_mat_khau}
            error={false}
            password={true}
          />
        </View>
        <Button
          title={translate.g_on_login_nut_dang_nhap}
          onPress={handleSubmit}
        />
        {/* <Text className="text-gray-500 font-medium text-center text-base">
          Don't have account?{" "}
          <Text
            onPress={() => navigation.navigate("Signup")}
            className="text-blue-500"
          >
            Register here
          </Text>
        </Text> */}
        <Text className="text-blue-500 font-medium text-center text-base">
          {translate.g_on_login_quen_mat_khau}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
