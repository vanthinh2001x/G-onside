import { SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";

import React from "react";

const Notifications = () => {
  let user = useSelector((state) => state.user.userData);
  console.log(sinh);
  console.log("UWU: ", user);
  return (
    <SafeAreaView className="sticky top-0 z-10 p-4 max-w-2xl mx-auto my-4 flex flex-row items-center backdrop-blur md:px-0 lg:max-w-3xl">
      <Text>Notifications</Text>
    </SafeAreaView>
  );
};

export default Notifications;
