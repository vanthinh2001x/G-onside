import { useCallback, useState } from "react";
import {
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
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

  const posts = [
    {
      avatar:
        "https://i.pinimg.com/736x/7b/ac/02/7bac027ae0c163556293c246dfcb2c52.jpg",
      name: "Thinh Pham",
      time: "26 April",
      audience: "only",
      text: "Lionel Messi là cầu thủ đầu tiên trong lịch sử World Cup trở thành Cầu thủ xuất sắc nhất trận ở Vòng 16 đội, Tứ kết, Bán kết và Chung kết... \n🤯🐐\n⚽️ 7 Bàn thắng\n🎯 3 Kiến tạo\n🏅 5 Danh hiệu cầu thủ xuất sắc nhất trận\n🏅 Quả bóng vàng World Cup\n🏆 Nhà Vô Địch World Cup",
      like: 8,
      cmt: 2,
      images: [
        "https://i.pinimg.com/564x/76/87/26/768726858fcedde6e06d35d1c5405930.jpg",
        // "https://by.com.vn/RvEXZ",
        "https://i.pinimg.com/736x/58/5f/44/585f449058c0f2b4c061b3adc6088cac.jpg",
        // "https://i.pinimg.com/564x/a4/f1/b9/a4f1b9fc7d4b0afcbe52a3265dfcad6d.jpg",
        "https://i.pinimg.com/564x/6f/7f/00/6f7f002468054e0a1e25697774c29760.jpg",
        // "https://i.pinimg.com/564x/98/87/58/988758b1ea777e4d790f628be1fa0f7f.jpg",
        "https://tophinhanhdep.com/wp-content/uploads/2021/10/Facebook-Cover-Wallpapers.jpg",
        "https://i.pinimg.com/736x/41/1c/7e/411c7e92728271f63f340f51be6dbfb0.jpg",
      ],
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      name: "Thinh Pham Van",
      time: "26 April",
      audience: "public",
      text: "Lionel Messi là cầu thủ đầu tiên trong lịch sử World Cup trở thành Cầu thủ xuất sắc nhất trận ở Vòng 16 đội, Tứ kết, Bán kết và Chung kết... \n🤯🐐\n⚽️ 7 Bàn thắng\n🎯 3 Kiến tạo\n🏅 5 Danh hiệu cầu thủ xuất sắc nhất trận\n🏅 Quả bóng vàng World Cup\n🏆 Nhà Vô Địch World Cup",
      like: 8,
      cmt: 2,
      images: [
        // "https://i.pinimg.com/564x/76/87/26/768726858fcedde6e06d35d1c5405930.jpg",
        // "https://by.com.vn/RvEXZ",
        "https://i.pinimg.com/736x/58/5f/44/585f449058c0f2b4c061b3adc6088cac.jpg",
        "https://i.pinimg.com/564x/a4/f1/b9/a4f1b9fc7d4b0afcbe52a3265dfcad6d.jpg",
        "https://i.pinimg.com/564x/6f/7f/00/6f7f002468054e0a1e25697774c29760.jpg",
        "https://i.pinimg.com/564x/98/87/58/988758b1ea777e4d790f628be1fa0f7f.jpg",
        // "https://tophinhanhdep.com/wp-content/uploads/2021/10/Facebook-Cover-Wallpapers.jpg",
        // "https://i.pinimg.com/736x/41/1c/7e/411c7e92728271f63f340f51be6dbfb0.jpg",
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1" style={AndroidSafeArea.AndroidSafeArea}>
      {/* Header */}
      <View className="w-full z-10 bg-white flex-row items-center justify-between px-4 h-[60]">
        <View className="h-10 w-[120]">
          <Image
            resizeMode="contain"
            source={require("../assets/G-on.png")}
            className="w-[100%] h-[100%]"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {}}
          className="h-[38px] w-[38px] flex items-center justify-center bg-gray-300 rounded-full"
        >
          <Text className="text-base font-semibold translate-x-[2px]">
            <Ionicons name="create" size={24} />
          </Text>
        </TouchableOpacity>
      </View>
      <View />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Post */}
        <View className="p-4 flex-row items-center justify-center">
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
        <View>
          {posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
