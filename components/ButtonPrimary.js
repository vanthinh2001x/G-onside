import { Text, TouchableOpacity } from "react-native";

const ButtonPrimary = ({
  title,
  onPress = () => {},
  bgColor,
  textColor,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className="h-14 w-full justify-center items-center rounded-lg"
      style={{ backgroundColor: bgColor, ...style }}
    >
      <Text className="font-semibold text-lg" style={{ color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
