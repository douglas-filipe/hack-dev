import { useNavigate } from "react-router";
import { MenuLateral } from "../../../components/MenuLateral";
import { MenuMobile } from "../../../components/MenuMobile";
import { CardEvent } from "../../../components/user/CardEvent";
import { Container, Content, Events, Positioner } from "./styles";
import { Load } from "../../../components/load";
import { EventData } from "../../../types/EventContext";
import { useAuth } from "../../../contexts/Auth";
import { useEffect, useState } from "react";
import api from "../../../services/api";

export const EventsUser = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useAuth();

  const getEvents = async () => {
    const response = await api.get("/events", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setEvents(response.data);
  };

  useEffect(() => {
    const reqLoading = async () => {
      await getEvents();
      setLoading(true);
    };

    reqLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <MenuMobile />
      <MenuLateral />
      <Positioner>
        <Content>
          {loading ? (
            <>
              <h1>Eventos</h1>
              <Events>
                {events.map((item, index) => (
                  <CardEvent
                    key={index}
                    title={item.name}
                    date={item.date}
                    func={navigate}
                    pathFunc={`/events-user/${item.id}`}
                  />
                ))}
              </Events>
            </>
          ) : (
            <Load />
          )}
        </Content>
      </Positioner>
    </Container>
  );
};
