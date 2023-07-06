
import { Image } from "react-native";
import { ImageSos, Sos } from "./SosButton.Style";
import { connectionAPIPost } from "../../functions/connection/connectionAPI";
import { RequestLogin } from "../../types/requestLogin";
import { ReturnLogin } from "../../types/returnLogin";
import axios from "axios";
import { useRequest } from "../../hooks/useRequest";

const SosButton = () => {

    const {
        email
    } = useRequest();


    const ativaAlarme = async () => {
        await connectionAPIPost("http://localhost/apijwt/api/alarme/ativa", email)
    }
    return(

        
        <Sos onPress={ativaAlarme}>
            <ImageSos source={require('../../../assets/sos.png')}/>
        </Sos>
    )
}

export default SosButton;