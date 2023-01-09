import React, { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";

const { height, width } = Dimensions.get("window");

const ImageDetailItem = ({ url }) => {
  const [imgSize, setImgSize] = useState({ width: 0.1, height: 0 });
  useEffect(() => {
    Image.getSize(url, (width, height) => {
      setImgSize({ width, height });
    });
  }, []);
  const targetHeight = Math.min(
    (width / imgSize.width) * imgSize.height,
    height
  );
  return (
    <Image
      source={{ uri: url }}
      style={{
        height: targetHeight,
        width,
        resizeMode: "cover",
        alignSelf: "center",
      }}
    />
  );
};

export default ImageDetailItem;
