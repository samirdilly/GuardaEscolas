import { Modal, Text } from "react-native";
import { ModalContainer, ModalFaleContainer, ModalFaleView, ModalView } from "./Modal.Style";
import { ButtonInfoContainer, TextInfo } from "../buttonInfo/ButtonInfo.Styles";
import { TextCadastro } from "../../../modules/login/styles/Login.Styles";

const ModalFale = ({ isVisible, closeModal }: any) => {


    return(
        <Modal  
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
            >
            <ModalFaleContainer>
                <ModalFaleView>
                    <TextCadastro>Guarda Municipal:</TextCadastro>
                    <TextCadastro>3642-2800</TextCadastro>
                    <ButtonInfoContainer onPress={closeModal} >
                        <TextInfo>SAIR</TextInfo>
                    </ButtonInfoContainer>
                </ModalFaleView>
            </ModalFaleContainer>
        </Modal>
        
    );
};

export default ModalFale;