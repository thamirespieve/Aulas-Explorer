import { Link } from "react-router-dom";

import { Container,Form } from "./style";

import {Header} from "../../components/Header"
import {Section} from "../../components/Section"
import {Input} from "../../components/Input"
import {Textarea} from "../../components/Textarea"
import {Button} from "../../components/Button"
import {NoteItem} from "../../components/NoteItem"
import { useState } from "react";
export function New(){
  
  const [links,setLinks] = useState([])
  const [newLink,setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

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

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

        <Input type='text' placeholder="Título" />
        <Textarea placeholder="Observações"/>

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
         <Button title="Salvar"/>
        </Form>
      </main>
      

      
    </Container>
  )
}