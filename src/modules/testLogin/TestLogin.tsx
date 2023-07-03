import { useEffect, useState } from "react";
import { Text } from "react-native";
import api from "../../services/api";
import axios from "axios";
import ButtonInfo from "../../shared/components/buttonInfo/ButtonInfo";
import ButtonEntrar from "../../shared/components/button/ButtonEntrar";

const TestLogin = () => {
    // const [data, setData] = useState('');

    // useEffect(() => {
    //   fetchData();
    // }, []);

    // const fetchData = async () => {
    //   try {
    //     const response = await api.get("http://192.168.254.165/empresas/usuariosRest"); 
    //     console.log(response => {
    //       const data = response.data;
    //       const codigo = data.codigo;
    //       console.log(codigo);
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    

    async function getUser() {
        try {
          const response = await axios.get('http://192.168.254.165/empresas/usuariosRest');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
    return(
        <ButtonEntrar onPress={getUser}/>
    )
};

export default TestLogin;