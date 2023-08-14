import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";

import { connectionAPIPost } from "../functions/connection/connectionAPI";

import { useNavigation } from "@react-navigation/native";
import { setAuthorizationToken } from "../functions/connection/auth";
import { ReturnLogin } from "../types/returnLogin";
import { TextCadastro } from "../../modules/login/styles/Login.Styles";
import { useDispatch } from "react-redux";


    

export const useRequest =  () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [retorno, setRetorno] = useState<unknown>('');
    const [nome, setNome] = useState<String>('');
    const navigation = useNavigation();
  
   
    const authRequest = async (body: RequestLogin) => {
        await connectionAPIPost<ReturnLogin>('https://ti.guaira.pr.gov.br/apijwt/login', body)
        .then((result) => {
            setAuthorizationToken(result.token)
            
            console.log(result.token)
            // console.log(result.nome)
            setNome(result.nome)

            if (result.nome){
                setNome(result.nome)
            }
            navigation.navigate("Home")
        })
        .catch(() => {
            setErrorMessage('Usuário ou Senha inválidos');
        });
    };
    console.log(nome)
 
    

    // const ativaAlarme = async () => {
    //     await connectionAPIPost('http://192.168.254.165/apijwt/api/alarme/ativa', '\r\n')
    //     .then((result) => {
    //         console.log(result)

    //         const texto = result

    //         setRetorno(texto)
            
    //     })
    //     .catch(() => {
    //         setErrorMessage('Alerta Não enviado');
    //     });

    // }

    return{
        errorMessage,
        authRequest,
        setErrorMessage,
        retorno,
        nome
    }
}
