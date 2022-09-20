import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

  return(
    <AuthContext.Provider value={{name:"Thamires", email:"thamires.pieve@gmail.com"}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){

  const context = useContext(AuthContext)

  return context

}

export {AuthProvider,useAuth}