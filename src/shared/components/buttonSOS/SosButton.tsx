
import { Button, Text, TouchableOpacityProps, View } from "react-native";
import { ImageSos, Sos, TextNome, TextStatus } from "./SosButton.Style";
import { connectionAPIPost } from "../../functions/connection/connectionAPI";

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Geolocation from '@react-native-community/geolocation';
import ModalSemInternet from "../modal/ModalSemInternet";


interface ButtonProps extends TouchableOpacityProps{
    disabled?:boolean;
    onPress?: () => void;
}

let statusB = false

const SosButton = ({disabled, onPress}: ButtonProps) => {

    
    const navigation = useNavigation();
    const [isConditionMet, setIsConditionMet] = useState(false);
    const [currentImage, setCurrentImage] = useState(1);
    const [status, setStatus] = useState("");
    const [nome, setNome] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    
    
    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false)
    }

    // <ModalSuporte isVisible={modalVisible} closeModal={closeModal}/>
    
    
    //GEOLOCALIZAÇAO
    const [latitude, setLatitude] = useState(Number);
    const [longitude, setLongitude] = useState(Number);




           
           
        const ativaAlarme = async () => {
            setStatus("Processando pedido...!")
            statusB = true
            setCurrentImage(4);
            const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            
            try {
                const getPosition = async () => {
                    
                    return new Promise((resolve, reject) => {
                        Geolocation.getCurrentPosition(
                            (position) => resolve(position),
                            (error) => reject(error),
                            { enableHighAccuracy: true, maximumAge: 1000 }
                        );
                    });
                };
                
                    
                

                const updateLatitude = async () => {
                    const position = await getPosition();
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;
                    // setStatus("Processando pedido...!")
                    if (lat !== 0) {
                        
                        // Latitude é diferente de 0, podemos prosseguir
                        setLatitude(lat);
                        setLongitude(long);
                        setStatus("O alarme esta ativo!");
                        setCurrentImage(0);
                        setIsConditionMet(false);      
                        console.log("Latitude obtida:", lat);

                        // Agora que temos a latitude, podemos chamar connectionAPIPost
                        await connectionAPIPost('https://ti.guaira.pr.gov.br/apijwt_teste/api/alarme/ativa' + '?latitudes=' + -24.08752421519073 + '&longitudes=' + -54.23952585010406, '\r\n')
                            .then((result) => {
                                console.log(result);
                                if(result === "fora do raio geografico"){
                                    setStatus("Fora do raio geográfico !!")
                                }
                            })
                            .catch((error) => {
                                console.error("Erro ao chamar a API:", error);
                                navigation.navigate("Login");
                            });
                    } else {
                        // Latitude ainda é 0, esperamos e atualizamos novamente
                        console.log("Latitude ainda é 0, esperando...");
                        await sleep(1000);
                        await updateLatitude();
                        
                    }
                };
                
                await updateLatitude();
            } catch (error) {
                console.error("Erro ao obter a localização:", error.message);
                navigation.navigate("Login");
            }
            
        }
    
        // const HandleOnPress = () => {
            
        //     setStatus("Processando pedido...!")
        


        const images = [
            require('../../../assets/sos_amarelo.png'),
            require('../../../assets/sos_verde.png'),
            require('../../../assets/sos_vermelho.png'),
            require('../../../assets/semWifi.png'),
            require('../../../assets/sos_vermelho2.png')
          ];


         

        const fetchDataFromApi = async () => {
            
            await connectionAPIPost('https://ti.guaira.pr.gov.br/apijwt_teste/api/alarme/status', '\r\n')
                
                .then((result) => {
                    console.log(result)
                    setNome(result.nome)
                    //  if (result.status === "ativo") {
                    //     setStatus("O alarme esta ativo!");
                    //     setCurrentImage(0);
                    //     setIsConditionMet(false)
                        
                        
                    // }
                    if (result.status === "desativado") {
                        setStatus("Unidades estao se deslocando !")
                        setCurrentImage(1)
                        setIsConditionMet(false)
                        statusB = false
                    }
                    else if (result.status === "não encotrado") {                     
                        

                        if(statusB){
                            setStatus("Processando pedido...!")
                        }
                        else{                          
                            setStatus("")
                            setCurrentImage(2);
                            setIsConditionMet(true)
                        }
                                          
                    }

                  
                    
                }).catch((error) =>{
                    if(error){
                        setStatus("Sem conexão com a internet !")
                        setCurrentImage(3);
                    }
                })
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



                return (
                    <>
                        <TextNome>{nome}</TextNome>

                        <Sos disabled={! isConditionMet} onPress={() => { ativaAlarme();  } }>
                            <ImageSos source={images[currentImage]} />
                        </Sos>

                             <TextStatus>{status}</TextStatus> 
                        
                            <ModalSemInternet isVisible={modalVisible} closeModal={closeModal}/>
                        



                    </>
                );
            }

export default SosButton;