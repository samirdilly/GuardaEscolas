
import React, { useEffect, useState } from "react";
import ButtonInfo from "../../../shared/components/buttonInfo/ButtonInfo";
import SosButton from "../../../shared/components/buttonSOS/SosButton";
import Footer from "../../../shared/components/footer/Footer";
import { HomeContainer } from "../styles/Home.Styles";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";
import { TextAlerta } from "../../../shared/components/buttonSOS/SosButton.Style";
import { Text } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";





const Home = ({navigation}:any) => {



    const [status, setStatus] = useState("");
      
    // setTimeout(() => {
        
    //     connectionAPIPost('https://ti.guaira.pr.gov.br/apijwt/api/alarme/status', '\r\n')
    //         .then((result) => {
    //             console.log(result)
    //             if (result === "ativo"){
    //                 setStatus("O alarme esta ativo !")
    //             }
    //             if (result === "desativado") {
    //                 setStatus("Unidades estao se deslocando !")
    //             }
    //             else{
    //                 setStatus("")
    //             }
    //         });
    // }, 6000);

    console.log(status);

            


    
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
        
        return () => {
            navigation.setOptions({headerShown: true});
        };
    }, [navigation]);
    return(
        <HomeContainer>
            <SosButton />
            <TextAlerta>{status}</TextAlerta>
            <ButtonInfo/> 
            <Footer/>
        </HomeContainer>
       
    )
}

export default Home;