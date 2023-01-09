import {
  View,
  Text,
  Pressable,
  Image,
  Alert,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { StatusBar } from "expo-status-bar";
import ButtonChangeBg from "../components/ButtonChangeBg";
import { Ionicons } from "react-native-vector-icons";
import { PinchGestureHandler } from "react-native-gesture-handler";

const CameraScreen = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [isSave, setIsSave] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data);
        setIsSave(false);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image.uri);
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
        }, 1000);
        setIsSave(true);
      } catch (e) {
        console.log(e);
      }
    }
  };
  function toggleCameraType() {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }
  function toggleFlash() {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  }
  const imageBackPress = () => {
    if (isSave) {
      setImage(null);
    } else {
      Alert.alert("Discard Photo?", "Your photo is not saved!", [
        {
          text: "Discard",
          onPress: () => setImage(null),
          style: "destructive",
        },
        {
          text: "Cancel",
          onPress: () => {},
        },
      ]);
    }
  };
  //zoom image
  const [zoom, setZoom] = useState(0);
  const handlePinch = ({ nativeEvent }) => {
    const { scale, velocity } = nativeEvent;
    let newZoom =
      velocity > 0
        ? zoom + scale * velocity * (Platform.OS === "ios" ? 0.001 : 25)
        : zoom -
          scale * Math.abs(velocity) * (Platform.OS === "ios" ? 0.005 : 50);
    if (newZoom < 0) newZoom = 0;
    else if (newZoom > 0.5) newZoom = 0.5;
    setZoom(newZoom);
  };
  return (
    <View className="flex-1">
      <StatusBar hidden={true} />
      {!image ? (
        <PinchGestureHandler onGestureEvent={handlePinch}>
          <Camera
            zoom={zoom}
            type={type}
            flashMode={flash}
            ref={cameraRef}
            className="flex-1 items-center justify-end"
            style={{}}
          >
            <View className="absolute flex-row justify-between w-full top-3 px-2">
              {[
                {
                  name: "close-outline",
                  onPress: () => navigation.goBack(),
                  size: "36",
                },
                {
                  name:
                    flash === Camera.Constants.FlashMode.on
                      ? "flash-outline"
                      : "flash-off-outline",
                  onPress: toggleFlash,
                  size: "28",
                },
                {
                  name: "camera-reverse-outline",
                  onPress: toggleCameraType,
                  size: "32",
                },
              ].map((item, index) => (
                <ButtonChangeBg
                  key={index}
                  onPress={item.onPress}
                  bgPress="rgba(241,245,249,0.3)"
                  radius={22}
                >
                  <View className="w-11 h-11 justify-center items-center">
                    <Ionicons
                      name={item.name}
                      color="#fff"
                      size={item.size}
                      style={{
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.6,
                        shadowRadius: 2.62,
                        elevation: 4,
                      }}
                    />
                  </View>
                </ButtonChangeBg>
              ))}
            </View>
            <View>
              <Pressable
                onPress={takePicture}
                className="mb-8 border-[10px] rounded-full"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.6,
                  shadowRadius: 2.62,
                  elevation: 4,
                }}
              >
                {({ pressed }) => (
                  <View className="h-[66px] w-[66px] border-2  border-white rounded-full items-center justify-center">
                    <View
                      className={`${
                        pressed ? "h-[64px] w-[64px]" : "h-14 w-14"
                      } rounded-full bg-white`}
                    />
                  </View>
                )}
              </Pressable>
            </View>
          </Camera>
        </PinchGestureHandler>
      ) : (
        <View className="flex-1">
          <View className="absolute top-2 left-2 z-10">
            <ButtonChangeBg
              onPress={imageBackPress}
              bgPress="rgba(241,245,249,0.3)"
              radius={22}
            >
              <View className="w-11 h-11 justify-center items-center">
                <Ionicons
                  name="chevron-back"
                  color="#fff"
                  size="32"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.6,
                    shadowRadius: 2.62,
                    elevation: 4,
                  }}
                />
              </View>
            </ButtonChangeBg>
          </View>
          <Image source={{ uri: image.uri }} className="flex-1" />
          <View className="absolute bottom-0 w-full flex-row justify-between items-center p-5">
            <View className="items-center">
              <ButtonChangeBg
                onPress={saveImage}
                bgPress="rgba(241,245,249,0.3)"
                radius={22}
              >
                <View className="w-11 h-11 justify-center items-center">
                  <Ionicons
                    name="arrow-down-circle-outline"
                    color="#fff"
                    size="32"
                    style={{
                      paddingLeft: 2.5,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.6,
                      shadowRadius: 2.62,
                      elevation: 4,
                    }}
                  />
                </View>
              </ButtonChangeBg>
              <Text
                className="text-white text-[14px] font-bold"
                style={{
                  paddingLeft: 2.5,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.6,
                  shadowRadius: 2.62,
                  elevation: 4,
                }}
              >
                Save
              </Text>
            </View>
            <ButtonChangeBg
              onPress={() =>
                navigation.navigate({
                  name: "CreatePost",
                  params: { image: { ...image, type: "image" } },
                  merge: true,
                })
              }
              bg={"white"}
              bgPress={"#e4e4e4"}
              scale={0.98}
              radius={24}
              styles={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.6,
                shadowRadius: 2.62,
                elevation: 4,
              }}
            >
              <View className="px-6 py-3">
                <Text className="text-base font-bold text-gray-900">Next</Text>
              </View>
            </ButtonChangeBg>
          </View>
          <Modal
            className="absolute top-20"
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View className="flex-1 justify-center items-center pb-20">
              <View className="px-5 py-2 rounded-md bg-[#242424]">
                <Text className="text-[#fbfbfb] text-base font-bold">
                  Save!
                </Text>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

export default CameraScreen;
