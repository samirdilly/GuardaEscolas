import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
    margin?: string;
    type?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
}

const ButtonGlobal = ({title, type, disabled, loading, margin, onPress, ...props}: ButtonProps) => {
    const handleOnPress = () => {
        if(!loading && !disabled && onPress) {
            onPress();
        }
    };


}

export default ButtonGlobal;