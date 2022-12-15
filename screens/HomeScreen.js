import { useCallback, useRef, useState } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";
import Animated from "react-native-reanimated";
import { Ionicons } from "react-native-vector-icons";

import { useEffect } from "react";
function HomeScreen() {
  //refresh control
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  //header animated
  const TouchOpacityAnimated =
    Animated.createAnimatedComponent(TouchableOpacity);
  const animatedHeaderValue = new Animated.Value(0);
  const diffClampY = Animated.diffClamp(animatedHeaderValue, 0, 60);

  const headerHeight = Animated.interpolateNode(diffClampY, {
    inputRange: [0, 60],
    outputRange: [60, 0],
    extrapolate: "clamp",
  });
  const headerTranslateY = Animated.interpolateNode(diffClampY, {
    inputRange: [0, 60],
    outputRange: [0, -60],
    extrapolate: "clamp",
  });
  const opacity = Animated.interpolateNode(diffClampY, {
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <SafeAreaView className="flex-1" style={AndroidSafeArea.AndroidSafeArea}>
      <Animated.View
        className="absolute w-full top-5 z-10 bg-white flex-row items-center justify-between px-4 h-[60]"
        style={{
          transform: [{ translateY: headerTranslateY }],
        }}
      >
        <Animated.View className="h-10 w-[120]" style={{ opacity }}>
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../assets/G-on.png")}
            className="w-[100%] h-[100%]"
          />
        </Animated.View>
        <TouchOpacityAnimated
          activeOpacity={0.6}
          onPress={() => {}}
          className="h-[38px] w-[38px] flex items-center justify-center bg-gray-300 rounded-full"
          style={{ opacity }}
        >
          <Text className="text-base font-semibold translate-x-[2px]">
            <Ionicons name="create" size={24} />
          </Text>
        </TouchOpacityAnimated>
      </Animated.View>
      <Animated.View style={{ height: headerHeight }} />
      <Animated.ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: animatedHeaderValue } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={5}
      >
        <View className="p-4  flex-row items-center justify-center  border-b-2 border-b-gray-200">
          <Image
            source={require("../assets/avatar.jpg")}
            className="w-10 h-10 rounded-full"
          />
          <TouchableOpacity className="flex-1 mx-3">
            <View className="h-8 flex justify-center">
              <Text className="text-base text-gray-900 ">
                Share with friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="mr-2">
            <Ionicons name="images" size={24} color="#46bc64" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Hi</Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
