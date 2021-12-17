import React from "react";
import { Container } from "./style";
interface InputProps {
  title: string;
  placeholder?: string;
  value?: string | number;
  name: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  register: (string: string) => void;
}

export const Input = ({
  title,
  placeholder,
  value,
  onChange,
  name,
  register,
  ...rest
}: InputProps) => {
  
  return (
    <Container>
      <span>{title}:</span>
      <input
      value={value}
      placeholder={placeholder}
        {...register(name)}
        {...rest}
        onChange={onChange}
      />
    </Container>
  );
};
