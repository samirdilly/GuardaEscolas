
import ButtonInfo from "../../../shared/components/buttonInfo/ButtonInfo";
import SosButton from "../../../shared/components/buttonSOS/SosButton";
import Footer from "../../../shared/components/footer/Footer";
import { HomeContainer } from "../styles/Home.Styles";




const Home = () => {
    return(
        <HomeContainer>
            <SosButton/>
            <ButtonInfo/> 
            <Footer/>
        </HomeContainer>
       
    )
}

export default Home;