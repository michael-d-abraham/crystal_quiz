import { Text } from "react-native";

type GreenTextProps = {
    children: React.ReactNode;
    allColor?: string;
    textAlign?: 'left' | 'center' | 'right';
    fontSize?: number;
};

const GreenText = ({ children, allColor, textAlign, fontSize }: GreenTextProps) => {
    return (
      <Text style={{ 
        color: allColor || 'black',
        fontSize: fontSize || 16,
        textAlign: textAlign || 'center'
      }}>
        {children}
      </Text>
    );
  };  

export default GreenText;