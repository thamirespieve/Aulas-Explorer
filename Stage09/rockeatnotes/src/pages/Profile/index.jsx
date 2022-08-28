import{FiUser,FiMail,FiLock,FiArrowLeft,FiCamera} from "react-icons/fi"

import { Container,Form,Avatar } from "./style";

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"

export function Profile(){

return(
  <Container>

    <header>
      <FiArrowLeft/>
    </header>

    <Form>
      <Avatar>
         <img src="https://github.com/thamirespieve.png" alt="Foto de usuário do github" />

         <label htmlFor="avatar">
          <FiCamera/>
          <input id="avatar"
          type="file"/>
         </label>
      </Avatar>
      <Input type="text" placeholder="Usuário" icon={FiUser}/>
      <Input type="email" placeholder="E-mail" icon={FiMail}/>
      <Input type="password" placeholder="Senha atual" icon={FiLock}/>
      <Input type="password" placeholder="Nova senha" icon={FiLock}/>

      <Button title="Salvar"/>
    </Form>
  </Container>
)

}