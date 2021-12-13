import { MenuLateral } from "../../../components/MenuLateral";
import { MenuMobile } from "../../../components/MenuMobile";
import { CardEvent } from "../../../components/user/CardEvent";
import { useEvents } from "../../../contexts/Events";
import { Container, Content, Events } from "./styles";

export const EventsUser = () => {
  const { events } = useEvents();
  return (
    <Container>
      <MenuMobile />
      <MenuLateral />
      <Content>
        <h1>Eventos</h1>
        <Events>
          {events.map((item, index) => (
            <CardEvent
              key={index}
              title={item.name}
              date={item.date}
              func={(parameter) => console.log(parameter)}
              pathFunc={item.name}
            />
          ))}
        </Events>
      </Content>
    </Container>
  );
};
