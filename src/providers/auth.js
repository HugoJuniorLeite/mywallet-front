import React, { useEffect } from "react"

export const AuthContext = React.createContext({});

export const AuthProvider = (props) =>{


    
    const [user, setUser] =React.useState({
        username:'',
        token:''
    })

useEffect(()=>{

    const userStorage = localStorage.getItem('user');
    if(userStorage){
        setUser(JSON.parse(userStorage))
    }
    //else{
      //  setToken({
        //    token:""
       // })
   // }

},[])

return(
    <AuthContext.Provider value = {{user,setUser}}>
        {props.children}
    </AuthContext.Provider>
)

}


export const useAuth = () => React.useContext(AuthContext)