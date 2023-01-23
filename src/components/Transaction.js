import styled from "styled-components"


export default function Transaction({type, price, description, date}){
    return(
        
        <ContainerList>
            <div>
            <span>{date}</span>
            <span>{description}</span>
            </div>
            <span>{price}</span>
                
            
        </ContainerList>
    )
}

const ContainerList = styled.main`
display:flex;
justify-content:space-between;
font-family: "Raleway";
font-size: 1.6rem;
font-weight: 400;
line-height: 1.9rem;
letter-spacing: 0em;
padding: 2.3rem 1.1rem 0 1.2rem;
    text-align:left;
span:nth-child(1){
    color:var(--gray);
    padding-right:0.8rem;
}
span:nth-child(2){
    color:var(--black);
    text-align:left;
}
div{
}

`