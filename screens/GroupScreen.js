import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import GroupItem from "../components/GroupItem";
import SearchBar from "../components/SearchBar";
import UserItem from "../components/UserItem";
import GroupNavigation from "../navigation/GroupNavigation";

const Applications = ({ navigation }) => {
  const UsersTap = () => {
    const users = [
      {
        name: "Pham Van Thinh",
        nickName: "@thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://zoipet.com/wp-content/uploads/2021/12/meo-anh-long-ngan-mau-tabby.jpg",
      },
      {
        name: "Pham Van Thinh",
        nickName: "@thinhpv01",
        position: "Chu Tich HDQT (Kiem P.TGD Kinh Doanh)",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://cdn.eva.vn/upload/3-2022/images/2022-08-12/image10-1660292104-351-width700height808.jpg",
      },
      {
        name: "Pham Van Thinh",
        nickName: "thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://file.hstatic.net/1000238938/file/18_e463bb661f3b4d6fa2ace84764962413_grande.jpg",
      },
      {
        name: "Pham Van Thinh",
        nickName: "thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://file.hstatic.net/1000238938/file/5_decb6856c50a43aaa3b571cb98abe179_grande.jpg",
      },
      {
        name: "Pham Van Thinh",
        nickName: "thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/d/d8/Gwen_the_Border_Collie.jpg",
      },
      {
        name: "Pham Van Thinh",
        nickName: "thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://sieupet.com/sites/default/files/pictures/images/gia-cho-collie-bien-gioi-tuong-doi-cao.jpg",
      },
      {
        name: "Pham Van Thinh",
        nickName: "thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://petstoresaigon.com/wp-content/uploads/2020/09/Untitled-2-3.jpg.webp",
      },
      {
        name: "Pham Van Thinh",
        nickName: "thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://azpet.b-cdn.net/wp-content/uploads/2021/06/C12051-1-2.jpg",
      },
      {
        name: "Pham Van Thinh",
        nickName: "thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://azpet.b-cdn.net/wp-content/uploads/2021/07/Border-Collie-Den-Trang-C12230-1.jpg",
      },
      {
        name: "Pham Van Thinh",
        nickName: "thinhpv01",
        position: "SoftWare Developer",
        dateOfBirth: "26/04/2001",
        phone: "0944945384",
        email: "thinhpv@g-net.com.vn",
        avatar:
          "https://zoipet.com/wp-content/uploads/2021/12/meo-anh-long-ngan-mau-tabby.jpg",
      },
    ];
    return (
      <View className="bg-white px-4 flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="pt-2">
            {users.map((user, index) => (
              <UserItem user={user} key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };
  const GroupsTab = () => {
    const groups = [
      {
        name: "Sale HNI",
        users: [
          {
            name: "Pham Van Thinh",
            nickName: "@thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://zoipet.com/wp-content/uploads/2021/12/meo-anh-long-ngan-mau-tabby.jpg",
          },
          {
            name: "Pham Van Thinh",
            nickName: "@thinhpv01",
            position: "Chu Tich HDQT (Kiem P.TGD Kinh Doanh)",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://cdn.eva.vn/upload/3-2022/images/2022-08-12/image10-1660292104-351-width700height808.jpg",
          },
          {
            name: "Pham Van Thinh",
            nickName: "thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://file.hstatic.net/1000238938/file/18_e463bb661f3b4d6fa2ace84764962413_grande.jpg",
          },
          {
            name: "Pham Van Thinh",
            nickName: "thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://file.hstatic.net/1000238938/file/5_decb6856c50a43aaa3b571cb98abe179_grande.jpg",
          },
        ],
      },
      {
        name: "Marketing",
        users: [
          {
            name: "Pham Van Thinh",
            nickName: "@thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://zoipet.com/wp-content/uploads/2021/12/meo-anh-long-ngan-mau-tabby.jpg",
          },
          {
            name: "Pham Van Thinh",
            nickName: "@thinhpv01",
            position: "Chu Tich HDQT (Kiem P.TGD Kinh Doanh)",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://cdn.eva.vn/upload/3-2022/images/2022-08-12/image10-1660292104-351-width700height808.jpg",
          },
        ],
      },
      {
        name: "Technical",
        users: [
          {
            name: "Pham Van Thinh",
            nickName: "@thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://zoipet.com/wp-content/uploads/2021/12/meo-anh-long-ngan-mau-tabby.jpg",
          },
          {
            name: "Pham Van Thinh",
            nickName: "@thinhpv01",
            position: "Chu Tich HDQT (Kiem P.TGD Kinh Doanh)",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://cdn.eva.vn/upload/3-2022/images/2022-08-12/image10-1660292104-351-width700height808.jpg",
          },
          {
            name: "Pham Van Thinh",
            nickName: "thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://file.hstatic.net/1000238938/file/18_e463bb661f3b4d6fa2ace84764962413_grande.jpg",
          },
          {
            name: "Pham Van Thinh",
            nickName: "thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://file.hstatic.net/1000238938/file/18_e463bb661f3b4d6fa2ace84764962413_grande.jpg",
          },
        ],
      },
      {
        name: "Engineer",
        users: [
          {
            name: "Pham Van Thinh",
            nickName: "@thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://zoipet.com/wp-content/uploads/2021/12/meo-anh-long-ngan-mau-tabby.jpg",
          },
          {
            name: "Pham Van Thinh",
            nickName: "@thinhpv01",
            position: "Chu Tich HDQT (Kiem P.TGD Kinh Doanh)",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://cdn.eva.vn/upload/3-2022/images/2022-08-12/image10-1660292104-351-width700height808.jpg",
          },
          {
            name: "Pham Van Thinh",
            nickName: "thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://file.hstatic.net/1000238938/file/18_e463bb661f3b4d6fa2ace84764962413_grande.jpg",
          },
        ],
      },
      {
        name: "CEO",
        users: [
          {
            name: "Pham Van Thinh",
            nickName: "@thinhpv01",
            position: "SoftWare Developer",
            dateOfBirth: "26/04/2001",
            phone: "0944945384",
            email: "thinhpv@g-net.com.vn",
            avatar:
              "https://zoipet.com/wp-content/uploads/2021/12/meo-anh-long-ngan-mau-tabby.jpg",
          },
        ],
      },
    ];
    return (
      <View className="bg-white px-4 flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="pt-2">
            {groups.map((group, index) => (
              <GroupItem group={group} key={index} navigation={navigation} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <>
      <View className="bg-white pt-5">
        <View className="relative flex-row items-center justify-center p-4">
          <Text className="text-2xl font-bold text-gray-900">Users</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {}}
            className="absolute right-6"
          >
            <Text className="text-base font-semibold">
              <Ionicons name="search" size={26} />
            </Text>
          </TouchableOpacity>
        </View>
        <View className="px-4 mb-2">
          <SearchBar
            onSearchChange={() => {}}
            inputPlaceHolder="Search for user"
          />
        </View>
      </View>
      <GroupNavigation UsersTap={UsersTap} GroupsTab={GroupsTab} />
    </>
  );
};

export default Applications;
