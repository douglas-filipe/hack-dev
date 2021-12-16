import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";
import { MenuProvider } from "./Menu";
import { EventsProvider } from "./Events";
import { UserProvider } from "./User";

export const Providers = ({ children }: ContextProp) => {
  return (
    <AuthProvider>
      <MenuProvider>
        <EventsProvider>
          <UserProvider>{children}</UserProvider>
        </EventsProvider>
      </MenuProvider>
    </AuthProvider>
  );
};
