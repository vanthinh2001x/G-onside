import { useActionSheet } from "@expo/react-native-action-sheet";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import { Animated, Dimensions, Pressable, Text, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import ButtonChangeBg from "../components/ButtonChangeBg";
import CarouselIndicator from "../components/CarouselIndicator";
import ImageDetailItem from "../components/ImageDetailItem";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
const { width, height } = Dimensions.get("window");

const ImageDetailScreen = ({ navigation, route }) => {
  const { images, currentIndex } = route.params;
  //Carousel
  const scrollAnimated = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  const getItemLayout = (data, index) => ({
    length: width,
    offset: width * index,
    index,
  });
  //Save Image
  const handleSaveImage = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        await MediaLibrary.saveToLibraryAsync(images[index]);
        console.log("Image successfully saved");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //copy Image
  //share Image
  // const [state, setState] = useState(null);
  // const handleShareImage = () => {
  //   const options = {
  //     mimeType: "text/x-vcard",
  //     dialogTitle: "Share vcard",
  //     UTI: "text/vcard",
  //   };

  //   FileSystem.writeAsStringAsync(fileUri, vcard)
  //     .then((data) => {
  //       setState("Wrote vcard file");
  //     })
  //     .catch((err) => {
  //       setState("Error writing vcard file");
  //       console.log(JSON.stringify(err));
  //     });

  //   Sharing.shareAsync(fileUri, options)
  //     .then((data) => {
  //       setState("Shared");
  //     })
  //     .catch((err) => {
  //       setState("Error sharing vcard");
  //       console.log(JSON.stringify(err));
  //     });
  //   Share.open(options)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       err && console.log(err);
  //     });
  // };
  // options Modal
  const { showActionSheetWithOptions } = useActionSheet();
  const optionsPress = () => {
    const options = ["Save Photo", "Copy Photo", "Share", "Cancel"];
    const cancelButtonIndex = 3;
    const tintColor = "#3b82f6";
    const cancelButtonTintColor = "#3b82f6";
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        tintColor,
        cancelButtonTintColor,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            handleSaveImage();
            break;
          case 1:
            () => {};
            break;
          case 2:
            // handleShareImage();
            break;
          case cancelButtonIndex:
          // cancel
        }
      }
    );
  };
  return (
    <View
      className="flex-1 bg-[#242527]"
      style={{ backgroundColor: "rgba(0,0,0,.8)" }}
    >
      {/* Header */}
      <LinearGradient
        colors={["rgba(0,0,0, 0.9)", "rgba(0,0,0,0)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="flex-row items-center justify-between h-20 px-3 z-20"
      >
        <ButtonChangeBg
          bg={"#fff"}
          bgPress={"#3b82f6"}
          radius={14}
          onPress={() => navigation.goBack()}
        >
          <View className="w-7 h-7 rounded-full flex items-center justify-center">
            <Ionicons name="close" size={24} />
          </View>
        </ButtonChangeBg>
        <Text className="text-white text-lg font-medium">
          {index + 1}/{images.length}
        </Text>
        <Pressable onPress={optionsPress}>
          {({ pressed }) => (
            <Ionicons
              name="ellipsis-horizontal"
              size={24}
              color={pressed ? "#3b82f6" : "#fff"}
            />
          )}
        </Pressable>
      </LinearGradient>
      {/* Main */}
      <View className="absolute w-full h-full z-10 items-center justify-center">
        <Animated.FlatList
          style={{ flexGrow: 0 }}
          data={images}
          renderItem={({ item, index }) => <ImageDetailItem url={item} />}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          getItemLayout={getItemLayout}
          initialScrollIndex={currentIndex}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollAnimated } } }],
            { useNativeDriver: false }
          )}
        />
      </View>
      {/* pagination */}
      {images.length > 1 && (
        <LinearGradient
          colors={["rgba(0,0,0, 0.9)", "rgba(0,0,0,0)"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          className="absolute w-full h-20 bottom-0 flex items-center justify-center z-20"
        >
          <CarouselIndicator
            slidesCount={images.length}
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
