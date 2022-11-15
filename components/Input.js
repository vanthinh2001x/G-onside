import { useState } from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({
  iconName = "",
  password = false,
  error = false,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="mb-4">
      <View
        className={`h-14 flex-row bg-white px-4 items-center rounded-lg border ${
          error
            ? "border-red-600 "
            : isFocused
            ? "border-gray-900"
            : "border-gray-400"
        }`}
      >
        <View className="mr-2">
          <Icon name={iconName} size={20} color="#4b5563" />
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
          className="flex-1 text-base leading-5 placeholder:text-gray-400 text-gray-900"
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#4b5563"
          />
        )}
      </View>
    </View>
  );
};
export default Input;
