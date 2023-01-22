import axios from "axios";

const BASE_URL = "http://localhost:5006/transactions";


function creatConfig(token){
    return{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
}

function getTransactions(token){
const promisse = axios.get(BASE_URL,creatConfig(token))
return promisse
}

const apiTransaction = {getTransactions}

export default apiTransaction