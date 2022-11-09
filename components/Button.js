import { Text, TouchableOpacity } from "react-native";

const Button = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="h-14 bg-blue-500 w-full my-4 justify-center items-center rounded-lg"
    >
      <Text className="text-white font-bold  text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
