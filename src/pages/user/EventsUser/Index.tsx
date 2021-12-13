import { MenuLateral } from "../../../components/MenuLateral";
import { MenuMobile } from "../../../components/MenuMobile";
import { useEvents } from "../../../contexts/Events";
import { Container } from "./styles";

export const EventsUser = () => {
  const { events } = useEvents();
  return (
    <Container>
      <MenuMobile />
      <MenuLateral />
      {events.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </Container>
  );
};
