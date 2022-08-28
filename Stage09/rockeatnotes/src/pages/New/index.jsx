import { Container,Form } from "./style";

import {Header} from "../../components/Header"
import {Section} from "../../components/Section"
import {Input} from "../../components/Input"
import {Textarea} from "../../components/Textarea"
import {Button} from "../../components/Button"
import {NoteItem} from "../../components/NoteItem"
export function New(){

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="#">Voltar</a>
          </header>

        <Input type='text' placeholder="Título" />
        <Textarea placeholder="Observações"/>

        <Section title="Links úteis">
          <NoteItem value="https://rocketseat.com.br"/>
          <NoteItem value="" isNew placeholder="Novo link"/>
      
         </Section>

         <Section title="Marcadores">
          <div className="tags">
            <NoteItem value="react" />
            <NoteItem value="" isNew placeholder="Nova Tag"/>
          </div>
         </Section>
         <Button title="Salvar"/>
        </Form>
      </main>
      

      
    </Container>
  )
}