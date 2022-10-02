import { Container,Profile,Logout } from "./style";
import {RiShutDownLine} from "react-icons/ri"
import { useAuth } from "../../hooks/auth";

export function Header(){

  const {singOut} = useAuth()

  return(
      <Container>
          <Profile to="/profile">
              <img src="https://github.com/thamirespieve.png" alt="Imagem de perfil do github" />
              <div>
                <span>Bem-vindo</span>
                <strong>Thamires Pieve</strong>
              </div>
          </Profile>

          <Logout onClick={singOut}>
            <RiShutDownLine/>
          </Logout>

      </Container>
  )

}