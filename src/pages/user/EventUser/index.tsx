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
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>({} as UserData);

  const verifySubscription = () => {
    if (!!user.event) {
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
    }
  };

  const getUser = async () => {
    api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data));
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
  };

  const reqEvent = async () => {
    await getUser();
    await getEvent();
    await verifySubscription();
    setLoading(true);
  };

  const navigate = useNavigate();

  const subscribe = async (id: number) => {
    const data = { name: event.name };
    api
      .patch(`/users/event/signup/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() =>
        toast.success("Registration completed!", {
          position: "top-right",
          theme: "dark",
        })
      )
      .then((_) => getUser())
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
      .patch(
        `/users/event/unsubscribe/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) =>
        toast.success(response.data.msg, {
          position: "top-right",
          theme: "dark",
        })
      )
      .then((_) => getUser())
      .catch((error) =>
        toast.error(error.response.data.error, {
          position: "top-right",
          theme: "dark",
        })
      );
  };

  useEffect(() => {
    reqEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    verifySubscription();
  }, [user]);

  return (
    <>
      <Back onClick={() => navigate("/events-user")}>
        <BsArrow90DegLeft />
      </Back>

      {loading ? (
        <>
          <Container>
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

              {isSubscribed ? (
                <Button
                  className="Unsubscribe"
                  onClick={() => unSubcribe(user.id)}
                >
                  Cancelar inscrição
                </Button>
              ) : (
                <Button onClick={() => subscribe(user.id)}>Inscreva-se</Button>
              )}
            </>
          </Container>
        </>
      ) : (
        <Load />
      )}
    </>
  );
};
