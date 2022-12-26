import { useCallback, useState } from "react";
import {
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
        "https://i.pinimg.com/564x/b0/33/c0/b033c0c87b1a802ad8efba89f3e39660.jpg",
        "https://i.pinimg.com/564x/d2/f7/3e/d2f73e855dfbc159d09d5526cbbd5677.jpg",
        "https://i.pinimg.com/736x/58/5f/44/585f449058c0f2b4c061b3adc6088cac.jpg",
        "https://i.pinimg.com/564x/98/87/58/988758b1ea777e4d790f628be1fa0f7f.jpg",
      ],
      liked: true,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      name: "Thinh Pham Van",
      time: "26 April",
      audience: "public",
      text: "🍓 HOA ĂN ĐƯỢC HOT NHẤT SÀI GÒN 🔥\n🌿 Mùa hè nóng nực, “dỗ ngọt” người thương bằng những mẫu hoa ăn được độc đáo đốn tim nàng mấy chàng nha! Ngoài Hoa Dâu Tây, Hoa Cherry, Hoa KitKat, Hoa Trà Sữa, Happy Flower còn có Hoa Baby đủ sắc màu hoặc các bó Hồng Ecuador siêu to khổng lồ lung linh.\n✨ Đặc biệt đi dự event hay khai trương, đừng quên chọn Hoa Chúc Mừng rực rỡ và sang trọng, hoặc Lan Hồ Điệp cao cấp từ nhà Happy Flower nhé!\n❤️ Đặt hoa giao tận nơi, khách hàng ghé ngay www.happyflower.vn hoặc để được tư vấn thêm, inbox hoặc gọi ngay 028.7307.7989 bạn nhé!\n\n🍓 Store 1: Nguyễn Văn Anh, P. Nguyễn Thái Bình, Q1\n🍓 Store 2: Lê Thị Hồng Gấm, P. Nguyễn Thái Bình, Q1\n🍓 Store 3: 8A Trần Nhật Duật, P. Tân Định, Q1 (đối diện số 45 Trần Nhật Duật)\n🍒 028.7307.7989",
      like: 8,
      cmt: 6,
      images: [
        "https://i.pinimg.com/564x/8c/64/66/8c6466a0876790b08eefbba8f86435ad.jpg",
        "https://i.pinimg.com/564x/ba/b8/2b/bab82b2041b5df5c570a5b5213afb546.jpg",
        "https://i.pinimg.com/564x/bd/a0/3f/bda03f3e6f7f8de3b4fb97312340bb4c.jpg",
        "https://i.pinimg.com/564x/b7/35/10/b735104b6d20266ebb419447c1ad87d1.jpg",
        "https://i.pinimg.com/564x/e8/ca/cf/e8cacf123617d8f7e8bb5a1ebd49c14c.jpg",
        "https://i.pinimg.com/564x/e1/25/7c/e1257c1c61bb3c6809eb320786870ce2.jpg",
        "https://i.pinimg.com/564x/3a/f8/7a/3af87a210497d8999897424d4e48a289.jpg",
        "https://i.pinimg.com/564x/3e/c9/ea/3ec9ead6e6e6740707e1cd7105e825d1.jpg",
        "https://i.pinimg.com/564x/10/8f/80/108f808e9e8463a604a293273e688b2f.jpg",
      ],
      liked: false,
    },
    {
      avatar:
        "https://i.pinimg.com/564x/75/62/f0/7562f0dc6251c484f7046811f3532905.jpg",
      name: "Thinh Pham Van",
      time: "26 April",
      audience: "public",
      text: "💦TRỌN BỘ BÍ KÍP THƯỞNG THỨC AVATAR 2 ĐỊNH DẠNG 3D TẠI CGV\n\n👓 Cận thì đeo kính 3D như thế nào?\n👌 Hãy đeo chồng kính 3D lên kính của bạn nha.\n👌 Đeo kính áp tròng (lens) cũng là một lựa chọn đỉnh của chóp.\n📍 CGV có bao nhiêu rạp có định dạng 3D?\n😘 TẤT CẢ các rạp của CGV đều có định dạng 3D. Lựa rạp xem phim Avatar 2 định dạng 3D thoải mái đê bạn ơi.\n\n❗ Mà bạn ơi, chú ý nha:💦 Một số phân cảnh trong Avatar 2 có độ sáng và hiệu ứng cao - có thể gây chóng mặt, mấy đoạn này nhỡ mà bạn hông chịu được thì nhớ gỡ kính 3D ra nghỉ xả hơi xíu nha.",
      like: 8,
      cmt: 6,
      images: [
        "https://thethaovanhoa.mediacdn.vn/372676912336973824/2022/12/22/avatar-1671679354162561360160.jpg",
        "https://lifehub.vn/media/2022/12/ly-do-thuc-su-khien-avatar-2-mat-13-nam-de-ra-rap.jpg",
        "https://cdn.galaxycine.vn/media/2022/12/15/1200x1800_1671120744078.jpg",
        "https://vtv1.mediacdn.vn/thumb_w/650/2022/9/23/1652155217doan-gioi-thieu-teaser-avatar-2-tieu-de-ngay-phat-1663908206183474513814-crop-16639082132171187084960.png",
        "https://cly.1cdn.vn/2019/01/19/congly-vn_lich-ra-mat-sieu-pham-avatar-2-va-3-duoc-xac-dinh-hinh-anh1515053156.jpg",
        "https://znews-photo.zingcdn.me/w860/Uploaded/qfssu/2022_12_21/2011_0010_v04201075_altered_v2_2514.jpg",
      ],
      liked: true,
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
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#cdced3" : "#e4e5ea",
              transform: [{ scale: pressed ? 0.95 : 1 }],
              borderRadius: 19,
            },
          ]}
          onPress={() => {}}
        >
          <View className="h-[38px] w-[38px] flex items-center justify-center">
            <Ionicons name="create" size={24} />
          </View>
        </Pressable>
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
          <TouchableOpacity
            className="mr-2"
            activeOpacity={0.8}
            onPress={() => navigation.navigate("CreatePost")}
          >
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
