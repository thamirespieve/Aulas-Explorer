import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import {FiUser,FiMail,FiLock} from "react-icons/fi"

import {Container, Form, BackgroundImg} from "./style"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { api } from "../../services/api"

export function SingUp(){

  const [name,setName]= useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate= useNavigate()

  async function handleSingUp(){
    
    if(!name || !email || !password){
      return alert("É necessário preencher todos os campos!")
    }

    await api.post("/users",{name,email,password})
    .then(()=>{ 
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch((error)=>{
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Não foi possível cadastrar este usuário :(")
      }
    })
  }

  return(
    <Container>
      <BackgroundImg/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input type= "text" placeholder="Nome" icon={FiUser} onChange={(event)=>setName(event.target.value)} />
        <Input type="email" placeholder="E-mail" icon={FiMail} onChange={(event)=>setEmail(event.target.value)} />
        <Input type="password" placeholder="Senha" icon={FiLock} onChange={(event)=>setPassword(event.target.value)} />

        <Button title="Cadastrar" onClick={handleSingUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>

    </Container>
  )

}