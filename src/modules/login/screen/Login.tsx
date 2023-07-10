import React, { useEffect, useState } from "react";
import ButtonEntrar from "../../../shared/components/button/ButtonEntrar";
import Input from "../../../shared/components/input/Input";
import { ContainerLogin, ImageLogo } from "../styles/Login.Styles";
import { useLogin } from "../hooks/useLogin";
import { connectionAPIGet } from "../../../shared/functions/connection/connectionAPI";
import { ReturnLogin } from "../../../shared/types/returnLogin";



const Login = ({navigation}:any) => {

    const {
        email,
        senha,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    } = useLogin();


    

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
        
        return () => {
            navigation.setOptions({headerShown: true});
        };
    }, [navigation]);
    
    return(
        <ContainerLogin>
            <ImageLogo resizeMode="contain" source={require('../../../assets/guardaMunicipalLogo.png')}/>
            <Input value={email} errorMessage={errorMessage} onChange={handleOnChangeEmail} title="Usuário:"/>
            <Input secureTextEntry value={senha} errorMessage={errorMessage} onChange={handleOnChangePassword} title="Senha:"/>
            <ButtonEntrar onPress={handleOnPress}/>
        </ContainerLogin>
    );
}

export default Login;