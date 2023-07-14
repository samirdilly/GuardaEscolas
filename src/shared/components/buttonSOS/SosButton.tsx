
import { TouchableOpacityProps, View } from "react-native";
import { ImageSos, MensagemAlertaContainer, Sos, TextAlerta } from "./SosButton.Style";
import { connectionAPIPost } from "../../functions/connection/connectionAPI";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


interface ButtonProps extends TouchableOpacityProps{
    disabled?:boolean;
}


const SosButton = ({disabled}: ButtonProps) => {

    const [isVisible, setIsVisible] = useState(true);
    const [retorno, setRetorno] = useState<String>('');
    const navigation = useNavigation();

    const ativaAlarme = async () => {

        await connectionAPIPost('https://ti.guaira.pr.gov.br/apijwt/api/alarme/ativa', '\r\n')
        .then((result) => {
            console.log(result)
            if(result === "Alterado com Sucesso") {
                setRetorno("Alarme enviado com sucesso !")
            }
            else {
                setRetorno("Alarme já ativo !")
            }
            

        }).catch((error) =>  {if(error){navigation.navigate("Login")}} )     
        

        };

        const exibirTexto = () => {
            setIsVisible(true);
            setTimeout(() => {
              setIsVisible(false);
            }, 6000);
          };



    return(
        <>
            <MensagemAlertaContainer>
                {isVisible && <TextAlerta>{retorno}</TextAlerta>}
            </MensagemAlertaContainer>
            <Sos onPress={() => {ativaAlarme(); exibirTexto();}} >
                <ImageSos source={require('../../../assets/sos.png')}/>
            </Sos>
        </>
    )
}

export default SosButton;