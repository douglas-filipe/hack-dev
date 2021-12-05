import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";

export const Providers = ({ children }: ContextProp) => {
  return <AuthProvider>{children}</AuthProvider>;
};
