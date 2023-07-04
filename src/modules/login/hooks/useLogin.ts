import axios from "axios";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    // const [loading, setLoading] = useState<boolean>(false); fazer loading para o botao 
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleOnPress = async () => {
        
        // setLoading(true);

        const resultAxios = await axios.post('http://192.168.254.165/apijwt/login', {
            email,
            senha,
        }).catch(() => {
          setErrorMessage("usuario ou senha incorretos")
        });
        // fazer o loading do botao...
        // setLoading(false);4

        // navigation.navigate('Home')
    }

    const handleOnChangeEmail = (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setEmail(event.nativeEvent.text)
    };
    
    const handleOnChangePassword = (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setSenha(event.nativeEvent.text)
    };

    return{
        email,
        senha,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword
    }
}