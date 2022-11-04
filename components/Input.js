import { useState } from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({ iconName, password, error, onFocus = () => {}, ...props }) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="mb-5">
      <View
        className={`h-14 flex-row bg-white px-4 items-center rounded-lg border ${
          error
            ? "border-red-600 "
            : isFocused
            ? "border-gray-600"
            : "border-gray-300"
        }`}
      >
        <View className="mr-2">
          <Icon name={iconName} size={20} color="#666" />
        </View>
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            setIsFocused(true);
            onFocus();
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          {...props}
          className="text-gray-600 flex-1 text-base leading-5"
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#666"
          />
        )}
      </View>
    </View>
  );
};
export default Input;
