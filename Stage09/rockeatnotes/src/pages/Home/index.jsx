import{FiPlus,FiSearch} from "react-icons/fi"
import {Container,Content,Brand,Menu,Search,Newnote} from "./style"
import {Header} from "../../components/Header"
import{ButtonText} from "../../components/ButtonText"
import { Input } from "../../components/Input"

export function Home(){


  return(
    <Container>
      <Brand>
        <h1>RocketNote</h1>
      </Brand>
      <Header/>

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs"/></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>

      </Content>

      <Newnote>
        <FiPlus/>Criar Nota
      </Newnote>

    </Container>


  )
}