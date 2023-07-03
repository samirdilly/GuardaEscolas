
import { Image } from "react-native";
import { ImageSos, Sos } from "./SosButton.Style";

const SosButton = () => {
    return(
        <Sos>
            <ImageSos source={require('../../../assets/sos.png')}/>
        </Sos>
    )
}

export default SosButton;