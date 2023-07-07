import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";

import { connectionAPIPost } from "../functions/connection/connectionAPI";

import { useNavigation } from "@react-navigation/native";
import { getAuthorizationToken, setAuthorizationToken } from "../functions/connection/auth";
import { ReturnLogin } from "../types/returnLogin";
import { AtivaAlarme } from "../types/requestAlarme";
import axios, { AxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const useRequest =  () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const navigation = useNavigation();
    
   
    const authRequest = async (body: RequestLogin) => {
        await connectionAPIPost<ReturnLogin>('https://ti.guaira.pr.gov.br/apijwt/login', body)
        .then((result) => {
            setAuthorizationToken(result.token)
            
            console.log(result.token)
            navigation.navigate("Home")
        })
        .catch(() => {
            setErrorMessage('Usuário ou Senha inválidos');
        });
    };
 
    

    const ativaAlarme = async () => {
        await connectionAPIPost('https://ti.guaira.pr.gov.br/apijwt/api/alarme/ativa', '\r\n')
        .then((result) => {
            console.log(result)
        })
        .catch(() => {
            setErrorMessage('Usuário ou Senha inválidos');
        });

    }
   
    
    console.log(email)

    return{
        errorMessage,
        authRequest,
        setErrorMessage,
        ativaAlarme,

    }
}
