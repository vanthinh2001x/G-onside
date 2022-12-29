import React from "react";
import { Pressable } from "react-native";

const ButtonChangeBg = ({ children, onPress, bg, bgPress, scale, styles }) => {
  return (
    <Pressable
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
          ...styles,
        },
      ]}
    >
      {children}
    </Pressable>
  );
};

export default ButtonChangeBg;
