
import { View } from "react-native";
import { ImageSos, MensagemAlertaContainer, Sos, TextAlerta } from "./SosButton.Style";
import { connectionAPIPost } from "../../functions/connection/connectionAPI";

import React, { useState } from "react";

const SosButton = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [retorno, setRetorno] = useState<String>('');
    
    const exibirTexto = () => {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      };

    const ativaAlarme = async () => {

        await connectionAPIPost('http://192.168.254.165/apijwt/api/alarme/ativa', '\r\n')
        .then((result) => {
            console.log(result)
            if(result) {
                setRetorno("Alarme enviado com sucesso !")
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