import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import{FiPlus,FiSearch} from "react-icons/fi"

import {Container,Content,Brand,Menu,Search,Newnote} from "./style"
import {Header} from "../../components/Header"
import{ButtonText} from "../../components/ButtonText"
import { Input } from "../../components/Input"
import {Section} from "../../components/Section"
import {Note} from "../../components/Note"

import { api } from "../../services/api"

export function Home(){
  const[ search, setSearch] = useState("")
  const [tags, setTags] = useState([])
  const [tagSelected, setTagSelected] = useState([])
  const [notes,setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagSelected(tag) {

    if(tag === 'all'){
      return setTagSelected([])
    }

    const alreadySelected = tagSelected.includes(tag)

    if(alreadySelected){
      setTagSelected(prevState => prevState.filter(prevTag => prevTag !== tag))
    }else{
      setTagSelected(prevState=> [...prevState,tag])
    }

  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(()=>{

    async function fetchTags(){
      let tagResponse = await api.get('/tags')
      setTags(tagResponse.data)
    }

    fetchTags()

  },[])

  useEffect(()=>{

    async function fetchNote(){

      const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`)
      setNotes(response.data)
    }

    fetchNote()

  }, [tagSelected,search])

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
        <Input 
          icon={FiSearch} 
          placeholder="Pesquisar pelo título" 
          onChange = {(event)=>{setSearch(event.target.value)}}
          />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note =>(
              <Note 
                key = {String(note.id)}
                data = {note}
                onClick = {() => handleDetails(note.id)}
                />
            ))
          }
        
        </Section>
      </Content>

      <Newnote to="/new">
        <FiPlus/>Criar Nota
      </Newnote>

    </Container>


  )
}