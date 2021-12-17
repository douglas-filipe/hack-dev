import { Container } from "./style";
import { CgCalendarDates } from "react-icons/cg";

interface IPropsCardPrize {
  prize: string;
  points: number;
}

export const CardPrize = ({ prize, points }: IPropsCardPrize) => {
  return (
    <Container>
      <CgCalendarDates className="icon" />
      <p>{prize}</p>
      <h4>{points}</h4>
      <button>Trocar</button>
    </Container>
  );
};
