import styled from 'styled-components/native'


interface displayProps {
    margin?:string
    customMargin?: string;
};

export const DiplayFlexColumm = styled.View<displayProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: ${(props) => props.customMargin ? props.customMargin : '0px'};
`;