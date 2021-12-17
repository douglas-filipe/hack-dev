import { Container } from "./style";

interface IPropsCardEvent {
  title: string;
  date: string;
  pathFunc: string;
  func: (pathFunc: string) => void;
}

export const CardEvent = ({ title, date, func, pathFunc }: IPropsCardEvent) => {
  return (
    <Container>
      <p>
        <span>{title}</span>
        <span>{date}</span>
      </p>
      <span>
        <button onClick={() => func(pathFunc)}> Ver detalhes</button>
      </span>
    </Container>
  );
};
