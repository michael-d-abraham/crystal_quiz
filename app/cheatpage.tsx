import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import ColorText from "../components/ColorText";
import { ShowAnswerButton } from "../components/buttons";
import { questionBank } from "../questionBank";

export default function CheatPage() {
  const { i } = useLocalSearchParams();

  const handleShowAnswers = () => {
    alert(`${currentAnswer}\n\n${currentExplanation}`);
  };

  const index = Number(i);
  const currentAnswer = questionBank[index].answer;
  const currentExplanation = questionBank[index].explanation;

  return (
    <View style={{flex: 1, padding: 20}}>
      <ColorText allColor="black">Are you sure you want to see the answers?</ColorText>
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ShowAnswerButton onPress={handleShowAnswers} />
      </View>
    </View>
  );
}
