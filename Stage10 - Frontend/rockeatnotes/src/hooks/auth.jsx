import { useContext, useState,createContext,useEffect } from "react";

import {api} from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})

  async function updateProfile({user,avatarFile}){

    try {

      if(avatarFile){
        const filesUploadForm = new FormData()
        filesUploadForm.append("avatar", avatarFile)

        const response = await api.patch("users/avatar",filesUploadForm)
        user.avatar=response.data.avatar
      
      }

      await api.put("/users",user)

      localStorage.setItem("@rocketnotes:user",JSON.stringify(user))

      setData({user,token:data.token})

      alert("Perfil atualizado com sucesso!")
      
    } catch (error) {
      
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível atualizar as informações deste perfil. Tente novamente mais tarde!")
      }

    }

  }

  async function singIn({email,password}){

    try {

      const response = await api.post("/sessions",{email,password})
      const {user,token} = response.data

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      localStorage.setItem("@rocketnotes:user",JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token",token)

      setData({user,token})

    } catch (error) {
      if(error.reponse){
        alert(error.response.data.message)
      }else{
        alert('Não foi possível entrar.')
      }
    }

  }

function singOut(){

  localStorage.removeItem("@rocketnotes:token")
  localStorage.removeItem("@rocketnotes:user")
  
  setData({})

}

  useEffect(()=>{
    const token = localStorage.getItem("@rocketnotes:token")
    const user = localStorage.getItem("@rocketnotes:user")

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({token, user:JSON.parse(user)})
    }


  },[])

  return(
    <AuthContext.Provider
     value={
      {singIn,
      singOut,
      updateProfile,
      user:data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){

  const context = useContext(AuthContext)

  return context

}

export {AuthProvider,useAuth}