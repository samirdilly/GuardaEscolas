import { Platform } from "react-native";
import styled from "styled-components/native";


interface  ButtonContainerProps {
    margin?: string;
};

export const ButtonContainer = styled.TouchableOpacity <ButtonContainerProps>`

    width: 80%;
    height: 49px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #c1e8fb;
    ${Platform.select({
        android:`
            elevation: 3;
        `
    })}
    ${(props) => (props.margin? `margin: ${props.margin};` : '') }

`;

export const TextButton = styled.Text`
    color: #29378e;
    font-family: Poppins-Bold;
    margin-top: 5px;
`;
