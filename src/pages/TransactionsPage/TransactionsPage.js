import styled from "styled-components"
import Deposit from "../../components/Deposit"
import Outflow from "../../components/Outflow"
import { useAuth } from "../../providers/auth"

export default function TransactionsPage(){

    const {type} = useAuth()

    console.log(type)
    
    return(
        <ContainerInsertMoviments>

        
        {type === "deposit"
        ?<div>
        <p>Nova entrada</p>
        <Deposit/>
        </div>

        :<div>
        <p>Nova saída</p>
        <Outflow/>
        </div>
}

        </ContainerInsertMoviments>
    )
    
    }

    const ContainerInsertMoviments = styled.main`
    background-color: var(--purple);
    padding-top:2.5rem;
    display:flex;
    flex-direction:column;

    p{
        color:red;
        align-items:center;
        padding: 0 0 4rem 2.4rem;
    }
    `