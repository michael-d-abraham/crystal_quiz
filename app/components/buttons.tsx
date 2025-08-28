import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = { onPress: () => void };

export const PrevButton = ({ onPress }: ButtonProps) => (
  <Pressable onPress={onPress} style={styles.button}>
    <AntDesign name="caretleft" size={24} color="white" />
    <Text style={[styles.text, { marginLeft: 6 }]}>PREV</Text>
  </Pressable>
);

export const NextButton = ({ onPress }: ButtonProps) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={[styles.text, { marginRight: 6 }]}>NEXT</Text>
    <AntDesign name="caretright" size={24} color="white" />
  </Pressable>
);

export const TrueButton = ({ onPress }: ButtonProps) => (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={[styles.text, { marginRight: 6 }]}>TRUE</Text>
    </Pressable>
  );

  export const FalseButton = ({ onPress }: ButtonProps) => (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={[styles.text, { marginRight: 6 }]}>FALSE</Text>
    </Pressable>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#D7A1F9",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});
