import styled from "styled-components/native";
import { Icon } from "../icon/icon";

export const ContainerInput = styled.TextInput`
    width: 100%;
    height: 48px;
    padding: 16px;
    background-color: whitesmoke;
    border-radius: 4px;

    border-width: 1px;
    border-color:  #DCDCDC;
`;

export const TitleText = styled.Text`
    color: #29378e;
    font-size: 13px;
    margin: 4px 0px 4px 4px;
    font-family: Poppins-SemiBold;
`;


export const IconEye = styled(Icon)`

  position: absolute;
  right: 16px;
  top: 12px;

`;