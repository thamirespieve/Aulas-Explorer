import { Link, useNavigate } from "react-router-dom";

import { Container,Form } from "./style";

import {Header} from "../../components/Header"
import {Section} from "../../components/Section"
import {Input} from "../../components/Input"
import {Textarea} from "../../components/Textarea"
import {Button} from "../../components/Button"
import {NoteItem} from "../../components/NoteItem"
import { useState } from "react";
import { api } from "../../services/api";
export function New(){
  const [ title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const [links,setLinks] = useState([])
  const [newLink,setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddLink(){
    setLinks(prevState => [...prevState,newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link != deleted))
  }

  function handleAddTag(){
    setTags(prevState => [...prevState,newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState=>prevState.filter(tag=> tag != deleted))
  }

  async function handleNewNote(){
    if(!title) {
      return alert("É necessário informar um titulo para sua nota.")
    }

    if(newLink){
      return alert("Você informou um link e não o adicionou em sua nota. Adicine o link ou limpe o campo")
    }

    if(newTag){
      return alert("Você informou uma tag e não a adicionou em sua nota. Adicine a tag ou limpe o campo")
    }

    await api.post("/notes",{
      title,
      description,
      tags,
      links
    })
    
    alert(`A nota ${title}, foi salva com sucesso`)
    navigate("/")

  }

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

        <Input type='text' placeholder="Título" onChange ={(event)=> setTitle(event.target.value)} />
        <Textarea placeholder="Observações" onChange={(event)=>setDescription(event.target.value)} />

        <Section title="Links úteis">
          {
            links.map((link,index)=> 
              <NoteItem 
              key={String(index)}
              value={link}
              onClick = {()=>handleRemoveLink(link)} 
              />
              )
          }
          <NoteItem 
           isNew 
           value={newLink}
           onChange = {(event)=> setNewLink(event.target.value) }
           onClick = {handleAddLink}
           placeholder="Novo link"/>
      
         </Section>

         <Section title="Marcadores">
          <div className="tags">
            {tags.map((tag,index)=> 
                <NoteItem 
                key={String(index)}
                value={tag}
                onClick = {()=>handleRemoveTag(tag)}
                 />
              )}
            <NoteItem 
              isNew
              value = {newTag}
              onChange = {(event)=>setNewTag(event.target.value)}
              onClick = {handleAddTag}
              placeholder="Nova Tag"
            />
          </div>
         </Section>
         <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
      

      
    </Container>
  )
}