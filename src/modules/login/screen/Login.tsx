import React, { useEffect, useState } from "react";
import ButtonEntrar from "../../../shared/components/button/ButtonEntrar";
import Input from "../../../shared/components/input/Input";
import { ContainerLogin, ImageLogo } from "../styles/Login.Styles";
import { useLogin } from "../hooks/useLogin";
import { getAuthorizationToken, unsetAuthorizationToken } from "../../../shared/functions/connection/auth";
import { connectionAPIGet, connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";
import { useNavigation } from "@react-navigation/native";




const Login = () => {

    const {
        email,
        senha,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    } = useLogin();


    // useEffect(() => {
    //     const test = async () => {
    //         const token = await getAuthorizationToken();
    //         if(token) {
    //             navigation.navigate("Home")
    //         }
    //     }
    //     test();
       
    // }, []);
    
    // const deslogar = () => {
    //     setTimeout(() => {
    //         unsetAuthorizationToken();
    //     }, 50000);
    // }
    const navigation = useNavigation();
    useEffect(() => {
        const test = async () => {
            const resultBack = await connectionAPIPost('https://ti.guaira.pr.gov.br/apijwt/api/usuario/validarToken', '\r\n').catch(() => undefined);
            console.log(resultBack);

            if(resultBack == true) {
                navigation.navigate("Home")
            }
        };
        test();
    }, []);

    

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
        
        return () => {
            navigation.setOptions({headerShown: true});
        };
    }, [navigation]);
    
    return(
        <ContainerLogin>
            <ImageLogo resizeMode="contain" source={require('../../../assets/guardaMunicipalLogo.png')}/>
            <Input value={email} errorMessage={errorMessage} onChange={handleOnChangeEmail} placeholder="Digite seu usuário" title="Usuário:"/>
            <Input secureTextEntry value={senha} errorMessage={errorMessage} onChange={handleOnChangePassword} placeholder="Digite sua senha" title="Senha:"/>
            <ButtonEntrar onPress={handleOnPress}/>
        </ContainerLogin>
    );
}

export default Login;