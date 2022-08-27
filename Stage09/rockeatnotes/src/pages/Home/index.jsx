import{FiPlus,FiSearch} from "react-icons/fi"
import {Container,Content,Brand,Menu,Search,Newnote} from "./style"
import {Header} from "../../components/Header"
import{ButtonText} from "../../components/ButtonText"
import { Input } from "../../components/Input"
import {Section} from "../../components/Section"
import {Note} from "../../components/Note"

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
        <Section title="Minhas notas">
            <Note  data={{
              title:"React",
              tags:[
                {
                  id:"1",
                  name:"React"
                },
                {
                  id:"2",
                  name:"Rocketseat"
                },
              ]
            }} />
        </Section>
      </Content>

      <Newnote>
        <FiPlus/>Criar Nota
      </Newnote>

    </Container>


  )
}