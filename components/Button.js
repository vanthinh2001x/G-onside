import { Text, TouchableOpacity } from "react-native";

const Button = ({ title, onPress = () => {}, bgColor, textColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="h-14 w-full justify-center items-center rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      <Text className="font-semibold text-lg" style={{ color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
