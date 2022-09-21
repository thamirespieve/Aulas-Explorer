import { useState } from "react";
import {FiMail,FiLock} from "react-icons/fi"
import { Container,Form,BackgroundImg } from "./style";

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function SingIn(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const {singIn} = useAuth()

  function handleSingIn(){
    
    singIn({email,password})

  }

  return(
  <Container>
    <Form>
    <h1>Rocket Notes</h1>
    <p>Aplicação para salvar e gerenciar seus links úteis.</p>

    <h2>Faça seu login</h2>
    <Input type="text" placeholder="E-mail" icon={FiMail} onChange={(event)=>setEmail(event.target.value)} />
    <Input type="password" placeholder="Senha" icon={FiLock} onChange={(event)=>{setPassword(event.target.value)}} />

    
    <Button title="Entrar" onClick={handleSingIn} />

    <Link to="/register">Criar conta</Link>
    </Form>
    <BackgroundImg/>
  </Container>
  )
}