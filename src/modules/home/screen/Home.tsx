
import React from "react";
import ButtonInfo from "../../../shared/components/buttonInfo/ButtonInfo";
import SosButton from "../../../shared/components/buttonSOS/SosButton";
import Footer from "../../../shared/components/footer/Footer";
import { HomeContainer } from "../styles/Home.Styles";





const Home = ({navigation}:any) => {


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