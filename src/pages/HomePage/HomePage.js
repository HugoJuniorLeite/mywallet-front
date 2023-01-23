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

    const token = user.token

        console.log(user)
    
        const config ={
            headers: {
            'Authorization': `Bearer ${token}`
          }
        }
    
   // apiTransaction.getTransactions(config)
    

   axios.get("http://localhost:5006/transactions",config)
   .then(res=>{
        console.log(res.data)
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
<ul>
<li>
Olá, {user.username}
<ion-icon name="log-out-outline"></ion-icon>
</li>
</ul>

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
    <Link to="/nova-saida">
    <ion-icon name="remove-circle-outline"></ion-icon>
    <p>Nova saída</p>
    </Link>
    </Button>

</SectionType>
</ContainerHome>
)
}

const ContainerHome = styled.main`
display:flex;
flex-direction:column;
align-items:center;
li{ display:flex;
justify-content:flex-start
}
`
const SectionTransactions = styled.section`
width: 32.6rem;
height:44.6rem;
background-color:var(--white);
margin: 2.2rem 0 1.3rem 0;
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
    height:14.4rem;
    background-color:var(--light-purple);
    color:var(--white);
    :nth-child(1){
    margin-right:1.5rem;
}
ion-icon{
    width: 2.5rem;
    height:2.5rem;
    padding: 0 0.8rem 3.1rem 0;
    margin: -2.5rem 0 0 -10.8rem;
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
    a{
        text-decoration:none;
    }
    `