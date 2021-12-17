import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { ContextProp } from "../../types/AuthContext";
import { useAuth } from "../Auth";
import { PrizesData, PrizesProviderData } from "../../types/PrizesContext";

const PrizesContext = createContext<PrizesProviderData>(
  {} as PrizesProviderData
);

export const PrizesProvider = ({ children }: ContextProp) => {
  const [prizes, setPrizes] = useState<PrizesData[]>([]);
  const { token } = useAuth();

  const getPrizes = async () => {
    const response = await api.get(`/users/prizes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPrizes(response.data.data);
  };

  return (
    <PrizesContext.Provider value={{ prizes, getPrizes }}>
      {children}
    </PrizesContext.Provider>
  );
};

export const usePrizes = () => useContext(PrizesContext);
