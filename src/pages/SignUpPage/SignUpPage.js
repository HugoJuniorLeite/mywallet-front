import axios from "axios"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SignUpPage(){

    const [form, setForm] = React.useState({
        username:"",
        email:"",
        password:"",
        repeatPassword:""
    })

    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault(e)

        axios.post('http://localhost:5006/sign-up',form)

        .then(res=>{
            
            navigate("/")
        })
        .catch(err =>{console.log(err.message)})
    }

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    
    return(
    
        <ContainerSingUp>
        <h1>MyWallet</h1>
        <form onSubmit={handleLogin}>
        
        <input name="username" onChange={handleForm} value={form.username} placeholder="Nome" ></input>
        <input name= "email" onChange={handleForm} value={form.email} placeholder="E-mail"></input>
        <input name="password" type="password" onChange={handleForm} value={form.password} placeholder="Senha"></input>
        <input name="repeatPassword" type="password" onChange={handleForm} value={form.repeatPassword} placeholder="Confirmar a senha"></input>

        <button type="submit">Entrar</button>
    <Link to="/">Já tem uma conta? Entre agora!!</Link>
    </form>
    
    </ContainerSingUp>
    )
    
    }


    const ContainerSingUp = styled.main`
    margin-top: 9.5rem;
    h1{
        font-family: "Saira Stencil One";
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 5rem;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom:2.8rem;
    }
    `

