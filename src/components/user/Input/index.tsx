import { Container } from "./style";

interface InputProps {
  title: string;
  placeholder?: string;
}

export const Input = ({ title, placeholder, ...rest }: InputProps) => {
  return (
    <Container>
      <span>{title}:</span>
      <input placeholder={placeholder} {...rest} />
    </Container>
  );
};
