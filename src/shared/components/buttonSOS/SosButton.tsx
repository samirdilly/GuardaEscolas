
import { TouchableOpacityProps, View } from "react-native";
import { ImageSos, MensagemAlertaContainer, Sos, TextAlerta } from "./SosButton.Style";
import { connectionAPIPost } from "../../functions/connection/connectionAPI";

import React, { useState } from "react";


interface ButtonProps extends TouchableOpacityProps{
    disabled?:boolean;
}


const SosButton = ({disabled}: ButtonProps) => {

    const [isVisible, setIsVisible] = useState(true);
    const [retorno, setRetorno] = useState<String>('');
    
    const exibirTexto = () => {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      };

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

        })

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