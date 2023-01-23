import axios from "axios"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useAuth } from "../../providers/auth"

export default function SignInPage(){

const [form,setForm] = React.useState({
    email:'',
    password:''
})

const {setUser}= useAuth()

const navigate = useNavigate()

function handleLogin(e){
e.preventDefault()

axios.post("http://localhost:5006/sign-in",form)    

.then(res=>{localStorage.setItem('user', JSON.stringify(res.data));
    setUser(res.data)

     setForm({
         email:"",
         password:""
     })

    navigate('/home')
})
.catch(err=>{ console.log(err.message)})
}

function handleForm(e){
setForm({
    ...form,
    [e.target.name]:e.target.value
})
}

    return(
        <ContainerSingIn>
            <h1>MyWallet</h1>
        <form onSubmit={handleLogin}>
        
            <input name= "email" onChange={handleForm} value={form.email} placeholder="E-mail"></input>
            <input name="password" type="password" onChange={handleForm} value={form.password} placeholder="Senha"></input>
            
            <button type="submit">Entrar</button>
        <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
        </form>
        
        </ContainerSingIn>
    )
    
    }

    const ContainerSingIn = styled.main`
    margin-top: 15.9rem;
    h1{
        font-family: "Saira Stencil One";
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 5rem;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom:2.4rem;
    }
    `