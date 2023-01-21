import axios from "axios"
import React from "react"
import { Link, useNavigate } from "react-router-dom"


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

        const body =form
        axios.post('http://localhost:5006/sign-up',body)

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
    
        <div>
        <h1>MyWallet</h1>
        <form onSubmit={handleLogin}>
        
        <input name="username" onChange={handleForm} value={form.username} placeholder="Nome" ></input>
        <input name= "email" onChange={handleForm} value={form.email} placeholder="E-mail"></input>
        <input name="password" onChange={handleForm} value={form.password} placeholder="Senha"></input>
        <input name="repeatPassword" onChange={handleForm} value={form.repeatPassword} placeholder="Confirmar a senha"></input>

        <button type="submit">Entrar</button>
    <Link to="/">Já tem uma conta? Entre agora!!</Link>
    </form>
    
    </div>

    )
    
    }