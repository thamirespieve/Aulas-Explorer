import {FiMail,FiLock} from "react-icons/fi"
import { Container,Form,BackgroundImg } from "./style";

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"

import { Link } from "react-router-dom";

import { useContext } from "react";
import { useAuth } from "../../hooks/auth";

export function SingIn(){

  const data = useAuth()

  console.log("Meu contexto =>", data)

  return(
  <Container>
    <Form>
    <h1>Rocket Notes</h1>
    <p>Aplicação para salvar e gerenciar seus links úteis.</p>

    <h2>Faça seu login</h2>
    <Input type="text" placeholder="E-mail" icon={FiMail}/>
    <Input type="password" placeholder="Senha" icon={FiLock}/>

    
    <Button title="Entrar"/>

    <Link to="/register">Criar conta</Link>
    </Form>
    <BackgroundImg/>
  </Container>
  )
}