
import { Image } from "react-native";
import { ImageSos, Sos } from "./SosButton.Style";
import ConnectionAPI, { connectionAPIPost } from "../../functions/connection/connectionAPI";
import { RequestLogin } from "../../types/requestLogin";
import { ReturnLogin } from "../../types/returnLogin";
import axios from "axios";
import { useRequest } from "../../hooks/useRequest";
import { AtivaAlarme } from "../../types/requestAlarme";
import { getAuthorizationToken } from "../../functions/connection/auth";

const SosButton = () => {

    const{
        ativaAlarme
    } = useRequest();
    
    // console.log(email)

    // const ativaAlarme = async (body: ReturnLogin) => {
    //     await connectionAPIPost<ReturnLogin>("http://localhost/apijwt/api/alarme/ativa", body)
    //     .then((result) => {
    //         console.log(result)
    //     })
    //     .catch(() => {
    //         console.log("erro")
    //     });

    // };

    // const axios = require('axios');
    // let data = JSON.stringify({
    //   "email": "seti@guaira.pr.gov.br"
    // });
    
    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://localhost/apijwt/api/alarme/ativa',
    //   headers: { 
    //     'Content-Type': 'application/json', 
    //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXRpQGd1YWlyYS5wci5nb3YuYnIifQ.U_OVtdEucQ1ypswf1i7IjCLBzCgVh6mQHx2WS6J8VTaLR181ve-ojWRBF3OG-GSEpKSr-CVX4GUt0z1t3wSrsw'
    //   },
    //   data : data
    // };
    // const ativaAlarme = () => {
    //     axios.request(config)
    //     .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     })
    //     .catch((error) => {
    //     console.log(error);
    //     });
    // }


    return(

        
        <Sos onPress={ativaAlarme}>
            <ImageSos source={require('../../../assets/sos.png')}/>
        </Sos>
    )
}

export default SosButton;