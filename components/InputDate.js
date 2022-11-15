import React from "react";
import DatePicker from "react-native-datepicker";

const InputDate = ({ date, onDateChange }) => {
  return (
    <DatePicker
      className="w-full"
      date={date}
      mode="date"
      placeholder="select date"
      format="DD/MM/YYYY"
      minDate="01-01-1900"
      maxDate="01-01-2023"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: "absolute",
          height: 24,
          width: 24,
          left: 8,
        },
        dateInput: {
          borderColor: "#9ca3af",
          alignItems: "flex-start",
          borderWidth: 1,
          height: 56,
          borderRadius: 8,
          padding: 16,
        },
        dateText: {
          fontSize: 16,
          lineHeight: 24,
          paddingLeft: 28,
          color: "#111827",
        },
      }}
      onDateChange={onDateChange}
    />
  );
};

export default InputDate;
