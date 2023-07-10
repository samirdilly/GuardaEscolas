import { useState } from "react";
import { Text } from "react-native";
import { Alert } from "react-native";
import { Modal } from "react-native";
import ButtonInfo from "../buttonInfo/ButtonInfo";
import { ButtonInfoContainer, TextInfo } from "../buttonInfo/ButtonInfo.Styles";
import { ModalContainer, ModalView } from "./Modal.Style";
import { TextCadastro } from "../../../modules/login/styles/Login.Styles";

const ModalSuporte = ({ isVisible, closeModal }: any) => {


    return(
        <Modal  
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
            >
            <ModalContainer>
                <ModalView>
                    <TextCadastro>Informática Prefeitura: </TextCadastro>
                    <TextCadastro>3642-9970</TextCadastro>
                    <ButtonInfoContainer onPress={closeModal} >
                        <TextInfo>SAIR</TextInfo>
                    </ButtonInfoContainer>
                </ModalView>
            </ModalContainer>
        </Modal>
        
    );
};

export default ModalSuporte;