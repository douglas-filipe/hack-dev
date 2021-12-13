import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { ContextProp } from "../../types/AuthContext";
import { EventData, EventProviderData } from "../../types/EventContext";
import { useAuth } from "../Auth";

const EventsContext = createContext<EventProviderData>({} as EventProviderData);

export const EventsProvider = ({ children }: ContextProp) => {
  const [events, setEvents] = useState<EventData[]>([]);
  const { token } = useAuth();

  const getEvents = async () => {
    const response = await api.get("/events", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setEvents(response.data);
  };

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => useContext(EventsContext);
