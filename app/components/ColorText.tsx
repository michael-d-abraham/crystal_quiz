import { Text } from "react-native";

type GreenTextProps = {
    children: React.ReactNode;
    allColor?: string;
    textAlign?: 'left' | 'center' | 'right';
};

const GreenText = ({ children, allColor, textAlign }: GreenTextProps) => {
    return (
      <Text style={{ color: allColor || 'black', textAlign: 'center' }}>
        {children}
      </Text>
    );
  };  

export default GreenText;