import { TextButton } from "./Button.Styles"
import { ButtonContainer } from "./Button.Styles";



const ButtonEntrar = ({...props}) => {

    
    return(
        <ButtonContainer margin="20px" {...props}>
            <TextButton>ENTRAR</TextButton>
        </ButtonContainer>
    )
}

export default ButtonEntrar;