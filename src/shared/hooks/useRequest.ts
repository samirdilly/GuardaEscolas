import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";

import { connectionAPIPost } from "../functions/connection/connectionAPI";

import { useNavigation } from "@react-navigation/native";
import { setAuthorizationToken } from "../functions/connection/auth";



export const useRequest = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigation = useNavigation();
    const authRequest = async (body: RequestLogin) => {
        await connectionAPIPost('http://192.168.254.165/apijwt/login', body)
        .then((result) => {
            setAuthorizationToken(result)
            console.log(result)
            navigation.navigate("Home")
        })
        .catch(() => {
            setErrorMessage('Usuário ou Senha inválidos');
        });
    };

    return{
        errorMessage,
        authRequest,
        setErrorMessage
    }
}