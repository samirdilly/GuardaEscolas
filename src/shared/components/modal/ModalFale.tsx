import { Modal, Text } from "react-native";
import { ModalContainer, ModalFaleContainer, ModalFaleView, ModalView } from "./Modal.Style";
import { ButtonInfoContainer, TextInfo } from "../buttonInfo/ButtonInfo.Styles";

const ModalFale = ({ isVisible, closeModal, content }) => {


    return(
        <Modal  
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
            >
            <ModalFaleContainer>
                <ModalFaleView>
                    <Text>{content}</Text>
                    <ButtonInfoContainer onPress={closeModal} >
                        <TextInfo>SAIR</TextInfo>
                    </ButtonInfoContainer>
                </ModalFaleView>
            </ModalFaleContainer>
        </Modal>
        
    );
};

export default ModalFale;