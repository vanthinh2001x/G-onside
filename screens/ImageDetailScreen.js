import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import CarouselIndicator from "../components/CarouselIndicator";
const { width, height } = Dimensions.get("window");

const ImageDetailScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    console.log(viewableItems);
    setIndex(viewableItems[0].index);
  }).current;
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  const Images = [
    "https://i.pinimg.com/564x/6f/7f/00/6f7f002468054e0a1e25697774c29760.jpg",
    "https://i.pinimg.com/736x/58/5f/44/585f449058c0f2b4c061b3adc6088cac.jpg",
    "https://i.pinimg.com/564x/76/87/26/768726858fcedde6e06d35d1c5405930.jpg",
    "https://i.pinimg.com/564x/98/87/58/988758b1ea777e4d790f628be1fa0f7f.jpg",
    "https://i.pinimg.com/564x/a4/f1/b9/a4f1b9fc7d4b0afcbe52a3265dfcad6d.jpg",
  ];
  const scrollAnimated = useRef(new Animated.Value(0)).current;
  return (
    <View className="flex-1 relative bg-[#242527]">
      <LinearGradient
        colors={["rgba(0,0,0, 0.9)", "rgba(0,0,0,0)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View className="flex-row items-center justify-between h-20 px-3">
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#3b82f6" : "#fff",
                borderRadius: 14,
              },
            ]}
            onPress={() => navigation.goBack()}
          >
            <View className="w-7 h-7 rounded-full flex items-center justify-center">
              <Ionicons name="close" size={24} />
            </View>
          </Pressable>
          <Text className="text-white text-lg font-medium">
            {index + 1}/{Images.length}
          </Text>
          <Pressable onPress={() => console.log("press ...")}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
          </Pressable>
        </View>
      </LinearGradient>
      <Animated.FlatList
        data={Images}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{ height: height - 80 * 2, width }}
              className="flex items-center justify-center"
            >
              <Image
                source={{ uri: item }}
                style={{ height: height - 80 * 2, width, resizeMode: "cover" }}
              />
            </View>
          );
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollAnimated } } }],
          { useNativeDriver: false }
        )}
      />
      {Images.length > 1 && (
        <LinearGradient
          colors={["rgba(0,0,0, 0.9)", "rgba(0,0,0,0)"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          className="absolute bottom-0 h-20 flex items-center justify-center"
          style={{ width }}
        >
          <CarouselIndicator
            slidesCount={Images.length}
            slideWidth={width}
            dotSize={12}
            dotSpace={8}
            scrollAnimated={scrollAnimated}
          />
        </LinearGradient>
      )}
    </View>
  );
};

export default ImageDetailScreen;
