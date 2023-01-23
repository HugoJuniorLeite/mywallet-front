import axios from "axios"
import { useState } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../providers/auth"

export default function Deposit(){

    const {user, type, setType} = useAuth()

    const [form,setForm] = useState({
        price:'',
        description:''
    })

    const navigate =useNavigate()
    
    function handleInsert(e){
       e.preventDefault()
     
const body ={
    price: Number(form.price),
    description: form.description,
    type:type
}
const config ={
    headers: {
    'Authorization': `Bearer ${user.token}`
  }
}

       axios.post("http://localhost:5006/transactions",body,config)
       .then(res=>{

        setForm({
            price:'',
            description:''                
       })

       setType("")

       navigate("/home")

        })
       .catch(err=>{ console.log(err.message)})
}
    

    function handleForm(e){
      setForm({
        ...form,
        [e.target.name] : e.target.value
    })    
    }
    return(

        <>
        <form onSubmit={handleInsert}>
        <input name="price" onChange={handleForm} value={form.price} type="number" placeholder="Valor"></input>
        <input name="description" onChange={handleForm} value={form.description} type="text" placeholder="Descrição"></input>
        <button type="submit" >Salvar entrada</button>
        </form>
        </>
    )
}