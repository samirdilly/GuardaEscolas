import styled from "styled-components/native";


export const Sos = styled.TouchableOpacity`
    width: 70%;
    height:35%;
    justify-content: center;
    align-items: center;
   
`;

export const ImageSos = styled.Image`
    width: 100%;
    height: 100%;  
`;

export const TextAlerta = styled.Text`
    font-family: Poppins-Bold;
    font-size: 16px;
    color: #29378e; 
    
`;
export const TextStatus = styled.Text`
    font-family: Poppins-Bold;
    font-size: 18px;
    text-align: center;
    color: white;
    /* color: #29378e;  */

    
`;
export const TextStatusContainer = styled.View`
    height: 5%;
    width: 90%;
    position: absolute;
    top: 60%;
    justify-content: center;
    border-width: 2px;
    border-color: red;
    border-radius: 20px;
    background-color: red;
    
    
`;

export const MensagemAlertaContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
`;