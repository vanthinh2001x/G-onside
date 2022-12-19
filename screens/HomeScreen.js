import { useCallback, useState } from "react";
import {
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { Ionicons } from "react-native-vector-icons";
import PostItem from "../components/PostItem";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";
function HomeScreen({ navigation }) {
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
  const post = {
    avatar:
      "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
    name: "Thinh Pham Van",
    time: "26 April",
    audience: "only",
    text: "Lionel Messi là cầu thủ đầu tiên trong lịch sử World Cup trở thành Cầu thủ xuất sắc nhất trận ở Vòng 16 đội, Tứ kết, Bán kết và Chung kết... \n🤯🐐\n⚽️ 7 Bàn thắng\n🎯 3 Kiến tạo\n🏅 5 Danh hiệu cầu thủ xuất sắc nhất trận\n🏅 Quả bóng vàng World Cup\n🏆 Nhà Vô Địch World Cup",
    like: 8,
    cmt: 2,
  };
  return (
    <SafeAreaView className="flex-1" style={AndroidSafeArea.AndroidSafeArea}>
      {/* Header */}
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
        {/* Post */}
        <View className="p-4  flex-row items-center justify-center  border-b-2 border-b-gray-200">
          <Image
            source={require("../assets/avatar.jpg")}
            className="w-[42] h-[42] rounded-full"
          />
          <Pressable
            onPress={() => navigation.navigate("CreatePost")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#dedfe1" : "white",
                flex: 1,
                marginHorizontal: 12,
                padding: 4,
                borderRadius: 6,
              },
            ]}
          >
            <View className="h-8 flex justify-center">
              <Text className="text-base text-gray-900 ">
                Share with friend
              </Text>
            </View>
          </Pressable>
          <TouchableOpacity className="mr-2" activeOpacity={0.8}>
            <Ionicons name="images" size={24} color="#46bc64" />
          </TouchableOpacity>
        </View>
        {/* Body */}
        <View className="mt-4">
          <PostItem post={post} />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
