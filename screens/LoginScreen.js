import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/features/userSlice";
import ButtonPrimary from "../components/ButtonPrimary";
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
      <KeyboardAvoidingView className="px-5 pb-2" behavior="position">
        <TouchableWithoutFeedback
          className="items-center py-8"
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Image className="h-36 w-36" source={require("../assets/Gnet.jpg")} />
          <Text className="text-blue-500 text-4xl font-bold">
            {translate.g_on_login_tieu_de_trang_dang_nhap}
          </Text>
          <Text className="text-Slate-900 text-base font-medium mt-2 ">
            {translate.g_on_login_noi_dung_trang_dang_nhap}
          </Text>
        </TouchableWithoutFeedback>
        <View className="pb-5">
          <Input
            onChangeText={(text) => handleInputChange(text, "email")}
            iconName="email-outline"
            placeholder="Email"
          />
          <Input
            onChangeText={(text) => handleInputChange(text, "password")}
            iconName="lock-outline"
            placeholder={translate.g_on_login_mat_khau}
            password={true}
          />
        </View>
        <View>
          <ButtonPrimary
            title={translate.g_on_login_nut_dang_nhap}
            onPress={() => {
              handleSubmit();
              Keyboard.dismiss();
            }}
            bgColor="#3b82f6"
            textColor="#fff"
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
          <Text className="text-blue-500 font-medium text-center text-base mt-4">
            {translate.g_on_login_quen_mat_khau}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;
