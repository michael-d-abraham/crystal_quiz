import { Text, View, button, Pressable } from "react-native";
import { useState } from "react";
import GreenText from "./components/GreenText";
import Button from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GreenText text="anything"/>
      <GreenText altColor="red" text="REDD"/>
      <GreenText altColor="blue">This is a child node</GreenText>
      <GreenText> This is a child node
          <text> Child node</text></GreenText>
      <Text>Edit app/index.tsx to edit this screen.</Text>
            <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

