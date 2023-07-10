import { Alert, Modal, Text } from "react-native";
import { ButtonInfoContainer, ContainerGrid, TextInfo } from "./ButtonInfo.Styles";
import ModalSuporte from "../modal/ModalSuporte";
import { ModalContainer, ModalView } from "../modal/Modal.Style";
import { useState } from "react";
import ModalFale from "../modal/ModalFale";


const ButtonInfo = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalFaleVisible, setModalFaleVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false)
    }
    const openModalFale = () => {
        setModalFaleVisible(true);
    };
    const closeModalFale = () => {
        setModalFaleVisible(false)
    }
    return(
    <ContainerGrid>
            <ModalSuporte isVisible={modalVisible} closeModal={closeModal}/>
            <ModalFale isVisible={modalFaleVisible} closeModal={closeModalFale} />
            <ButtonInfoContainer onPress={openModalFale}>
                <TextInfo>Fale Conosco</TextInfo>
            </ButtonInfoContainer>
            
            <ButtonInfoContainer onPress={openModal}>
                <TextInfo>Suporte</TextInfo>
            </ButtonInfoContainer>
           
    </ContainerGrid>
    )
}

export default ButtonInfo;