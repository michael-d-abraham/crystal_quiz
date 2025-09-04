import { router } from "expo-router";
import { addOrientationChangeListener, Orientation, removeOrientationChangeListener, unlockAsync } from "expo-screen-orientation";
import React, { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import ColorText from "./components/ColorText";
import { FalseButton, NextButton, PrevButton, TrueButton } from "./components/buttons";
import { questionBank } from "./questionBank";

export default function QuizScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuestion = questionBank[currentIndex];
    const [orientation, setOrientation] = useState<Orientation | null>(null);


    const isLandscape = (orientation: Orientation | null): boolean => {
        return orientation === Orientation.LANDSCAPE_LEFT || orientation === Orientation.LANDSCAPE_RIGHT;
    };


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

    useEffect(() => {
        unlockAsync();

        const event = addOrientationChangeListener(({ orientationInfo }) => {
            setOrientation(orientationInfo.orientation);
        });

        return () => {
            removeOrientationChangeListener(event);
        };
    }, []);

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
        <View style={{flexDirection: 'row', gap: isLandscape(orientation) ? 150 : 10}}>
          <TrueButton onPress={() => handleAnswer(true)} />
          <FalseButton onPress={() => handleAnswer(false)} />
        </View>

        {/* Prev and Next buttons */}
        <View style={{ flexDirection: "row", gap: isLandscape(orientation) ? 150 : 10, marginTop: 12 }}>
          <PrevButton onPress={handlePrev} />
          <NextButton onPress={handleNext} />
        </View>

        {/* cheat button */}
        <View style={{padding: 20, flexDirection: 'row', gap: 10}}>
          <Pressable onPress={() => router.push({
              pathname: "/cheatpage",
              params: { i: currentIndex.toString() }, 
            })}>
            <ColorText 
              allColor="#D7A1F9" 
              fontSize={22}
            >
              CHEAT
            </ColorText>
          </Pressable>
        </View>

      </View>
    );
  }

