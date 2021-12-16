import { Back, Container, Button } from "./styles";
import { BsArrow90DegLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import api from "../../../services/api";
import { EventData } from "../../../types/EventContext";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/Auth";
import { Load } from "../../../components/load";
import { UserData } from "../../../types/AuthContext";
import { toast } from "react-toastify";

export const EventUser = () => {
  const { id } = useParams();
  const { token, userId } = useAuth();
  const [event, setEvent] = useState<EventData>({} as EventData);
  const [render, setRender] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>({} as UserData);

  const verifySubscription = () => {
    console.log("event", !!user.event, user.event);
    if (!!user.event) {
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
    }
  };

  const getUser = async () => {
    const response = await api.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(response.data);
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

  const reqEvent = async () => {
    await getUser();
    await getEvent();
    await verifySubscription();
    setLoading(true);
  };

  useEffect(() => {
    reqEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const subscribe = async (id: number) => {
    api
      .patch(`/users/event/signup/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() =>
        toast.success("Incrição Realizada!", {
          position: "top-right",
          theme: "dark",
        })
      )
      .catch((error) => {
        if (error.response.data.error) {
          return toast.error(error.response.data.error, {
            position: "top-right",
            theme: "dark",
          });
        } else {
          return toast.error(error.response.data.msg, {
            position: "top-right",
            theme: "dark",
          });
        }
      });
  };

  const unSubcribe = (id: number) => {
    api
      .patch(`/users/event/unsubscribe/${id}`)
      .then((response) =>
        toast.success(response.data.msg, {
          position: "top-right",
          theme: "dark",
        })
      )
      .catch((error) =>
        toast.error(error.response.data.error, {
          position: "top-right",
          theme: "dark",
        })
      );
  };

  console.log("isSubscribed", isSubscribed);

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
            <div>
              <Button
                disabled={isSubscribed}
                onClick={() => subscribe(user.id)}
              >
                Inscreva-se
              </Button>
              <Button
                disabled={!isSubscribed}
                onClick={() => unSubcribe(user.id)}
              >
                Desinscrever-se
              </Button>
            </div>
          </>
        ) : (
          <Load />
        )}
      </Container>
    </>
  );
};
