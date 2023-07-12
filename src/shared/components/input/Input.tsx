import { TextInputProps, View } from "react-native";
import { DiplayFlexColumm } from "../globalStyles/GlobalView.styles";
import { ContainerInput, IconEye, TitleText } from "./Input.Style";
import { useState } from "react";
import { TextError } from "../../../modules/login/styles/Login.Styles";
import { Icon } from "../icon/icon";


interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    
};
const Input = ({title, errorMessage, secureTextEntry, ...props}: InputProps) => {
    
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry)
    
    const handleOnpressEye = () => {
        setCurrentSecure ((current) => !current);
    }

    return(
    <DiplayFlexColumm>
        {title && (
            <TitleText>{title}</TitleText>
        )}
        
    <View>
        <ContainerInput hasSecureTextEntry={secureTextEntry} secureTextEntry={currentSecure} isError={!!errorMessage} {...props}/>
        {secureTextEntry &&<IconEye onPress={handleOnpressEye} name={currentSecure ? 'eye' : 'eye-blocked'} size={20}/>}
    </View>
    {errorMessage &&(
        <TextError>
            {errorMessage}
        </TextError>
    )}
    </DiplayFlexColumm>
    )
}

export default Input;