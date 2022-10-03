import { useState } from "react";
import { Link } from "react-router-dom";
import{FiUser,FiMail,FiLock,FiArrowLeft,FiCamera} from "react-icons/fi"
import{useAuth} from "../../hooks/auth"

import { Container,Form,Avatar } from "./style";
import avatarPlaceholder from "../../Assets/avatar_placeholder.svg"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import { api } from "../../services/api";

export function Profile(){

   const {user,updateProfile} = useAuth()
   const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`:avatarPlaceholder

   const [name,setName] = useState(user.name)
   const [email,setEmail] = useState(user.email)
   const [passwordOld, setPasswordOld] = useState() 
   const [passwordNew, setPasswordNew] = useState()
   const [avatar,setAvatar] =useState(avatarURL)
   const [avatarFile,setAvatarFiles] = useState(null)

  async function handleUpdate(){

    const user ={
      name,
      email,
      password:passwordNew,
      old_password:passwordOld,
    }

    await updateProfile({user,avatarFile})

  }

  function handleChangeAvatar(event){

    const file = event.target.files[0]
    const imageProfile = URL.createObjectURL(file)

    setAvatar(imageProfile)
    setAvatarFiles(file)

  }

return(
  <Container>

    <header>
      <Link to="/">
        <FiArrowLeft/>
      </Link>
    </header>

    <Form>
      <Avatar>
         <img src={avatar} alt="Foto de usuário do github" />

         <label htmlFor="avatar">
          <FiCamera/>
          <input id="avatar"
            type="file"
            onChange={handleChangeAvatar}
          />
         </label>
      </Avatar>
      <Input type="text" placeholder="Usuário" icon={FiUser} value={name} onChange={event=>setName(event.target.value)}/>
      <Input type="email" placeholder="E-mail" icon={FiMail} value={email} onChange={event=>setEmail(event.target.value)}/>
      <Input type="password" placeholder="Senha atual" icon={FiLock} onChange={event=>setPasswordOld(event.target.value)}/>
      <Input type="password" placeholder="Nova senha" icon={FiLock} onChange={event=>setPasswordNew(event.target.value)}/>

      <Button title="Salvar" onClick={handleUpdate} />
    </Form>
  </Container>
)

}