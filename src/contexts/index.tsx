import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";
import { MenuProvider } from "./Menu";

export const Providers = ({ children }: ContextProp) => {
  return (
    <AuthProvider>
      <MenuProvider>{children}</MenuProvider>
    </AuthProvider>
  );
};
