import { View } from "react-native";
import ColorText from "./components/ColorText";
import { FalseButton, NextButton, PrevButton, TrueButton } from "./components/buttons";
import { questionBank } from "./questionBank";
import React, { useState } from "react";




export default function QuizScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuestion = questionBank[currentIndex];


    const handleNext = () => {
      setCurrentIndex(i => (i + 1) % questionBank.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex(i => (i - 1 + questionBank.length) % questionBank.length);
    };
    
    const handleAnswer = (answer: boolean) => {
      if (answer === currentQuestion.answer) {
        alert("That is correct!\n\n" + currentQuestion.explanation);
      } else {
        alert("That is incorrect!\n\n" + currentQuestion.explanation);
      }
    }

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: 'center', padding: 20, width: '90%' }}>
          <ColorText allColor="black">{currentQuestion.question}</ColorText>
        </View>
        
        {/* True and False buttons */}
        <View style={{flexDirection: 'row', gap: 10}}>
          <TrueButton onPress={() => handleAnswer(true)} />
          <FalseButton onPress={() => handleAnswer(false)} />
        </View>

        {/* Prev and Next buttons */}
        <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
          <PrevButton onPress={handlePrev} />
          <NextButton onPress={handleNext} />
        </View>

        {/* cheat button */}
        <View style={{flexDirection: 'row', gap: 10}}>
          <ColorText allColor="black">Cheat</ColorText>
        </View>

      </View>
    );
  }

