import apiTransaction from "../../services/apiTransactions"
import { useAuth } from "../../providers/auth"
import { useEffect, useState } from "react"
import Transaction from "../../components/Transaction"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function HomePage(){
    
    const {user,setType}= useAuth()
    const [transactions, setTransactions] = useState([])
   

const navigate =useNavigate()

   useEffect (transactionsList,[])

    function transactionsList(){

   apiTransaction.getTransactions(user.token)
   .then(res=>{    
        setTransactions(res.data)
    })
    .catch(err =>{console.log(err.message)})
}

function deposit(){

setType("deposit")
navigate("/nova-entrada")

}

function outflow(){

    setType("outflow")
    navigate("/nova-saida")
    
}

return(

<ContainerHome>

<ContainerHeader>


<div>
<span>
Olá, {user.username}
</span>
</div>
<div>
<span>
<ion-icon name="log-out-outline"></ion-icon>
</span>
</div>

</ContainerHeader>

<SectionTransactions>

{transactions.length <=0 

?<p>Não há registros de entrada ou saída</p>

:transactions.map(t=>( <Transaction key={t.userId} type={t.type} price={t.price} description={t.description} date={t.date}/> )) 
}

</SectionTransactions>


<SectionType>
   
    <Button onClick={deposit}>
   
    <ion-icon name="add-circle-outline"></ion-icon>
    <p>Nova entrada</p>
   
    </Button>
    
    <Button onClick={outflow}>
   
    <ion-icon name="remove-circle-outline"></ion-icon>
    <p>Nova saída</p>
   
    </Button>

</SectionType>
</ContainerHome>
)
}

const ContainerHome = styled.main`
display:flex;
flex-direction:column;
align-items:center;

`


const ContainerHeader = styled.header`
display:flex;
justify-content:space-between;
width:32.7rem;
height:3.1rem;
margin-bottom:4.5rem;
div{
    margin-top: 2.5rem;
}
span{
    font-family: "Raleway";
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 3.1rem;
    letter-spacing: 0em;
    text-align: left;
    color:var(--white);
}
span ion-icon{
    height: 2.4rem;
    width: 2.3rem;
}
`

const SectionTransactions = styled.section`
width: 32.6rem;
height:44.6rem;
background-color:var(--white);
margin: 0 0 1.3rem 0;
p{
    text-align:center;
}

`
const SectionType =styled.section`
display:flex;
justify-content:center;
`

const Button = styled.button`
    width: 15.5rem;
    height:11.4rem;
    background-color:var(--light-purple);
    color:var(--white);
    :nth-child(1){
    margin-right:1.5rem;
}
ion-icon{
    width: 2.5rem;
    height:2.5rem;
    padding: 0 0.8rem 3.1rem 0;
    margin: 0 0 0 -10.8rem;
    color:var(--white);
}
    p{  
        width:6rem;
        height:4rem;
        padding-left:0.9rem;
        font-family: 'Raleway';
        font-size: 1.7rem;
        font-weight: 700;
        line-height: 2rem;
        letter-spacing: 0em;
        text-align: left;
        color:var(--white);
    }
    `
