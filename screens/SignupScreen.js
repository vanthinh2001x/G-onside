import { Image, SafeAreaView, Text, View } from "react-native";
import Button from "../components/ButtonPrimary";
import Input from "../components/Input";

function SignupScreen({ navigation }) {
  return (
    <SafeAreaView className="pt-10 px-3 bg-white h-full">
      <View className="pt-6 px-5">
        <View className="items-center">
          <Image
            className="h-20 w-20 mb-4"
            source={require("../assets/logo.png")}
          />
          <Text className="text-gray-500 text-5xl font-bold">Register</Text>
          <Text className="text-gray-600 text-lg font-medium my-1">
            Enter Your Detail To Register
          </Text>
        </View>
        <View className="my-5">
          <Input
            label="Full Name"
            iconName="account-outline"
            placeholder="Full Name"
            error={false}
          />
          <Input
            label="Email"
            iconName="email-outline"
            placeholder="Email Address"
            error={false}
          />
          <Input
            label="Password"
            iconName="lock-outline"
            placeholder="Password"
            error={false}
            password={true}
          />
          <Input
            label="Confirm Password"
            iconName="lock-outline"
            placeholder="Confirm Password"
            error={false}
            password={true}
          />
        </View>
        <Button title="Sign In" />
        <Text className="text-gray-500 font-medium text-center text-base">
          Already have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            className="text-blue-500"
          >
            Login here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SignupScreen;
