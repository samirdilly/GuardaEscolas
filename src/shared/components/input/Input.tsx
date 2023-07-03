import { TextInputProps } from "react-native";
import { DiplayFlexColumm } from "../globalStyles/GlobalView.styles";
import { ContainerInput, TitleText } from "./Input.Style";


interface InputProps extends TextInputProps {
    title?: string;
};
const Input = ({title, ...props}: InputProps) => {
    return(
    <DiplayFlexColumm>
        {title && (
            <TitleText>{title}</TitleText>
        )}
        <ContainerInput {...props}/>
    </DiplayFlexColumm>
    )
}

export default Input;