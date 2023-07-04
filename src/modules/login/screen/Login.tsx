import React, { useState } from "react";
import ButtonEntrar from "../../../shared/components/button/ButtonEntrar";
import Input from "../../../shared/components/input/Input";
import { ContainerLogin, ImageLogo } from "../styles/Login.Styles";
import axios from "axios";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";


const Login = ({ navigation }) => {

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
        
        //para conectar
        //const returnBD = await axios.get('http://192.168.254.165/empresas/usuariosRest/TESTE')
        //console.log('returntDB', returnBD.data);
    }

    const handleOnChangeEmail = (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setEmail(event.nativeEvent.text)
    };
    
    const handleOnChangePassword = (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setSenha(event.nativeEvent.text)
    };

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