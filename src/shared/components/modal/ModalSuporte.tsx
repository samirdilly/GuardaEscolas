import { useState } from "react";
import { Text } from "react-native";
import { Alert } from "react-native";
import { Modal } from "react-native";
import ButtonInfo from "../buttonInfo/ButtonInfo";
import { ButtonInfoContainer, TextInfo } from "../buttonInfo/ButtonInfo.Styles";
import { ModalContainer, ModalView } from "./Modal.Style";

const ModalSuporte = ({ isVisible, closeModal, content }) => {


    return(
        <Modal  
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
            >
            <ModalContainer>
                <ModalView>
                    <Text>{content}</Text>
                    <ButtonInfoContainer onPress={closeModal} >
                        <TextInfo>SAIR</TextInfo>
                    </ButtonInfoContainer>
                </ModalView>
            </ModalContainer>
        </Modal>
        
    );
};

export default ModalSuporte;