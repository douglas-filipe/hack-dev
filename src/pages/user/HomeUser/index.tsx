import { MenuLateral } from "../../../components/MenuLateral"
import { Container, Main } from "./styles";
import { MenuMobile } from "../../../components/MenuMobile";
import { CardPoints } from "../../../components/user/CardPoints";
import { CardSubscription } from '../../../components/user/CardSubscription'
import { CardEvent } from "../../../components/user/CardEvent";
import {IoIosArrowDown} from 'react-icons/io'


export const HomeUser = () => {

  const def = (params: string) => {
    console.log(params)
  }

  const nameUser = 'Douglas'
  
  return(
    <Container>
      <MenuMobile/>
      <MenuLateral/> 

      <div className="content">
      <p className="user"> Boa tarde, <span> {nameUser}!</span></p>

      <Main>
      <div className="info">
        <CardPoints
          title="Pontos"
          points={1000}
          />


          <CardSubscription
            title="Inscrições"
            event="Evento 1"
            group={7}
            />
        </div>

        <div className="list-event">

          <p className="title"> Eventos </p>

            <CardEvent
              title="HackMercadoLivre"
              date="29 de outubro de 2022"
              pathFunc="/allevent"
              func={def}
            />

            <CardEvent
                title="HackMercadoLivre"
                date="29 de outubro de 2022"
                pathFunc="/allevent"
                func={def}
            />

            <CardEvent
                title="HackMercadoLivre"
                date="29 de outubro de 2022"
                pathFunc="/allevent"
                func={def}
                />

                <button className="button-ver-mais"
                        onClick={() => console.log("ver todos os eventos")}
                >Ver todos <IoIosArrowDown/> </button>
          </div>  
                
        </Main>
      </div>

    </Container>
  )
};
