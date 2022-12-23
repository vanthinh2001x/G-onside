import { Portal } from "@gorhom/portal";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { AntDesign, Ionicons, FontAwesome5 } from "react-native-vector-icons";

const { width, height } = Dimensions.get("window");
const PostItem = ({ post, isCmtScreen }) => {
  const navigation = useNavigation();
  const { avatar, name, time, audience, text, images, like, cmt, liked } = post;
  //like
  const [isLiked, setIsLiked] = useState(liked);
  //image
  const imgsLen = images?.length;
  const [imgSize, setImgSize] = useState({ width: 0.1, height: 0 });
  useEffect(() => {
    if (images.length > 0) {
      Image.getSize(images[0], (width, height) => {
        setImgSize({ width, height });
      });
    }
  }, [images]);
  const isPortrait = imgSize.height > imgSize.width;
  const targetHeight = Math.min(
    (imgSize.height * width) / imgSize.width,
    (height * 2) / 3
  );
  //icon
  const iconAudience =
    audience === "public"
      ? "earth"
      : audience === "designated" || audience === "except"
      ? "people"
      : "lock-closed";
  //Modal
  const modalizeRef = useRef(null);

  return (
    <View className={`${!isCmtScreen && "border-t-8 border-t-gray-200"} `}>
      <View className="p-4 flex-row justify-between">
        <View className="flex-row">
          <Image source={{ uri: avatar }} className="h-11 w-11 rounded-full" />
          <View className="ml-2">
            <Text className="text-base font-semibold text-gray-900">
              {name}
            </Text>
            <View className="flex-row items-center">
              <Text className="text-[14px] text-gray-500 mr-1">{time}</Text>
              <View className="w-[3px] h-[3px] bg-[#4b5563] rounded-full mr-1" />
              <Ionicons name={iconAudience} size={12} color="#4b5563" />
            </View>
          </View>
        </View>
        <Pressable onPress={() => modalizeRef.current?.open()}>
          <Ionicons name="ellipsis-horizontal" size={22} color="#374151" />
        </Pressable>
      </View>
      <View className="mx-4 mb-4">
        <Text className="text-[15px] text-gray-800">{text}</Text>
      </View>
      {images.length > 0 && (
        <View className="flex-1 flex-row flex-wrap mb-4">
          {imgsLen > 5 && (
            <Pressable
              onPress={() =>
                navigation.navigate("ImageDetail", {
                  images,
                  currentIndex: 4,
                })
              }
              style={{
                width: width / 3 - 4,
                height: (height * 1) / 5,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
              className="absolute z-10 bottom-[2px] right-[2px] flex items-center justify-center"
            >
              <Text className="text-[20px] font-semibold text-white">
                +{imgsLen - 5}
              </Text>
            </Pressable>
          )}
          {images.slice(0, 5).map((img, index) => (
            <Pressable
              onPress={() =>
                navigation.navigate("ImageDetail", {
                  images,
                  currentIndex: index,
                })
              }
              key={index}
              className="p-[2px]"
            >
              <Image
                key={index}
                source={{ uri: img }}
                style={
                  imgsLen === 1
                    ? { width, height: targetHeight }
                    : imgsLen === 2
                    ? isPortrait
                      ? { width: width / 2 - 4, height: targetHeight / 2 }
                      : { width: width - 4, height: targetHeight }
                    : imgsLen === 3
                    ? index === 0
                      ? {
                          width: width - 4,
                          height: Math.min(targetHeight, (height * 2) / 5),
                        }
                      : { width: width / 2 - 4, height: (height * 1) / 3 }
                    : imgsLen === 4
                    ? index === 0
                      ? {
                          width,
                          height: Math.min(targetHeight, (height * 2) / 5),
                        }
                      : { width: width / 3 - 4, height: (height * 1) / 5 }
                    : imgsLen === 5
                    ? index === 0 || index === 1
                      ? {
                          width: width / 2 - 4,
                          height: Math.min(targetHeight, (height * 1) / 3),
                        }
                      : { width: width / 3 - 4, height: (height * 1) / 5 }
                    : index === 0 || index === 1
                    ? {
                        width: width / 2 - 4,
                        height: Math.min(targetHeight, (height * 1) / 3),
                      }
                    : { width: width / 3 - 4, height: (height * 1) / 5 }
                }
              />
            </Pressable>
          ))}
        </View>
      )}
      <View className="px-4 pb-2 flex-row items-center">
        <View className="w-[18px] h-[18px] rounded-full flex items-center justify-center bg-[#3b82f6]">
          <AntDesign
            name="like1"
            size={11}
            color="white"
            style={{ paddingBottom: 1, paddingLeft: 1 }}
          />
        </View>
        <Text className="text-[15px] ml-1 text-gray-700">{like} Likes</Text>
        <View className="w-[4px] h-[4px] bg-[#4b5563] rounded-full mx-2" />
        <Text className="text-[15px] text-gray-700">{cmt} Comments</Text>
      </View>
      <View className="flex-row flex-1 border-y-[0.4px] border-y-gray-400">
        <Pressable
          onPress={() => setIsLiked(!isLiked)}
          style={({ pressed }) => [
            {
              transform: [{ scale: pressed ? 0.95 : 1 }],
              opacity: pressed ? 0.85 : 1,
              flex: 1,
            },
          ]}
        >
          <View className="flex-row items-center justify-center py-3">
            <AntDesign
              name={isLiked ? "like1" : "like2"}
              size={20}
              color={isLiked ? "#3b82f6" : "#4b5563"}
            />
            <Text
              className="text-[15px] ml-1 font-semibold"
              style={{
                color: isLiked ? "#3b82f6" : "#4b5563",
              }}
            >
              Like
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Comment", { post })}
          style={({ pressed }) => [
            {
              transform: [{ scale: pressed ? 0.95 : 1 }],
              opacity: pressed ? 0.85 : 1,
              flex: 1,
            },
          ]}
        >
          <View className="flex-row items-center justify-center py-3">
            <Ionicons name="chatbox-outline" size={20} color="#4b5563" />
            <Text className="text-[15px] font-semibold text-gray-600 ml-1">
              Comment
            </Text>
          </View>
        </Pressable>
      </View>
      <Portal>
        <Modalize
          ref={modalizeRef}
          handlePosition="inside"
          adjustToContentHeight={true}
          handleStyle={{ backgroundColor: "#bcc0c1" }}
        >
          <View className="p-4 pt-8 bg-gray-100 rounded-tl-xl rounded-tr-xl">
            <View className="bg-white rounded-lg py-2">
              <Pressable
                onPress={() => modalizeRef.current.close()}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#dedfe1" : "transparent",
                  },
                ]}
              >
                <View className="flex-row items-center py-3 px-6">
                  <View className="w-7">
                    <FontAwesome5 name="pen" color="#111827" size={20} />
                  </View>
                  <Text className="text-[18px] font-medium text-gray-900 ml-4">
                    Edit post
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => modalizeRef.current.close()}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#dedfe1" : "transparent",
                  },
                ]}
              >
                <View className="flex-row items-center py-3 px-6">
                  <View className="w-7">
                    <FontAwesome5
                      name="comment-slash"
                      color="#111827"
                      size={20}
                    />
                  </View>
                  <Text className="text-[18px] font-medium text-gray-900 ml-4">
                    Turn off comments
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => modalizeRef.current.close()}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#dedfe1" : "transparent",
                  },
                ]}
              >
                <View className="flex-row items-center py-3 px-6">
                  <View className="w-7">
                    <FontAwesome5 name="trash-alt" color="#111827" size={20} />
                  </View>
                  <Text className="text-[18px] font-medium text-gray-900 ml-4">
                    Delete post
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </Modalize>
      </Portal>
    </View>
  );
};

export default PostItem;
