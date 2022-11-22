import moment from "moment";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputDate = ({ date, onConfirmDate }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <View className="mb-4">
      <Pressable
        onPress={() => setDatePickerVisibility(true)}
        className="h-14 flex-row bg-white px-4 items-center rounded-lg border border-gray-400"
      >
        <View className="mr-2">
          <Icon name="calendar" size={20} color="#4b5563" />
        </View>

        <Text className="flex-1 text-base leading-5 placeholder:text-gray-400 text-gray-900">
          {moment(date).format("DD/MM/YYYY")}
        </Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(date) => {
          onConfirmDate(date);
          setDatePickerVisibility(false);
        }}
        onCancel={() => {
          setDatePickerVisibility(false);
        }}
      />
    </View>
  );
};
export default InputDate;
