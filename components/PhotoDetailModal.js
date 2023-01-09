import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "react-native-vector-icons";
import { Portal } from "@gorhom/portal";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import {
  PanGestureHandler,
  PinchGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { setPhotoInvisible } from "../app/features/photoModalSlice";
import ButtonChangeBg from "./ButtonChangeBg";

const { width, height } = Dimensions.get("window");

const PhotoDetailModal = () => {
  const [imgSize, setImgSize] = useState({ width: 0.1, height: 0 });
  const dispatch = useDispatch();
  const {
    isPhotoVisible,
    photoData: { img, specs },
  } = useSelector((state) => state.photoModal);
  useEffect(() => {
    Image.getSize(img.url, (width, height) => {
      setImgSize({ width, height });
    });
  }, []);

  const anim = useSharedValue(0);
  const animY = useSharedValue(0);
  const animScale = useSharedValue(1);
  const animFocalX = useSharedValue(0);
  const animFocalY = useSharedValue(0);

  useEffect(() => {
    if (isPhotoVisible) {
      anim.value = withTiming(1);
    } else {
      anim.value = withTiming(0);
    }
  }, []);

  const onBackPress = useCallback(() => {
    const callback = () => dispatch(setPhotoInvisible());
    anim.value = withTiming(
      0,
      {},
      (isFinished) => isFinished && runOnJS(callback)()
    );
  }, []);
  const panGestureHandler = useAnimatedGestureHandler({
    onActive: ({ translationY }) => {
      animY.value = translationY;
      animScale.value =
        1 - (1 - ((height / 2 - animY.value) * 2) / height) * 0.2;
    },
    onEnd: ({ translationY, translationX }) => {
      if (translationY > height * 0.4 || translationY < -height * 0.4) {
        runOnJS(onBackPress)();
        animY.value = withTiming(0);
        animScale.value = withTiming(1);
      } else {
        animY.value = withTiming(0);
        animScale.value = withTiming(1);
      }
    },
  });
  const pinchGestureHandler = useAnimatedGestureHandler({
    onActive: ({ scale, focalX, focalY }) => {
      animScale.value = 1 - (1 - scale) * 0.5;
      animFocalX.value = width / 2 - focalX;
      animFocalY.value = height / 2 - focalY;
    },
    onEnd: () => {
      animScale.value = withTiming(1);
      animFocalX.value = withTiming(0);
      animFocalY.value = withTiming(0);
    },
  });
  const opacityStyle = useAnimatedStyle(() => ({
    opacity:
      anim.value *
      interpolate(animY.value, [-height * 0.3, 0, height * 0.3], [0.6, 1, 0.6]),
  }));
  const imageContainerStyle = useAnimatedStyle(() => {
    const isPortrait = imgSize.width < imgSize.height;
    const targetWidth = isPortrait ? Math.min(imgSize.width, width) : width;
    const targetHeight = Math.min(
      (targetWidth / imgSize.width) * imgSize.height,
      height
    );

    const targetX = (width - targetWidth) / 2;
    const targetY = (height - targetHeight) / 2;

    return {
      left: interpolate(anim.value, [0, 1], [specs.pageX, targetX]),
      top: interpolate(anim.value, [0, 1], [specs.pageY, targetY]),
      width: interpolate(anim.value, [0, 1], [specs.width, targetWidth]),
      height: interpolate(anim.value, [0, 1], [specs.height, targetHeight]),
      borderRadius: interpolate(
        anim.value,
        [0, 1],
        [specs.borderRadius || 5, 0]
      ),

      transform: [
        {
          translateY: animY.value,
        },
        {
          translateX: -animFocalX.value,
        },
        {
          translateY: -animFocalY.value,
        },
        {
          scale: animScale.value,
        },
        {
          translateX: animFocalX.value,
        },
        {
          translateY: animFocalY.value,
        },
      ],
    };
  });
  return (
    <React.Fragment>
      <Portal>
        <PinchGestureHandler onGestureEvent={pinchGestureHandler}>
          <Animated.View
            className={`absolute left-0 right-0 top-0 bottom-0 ${
              isPhotoVisible ? "z-50" : "z-0"
            }`}
          >
            <PanGestureHandler onGestureEvent={panGestureHandler}>
              <Animated.View
                className={`absolute left-0 right-0 top-0 bottom-0 ${
                  isPhotoVisible ? "z-10" : "z-0"
                }`}
              >
                {isPhotoVisible && (
                  <Animated.View
                    className="absolute left-0 right-0 top-5 z-10 flex-row items-center justify-between px-6"
                    style={opacityStyle}
                  >
                    <ButtonChangeBg
                      onPress={onBackPress}
                      bg={"#fff"}
                      bgPress={"#3b82f6"}
                      radius={14}
                    >
                      <View className="w-7 h-7 rounded-full justify-center items-center">
                        <Ionicons name="close" size={20} color="#222" />
                      </View>
                    </ButtonChangeBg>
                    <View className="flex-row">
                      <Pressable>
                        {({ pressed }) => (
                          <Ionicons
                            name={
                              pressed ? "share-social" : "share-social-outline"
                            }
                            size={24}
                            color={pressed ? "#3b82f6" : "#fff"}
                          />
                        )}
                      </Pressable>
                      <Pressable className="ml-5">
                        {({ pressed }) => (
                          <AntDesign
                            name="download"
                            size={24}
                            color={pressed ? "#3b82f6" : "#fff"}
                          />
                        )}
                      </Pressable>
                    </View>
                  </Animated.View>
                )}
                <Animated.View
                  style={opacityStyle}
                  className="absolute left-0 right-0 top-0 bottom-0 z-0 bg-black"
                >
                  <Pressable onPress={onBackPress} />
                </Animated.View>
                {isPhotoVisible && (
                  <Animated.View
                    style={imageContainerStyle}
                    className="overflow-hidden"
                  >
                    <Image
                      resizeMode="cover"
                      source={{ uri: img.url }}
                      className="h-[100%] w-[100%]"
                    />
                  </Animated.View>
                )}
              </Animated.View>
            </PanGestureHandler>
          </Animated.View>
        </PinchGestureHandler>
      </Portal>
    </React.Fragment>
  );
};

export default PhotoDetailModal;
