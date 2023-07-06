import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";

import { connectionAPIPost } from "../functions/connection/connectionAPI";

import { useNavigation } from "@react-navigation/native";
import { setAuthorizationToken } from "../functions/connection/auth";
import { ReturnLogin } from "../types/returnLogin";



export const useRequest = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const navigation = useNavigation();
    const authRequest = async (body: RequestLogin) => {
        await connectionAPIPost<ReturnLogin>('http://192.168.254.165/apijwt/login', body)
        .then((result) => {
            // setAuthorizationToken(result.token)
            setEmail(result.email)
            console.log(result.email)
            console.log(result.token)
            navigation.navigate("Home")
        })
        .catch(() => {
            setErrorMessage('Usuário ou Senha inválidos');
        });
    };

    return{
        errorMessage,
        authRequest,
        setErrorMessage,
        email,
    }
}
