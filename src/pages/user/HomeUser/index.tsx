import { MenuLateral } from "../../../components/MenuLateral"
import { Container, Main } from "./styles";
import { MenuMobile } from "../../../components/MenuMobile";
import { CardPoints } from "../../../components/user/CardPoints";
import { CardSubscription } from '../../../components/user/CardSubscription'
import { CardEvent } from "../../../components/user/CardEvent";
import {IoIosArrowDown} from 'react-icons/io'
import api from "../../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/Auth";
import { UserData, EventData } from "../../../types/EventContext";

import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom";


export const HomeUser = () => {

  const {token, userId} = useAuth()
  const [user, setUser] = useState<UserData>()
  const [message, setMessage] = useState('')
  const [events, setEvents] = useState<EventData[]>([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const getUser = async () => {
    const response = await api.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    setUser(response.data)
  }

  const getAllEvents = async () => {
    setLoading(true)
    const response = await api.get(`/events`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    setEvents(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getUser()
    getAllEvents()
    const hour = new Date().getHours()
    if (hour >= 12 && hour < 18){
      setMessage('Boa tarde')
    }else if(hour >= 6 && hour < 12 ){
      setMessage('Bom dia')
    }else{
      setMessage('Boa noite')
    }
  }, [])

    
  const detailsEvent = (params: string) => {
    navigate('/details-event')
  } 
  

  return(
    <Container className="Home">
      <MenuMobile/>
      <MenuLateral/> 

      <div className="content">
      <p className="user"> {message}, <span> {user? user.name: '. . . .'}!</span></p>
      
      <Main>
      <div className="info">
        <CardPoints
          title="Pontos"
          points={100} // colocar user.points
          />


          <CardSubscription
            title="Inscrições"
            event='sdasd'
            group={user?.group}
            />
        </div>

        <div className="list-event">

            <p className="title"> Eventos </p>

             {
               loading?
               (
                 <span className="span-loading">
                   <PacmanLoader color="#ffff" />
                 </span>
               )
               :
               (
                 events.map((event) => {
                   return <CardEvent
                      title={event.name}
                      date={event.date}
                      key={event.id}
                      pathFunc="/detials-event"
                      func={detailsEvent}
                   />
                 })
               )
             }


            <button className="button-ver-mais"
                    onClick={() => navigate('/events-user')}
            >Ver todos <IoIosArrowDown/> </button>
          </div>  
                
        </Main>
      </div>

    </Container>
  )
};
