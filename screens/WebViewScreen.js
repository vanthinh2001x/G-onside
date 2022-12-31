import React from "react";
import { SafeAreaView, View } from "react-native";
import { WebView } from "react-native-webview";
import { AndroidSafeArea } from "../utils/AndroidSafeArea";

const WebViewScreen = ({ navigation, route }) => {
  const uri = route.params?.uri;
  console.log("hiii", uri);
  return (
    <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
      <WebView
        className="flex-1"
        source={{
          uri: uri
            ? uri
            : "https://s1.g-doc.g-on.vn/Resources/YBE21EFtcr4/2022/12/30/vNu5NI997ns/PwBS7I4hAmjr3fBCSjb6yg.dotx",
        }}
      />
    </SafeAreaView>
  );
};

export default WebViewScreen;
