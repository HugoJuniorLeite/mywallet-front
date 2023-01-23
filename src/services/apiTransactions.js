import axios from "axios";

const REACT_APP_API_URL = "http://localhost:5006/transactions";


function creatConfig(token){
    return{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
}

function getTransactions(token){
const promisse = axios.get(REACT_APP_API_URL,creatConfig(token))
return promisse
}

const apiTransaction = {getTransactions}


export default apiTransaction
