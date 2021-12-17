import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "./style";
interface InputProps {
  title: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  registerForm?: string;
}

export const Input = ({
  title,
  placeholder,
  value,
  onChange,
  registerForm,
  ...rest
}: InputProps) => {
  const { register } = useForm();
  return (
    <Container>
      <span>{title}:</span>
      <input
        {...register(`${registerForm}`)}
        value={value}
        placeholder={placeholder}
        {...rest}
        onChange={onChange}
      />
    </Container>
  );
};
