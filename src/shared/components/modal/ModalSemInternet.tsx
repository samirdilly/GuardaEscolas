import { Modal, Text } from "react-native";
import { ModalContainer, ModalFaleContainer, ModalFaleView, ModalView } from "./Modal.Style";
import { ButtonInfoContainer, TextInfo } from "../buttonInfo/ButtonInfo.Styles";
import { TextCadastro } from "../../../modules/login/styles/Login.Styles";

const ModalSemInternet = ({ isVisible, closeModal }: any) => {


    return(
        <Modal  
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
            >
            <ModalFaleContainer>
                <ModalFaleView>
                    <TextCadastro>Sem Conexção com a internet</TextCadastro>=
                    <ButtonInfoContainer onPress={closeModal} >
                        <TextInfo>SAIR</TextInfo>
                    </ButtonInfoContainer>
                </ModalFaleView>
            </ModalFaleContainer>
        </Modal>
        
    );
};

export default ModalSemInternet;