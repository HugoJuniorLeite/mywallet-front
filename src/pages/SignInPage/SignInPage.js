import axios from "axios"
import React from "react"
import { Link, useNavigate } from "react-router-dom"


export default function SignInPage(){

const [form,setForm] = React.useState({
    email:'',
    password:''
})

const [token,setToken] =React.useState()

const [user, setUser] = React.useState({})

const navigate = useNavigate()

function handleLogin(e){
e.preventDefault()

console.log(form)

const body =form

console.log(body)
axios.post("http://localhost:5006/sign-in",body)

.then(res=>{

    const teste =res.data
    setToken(res.data)

    console.log(teste,"teste")
    console.log(res)
     setForm({
         email:"",
         password:""
     })

    console.log("foi")

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
        <div>
            <h1>MyWallet</h1>
        <form onSubmit={handleLogin}>
        
            <input name= "email" onChange={handleForm} value={form.email} placeholder="E-mail"></input>

            <input name="password" onChange={handleForm} value={form.password} placeholder="Senha"></input>
            
            <button type="submit">Entrar</button>
        <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
        </form>
        
        </div>
    )
    
    }