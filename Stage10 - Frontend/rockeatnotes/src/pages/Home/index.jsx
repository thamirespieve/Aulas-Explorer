import{FiPlus,FiSearch} from "react-icons/fi"
import {Container,Content,Brand,Menu,Search,Newnote} from "./style"
import {Header} from "../../components/Header"
import{ButtonText} from "../../components/ButtonText"
import { Input } from "../../components/Input"
import {Section} from "../../components/Section"
import {Note} from "../../components/Note"
import { useState } from "react"
import { useEffect } from "react"
import { api } from "../../services/api"

export function Home(){
  const [tags, setTags] = useState([])
  const [tagSelected, setTagSelected] = useState([])

  function handleTagSelected(tag) {

    const alreadySelected = tagSelected.includes(tag)
console.log(alreadySelected)
    if(alreadySelected){
      setTagSelected(prevState => prevState.filter(prevTag => prevTag !== tag))
    }else{
      setTagSelected(prevState=> [...prevState,tag])
    }

  }

  useEffect(()=>{

    async function fetchTags(){
      let tagResponse = await api.get('/tags')
      setTags(tagResponse.data)
    }

    fetchTags()

  },[])

  return(
    <Container>
      <Brand>
        <h1>RocketNote</h1>
      </Brand>
      <Header/>

      <Menu>
        <li>
          <ButtonText 
            title="Todos" 
            isActive = {tagSelected.length === 0}
            onClick = {() => handleTagSelected("all")}
          /></li>
        {tags && tags.map((tag)=>
         ( <li key={String(tag.id)}>
            <ButtonText 
               title={tag.name} 
               isActive = {tagSelected.includes(tag.name)}
               onClick = {() => handleTagSelected(tag.name)}
            />
            </li>)

        )}

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

      <Newnote to="/new">
        <FiPlus/>Criar Nota
      </Newnote>

    </Container>


  )
}