import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";
import { MenuProvider } from "./Menu";
import { EventsProvider } from "./Events";
import { UserProvider } from "./User";
import { PrizesProvider } from "./Prizes";

export const Providers = ({ children }: ContextProp) => {
  return (
    <AuthProvider>
      <MenuProvider>
        <EventsProvider>
          <UserProvider>
            <PrizesProvider>{children}</PrizesProvider>
          </UserProvider>
        </EventsProvider>
      </MenuProvider>
    </AuthProvider>
  );
};
