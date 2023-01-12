import { Container,Profile,Logout } from "./style";
import {RiShutDownLine} from "react-icons/ri"
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../Assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom";

export function Header(){

  const {singOut,user} = useAuth()

  const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`:avatarPlaceholder
  const navigate = useNavigate()

  function handlesingOut(){
    navigate("/")
    singOut()
  }

  return(
      <Container>
          <Profile to="/profile">
              <img src={avatarURL} alt="Imagem de perfil do github" />
              <div>
                <span>Bem-vindo</span>
                <strong>Thamires Pieve</strong>
              </div>
          </Profile>

          <Logout onClick={handlesingOut}>
            <RiShutDownLine/>
          </Logout>

      </Container>
  )

}