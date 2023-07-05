import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import axios from "axios";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";



export const useRequest = () => {


    const [errorMessage, setErrorMessage] = useState<string>('');
    const [user, setUser] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        await connectionAPIPost<ReturnLogin>('http://192.168.254.165/apijwt/login', body)
        .then((result) => {
            console.log(result.acessToken)
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