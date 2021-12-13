import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";
import { MenuProvider } from "./Menu";
import { EventsProvider } from "./Events";

export const Providers = ({ children }: ContextProp) => {
  return (
    <AuthProvider>
      <MenuProvider>
        <EventsProvider>{children}</EventsProvider>
      </MenuProvider>
    </AuthProvider>
  );
};
