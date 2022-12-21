import { View, Text, Animated } from "react-native";
import React, { useRef } from "react";
import { useMemo } from "react";

const CarouselIndicator = ({
  slidesCount,
  dotSize,
  dotSpace,
  slideWidth,
  scrollAnimated,
}) => {
  const slides = useRef(Array.from(Array(slidesCount).keys())).current;
  const { inputRange, translateOutputRange, widthOutputRange } = useMemo(
    () =>
      slides.reduce(
        (acc, _, index, arr) => {
          const width = slideWidth * index;
          const translateX = index * (dotSize + dotSpace);
          acc.inputRange.push(width);
          acc.translateOutputRange.push(translateX);
          acc.widthOutputRange.push(dotSize);
          if (index < arr.length - 1) {
            acc.inputRange.push(width + slideWidth / 2);
            acc.translateOutputRange.push(translateX);
            acc.widthOutputRange.push(dotSize * 2 + dotSpace);
          }
          return acc;
        },
        { inputRange: [], translateOutputRange: [], widthOutputRange: [] }
      ),
    [dotSize, dotSpace, slideWidth, slides]
  );

  return (
    <View className="flex-row bg-white px-[2px] py-1 rounded-xl">
      {slides.map((_, index) => {
        return (
          <View
            key={index}
            className="bg-[#070f18] opacity-30 rounded-full"
            style={{
              width: dotSize,
              height: dotSize,
              marginHorizontal: dotSpace / 2,
            }}
          ></View>
        );
      })}
      <Animated.View
        className="absolute bg-[#070f18] top-1 rounded-full"
        style={{
          height: dotSize,
          left: dotSpace / 2 + 2,
          transform: [
            {
              translateX: scrollAnimated.interpolate({
                inputRange,
                outputRange: translateOutputRange,
              }),
            },
          ],
          width: scrollAnimated.interpolate({
            inputRange,
            outputRange: widthOutputRange,
          }),
        }}
      />
    </View>
  );
};

export default CarouselIndicator;
