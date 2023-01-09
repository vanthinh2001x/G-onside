import React from "react";
import { Pressable } from "react-native";

const ButtonChangeBg = ({
  children,
  onPress,
  disabled,
  bg,
  bgPress,
  scale,
  radius,
  styles,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress ? onPress : () => {}}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? bgPress
              ? bgPress
              : "#dedfe1"
            : bg
            ? bg
            : "transparent",
          transform: [{ scale: pressed ? (scale ? scale : 1) : 1 }],
          borderRadius: radius,
          ...styles,
        },
      ]}
    >
      {children}
    </Pressable>
  );
};

export default ButtonChangeBg;
