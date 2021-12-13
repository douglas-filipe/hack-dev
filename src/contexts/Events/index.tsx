import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { ContextProp } from "../../types/AuthContext";
import { EventData, EventProviderData } from "../../types/EventContext";

const EventsContext = createContext<EventProviderData>({} as EventProviderData);

export const EventsProvider = ({ children }: ContextProp) => {
  const [events, setEvents] = useState<EventData[]>([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzOTE0MDI5OSwianRpIjoiNDRiNTIxMjgtMmU5My00YmM3LThlOGUtZDIwODE0Mjc3ZTZjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6OSwibmFtZSI6ImVzdGV2YW4iLCJlbWFpbCI6ImVzdGV2YW5AbWFpbC5jb20iLCJwb2ludHMiOjAsImF2YXRhcl9pZCI6bnVsbCwiYWRkcmVzc19pZCI6bnVsbCwiZXZlbnRfaWQiOm51bGx9LCJuYmYiOjE2MzkxNDAyOTksImV4cCI6MTY0MDQzNjI5OX0.XXqn_N0DripEJ6RL6VNuQ3v9KpTN9Os3NUZM6CAkHO4";
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
  }, []);

  return (
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => useContext(EventsContext);
