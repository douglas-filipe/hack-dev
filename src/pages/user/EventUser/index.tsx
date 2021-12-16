import { Back, Container, Button } from "./styles";
import { BsArrow90DegLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import api from "../../../services/api";
import { EventData } from "../../../types/EventContext";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/Auth";
import { Load } from "../../../components/load";

export const EventUser = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [event, setEvent] = useState<EventData>({} as EventData);
  const [render, setRender] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const user = {
    id: 1,
    name: "estevan",
    email: "estevan@mail.com",
    points: 0,
    address: null,
    event: {
      id: 1,
      name: "KenzieHack",
      date: "Thu, 01 Dec 2022 00:00:00 GMT",
      duration: "Thu, 01 Dec 2022 00:00:00 GMT",
      skills: "[testes, teste]",
      sponsors_id: null,
      pending: true,
    },
  };

  const verifySubscription = () => {
    if (!!user.event.id) {
      setIsSubscribed(true);
    }
  };

  const getEvent = async () => {
    const response = await api.get(`/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const formated = response.data;
    const date = new Date(formated.date);
    formated.date = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const duration = new Date(formated.duration);
    formated.duration = duration.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setEvent(formated);
    setRender(true);
  };

  useEffect(() => {
    const reqEvent = async () => {
      await getEvent();
      await verifySubscription();
      setLoading(true);
    };
    reqEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const subscribe = async (id: number) => {
    const response = await api.patch(`/users/event/signup/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  };

  console.log(isSubscribed);

  return (
    <>
      <Back onClick={() => navigate("/events-user")}>
        <BsArrow90DegLeft />
      </Back>
        <Container>
          {loading ? (
            <>
              <p>
                Evento: <span>{event.name}</span>
              </p>
              <p>
                Data:{" "}
                <span>
                  {event.date} até {event.duration}
                </span>
              </p>
              <p>
                Descrição:
                <span> {event.description}</span>
              </p>
              <p>
                Habilidades Técnicas:
                <span>
                  {" "}
                  {event.skills.replace(/\]/gm, "").replace(/\[/gm, "")}
                </span>
              </p>
              <Button
                disabled={isSubscribed}
                onClick={() => subscribe(user.id)}
              >
                Inscreva-se
              </Button>
            </>
          ) : (
            <Load />
          )}
        </Container>
    
    </>
  );
};
