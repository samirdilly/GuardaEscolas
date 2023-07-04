import React, { useState } from "react";
import ButtonEntrar from "../../../shared/components/button/ButtonEntrar";
import Input from "../../../shared/components/input/Input";
import { ContainerLogin, ImageLogo } from "../styles/Login.Styles";
import { useLogin } from "../hooks/useLogin";



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
            <Input value={senha} errorMessage={errorMessage} onChange={handleOnChangePassword} title="Senha:"/>
            <ButtonEntrar onPress={handleOnPress}/>
            <ButtonEntrar onPress={() => navigation.navigate('TestLogin')}/>
        </ContainerLogin>
    );
}

export default Login;