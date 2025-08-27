import { Text } from "react-native";

// const GreenText = (props) => {
//      const {text} = props;
//     return (
//         <Text style={{color: "green"}}>
//             {props.text}
//         </Text>
//     )
// };

// export default GreenText;

type GreenTextProps = {
    text: string;
    allcolor?: string;
};

const GreenText = ({ text, altColor, children }: GreenTextProp) => {
    return (
        <Text style={{color: altColor || 'green,'}}>
            {children}
        </Text>
    );
};

export default GreenText;