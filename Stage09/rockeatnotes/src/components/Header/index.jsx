import { Container,Profile,Logout } from "./style";
import {RiShutDownLine} from "react-icons/ri"

export function Header(){

  return(
      <Container>
          <Profile>
              <img src="https://github.com/thamirespieve.png" alt="Imagem de perfil do github" />
              <div>
                <span>Bem-vindo</span>
                <strong>Thamires Pieve</strong>
              </div>
          </Profile>

          <Logout>
            <RiShutDownLine/>
          </Logout>

      </Container>
  )

}