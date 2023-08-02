
import { TouchableOpacityProps, View } from "react-native";
import { ImageSos, MensagemAlertaContainer, Sos, TextAlerta } from "./SosButton.Style";
import { connectionAPIPost } from "../../functions/connection/connectionAPI";

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


interface ButtonProps extends TouchableOpacityProps{
    disabled?:boolean;
    onPress?: () => void;
}


const SosButton = ({disabled, onPress}: ButtonProps) => {

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



        const [currentImage, setCurrentImage] = useState(1);


        const images = [
            require('../../../assets/sos_amarelo.png'),
            require('../../../assets/sos_verde.png'),
            require('../../../assets/sos_vermelho.png'),
          ];



        const [status, setStatus] = useState("");
      
   
        const fetchDataFromApi = async () => {
            await connectionAPIPost('https://ti.guaira.pr.gov.br/apijwt/api/alarme/status', '\r\n')
                .then((result) => {
                    console.log(result)
                    if (result === "desativado") {
                        setStatus("Unidades estao se deslocando !")
                        setCurrentImage(1)
                    }

                });
            };

            useEffect(() => {
                // Chama a função inicialmente e a cada 10 segundos (10000 ms)
                fetchDataFromApi();
                const interval = setInterval(() => {
                  fetchDataFromApi();
                }, 3000);
            
                // Limpeza do intervalo quando o componente for desmontado
                return () => clearInterval(interval);
              }, []);


                const alteraBotao = async () => {
                    await connectionAPIPost('https://ti.guaira.pr.gov.br/apijwt/api/alarme/status', '\r\n')
                        .then((result) => {
                            console.log(result);
                            if (result === "ativo") {
                                setStatus("O alarme esta ativo !");
                                setCurrentImage(0);
                            }
                        });
                };

                const exibirTexto = () => {
                    setIsVisible(true);
                    setTimeout(() => {
                        setIsVisible(false);
                    }, 6000);
                };




                return (
                    <>
                        <MensagemAlertaContainer>
                            {isVisible && <TextAlerta>{retorno}</TextAlerta>}
                        </MensagemAlertaContainer>
                        <Sos onPress={() => { ativaAlarme(); exibirTexto(); alteraBotao(); } }>
                            <ImageSos source={images[currentImage]} />
                        </Sos>
                        <TextAlerta>{status}</TextAlerta>
                    </>
                );
            }

export default SosButton;