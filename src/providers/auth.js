import React, { useEffect } from "react"

export const AuthContext = React.createContext({});

export const AuthProvider = (props) =>{


    
    const [user, setUser] =React.useState({
        username:'',
        token:''
    })

    const [type,setType] =React.useState("")

useEffect(()=>{

    const userStorage = localStorage.getItem('user');
    if(userStorage){
        setUser(JSON.parse(userStorage))
    }
},[])

return(
    <AuthContext.Provider value = {{user,setUser,type,setType}}>
        {props.children}
    </AuthContext.Provider>
)

}


export const useAuth = () => React.useContext(AuthContext)