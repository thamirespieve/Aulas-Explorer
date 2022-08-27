import {FiUser,FiMail,FiLock} from "react-icons/fi"

import {Container, Form, BackgroundImg} from "./style"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
export function SingUp(){

  return(
    <Container>
      <BackgroundImg/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input type= "text" placeholder="Nome" icon={FiUser}/>
        <Input type="email" placeholder="E-mail" icon={FiMail}/>
        <Input type="password" placeholder="Senha" icon={FiLock}/>

        <Button title="Cadastrar"/>

        <a href="#">Voltar para o login</a>
      </Form>

    </Container>
  )

}