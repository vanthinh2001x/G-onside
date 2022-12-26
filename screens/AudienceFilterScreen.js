import React from "react";
import { useState } from "react";
import { Pressable, Text, View, ScrollView } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import AudienceFilterItem from "../components/AudienceFilterItem";
import SearchBar from "../components/SearchBar";

const USERS = [
  {
    id: 0,
    name: "Pham Van Thinh",
    avatar:
      "https://zoipet.com/wp-content/uploads/2021/12/meo-anh-long-ngan-mau-tabby.jpg",
    typeAudience: ["designated", "except"],
  },
  {
    id: 1,
    name: "Pham Van ",
    avatar:
      "https://cdn.eva.vn/upload/3-2022/images/2022-08-12/image10-1660292104-351-width700height808.jpg",
    typeAudience: ["designated"],
  },
  {
    id: 2,
    name: "Pham Thinh",
    avatar:
      "https://file.hstatic.net/1000238938/file/18_e463bb661f3b4d6fa2ace84764962413_grande.jpg",
    typeAudience: ["designated", "except"],
  },
  {
    id: 3,
    name: "Pham Van Thinh",
    avatar:
      "https://file.hstatic.net/1000238938/file/5_decb6856c50a43aaa3b571cb98abe179_grande.jpg",
    typeAudience: ["except"],
  },
  {
    id: 4,
    name: "Pham Thinh",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Gwen_the_Border_Collie.jpg",
    typeAudience: ["designated"],
  },
  {
    id: 5,
    name: "Pham Van",
    avatar:
      "https://sieupet.com/sites/default/files/pictures/images/gia-cho-collie-bien-gioi-tuong-doi-cao.jpg",
    typeAudience: ["designated", "except"],
  },
  {
    id: 6,
    name: "Van Thinh",
    avatar:
      "https://petstoresaigon.com/wp-content/uploads/2020/09/Untitled-2-3.jpg.webp",
    typeAudience: [],
  },
  {
    id: 7,
    name: "Pham Thinh",
    avatar: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/C12051-1-2.jpg",
    typeAudience: [],
  },
  {
    id: 8,
    name: "Pham Van Thinh",
    avatar:
      "https://azpet.b-cdn.net/wp-content/uploads/2021/07/Border-Collie-Den-Trang-C12230-1.jpg",
    typeAudience: ["designated", "except"],
  },
  {
    id: 9,
    name: "Pham Van",
    avatar:
      "https://zoipet.com/wp-content/uploads/2021/12/meo-anh-long-ngan-mau-tabby.jpg",
    typeAudience: ["designated"],
  },
];
const AudienceFilterScreen = ({ route, navigation }) => {
  const { type } = route.params;
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(USERS);
  const handleAudienceButtonClick = (item) => {
    const newUsers = [...users];
    const user = newUsers.find((x) => x.id === item.id);
    if (type === "designated") {
      if (user.typeAudience.includes("designated")) {
        user.typeAudience = user.typeAudience.filter((x) => x !== "designated");
      } else {
        user.typeAudience.push("designated");
      }
      setUsers(newUsers);
    } else {
      if (user.typeAudience.includes("except")) {
        user.typeAudience = user.typeAudience.filter((x) => x !== "except");
      } else {
        user.typeAudience.push("except");
      }
      setUsers(newUsers);
    }
  };
  return (
    <View className="bg-white flex-1">
      {/* Header */}
      <View className="flex-row items-center justify-between bg-gray-100 p-2 pt-7">
        <View className="w-16 h-9 flex items-start">
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#dedfe1" : "transparent",
                borderRadius: 100,
              },
            ]}
          >
            <View className="w-9 h-9 flex justify-center items-center rounded-full">
              <Ionicons name="close" size={28} />
            </View>
          </Pressable>
        </View>
        <Text className="text-lg font-semibold">
          {type === "designated" ? "Designated " : "Except "}Colleagues
        </Text>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#dedfe1" : "transparent",
              borderRadius: 8,
            },
          ]}
        >
          <View className="w-16 h-9 flex items-center justify-center ">
            <Text className="text-lg font-semibold text-blue-600">Done</Text>
          </View>
        </Pressable>
      </View>
      {/* Container */}
      <View className="flex-1">
        <View className="p-2">
          <SearchBar
            onSearchChange={(text) => setSearch(text)}
            inputPlaceHolder="Search"
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {users.map((item, index) => (
            <AudienceFilterItem
              key={index}
              type={type}
              item={item}
              onPress={handleAudienceButtonClick}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default AudienceFilterScreen;
