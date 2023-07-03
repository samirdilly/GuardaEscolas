import React from "react";
import ButtonEntrar from "../../../shared/components/button/ButtonEntrar";
import Input from "../../../shared/components/input/Input";
import { ContainerLogin, ImageLogo } from "../styles/Login.Styles";


const Login = ({ navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
        
        return () => {
            navigation.setOptions({headerShown: true});
        };
    }, [navigation]);
    
    return(
        <ContainerLogin>
            <ImageLogo resizeMode="contain" source={require('../../../assets/guardaMunicipalLogo.png')}/>
            <Input title="Usuário:"/>
            <Input title="Senha:"/>
            <ButtonEntrar onPress={() => navigation.navigate('Home')}/>
            <ButtonEntrar onPress={() => navigation.navigate('TestLogin')}/>
        </ContainerLogin>
    );
}

export default Login;