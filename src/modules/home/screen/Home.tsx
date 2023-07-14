
import React, { useEffect } from "react";
import ButtonInfo from "../../../shared/components/buttonInfo/ButtonInfo";
import SosButton from "../../../shared/components/buttonSOS/SosButton";
import Footer from "../../../shared/components/footer/Footer";
import { HomeContainer } from "../styles/Home.Styles";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";





const Home = ({navigation}:any) => {
    
    
    // const test = async () => {
    //     const resultBack = await connectionAPIPost('https://ti.guaira.pr.gov.br/apijwt/api/usuario/validarToken', '\r\n').catch(() => undefined);
    //     console.log(resultBack);
    //     if(!resultBack) {
    //         navigation.navigate("Login")
    //     }
    // };
   
    //     setTimeout(() => {
    //             test();
    //     }, 1000);
      


    
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
        
        return () => {
            navigation.setOptions({headerShown: true});
        };
    }, [navigation]);
    return(
        <HomeContainer>
            <SosButton/>
            <ButtonInfo/> 
            <Footer/>
        </HomeContainer>
       
    )
}

export default Home;