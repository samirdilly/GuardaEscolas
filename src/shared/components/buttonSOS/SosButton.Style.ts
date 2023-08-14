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
    font-size: 10px;
    color: #29378e; 
    
`;
export const TextStatus = styled.Text`
    font-family: Poppins-Bold;
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 60%;
    color: red;
    /* color: #29378e;  */

    
`;
export const TextNome = styled.Text`
    text-align: center;
    font-family: Poppins-Bold;
    font-size: 16px;
    color: #29378e; 
    margin-left: 60px;
    margin-right: 60px;
    position: absolute;
    top: 45px;
    
`;

// export const TextStatusContainer = styled.View`
//     height: 5%;
//     width: 90%;
//     position: absolute;
//     top: 60%;
//     justify-content: center;
//     border-width: 2px;
//     border-color: red;
//     border-radius: 20px;
//     background-color: red;
    
    
// `;

export const MensagemAlertaContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
`;