import { useContext, useState,createContext } from "react";

import {api} from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})

  async function singIn({email,password}){

    try {

      const response = await api.post("/sessions",{email,password})

      console.log(response)

      const {user,token} = response.data

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({user,token})

    } catch (error) {
      if(error.reponse){
        alert(error.response.data.message)
      }else{
        alert('Não foi possível entrar.')
      }
    }

  }

  return(
    <AuthContext.Provider value={{singIn,user:data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){

  const context = useContext(AuthContext)

  return context

}

export {AuthProvider,useAuth}